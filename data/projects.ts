import type { FeaturedProject, Project } from '../types';

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'World Cup 2026 — Bracket Predictor',
    tagline: 'Rules-heavy tournament modeling in a static application.',
    description:
      'An interactive predictor for the expanded 48-team World Cup: reorder groups, resolve the best third-placed teams, share a complete bracket and score it against live results.',
    tags: ['React 19', 'TypeScript', 'GitHub Actions', 'Data modeling'],
    liveUrl: 'https://onbuyuka.github.io/world-cup-2026/',
    repoUrl: 'https://github.com/onbuyuka/world-cup-2026',
    emoji: '🏆',
    visual: 'world-cup',
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
  },
  {
    title: 'RadioDJ',
    tagline: 'Media orchestration with an AI voice between Spotify tracks.',
    description:
      'A browser-based personal radio that plays a Spotify playlist and inserts generated DJ segments with headlines, scores, weather and context about the previous track.',
    tags: ['React', 'TypeScript', 'Spotify Web SDK', 'LLM', 'TTS'],
    liveUrl: 'https://onbuyuka.github.io/spotify-radio-dj/',
    repoUrl: 'https://github.com/onbuyuka/spotify-radio-dj',
    emoji: '📻',
    visual: 'radio',
    screenshots: [
      {
        src: 'project-radio-1.webp',
        alt: 'RadioDJ home screen styled as a retro portable stereo',
      },
      {
        src: 'project-radio-2.webp',
        alt: 'RadioDJ station and Spotify playlist selection screen',
      },
      {
        src: 'project-radio-3.webp',
        alt: 'RadioDJ playback screen with live sources and track controls',
      },
    ],
    evidence: [
      'Treats the browser as a conductor around Spotify’s DRM-protected playback SDK.',
      'Orchestrates track transitions, live data feeds, script generation and text-to-speech.',
      'Separates station persona, language and voice so the experience can evolve independently.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'WhatsApp LLM Relay',
    tagline: 'A stateful, web-grounded AI agent over WhatsApp.',
    description:
      'Connects WhatsApp to an Azure AI Foundry agent with grounded web search, persistent conversations and support for direct and group chats.',
    tags: ['AI agents', 'Web grounding', 'Conversation state'],
    repoUrl: 'https://github.com/onbuyuka/whatsapp-llm-relay',
    emoji: '💬',
  },
  {
    title: 'Paper Trader Lab',
    tagline: 'A no-money sandbox for learning portfolio mechanics.',
    description:
      'Build hypothetical portfolios, record trades, track realized and unrealized P&L, and compare strategies against daily market data.',
    tags: ['Portfolio modeling', 'Market data', 'P&L'],
    liveUrl: 'https://onbuyuka.github.io/paper-trader-lab/',
    repoUrl: 'https://github.com/onbuyuka/paper-trader-lab',
    emoji: '📈',
  },
  {
    title: 'Defne & Onat — Wedding App',
    tagline: 'A bilingual invitation built for real guests.',
    description:
      'English/Turkish auto-detection, Google Sheets-backed RSVPs, Cloudinary photo uploads and an interactive Izmir travel guide.',
    tags: ['Bilingual UX', 'Guest workflows', 'Real-world use'],
    liveUrl: 'https://defneonat.com',
    repoUrl: 'https://github.com/onbuyuka/wedding-app',
    emoji: '💍',
  },
  {
    title: '7A0 · Süper Lig',
    tagline: 'A football drafting game with a ported match engine.',
    description:
      'Roll clubs across the years, draft a formation and simulate a seven-game run with a match engine ported from the original game.',
    tags: ['Game systems', 'Domain rules', 'Simulation'],
    liveUrl: 'https://onbuyuka.github.io/7a0-super-lig/',
    repoUrl: 'https://github.com/onbuyuka/7a0-super-lig',
    emoji: '⚽',
  },
];
