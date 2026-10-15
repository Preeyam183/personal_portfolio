import { DetailDialog } from '@/components/detail-dialog';
import type { ExperienceDetailsContent } from '@/lib/content';

type Props = { id: string; name: string; role: string; date: string; details: ExperienceDetailsContent };

export function ExperienceDetails({ id, name, role, date, details }: Props) {
 return <DetailDialog id={`${id}-details`} title={details.topic} eyebrow={`A CLOSER LOOK / ${name}`} subtitle={`${role} · ${date}`} triggerClassName="experience-details-trigger" trigger={<><span>{details.topic}</span><span className="experience-details-hint">Explore work <span aria-hidden="true">↗</span></span></>}>
  <h3>What I worked on</h3>
  <ul className="experience-bullets">{details.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
  <h3>Technologies</h3>
  <ul className="experience-technologies" aria-label="Technologies used">{details.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
  {details.publication && <div className="experience-publication"><h3>Research publication</h3><p>{details.publication}</p><span>Paper link coming soon.</span></div>}
  {details.links.length > 0 && <div className="experience-resources">{details.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}</div>}
 </DetailDialog>;
}
