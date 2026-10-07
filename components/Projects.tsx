import React from 'react';
import { featuredProjects, projects } from '../data/projects';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { ProjectCard } from './ProjectCard';
import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';

export const Projects: React.FC = () => (
  <section id="projects" className="scroll-mt-24 border-t border-white/5 px-6 py-24">
    <div className="mx-auto max-w-5xl">
      <Reveal className="mb-12 max-w-2xl">
        <Eyebrow>projects</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold text-white">
          Products, prototypes and technical experiments
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-slate-400">
          I use side projects to explore product ideas end to end: model the domain, make the
          architectural trade-offs, build the interface and operate the result.
        </p>
      </Reveal>

      <div className="space-y-6">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.title}>
            <FeaturedProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mb-6 mt-16">
        <p className="font-mono text-xs font-medium tracking-wider text-slate-500">
          more experiments
        </p>
      </Reveal>
      <div className="grid auto-rows-fr gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 70} className="flex">
            <ProjectCard project={p} index={i + featuredProjects.length} />
          </Reveal>
        ))}
      </div>

      <p className="mt-10 font-mono text-sm text-slate-500">
        More source, experiments and works in progress on my{' '}
        <a
          href="https://github.com/onbuyuka"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 underline decoration-brand-rose/40 underline-offset-4 transition-colors hover:text-white hover:decoration-brand-rose"
        >
          github profile
        </a>
        .
      </p>
    </div>
  </section>
);
