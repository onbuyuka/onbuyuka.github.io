import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';
import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => (
  <section id="contact" className="scroll-mt-24 border-t border-white/5 px-6 py-24">
    <Reveal className="mx-auto max-w-5xl text-center">
      <Eyebrow className="flex justify-center">contact</Eyebrow>
      <p className="mx-auto mt-3 max-w-xl font-display text-3xl font-bold text-white">
        Let’s build something
      </p>
      <p className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-slate-400">
        Got an idea, a role, or just want to talk shop over coffee? My inbox is open —
        I read everything and reply to most.
      </p>

      <div className="mt-10 flex items-center justify-center gap-6 text-slate-400">
        <a href="https://github.com/onbuyuka" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-white">
          <GitHubIcon className="h-6 w-6" />
        </a>
        <a href="https://linkedin.com/in/onat-buyukakkus-1b3b54a4" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-white">
          <LinkedInIcon className="h-6 w-6" />
        </a>
        <a href="mailto:onatbuyukakkus@gmail.com" aria-label="Email" className="transition-colors hover:text-white">
          <MailIcon className="h-6 w-6" />
        </a>
      </div>
    </Reveal>
  </section>
);
