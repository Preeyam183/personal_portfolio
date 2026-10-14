export type Spring = { position: number; velocity: number };
export function stepSpring(state: Spring, target: number, dt: number, stiffness: number, damping: number) {
 const step = Math.min(Math.max(dt, 0), 1 / 30);
 state.velocity += ((target - state.position) * stiffness - state.velocity * damping) * step;
 state.position += state.velocity * step;
}
export function chainPoint(y: number) {
 const phase = y / 240 * Math.PI * 2;
 return { x: Math.sin(phase) * 9, angle: -Math.atan(Math.cos(phase) * 9 * Math.PI * 2 / 240) * 180 / Math.PI };
}
