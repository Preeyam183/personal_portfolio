import { EmailBox } from '@/components/email-box';
import { SocialIcon, TimelineAnchor } from '@/components/icons';
import Image from 'next/image';
import { WaterLayers, HeroName, Seafloor } from '@/components/ocean-world';
import { Flower, Jellyfish, ProjectArt } from '@/components/art';
import { OceanMotion } from '@/components/motion';
import { experience, links, projects } from '@/lib/content';
function Arrow() { return <span aria-hidden="true">↗</span>; }
function Socials({ footer = false }: { footer?: boolean }) {
 return <div className="socials"><a href={links.linkedin} target="_blank" rel="noopener noreferrer"><SocialIcon kind="linkedin"/>LinkedIn <Arrow/></a><a href={links.github} target="_blank" rel="noopener noreferrer"><SocialIcon kind="github"/>GitHub <Arrow/></a><a href={links.email}><SocialIcon kind="email"/>Email <Arrow/></a>{footer && <a href={links.devpost} target="_blank" rel="noopener noreferrer">Devpost <Arrow/></a>}</div>;
}
export default function Home() {
 return <main>
  <WaterLayers/>
  <a className="skip-link" href="#about">Skip to content</a>
  <section id="surface" className="hero" aria-labelledby="hero-title" data-observe>
   <Jellyfish className="jelly hero-jelly-one"/><Jellyfish className="jelly hero-jelly-two"/>
   <Jellyfish className="jelly hero-jelly-three"/>
   <div className="hero-content"><HeroName/><Socials/></div>
   <a className="dive-link" href="#about" aria-label="Scroll to about"><span aria-hidden="true">↓</span></a>

  </section>
  <nav className="section-nav" aria-label="Sections"><a href="#surface" className="nav-monogram" aria-label="Back to top">ps<span>.</span></a><div><a href="#about">About</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact <Arrow/></a></div><OceanMotion/></nav>
  <section id="about" className="about section-shell" aria-labelledby="about-title" data-observe>
   <div className="eyebrow"><span className="small-star" aria-hidden="true">✳</span> A LITTLE ABOUT ME</div>
   <div className="about-layout"><div className="about-portrait-column"><h2 id="about-title">Curiosity runs<br/><span className="serif-word">deep.</span></h2><div className="portrait-frame"><Image className="portrait-photo" src="/profile/preeyam-headshot.jpeg" alt="Preeyam Shah" width={400} height={400}/><Image className="portrait-frame-overlay" src="/profile/gold-rope-frame.webp" alt="" width={1024} height={1024} aria-hidden="true"/></div></div><div className="about-copy"><p className="lead">I’m Preeyam, studying <strong>Computer Science & Data Science</strong> at Rutgers University–New Brunswick.</p><p>I’m drawn to the intersection of software engineering and AI/ML — exploring how cloud, data, and intelligent systems can turn ideas into useful experiences.</p><div className="interest-tags"><span><i aria-hidden="true">&lt;/&gt;</i>Software Engineering</span><span><i aria-hidden="true">✳</i>AI / ML</span><span><i aria-hidden="true">☁</i>Cloud & Data</span></div></div></div>
   <div className="section-divider"><span>KEEP EXPLORING</span><span aria-hidden="true">↓</span></div>
  </section>
  <section id="projects" className="projects section-shell" aria-labelledby="projects-title">
   <div className="section-heading"><div><div className="eyebrow">01 / SELECTED WORK</div><h2 id="projects-title">Ideas brought<br/>to the <span className="serif-word">surface.</span></h2></div><p>A few things I’ve built,<br/>explored, and learned from.</p></div>
   <div className="project-list">{projects.map(project => <article className={`project project-${project.color}`} key={project.id} data-observe><div className="project-art">{project.image ? <a className="project-image-link" href={project.image} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name.replace(/\n/g, " ")} project image`}>{project.id === 'raise' ? <div className="raise-photo-wrap"><Image src={project.image} alt={project.imageAlt} width={1080} height={1080} loading="lazy" className="raise-original"/>{project.id === "raise" && <span className="winner-trophy" aria-label="First place"><svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M14 8H34V19C34 30 14 30 14 19Z" fill="#FFD766" stroke="#77552C" strokeWidth="2"/><path d="M14 11H7V15C7 23 14 23 16 23M34 11H41V15C41 23 34 23 32 23" stroke="#77552C" strokeWidth="3"/><path d="M24 28V37M16 40H32" stroke="#77552C" strokeWidth="4" strokeLinecap="round"/><path d="M24 12L26 17L31 18L27 22L28 27L24 24L20 27L21 22L17 18L22 17Z" fill="#E49A31"/></svg><span>1st place</span></span>}</div> : <Image src={project.image} alt={project.imageAlt} width={1200} height={630} loading="lazy" className="project-image"/>}<span className="image-caption">{project.id === "raise" ? "FIRST PLACE · SCARLET API" : "ACTUAL PROJECT SCREENSHOT"} <Arrow/></span></a> : <ProjectArt kind={project.id}/> }<span className="project-number">{project.number}</span></div><div className="project-copy"><div className="eyebrow">{project.category}</div><h3>{project.name}</h3><p>{project.description}</p><div className="project-note">{project.note}</div><div className="project-actions"><a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">{project.link}<Arrow/></a>{project.github && <a className="project-link" href={project.github} target="_blank" rel="noopener noreferrer"><SocialIcon kind="github"/>GitHub <Arrow/></a>}</div></div></article>)}</div>
  </section>
  <section id="experience" className="experience section-shell" aria-labelledby="experience-title" data-observe>
   <Flower className="flower experience-flower"/><div className="section-heading"><div><div className="eyebrow">02 / ALONG THE WAY</div><h2 id="experience-title">Learning. Building.<br/><span className="serif-word">Giving back.</span></h2></div><p>Research, real-world experience,<br/>and a community to grow with.</p></div>
   <div className="timeline-wrap"><TimelineAnchor/><ol className="experience-timeline">{experience.map((item, index)=><li className="timeline-stop" key={item.name} data-observe><div className="timeline-card"><span className="timeline-step" aria-hidden="true">0{index+1}</span><time dateTime={item.dateTime}>{item.date}</time><span className="timeline-category">{item.type}</span>{item.logo && (item.id === "aws" ? <span className="aws-badge"><Image className="experience-logo logo-aws" src={item.logo} alt={item.logoAlt} width={500} height={500}/></span> : <Image className={`experience-logo logo-${item.id}`} src={item.logo} alt={item.logoAlt} width={item.id === "neuralseek" ? 185 : 100} height={item.id === "neuralseek" ? 28 : 100}/>)}<h3 className={item.id === "neuralseek" ? "sr-only" : undefined}>{item.name}</h3><p>{item.role}</p></div></li>)}</ol></div>
  </section>
  <section id="contact" className="contact" aria-labelledby="contact-title" data-observe><Jellyfish className="jelly contact-jelly"/><div className="contact-content section-shell"><div className="contact-heading"><div className="eyebrow">03 / SAY HELLO</div><h2 id="contact-title">Good ideas start<br/>with a <span className="serif-word">conversation.</span></h2><a className="email-link" href={links.email}>preeyamshah0604@gmail.com <Arrow/></a><Socials footer/></div><EmailBox/></div><Seafloor/><footer><span>© {new Date().getFullYear()} Preeyam Shah</span><span>Made with curiosity & a little sea breeze.</span><a href="#surface">Back to the surface ↑</a></footer></section>
 </main>;
}
