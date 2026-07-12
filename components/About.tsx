import React from 'react';
import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';

const skills = [
  'C#',
  'AL',
  'Python',
  'TypeScript',
  'REST',
  'GraphQL',
  'MCP',
  'Dataverse',
  'Azure',
  'Entra ID',
  'Dynamics 365',
  'Git / GitHub',
];

export const About: React.FC = () => (
  <section id="about" className="scroll-mt-24 px-6 py-24">
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <Eyebrow>about</Eyebrow>
          <p className="mt-3 font-display text-3xl font-bold text-white">
            The short version
          </p>
        </Reveal>

        <Reveal delay={80} className="space-y-5 text-lg leading-relaxed text-slate-400">
          <p>
            Hi, I’m Onat — a software engineer with 7+ years designing and building
            enterprise-grade systems, with a focus on application integration, API
            ecosystems and ERP platforms.
          </p>
          <p>
            I’m a senior software engineer at{' '}
            <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-slate-200 underline decoration-brand-rose/40 underline-offset-4 transition-colors hover:text-white hover:decoration-brand-rose">
              Microsoft
            </a>{' '}
            in Copenhagen, working on Dynamics 365 Business Central. I was head engineer
            for the Shopify Connector — now a trusted partner app used by 8,000+
            merchants — designed Business Central’s Model Context Protocol (MCP) server,
            modernized its API stack to OData v2.0, and own its Dataverse and
            Dynamics 365 integrations.
          </p>
          <p>
            Before Microsoft I earned an M.Sc. in Computer Science &amp; Engineering at{' '}
            <a href="https://www.dtu.dk/english" target="_blank" rel="noopener noreferrer" className="text-slate-200 underline decoration-brand-rose/40 underline-offset-4 transition-colors hover:text-white hover:decoration-brand-rose">
              DTU
            </a>{' '}
            and a B.Sc. in Computer Engineering at{' '}
            <a href="https://www.metu.edu.tr" target="_blank" rel="noopener noreferrer" className="text-slate-200 underline decoration-brand-rose/40 underline-offset-4 transition-colors hover:text-white hover:decoration-brand-rose">
              METU
            </a>
            . Off the clock I build small web apps to chase an idea until it works — a few
            are below.
          </p>

          <div className="pt-2">
            <p className="mb-3 font-mono text-xs font-medium tracking-wider text-slate-500">
              tools I reach for
            </p>
            <ul className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-sm text-slate-300 transition-colors hover:border-brand-rose/40 hover:text-white"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
