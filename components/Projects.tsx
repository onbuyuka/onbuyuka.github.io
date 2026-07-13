import React from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';

export const Projects: React.FC = () => (
  <section id="projects" className="scroll-mt-24 border-t border-white/5 px-6 py-24">
    <div className="mx-auto max-w-5xl">
      <Reveal className="mb-12 max-w-2xl">
        <Eyebrow>projects</Eyebrow>
        <p className="mt-3 font-display text-3xl font-bold text-white">Stuff I’ve built for fun</p>
        <p className="mt-3 text-lg leading-relaxed text-slate-400">
          Small projects I built to learn something or scratch an itch — football brackets,
          a paper-trading sandbox, an AI radio DJ, a web-grounded WhatsApp bot. Source is on
          GitHub; most have a live demo.
        </p>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 90}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>

      <p className="mt-10 font-mono text-sm text-slate-500">
        more on my{' '}
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
