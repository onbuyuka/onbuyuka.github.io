import React from 'react';
import type { FeaturedProject } from '../types';
import { projectAccents } from '../data/projectAccents';
import { ExternalLinkIcon, GitHubIcon } from './Icons';
import { FeaturedProjectVisual } from './FeaturedProjectVisual';
import { ProjectScreenshotGallery } from './ProjectScreenshotGallery';

export const FeaturedProjectCard: React.FC<{ project: FeaturedProject; index: number }> = ({
  project,
  index,
}) => {
  const accent = projectAccents[index % projectAccents.length];

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-850/60">
      <span
        className={`absolute inset-x-0 top-0 z-10 h-0.5 bg-gradient-to-r ${accent} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
        aria-hidden="true"
      />
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-64 overflow-hidden border-b border-white/10 bg-ink-950 lg:min-h-full lg:border-b-0 lg:border-r">
          {project.screenshots ? (
            <ProjectScreenshotGallery title={project.title} screenshots={project.screenshots} />
          ) : (
            <FeaturedProjectVisual visual={project.visual} />
          )}
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="text-3xl" aria-hidden="true">{project.emoji}</span>
            <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
          </div>
          <h3 className="mt-5 font-display text-2xl font-bold text-white">{project.title}</h3>
          <p className={`mt-1 bg-gradient-to-r ${accent} bg-clip-text text-sm font-medium text-transparent`}>
            {project.tagline}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">{project.description}</p>

          <ul className="mt-6 space-y-3">
            {project.evidence.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-violet" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
              >
                Live project
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 transition-colors hover:border-white/20 hover:text-white"
              >
                <GitHubIcon className="h-4 w-4" />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
