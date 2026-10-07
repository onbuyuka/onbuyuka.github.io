import React from 'react';
import type { Project } from '../types';
import { projectAccents } from '../data/projectAccents';
import { GitHubIcon, ExternalLinkIcon } from './Icons';

export const ProjectCard: React.FC<{ project: Project; index?: number }> = ({ project, index = 0 }) => {
  const accent = projectAccents[index % projectAccents.length];
  return (
    <article className="group relative flex w-full flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-850/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-ink-800/70 hover:shadow-2xl hover:shadow-black/40">
      {/* Gradient accent bar that widens on hover */}
      <span
        className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${accent} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
        aria-hidden="true"
      />

      <div className="mb-4 flex items-start justify-between gap-4">
        <span className="text-3xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" aria-hidden="true">
          {project.emoji}
        </span>
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

      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-300 transition-colors hover:text-white"
          >
            Live
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-300 transition-colors hover:text-white"
          >
            <GitHubIcon className="h-4 w-4" />
            Source
          </a>
        )}
      </div>
    </article>
  );
};
