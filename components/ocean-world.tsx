import type { CSSProperties } from 'react';
export function WaterLayers() {
 return <div className="water-world" aria-hidden="true"><div className="water-grain"/><div className="water-caustics"/><div className="water-rays"/><div className="water-current current-one"/><div className="water-current current-two"/>{Array.from({length:12},(_,i)=><i className="rising-bubble" key={i} style={{'--left':`${(i*23+7)%100}%`,'--size':`${12+(i%4)*10}px`,'--delay':`${-i*2.7}s`,'--duration':`${14+i%5*3}s`} as CSSProperties}/>)}</div>;
}
export function FishSchool({ className = '' }: { className?: string }) {
 return <svg className={`fish-school ${className}`} viewBox="0 0 340 110" aria-hidden="true">{[0,1,2,3].map(i=><g key={i} transform={`translate(${i*72+10},${i%2*32+10}) scale(${i===0?1:.7})`}><path d="M5 30Q32 0 65 27L88 12L83 34L89 52L65 40Q32 67 5 30Z" fill={i%2?'#f6b893':'#f7da69'} stroke="#427482" strokeWidth="3" strokeLinejoin="round"/><path d="M39 13L49 2L57 19M37 46L49 57L58 42" fill="#e5958b" stroke="#427482" strokeWidth="2"/><circle cx="22" cy="27" r="7" fill="#fffde8"/><circle cx="20" cy="27" r="3" fill="#254651"/><path d="M6 34L14 35M45 21Q37 31 46 39" fill="none" stroke="#427482" strokeWidth="2" strokeLinecap="round"/></g>)}</svg>;
}
export function HeroName() {
 const row=(word:string,offset:number)=><span className="name-row" aria-hidden="true">{[...word].map((letter,i)=><span className={`name-letter ${letter==='.'?'name-dot':''}`} key={i} style={{'--letter-index':i+offset,'--tilt':`${[ -5,3,-2,4,-3,2, -2][i%7]}deg`} as CSSProperties}>{letter}</span>)}</span>;
 return <h1 id="hero-title" aria-label="Preeyam Shah">{row('Preeyam',0)}{row('Shah.',7)}</h1>;
}
