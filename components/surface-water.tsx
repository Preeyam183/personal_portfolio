'use client';

import { useEffect, useRef } from 'react';

/** Refracts the painted surface through travelling waves without moving page text. */
export function SurfaceWater() {
 const canvasRef = useRef<HTMLCanvasElement>(null);
 useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;
  const context = canvas.getContext('2d');
  if (!context) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const image = new window.Image();
  let frame = 0;
  let ready = false;
  let width = 0;
  let height = 0;
  let elapsed = 0;
  let previousTime = 0;
  let lastDraw = 0;
  let needsDraw = true;
  const resize = () => {
   width = canvas.clientWidth; height = canvas.clientHeight;
   const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
   canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
   context.setTransform(ratio, 0, 0, ratio, 0, 0);
   needsDraw = true;
  };
  const draw = (time: number) => {
   const paused = reduced.matches || document.documentElement.dataset.motion === 'paused' || document.hidden || window.scrollY > window.innerHeight;
   if (!paused && previousTime) elapsed += Math.min(time - previousTime, 80);
   previousTime = time;
   if (ready && width && height && time - lastDraw > 32 && !document.hidden && (!paused || needsDraw)) {
    lastDraw = time; needsDraw = false;
    context.clearRect(0, 0, width, height);
    const t = elapsed / 1000;
    const sourceHeight = image.naturalHeight * .3;
    // Thin refracted strips form irregular travelling water, rather than drawn wave lines.
    for (let y = 0; y < height; y += 4) {
     const depth = y / height;
     const displacement = Math.sin(depth * 13 + t * .8) * 9 + Math.sin(depth * 29 - t * 1.1) * 4;
     const refraction = Math.sin(depth * 19 + t * .65) * 3;
     const sy = Math.max(0, Math.min(sourceHeight - 6, depth * sourceHeight + refraction));
     context.drawImage(image, 0, sy, image.naturalWidth, sourceHeight / height * 5, displacement - 20, y, width + 40, 5);
    }
    context.globalCompositeOperation = 'screen';
    for (let i = 0; i < 5; i++) {
     const x = width * ((i + .45) / 5) + Math.sin(t * .3 + i) * width * .025;
     const glow = context.createRadialGradient(x, height * .03, 0, x, height * .03, height * .7);
     glow.addColorStop(0, `rgba(222,255,255,${.13 + Math.sin(t * .55 + i) * .045})`);
     glow.addColorStop(1, 'rgba(222,255,255,0)');
     context.fillStyle = glow; context.fillRect(0, 0, width, height);
    }
    context.globalCompositeOperation = 'source-over';
   }
   frame = requestAnimationFrame(draw);
  };
  image.onload = () => { ready = true; };
  image.src = '/scenery/open-water.webp';
  resize(); frame = requestAnimationFrame(draw);
  window.addEventListener('resize', resize);
  return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); image.onload = null; };
 }, []);
 return <canvas ref={canvasRef} className="surface-water" aria-hidden="true"/>;
}
