import type { FeaturedProject, Project } from '../types';

export const dateNightProject = {
  title: 'Date Night',
  tagline: 'Private group planning without the group-chat back-and-forth.',
  description:
    'A full-stack event planner for building venue shortlists, inviting guests through personal links, collecting five-star votes and turning group preferences into a clear decision.',
  liveUrl: 'https://date-night.onbuyuka.workers.dev/',
  repoUrl: 'https://github.com/onbuyuka/date-night',
  screenshots: [
    {
      src: 'project-date-night-1.webp',
      alt: 'Date Night birthday event with a personal greeting and three shortlisted venues',
    },
    {
      src: 'project-date-night-2.webp',
      alt: 'Date Night organiser workspace with event statistics and themed event cards',
    },
    {
      src: 'project-date-night-3.webp',
      alt: 'Date Night mobile guest experience for rating venues and viewing the group ranking',
    },
  ],
  evidence: [
    'Separates organiser accounts from passwordless guest invitations and event-scoped voting.',
    'Enriches venue shortlists from Maps and public websites without overwriting user decisions.',
    'Runs on Workers and D1 with migrations, deployment safeguards and end-to-end tests.',
  ],
} satisfies FeaturedProject;

export const worldCupProject = {
  title: 'World Cup 2026 — Bracket Predictor',
  tagline: 'Rules-heavy tournament modeling in a static application.',
  description:
    'An interactive predictor for the expanded 48-team World Cup: reorder groups, resolve the best third-placed teams, share a complete bracket and score it against live results.',
  liveUrl: 'https://onbuyuka.github.io/world-cup-2026/',
  repoUrl: 'https://github.com/onbuyuka/world-cup-2026',
  screenshots: [
    {
      src: 'project-world-cup-1.webp',
      alt: 'World Cup 2026 bracket predictor showing live group standings and qualifiers',
    },
    {
      src: 'project-world-cup-2.webp',
      alt: 'Argentina team profile with kits, form, fixtures and squad information',
    },
    {
      src: 'project-world-cup-3.webp',
      alt: 'Live World Cup knockout bracket with Spain as the predicted champion',
    },
  ],
  evidence: [
    'Encodes and validates all 495 third-place combinations from FIFA’s published rules.',
    'Models 48 teams, 104 fixtures, local time zones, prediction sharing and weighted scoring.',
    'Combines scheduled result snapshots with browser polling and a graceful static fallback.',
  ],
} satisfies FeaturedProject;

export const radioProject = {
  title: 'RadioDJ',
  tagline: 'Media orchestration with an AI voice between Spotify tracks.',
  description:
    'A browser-based personal radio that plays a Spotify playlist and inserts generated DJ segments with headlines, scores, weather and context about the previous track.',
  liveUrl: 'https://onbuyuka.github.io/spotify-radio-dj/',
  repoUrl: 'https://github.com/onbuyuka/spotify-radio-dj',
  screenshots: [
    {
      src: 'project-radio-1.webp',
      alt: 'RadioDJ home screen styled as a retro portable stereo',
    },
    {
      src: 'project-radio-3.webp',
      alt: 'RadioDJ station and Spotify playlist selection screen',
    },
    {
      src: 'project-radio-2.webp',
      alt: 'RadioDJ playback screen with live sources and track controls',
    },
  ],
  evidence: [
    'Treats the browser as a conductor around Spotify’s DRM-protected playback SDK.',
    'Orchestrates track transitions, live data feeds, script generation and text-to-speech.',
    'Separates station persona, language and voice so the experience can evolve independently.',
  ],
} satisfies FeaturedProject;

export const projects: Project[] = [
  {
    title: 'WhatsApp LLM Relay',
    tagline: 'A stateful, web-grounded AI agent over WhatsApp.',
    repoUrl: 'https://github.com/onbuyuka/whatsapp-llm-relay',
  },
  {
    title: 'Paper Trader Lab',
    tagline: 'A no-money sandbox for learning portfolio mechanics.',
    liveUrl: 'https://onbuyuka.github.io/paper-trader-lab/',
    repoUrl: 'https://github.com/onbuyuka/paper-trader-lab',
  },
];
