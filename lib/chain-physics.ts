export type Spring = { position: number; velocity: number };

/** Exact damped-spring solution: consistent motion across frame rates. */
export function stepSpring(state: Spring, target: number, dt: number, stiffness: number, damping: number) {
 const time = Math.min(Math.max(dt, 0), 1 / 15);
 const offset = state.position - target;
 const velocity = state.velocity;
 const decay = damping / 2;
 const discriminant = stiffness - decay * decay;
 if (discriminant > 1e-6) {
  const frequency = Math.sqrt(discriminant);
  const sine = Math.sin(frequency * time), cosine = Math.cos(frequency * time);
  const b = (velocity + decay * offset) / frequency;
  const envelope = Math.exp(-decay * time);
  state.position = target + envelope * (offset * cosine + b * sine);
  state.velocity = envelope * ((b * frequency - decay * offset) * cosine - (offset * frequency + decay * b) * sine);
 } else if (discriminant < -1e-6) {
  const root = Math.sqrt(-discriminant);
  const slow = -decay + root, fast = -decay - root;
  const a = (velocity - fast * offset) / (slow - fast), b = offset - a;
  const slowTerm = a * Math.exp(slow * time), fastTerm = b * Math.exp(fast * time);
  state.position = target + slowTerm + fastTerm;
  state.velocity = slow * slowTerm + fast * fastTerm;
 } else {
  const b = velocity + decay * offset;
  const envelope = Math.exp(-decay * time);
  state.position = target + (offset + b * time) * envelope;
  state.velocity = (velocity - decay * b * time) * envelope;
 }
}
export function chainPoint(y: number) {
 const phase = y / 240 * Math.PI * 2;
 return { x: Math.sin(phase) * 9, angle: -Math.atan(Math.cos(phase) * 9 * Math.PI * 2 / 240) * 180 / Math.PI };
}
