import { chainPoint, stepSpring, type Spring } from '@/lib/chain-physics';

/** One damped simulation drives the anchor, chain end, and attached card reactions. */
export function createTimelineMotion(media: MediaQueryList) {
 const timeline = document.querySelector<HTMLElement>('.experience-timeline');
 const wrap = timeline?.parentElement;
 if (!timeline || !wrap) return { update() {}, dispose() {} };
 const anchor: Spring = { position: 0, velocity: 0 };
 const swing: Spring = { position: 0, velocity: 0 };
 const cards = [...timeline.querySelectorAll<HTMLElement>('.timeline-stop')].map((element, index) => ({ element, index, y: 0, spring: { position: 0, velocity: 0 } as Spring }));
 let target = 0, travel = 0, eye = 0, mobile = false, visible = false, initialized = false;
 let frame = 0, previous = 0, disposed = false;
 const enabled = () => !media.matches && document.documentElement.dataset.motion !== 'paused';
 const render = () => {
  const eyeY = eye + anchor.position;
  const point = chainPoint(eyeY);
  wrap.style.setProperty('--anchor-travel', `${anchor.position.toFixed(2)}px`);
  wrap.style.setProperty('--anchor-x', `${point.x.toFixed(2)}px`);
  wrap.style.setProperty('--chain-end', `${eyeY.toFixed(2)}px`);
  wrap.style.setProperty('--anchor-angle', `${swing.position.toFixed(2)}deg`);
  for (const card of cards) {
   const tug = card.spring.position;
   card.element.style.setProperty('--card-tug', `${tug.toFixed(2)}px`);
   card.element.style.setProperty('--card-slide', `${(tug * (card.index % 2 ? -.17 : .17)).toFixed(2)}px`);
   card.element.style.setProperty('--card-tilt', `${(tug * (card.index % 2 ? -.055 : .055)).toFixed(2)}deg`);
  }
 };
 const tick = (time: number) => {
  frame = 0;
  if (disposed) return;
  const dt = previous ? Math.min((time - previous) / 1000, 1 / 30) : 1 / 60;
  previous = time;
  const active = enabled() && visible && !document.hidden;
  if (active) {
   stepSpring(anchor, target, dt, 48, 11);
   if (anchor.position < 0 || anchor.position > travel) { anchor.position = Math.max(0, Math.min(travel, anchor.position)); anchor.velocity *= .15; }
   const point = chainPoint(eye + anchor.position);
   const inertia = Math.max(-7, Math.min(7, anchor.velocity / 110));
   stepSpring(swing, point.angle * .65 + inertia, dt, 52, 9);
   for (const card of cards) {
    const distance = eye + anchor.position + 36 - card.y;
    const contact = Math.exp(-Math.pow(distance / 105, 2));
    const weight = contact * (mobile ? 13 : 19);
    const tension = contact * Math.min(5, Math.max(0, anchor.velocity) / 160);
    stepSpring(card.spring, weight + tension, dt, 85, 12);
   }
  } else {
   anchor.position = target; anchor.velocity = 0;
   swing.position = chainPoint(eye + target).angle * .65; swing.velocity = 0;
   cards.forEach(card => { card.spring.position = 0; card.spring.velocity = 0; });
  }
  render();
  const moving = Math.abs(anchor.position - target) > .08 || Math.abs(anchor.velocity) > .15 || Math.abs(swing.velocity) > .1 || cards.some(card => Math.abs(card.spring.velocity) > .1);
  if (active && moving) frame = requestAnimationFrame(tick);
  else previous = 0;
 };
 const update = () => {
  if (disposed) return;
  const bounds = timeline.getBoundingClientRect();
  mobile = window.innerWidth < 600;
  eye = 22 + (mobile ? 66 : 82) * 13 / 112;
  travel = Math.max(0, bounds.height - 105);
  target = Math.max(0, Math.min(travel, window.innerHeight * .48 - bounds.top - 30));
  visible = bounds.bottom > -100 && bounds.top < window.innerHeight + 100;
  cards.forEach(card => { card.y = card.element.offsetTop + 53; });
  if (!initialized) { anchor.position = target; swing.position = chainPoint(eye + target).angle * .65; initialized = true; }
  if (!frame) frame = requestAnimationFrame(tick);
 };
 const motionObserver = new MutationObserver(update);
 motionObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-motion'] });
 document.addEventListener('visibilitychange', update);
 update();
 return { update, dispose() { disposed = true; cancelAnimationFrame(frame); motionObserver.disconnect(); document.removeEventListener('visibilitychange', update); } };
}
