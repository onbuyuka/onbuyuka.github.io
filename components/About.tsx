import React from 'react';
import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';

export const About: React.FC = () => (
  <section id="about" className="scroll-mt-24 px-6 py-24">
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <Eyebrow>about</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold text-white">
            The short version
          </h2>

          {/* Illustrated portrait with a soft gradient glow behind it */}
          <div className="relative mx-auto mt-8 w-full max-w-[190px] md:mx-0 md:max-w-[260px]">
            <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-br from-brand-amber/20 via-brand-rose/20 to-brand-violet/20 blur-2xl" />
            <img
              src={`${import.meta.env.BASE_URL}portrait.png`}
              alt="Illustrated portrait of Onat"
              className="w-full rounded-[2.5rem] drop-shadow-2xl"
            />
          </div>
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
            and own its API, Dataverse and Dynamics 365 integration capabilities.
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
            . Outside work I build products and prototypes to chase an idea until it
            works — a few are featured below.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
