import Image from 'next/image';
import { assetPath } from '@/lib/assets';
import type { CSSProperties } from 'react';
import { skills } from '@/lib/content';

export function SkillBubbles() {
 return <section id="skills" className="skills section-shell" aria-labelledby="skills-title" data-observe>
  <div className="section-heading"><div><div className="eyebrow">02 / MY TOOLBOX</div><h2 id="skills-title">A little skill.<br/>A lot of <span className="serif-word">possibility.</span></h2></div><p>The tools I build with.<br/>Software, systems, and the cloud.</p></div>
  <ul className="skill-bubbles">{skills.map((skill, index) => <li key={skill.id} style={{ '--bubble-delay': `${index * -.85}s`, '--bubble-tilt': `${index % 2 ? 3 : -3}deg` } as CSSProperties}>
   <div className={`skill-bubble skill-tone-${index % 3}`}><Image className="skill-logo" src={assetPath(skill.icon)} alt="" width={48} height={48} aria-hidden="true"/><span className="skill-name">{skill.label}</span></div>
  </li>)}</ul>
 </section>;
}
