import { SurfaceWater } from '@/components/surface-water';
import type { CSSProperties } from 'react';
export function WaterLayers() {
 return <div className="water-world" aria-hidden="true"><div className="water-grain"/><SurfaceWater/><div className="water-depth-tint"/><div className="water-rays"/>{Array.from({length:12},(_,i)=><i className="rising-bubble" key={i} style={{'--left':`${(i*23+7)%100}%`,'--size':`${12+(i%4)*10}px`,'--delay':`${-i*2.7}s`,'--duration':`${14+i%5*3}s`} as CSSProperties}/>)}</div>;
}
export function FishSchool({ className = '' }: { className?: string }) {
 return <svg className={`fish-school ${className}`} viewBox="0 0 340 110" aria-hidden="true">{[0,1,2,3].map(i=><g key={i} transform={`translate(${i*72+10},${i%2*32+10}) scale(${i===0?1:.7})`}><path d="M5 30Q32 0 65 27L88 12L83 34L89 52L65 40Q32 67 5 30Z" fill={i%2?'#f6b893':'#f7da69'} stroke="#427482" strokeWidth="3" strokeLinejoin="round"/><path d="M39 13L49 2L57 19M37 46L49 57L58 42" fill="#e5958b" stroke="#427482" strokeWidth="2"/><circle cx="22" cy="27" r="7" fill="#fffde8"/><circle cx="20" cy="27" r="3" fill="#254651"/><path d="M6 34L14 35M45 21Q37 31 46 39" fill="none" stroke="#427482" strokeWidth="2" strokeLinecap="round"/></g>)}</svg>;
}
export function HeroName() {
 const row=(word:string,offset:number)=><span className="name-row" aria-hidden="true">{[...word].map((letter,i)=><span className={`name-letter ${letter==='.'?'name-dot':''}`} key={i} style={{'--letter-index':i+offset,'--tilt':`${[ -5,3,-2,4,-3,2, -2][i%7]}deg`} as CSSProperties}>{letter}</span>)}</span>;
 return <h1 id="hero-title" aria-label="Preeyam Shah">{row('Preeyam',0)}{row('Shah.',7)}</h1>;
}
export function Seafloor() {
 return <div className="bikini-bottom" aria-label="Animated original underwater village on a sandy seabed">
  <svg className="sand-floor" viewBox="0 0 1440 300" preserveAspectRatio="none" aria-hidden="true"><defs><pattern id="sand-speckles" width="71" height="49" patternUnits="userSpaceOnUse"><circle cx="8" cy="13" r="1.2" fill="#b7955c" opacity=".4"/><ellipse cx="41" cy="32" rx="2" ry="1" fill="#fff6d8"/><circle cx="60" cy="8" r="1" fill="#b7955c" opacity=".35"/></pattern></defs><path d="M0 45Q250 0 500 43T1000 39T1440 35V300H0Z" fill="#ead3a0"/><path d="M0 105Q300 67 680 110T1440 100V300H0Z" fill="#e2c38a"/><path d="M0 45Q250 0 500 43T1000 39T1440 35V300H0Z" fill="url(#sand-speckles)"/><path d="M0 200Q300 155 620 200T1440 187" stroke="#f4dfa9" strokeWidth="8" fill="none" opacity=".6"/></svg>
  <div className="seabed-shimmer" aria-hidden="true"/>
  <div className="original-neighborhood" aria-hidden="true"/>
  <div className="village-lights" aria-hidden="true"><i/><i/><i/></div>
  <div className="village-bubbles" aria-hidden="true">{Array.from({length:6},(_,i)=><i key={i} style={{'--bubble-index':i} as CSSProperties}/>)}</div>

 </div>;
}
