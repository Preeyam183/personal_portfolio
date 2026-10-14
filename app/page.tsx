import Image from 'next/image';
import { WaterLayers, FishSchool, HeroName } from '@/components/ocean-world';
import { Flower, Jellyfish, Net, ProjectArt, Seabed } from '@/components/art';
import { OceanMotion } from '@/components/motion';
import { experience, links, projects } from '@/lib/content';
function Arrow() { return <span aria-hidden="true">↗</span>; }
function Socials({ footer = false }: { footer?: boolean }) {
 return <div className="socials"><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow/></a><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow/></a><a href={links.email}>Email <Arrow/></a>{footer && <a href={links.devpost} target="_blank" rel="noopener noreferrer">Devpost <Arrow/></a>}</div>;
}
export default function Home() {
 return <main>
  <WaterLayers/>
  <a className="skip-link" href="#about">Skip to content</a>
  <section id="surface" className="hero" aria-labelledby="hero-title" data-observe>
   <div className="surface-light" aria-hidden="true"/>
   <Flower className="flower hero-flower-one"/><Flower className="flower hero-flower-two"/><Flower className="flower hero-flower-three"/>
   <Jellyfish className="jelly hero-jelly-one"/><Jellyfish className="jelly hero-jelly-two"/>
   <Net/>
   <Jellyfish className="jelly hero-jelly-three"/><div className="bubble bubble-one" aria-hidden="true"/><div className="bubble bubble-two" aria-hidden="true"/><div className="bubble bubble-three" aria-hidden="true"/>
   <FishSchool className="hero-fish"/><div className="hero-content"><HeroName/><Socials/></div>
   <a className="dive-link" href="#about" aria-label="Scroll to about"><span aria-hidden="true">↓</span></a>
   <div className="hero-bottom-line" aria-hidden="true"/>
  </section>
  <nav className="section-nav" aria-label="Sections"><a href="#surface" className="nav-monogram" aria-label="Back to top">ps<span>.</span></a><div><a href="#about">About</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact <Arrow/></a></div><OceanMotion/></nav>
  <section id="about" className="about section-shell" aria-labelledby="about-title" data-observe>
   <div className="eyebrow"><span className="small-star" aria-hidden="true">✳</span> A LITTLE ABOUT ME</div>
   <div className="about-layout"><h2 id="about-title">Curiosity runs<br/><span className="serif-word">deep.</span></h2><div className="about-copy"><p className="lead">I’m Preeyam, studying <strong>Computer Science & Data Science</strong> at Rutgers University–New Brunswick.</p><p>I’m drawn to the intersection of software engineering and AI/ML — exploring how cloud, data, and intelligent systems can turn ideas into useful experiences.</p><div className="interest-tags"><span>Software Engineering</span><span>AI / ML</span><span>Cloud & Data</span></div></div></div>
   <div className="section-divider"><span>KEEP EXPLORING</span><span aria-hidden="true">↓</span></div>
  </section>
  <section id="projects" className="projects section-shell" aria-labelledby="projects-title">
   <div className="section-heading"><div><div className="eyebrow">01 / SELECTED WORK</div><h2 id="projects-title">Ideas brought<br/>to the <span className="serif-word">surface.</span></h2></div><p>A few things I’ve built,<br/>explored, and learned from.</p></div>
   <div className="project-list">{projects.map(project => <article className={`project project-${project.color}`} key={project.id} data-observe><div className="project-art">{project.image ? <a className="project-image-link" href={project.image} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name.replace(/\n/g, " ")} project image`}><Image src={project.image} alt={project.imageAlt} width={1200} height={project.id === "raise" ? 762 : 630} loading="lazy" className="project-image"/><span className="image-caption">{project.id === "raise" ? "FROM THE ANALYSIS NOTEBOOK" : "ACTUAL PROJECT SCREENSHOT"} <Arrow/></span></a> : <ProjectArt kind={project.id}/> }<span className="project-number">{project.number}</span></div><div className="project-copy"><div className="eyebrow">{project.category}</div><h3>{project.name}</h3><p>{project.description}</p><div className="project-note">{project.note}</div><a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">{project.link}<Arrow/></a></div></article>)}</div>
  </section>
  <section id="experience" className="experience section-shell" aria-labelledby="experience-title" data-observe>
   <Flower className="flower experience-flower"/><div className="section-heading"><div><div className="eyebrow">02 / ALONG THE WAY</div><h2 id="experience-title">Learning. Building.<br/><span className="serif-word">Giving back.</span></h2></div><p>Research, real-world experience,<br/>and a community to grow with.</p></div>
   <div className="experience-list">{experience.map(item=><div className="experience-row" key={item.name}><span className="experience-symbol" aria-hidden="true">{item.symbol}</span><h3>{item.name}</h3><p>{item.role}</p><span className="experience-type">{item.type}</span></div>)}</div>
  </section>
  <section id="contact" className="contact" aria-labelledby="contact-title" data-observe><Jellyfish className="jelly contact-jelly"/><div className="contact-content section-shell"><div className="eyebrow">03 / SAY HELLO</div><h2 id="contact-title">Good ideas start<br/>with a <span className="serif-word">conversation.</span></h2><a className="email-link" href={links.email}>preeyamshah0604@gmail.com <Arrow/></a><Socials footer/></div><div className="painted-seabed" aria-hidden="true"/><Seabed/><footer><span>© {new Date().getFullYear()} Preeyam Shah</span><span>Made with curiosity & a little sea breeze.</span><a href="#surface">Back to the surface ↑</a></footer></section>
 </main>;
}
