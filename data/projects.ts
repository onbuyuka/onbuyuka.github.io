import type { Project } from '../types';

/**
 * Selected side projects. Order here is the order shown on the page.
 * Keep the strongest / most representative work near the top.
 */
export const projects: Project[] = [
  {
    title: 'World Cup 2026 — Bracket Predictor',
    tagline: 'Build, share and live-score your own World Cup bracket.',
    description:
      'Pick group winners, advance the best third-placed teams and predict a champion, then flip on Live mode to track real results and score your bracket — squads, kits, form and fixtures in your time zone, refreshed daily via a GitHub Action.',
    tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind', 'GitHub Actions'],
    liveUrl: 'https://onbuyuka.github.io/world-cup-2026/',
    repoUrl: 'https://github.com/onbuyuka/world-cup-2026',
    emoji: '🏆',
  },
  {
    title: 'Paper Trader Lab',
    tagline: 'A no-money paper-trading sandbox for learning the markets.',
    description:
      'Build hypothetical portfolios, log buys and sells, and track realized/unrealized P&L against a daily price snapshot — then pit alternative portfolios against each other. Live quotes are fetched client-side; no backend, no real money.',
    tags: ['React 19', 'TypeScript', 'Vite', 'Finance data'],
    liveUrl: 'https://onbuyuka.github.io/paper-trader-lab/',
    repoUrl: 'https://github.com/onbuyuka/paper-trader-lab',
    emoji: '📈',
  },  {
    title: 'RadioDJ',
    tagline: 'A personal radio that drops an AI DJ between your Spotify tracks.',
    description:
      'Plays your Spotify playlist through the Web Playback SDK and generates an AI DJ segment between songs — reading the headlines, scores, weather and a fact or two about the track that just played. Pick a station, each with its own voice and persona.',
    tags: ['React', 'TypeScript', 'Spotify Web SDK', 'LLM', 'TTS'],
    liveUrl: 'https://onbuyuka.github.io/spotify-radio-dj/',
    repoUrl: 'https://github.com/onbuyuka/spotify-radio-dj',
    emoji: '📻',
  },
  {
    title: 'WhatsApp LLM Relay',
    tagline: 'Chat with a web-grounded AI agent over WhatsApp.',
    description:
      'A personal WhatsApp bot that relays your messages to an Azure AI Foundry agent with grounded web search — live, sourced answers in a chat. Connects outbound via Baileys (no public IP or webhook), with keyless Azure auth and a stateful thread per number.',
    tags: ['TypeScript', 'Node.js', 'Baileys', 'Azure AI Foundry'],
    repoUrl: 'https://github.com/onbuyuka/whatsapp-llm-relay',
    emoji: '💬',
  },
  {
    title: 'Defne & Onat — Wedding App',
    tagline: 'A bilingual wedding invitation with RSVP and photo uploads.',
    description:
      'A responsive, bilingual wedding site (English/Turkish auto-detected) with an RSVP form backed by Google Sheets and guest photo uploads via Cloudinary — plus an interactive Izmir travel guide with a custom Leaflet map of our favourite spots.',
    tags: ['React', 'TypeScript', 'Vite', 'Cloudinary', 'Custom domain'],
    liveUrl: 'https://defneonat.com',
    repoUrl: 'https://github.com/onbuyuka/wedding-app',
    emoji: '💍',
  },
  {
    title: '7A0 · Süper Lig',
    tagline: 'Roll clubs across the years, draft a team, go seven-nil.',
    description:
      'A Süper Lig spin on the “Sete a Zero” game: set a formation, roll clubs across the years and draft one player from each to build your XI, then simulate a seven-game run revealed game by game. Includes a match engine ported one-to-one from the original.',
    tags: ['React 19', 'TypeScript', 'Vite', 'Game logic'],
    liveUrl: 'https://onbuyuka.github.io/7a0-super-lig/',
    repoUrl: 'https://github.com/onbuyuka/7a0-super-lig',
    emoji: '⚽',
  },
  {
    title: 'Seçim Pusulası · Election Compass',
    tagline: 'Find which Turkish political party aligns with your views.',
    description:
      'A policy-focused questionnaire inspired by DR.dk’s election compass: answer 19 statements across 7 categories and get ranked results showing your match percentage with each party. Questions are about policy topics, not politicians.',
    tags: ['React', 'TypeScript', 'Vite', 'Bilingual'],
    liveUrl: 'https://onbuyuka.github.io/tr-poli-questionnaire/',
    repoUrl: 'https://github.com/onbuyuka/tr-poli-questionnaire',
    emoji: '🗳️',
  },
];
