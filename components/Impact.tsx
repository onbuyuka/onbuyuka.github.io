import React from 'react';
import { projectAccents } from '../data/projectAccents';
import { ExternalLinkIcon } from './Icons';
import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';

const impact = [
  {
    index: '01',
    label: 'commerce integration',
    title: 'Shopify Connector',
    metric: '8,000+',
    metricLabel: 'active merchants',
    description:
      'Lead engineer for the Business Central connector: architecture, implementation and product evolution across Microsoft and Shopify.',
    details: ['GraphQL', 'Multi-shop architecture', 'Partner engineering'],
    links: [
      {
        label: 'Explore the product',
        href: 'https://learn.microsoft.com/en-us/dynamics365/business-central/shopify/shopify-connector-overview',
      },
    ],
  },
  {
    index: '02',
    label: 'applied AI',
    title: 'Business Central MCP Server',
    metric: 'MCP',
    metricLabel: 'agent-ready ERP',
    description:
      'Application architect for secure agent access to Business Central data and capabilities through the Model Context Protocol.',
    details: ['Access control', 'Tool design', 'Evaluation frameworks'],
    links: [
      {
        label: 'Read the overview',
        href: 'https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/ai/mcp-overview',
      },
    ],
  },
  {
    index: '03',
    label: 'platform engineering',
    title: 'Integration platform',
    metric: 'Integrations',
    metricLabel: 'APIs + Dataverse',
    description:
      'Built and owned platform capabilities spanning OData APIs, bidirectional synchronization, virtual tables and extensible integration infrastructure.',
    details: ['OData', 'Dataverse', 'Dynamics 365'],
    links: [
      {
        label: 'API v2.0',
        href: 'https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/',
      },
      {
        label: 'Dataverse',
        href: 'https://learn.microsoft.com/en-us/dynamics365/business-central/admin-common-data-service',
      },
      {
        label: 'Dynamics 365 Sales',
        href: 'https://learn.microsoft.com/en-us/dynamics365/business-central/marketing-integrate-dynamicscrm',
      },
    ],
  },
];

export const Impact: React.FC = () => (
  <section id="impact" className="scroll-mt-24 border-t border-white/5 px-6 py-24">
    <div className="mx-auto max-w-5xl">
      <Reveal className="max-w-2xl">
        <Eyebrow>selected impact</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold text-white">
          Integration products at enterprise scale
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-slate-400">
          Public products I have helped take from architecture to adoption at Microsoft,
          connecting commerce, ERP, business applications and AI agents.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {impact.map((item, index) => {
          const accent = projectAccents[index % projectAccents.length];

          return (
          <Reveal key={item.title} delay={index * 80}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-850/60 p-6">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${accent} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                aria-hidden="true"
              />
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-brand-rose">{item.index}</span>
                <span className="text-slate-500">{item.label}</span>
              </div>
              <h3 className="mt-7 font-display text-xl font-bold text-white">{item.title}</h3>
              <div className="mt-5 border-l-2 border-brand-rose/70 pl-4">
                <p className={`w-fit bg-gradient-to-r ${accent} bg-clip-text font-display text-2xl font-bold text-transparent`}>
                  {item.metric}
                </p>
                <p className="font-mono text-xs text-slate-500">{item.metricLabel}</p>
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.details.map((detail) => (
                  <li key={detail} className="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-slate-400">
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ExternalLinkIcon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </article>
          </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
