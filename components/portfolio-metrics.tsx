'use client';

import { useEffect, useRef, useState } from 'react';
import { metrics } from '@/lib/content';

export function PortfolioMetrics() {
 const section = useRef<HTMLElement>(null);
 const [progress, setProgress] = useState(1);
 useEffect(() => {
  const element = section.current;
  if (!element) return;
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  let elapsed = 0;
  let previous = 0;
  let visible = false;
  let complete = false;
  const duration = 1400;
  const stop = () => { cancelAnimationFrame(frame); frame = 0; previous = 0; };
  const tick = (time: number) => {
   if (previous) elapsed += Math.min(time - previous, 64);
   previous = time;
   const fraction = Math.min(elapsed / duration, 1);
   setProgress(1 - Math.pow(1 - fraction, 3));
   if (fraction < 1) frame = requestAnimationFrame(tick);
   else { complete = true; frame = 0; }
  };
  const sync = () => {
   stop();
   if (media.matches) { setProgress(1); complete = true; return; }
   if (visible && !complete && document.documentElement.dataset.motion !== 'paused') frame = requestAnimationFrame(tick);
  };
  // Render final values on the server; animate only when motion is available.
  if (!media.matches) setProgress(0);
  const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: .25 });
  observer.observe(element);
  const motion = new MutationObserver(sync);
  motion.observe(document.documentElement, { attributes: true, attributeFilter: ['data-motion'] });
  media.addEventListener('change', sync);
  return () => { stop(); observer.disconnect(); motion.disconnect(); media.removeEventListener('change', sync); };
 }, []);
 return <section ref={section} className="metrics section-shell" aria-labelledby="metrics-title">
  <div className="eyebrow" id="metrics-title">A FEW MILESTONES ALONG THE WAY</div>
  <dl className="metrics-grid">{metrics.map((metric) => <div className="metric" key={metric.id}>
   <dt>{metric.label}</dt>
   <dd><span className="metric-number" aria-hidden="true">{Math.round(metric.value * progress)}{metric.suffix}</span><span className="sr-only">{metric.value}{metric.suffix}</span></dd>
   <span className="metric-footnote" aria-hidden="true">{metric.note}</span>
  </div>)}</dl>
 </section>;
}
