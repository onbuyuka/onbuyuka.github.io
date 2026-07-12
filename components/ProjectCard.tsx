import React from 'react';
import type { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon } from './Icons';

/** Per-card accent gradients, cycled by index so the grid isn't monochrome. */
const accents = [
  'from-brand-amber to-brand-rose',
  'from-brand-rose to-brand-violet',
  'from-brand-violet to-sky-400',
  'from-emerald-400 to-brand-amber',
  'from-sky-400 to-brand-violet',
  'from-brand-rose to-brand-amber',
];

export const ProjectCard: React.FC<{ project: Project; index?: number }> = ({ project, index = 0 }) => {
  const accent = accents[index % accents.length];
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-850/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-ink-800/70 hover:shadow-2xl hover:shadow-black/40">
      {/* Gradient accent bar that widens on hover */}
      <span
        className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${accent} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
        aria-hidden="true"
      />

      <div className="mb-4 flex items-start justify-between gap-4">
        <span className="text-3xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" aria-hidden="true">
          {project.emoji}
        </span>
        <div className="flex items-center gap-3 text-slate-500">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source on GitHub`}
              className="transition-colors hover:text-white"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="transition-colors hover:text-white"
            >
              <ExternalLinkIcon className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="font-display text-lg font-bold text-white">{project.title}</h3>
      <p className={`mt-1 bg-gradient-to-r ${accent} bg-clip-text text-sm font-medium text-transparent`}>
        {project.tagline}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li key={t} className="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-slate-400">
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
};
