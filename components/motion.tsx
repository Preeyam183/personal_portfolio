'use client';
import { useEffect, useState } from 'react';
export function OceanMotion() {
 const [paused, setPaused] = useState(false);
 const [reduced, setReduced] = useState(false);
 useEffect(() => {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  const sync = () => setReduced(media.matches);
  sync(); media.addEventListener('change', sync);
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
   entry.target.classList.toggle('in-view', entry.isIntersecting);
   if(entry.isIntersecting) entry.target.classList.add('revealed');
  }), { threshold: 0.08 });
  document.querySelectorAll('[data-observe]').forEach(el => {
   if (!el.classList.contains('hero') && el.getBoundingClientRect().top > window.innerHeight) el.classList.add('reveal-ready');
   observer.observe(el);
  });
  let frame = 0;
  const scroll = () => {
   if(frame) return;
   frame = requestAnimationFrame(() => {
    document.documentElement.style.setProperty('--scroll-offset', `${Math.min(window.scrollY * .06, 100)}px`);
    document.documentElement.style.setProperty('--surface-exit', String(Math.min(1, window.scrollY / (window.innerHeight * .9))));
    const hero = document.getElementById('surface');
    document.documentElement.dataset.navVisible = String(!!hero && hero.getBoundingClientRect().bottom <= window.innerHeight * .35);
    const timeline = document.querySelector<HTMLElement>('.experience-timeline');
    if (timeline) {
     const bounds = timeline.getBoundingClientRect();
     const travel = Math.max(0, bounds.height - 105);
     const progress = Math.max(0, Math.min(1, (window.innerHeight * .48 - bounds.top - 30) / Math.max(1, travel)));
     timeline.parentElement?.style.setProperty('--anchor-travel', `${travel * progress}px`);
     const chainOffset = Math.sin((34 + travel * progress) / 240 * Math.PI * 2) * 9;
     timeline.parentElement?.style.setProperty('--anchor-x', `${chainOffset}px`);
     const motionEnabled = !media.matches && document.documentElement.dataset.motion !== 'paused';
     timeline.querySelectorAll<HTMLElement>('.timeline-stop').forEach((stop, index) => {
      const distance = travel * progress + 55 - (stop.offsetTop + 53);
      const pull = motionEnabled ? Math.exp(-Math.pow(distance / 135, 2)) : 0;
      stop.style.setProperty('--card-tug', `${pull * (window.innerWidth < 600 ? 14 : 18)}px`);
      stop.style.setProperty('--card-slide', `${pull * (index % 2 ? -4 : 4)}px`);
      stop.style.setProperty('--card-tilt', `${pull * (index % 2 ? -1.25 : 1.25)}deg`);
     });
    }
    const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
    document.documentElement.style.setProperty('--world-depth', String(scrollRange > 0 ? Math.min(1, window.scrollY / scrollRange) : 0));
    frame = 0;
   });
  };
  scroll();
  window.addEventListener('scroll', scroll, { passive: true });
  window.addEventListener('resize', scroll);
  window.addEventListener('pageshow', scroll);
  window.addEventListener('hashchange', scroll);
  document.addEventListener('scroll', scroll, { capture: true, passive: true });
  const layoutObserver = new ResizeObserver(scroll);
  layoutObserver.observe(document.body);
  return () => { observer.disconnect(); media.removeEventListener('change', sync); window.removeEventListener('scroll', scroll); window.removeEventListener('resize', scroll); window.removeEventListener('pageshow', scroll); window.removeEventListener('hashchange', scroll); document.removeEventListener('scroll', scroll, true); layoutObserver.disconnect(); cancelAnimationFrame(frame); };
 }, []);
 useEffect(() => {
  document.documentElement.dataset.motion = paused || reduced ? 'paused' : 'running';
  return () => { delete document.documentElement.dataset.motion; };
 }, [paused, reduced]);
 return <button className="motion-control" aria-pressed={paused || reduced} onClick={() => setPaused(!paused)} disabled={reduced}><span aria-hidden="true">{paused || reduced ? '▷' : 'Ⅱ'}</span> {reduced ? 'Reduced motion enabled' : paused ? 'Resume motion' : 'Pause motion'}</button>;
}
