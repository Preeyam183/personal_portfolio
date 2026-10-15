import Image from 'next/image';
import { DetailDialog } from '@/components/detail-dialog';
import { ProjectArt } from '@/components/art';
import { AwardBadge } from '@/components/icons';
import { assetPath } from '@/lib/assets';
import type { projects } from '@/lib/content';
import { projectDetails } from '@/lib/project-details';

export function ProjectDetails({ project }: { project: (typeof projects)[number] }) {
 const details = projectDetails[project.id];
 const name = project.name.replace(/\n/g, ' ');
 const preview = <>
  {project.image ? (project.id === 'raise' ? <span className="raise-photo-wrap"><Image src={assetPath(project.image)} alt={project.imageAlt} width={1080} height={1080} loading="lazy" className="raise-original"/><AwardBadge label="1st place"/></span> : <span className="project-photo-wrap"><Image src={assetPath(project.image)} alt={project.imageAlt} width={1200} height={630} loading="lazy" className="project-image"/>{project.id === 'camera' && <AwardBadge label="Best use of AI/ML"/>}</span>) : <ProjectArt kind={project.id}/>}
  <span className="image-caption">EXPLORE PROJECT <span aria-hidden="true">↗</span></span>
 </>;
 return <DetailDialog id={`project-${project.id}-details`} title={name} eyebrow={`PROJECT ${project.number} / A DEEPER DIVE`} subtitle={project.category} className="project-dialog" triggerClassName="project-image-link project-preview-trigger" triggerLabel={`Explore ${name} project details`} trigger={preview}>
  <p className="project-dialog-description">{details.description}</p>
  <div className="project-gallery">{details.images.length ? details.images.map(picture => <figure key={picture.src}><Image src={assetPath(picture.src)} alt={picture.alt} width={picture.width} height={picture.height} loading="lazy"/><figcaption>{picture.caption}</figcaption></figure>) : <figure className="project-gallery-illustration"><ProjectArt kind={project.id}/><figcaption>Illustrative season forecast — not an application screenshot.</figcaption></figure>}</div>
  <h3>Project highlights</h3>
  <ul className="experience-bullets">{details.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
  <h3>Technologies</h3>
  <ul className="experience-technologies" aria-label="Technologies used">{details.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
  <div className="experience-resources"><a href={project.href} target="_blank" rel="noopener noreferrer">{project.link} <span aria-hidden="true">↗</span></a>{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub <span aria-hidden="true">↗</span></a>}</div>
 </DetailDialog>;
}
