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
    frame = 0;
   });
  };
  window.addEventListener('scroll', scroll, { passive: true });
  return () => { observer.disconnect(); media.removeEventListener('change', sync); window.removeEventListener('scroll', scroll); cancelAnimationFrame(frame); };
 }, []);
 useEffect(() => {
  document.documentElement.dataset.motion = paused || reduced ? 'paused' : 'running';
  return () => { delete document.documentElement.dataset.motion; };
 }, [paused, reduced]);
 return <button className="motion-control" aria-pressed={paused || reduced} onClick={() => setPaused(!paused)} disabled={reduced}><span aria-hidden="true">{paused || reduced ? '▷' : 'Ⅱ'}</span> {reduced ? 'Reduced motion enabled' : paused ? 'Resume motion' : 'Pause motion'}</button>;
}
