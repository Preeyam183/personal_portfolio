import { chainPoint, stepSpring, type Spring } from '@/lib/chain-physics';

/** One damped simulation drives the anchor, chain end, and attached card reactions. */
export function createTimelineMotion(media: MediaQueryList) {
 const timeline = document.querySelector<HTMLElement>('.experience-timeline');
 const wrap = timeline?.parentElement;
 if (!timeline || !wrap) return { update() {}, dispose() {} };
 const anchor: Spring = { position: 0, velocity: 0 };
 const swing: Spring = { position: 0, velocity: 0 };
 const cards = [...timeline.querySelectorAll<HTMLElement>('.timeline-stop')].map((element, index) => ({ element, index, y: 0, target: 0, spring: { position: 0, velocity: 0 } as Spring }));
 let swingTarget = 0;
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
   const jointX = chainPoint(card.y + tug).x;
   const baseReach = mobile ? 38 : window.innerWidth <= 900 ? 35 : 45;
   const slide = tug * (card.index % 2 ? -.17 : .17);
   const reach = mobile ? baseReach - jointX + slide : baseReach + (card.index % 2 ? -jointX : jointX) - Math.abs(slide);
   card.element.style.setProperty('--connector-length', `${Math.max(12, reach).toFixed(2)}px`);
  }
 };
 const tick = (time: number) => {
  frame = 0;
  if (disposed) return;
  const dt = previous ? Math.min((time - previous) / 1000, 1 / 15) : 1 / 60;
  previous = time;
  const active = enabled() && visible && !document.hidden;
  if (active) {
   stepSpring(anchor, target, dt, 48, 14);
   if (anchor.position < 0 || anchor.position > travel) { anchor.position = Math.max(0, Math.min(travel, anchor.position)); anchor.velocity = 0; }
   const point = chainPoint(eye + anchor.position);
   const inertia = Math.tanh(anchor.velocity / 700) * 4;
   swingTarget = point.angle * .5 + inertia;
   stepSpring(swing, swingTarget, dt, 42, 12.5);
   for (const card of cards) {
    const distance = eye + anchor.position + 36 - card.y;
    const contact = Math.exp(-Math.pow(distance / 105, 2));
    const weight = contact * (mobile ? 13 : 19);
    const tension = contact * Math.min(5, Math.max(0, anchor.velocity) / 160);
    card.target = weight + tension;
    stepSpring(card.spring, card.target, dt, 85, 14);
   }
  } else {
   anchor.position = target; anchor.velocity = 0;
   swingTarget = chainPoint(eye + target).angle * .5; swing.position = swingTarget; swing.velocity = 0;
   cards.forEach(card => { card.target = 0; card.spring.position = 0; card.spring.velocity = 0; });
  }
  render();
  const moving = Math.abs(anchor.position - target) > .02 || Math.abs(anchor.velocity) > .05 || Math.abs(swing.position - swingTarget) > .02 || Math.abs(swing.velocity) > .05 || cards.some(card => Math.abs(card.spring.velocity) > .05 || Math.abs(card.spring.position - card.target) > .02);
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
  cards.forEach(card => { card.y = card.element.offsetTop + (mobile ? 42 : 53); });
  if (!initialized) { anchor.position = target; swingTarget = chainPoint(eye + target).angle * .5; swing.position = swingTarget; initialized = true; }
  if (!frame) frame = requestAnimationFrame(tick);
 };
 const motionObserver = new MutationObserver(update);
 motionObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-motion'] });
 document.addEventListener('visibilitychange', update);
 update();
 return { update, dispose() { disposed = true; cancelAnimationFrame(frame); motionObserver.disconnect(); document.removeEventListener('visibilitychange', update); } };
}
