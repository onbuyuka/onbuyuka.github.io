import type { FeaturedProject } from '../types';
import { ExternalLinkIcon, GitHubIcon } from './Icons';
import { ScreenshotGallery } from './ScreenshotGallery';

interface ProjectFeatureProps {
  project: FeaturedProject;
  number: string;
  caption: string;
  accessNote: string;
  displayTitle?: string;
}

export function ProjectFeature({
  project, number, caption, accessNote, displayTitle = project.title,
}: ProjectFeatureProps) {
  return (
    <article className="ct-project-feature" aria-labelledby={`project-${number}`}>
      <figure className="ct-project-media" aria-describedby={`project-${number}-caption`}>
        <div className="ct-gallery-stage">
          <ScreenshotGallery
            title={project.title}
            screenshots={project.screenshots}
          />
        </div>
        <figcaption id={`project-${number}-caption`} hidden>
          {caption}
        </figcaption>
      </figure>

      <div className="ct-project-copy">
        <p className="ct-kicker ct-mono"><span>{number}</span> Independently designed &amp; built</p>
        <h3 id={`project-${number}`}>{displayTitle}</h3>
        <p className="ct-project-tagline">{project.tagline}</p>
        <p className="ct-project-description">{project.description}</p>
        <ul className="ct-project-facts">
          {project.evidence.map((item) => (
            <li key={item}><span aria-hidden="true">+</span>{item}</li>
          ))}
        </ul>
        <div className="ct-project-links">
          <a
              className="ct-button"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby={`project-${number}-access`}
            >
              Visit {displayTitle} <ExternalLinkIcon />
          </a>
          <a className="ct-text-link" href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${displayTitle} source code`}>
              <GitHubIcon /> Source
          </a>
        </div>
        <span id={`project-${number}-access`} hidden>{accessNote}</span>
      </div>
    </article>
  );
}
