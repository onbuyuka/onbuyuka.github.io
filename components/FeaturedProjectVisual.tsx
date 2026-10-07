import React from 'react';
import type { FeaturedProject } from '../types';

const WorldCupVisual = () => (
  <div className="absolute inset-0 overflow-hidden bg-[#091019] p-5 sm:p-7">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 font-display text-sm font-bold text-white">
        <span aria-hidden="true">🏆</span>
        <span>WC<span className="text-emerald-400">26</span></span>
      </div>
      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] text-emerald-300">
        live data ready
      </span>
    </div>
    <div className="mt-5 grid grid-cols-3 gap-2">
      {[
        ['48', 'teams'],
        ['495', 'rule combinations'],
        ['104', 'fixtures'],
      ].map(([value, label]) => (
        <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
          <p className="font-display text-xl font-bold text-white sm:text-2xl">{value}</p>
          <p className="mt-0.5 font-mono text-[8px] leading-tight text-slate-500 sm:text-[9px]">{label}</p>
        </div>
      ))}
    </div>
    <div className="mt-4 grid grid-cols-[1.25fr_0.75fr] gap-3">
      <div className="rounded-xl border border-white/10 bg-[#111922] p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-display text-xs font-bold text-white">Group A</span>
          <span className="font-mono text-[8px] text-slate-600">drag to reorder</span>
        </div>
        {[
          ['🇲🇽', 'Mexico', 'W W W'],
          ['🇨🇦', 'Canada', 'D W D'],
          ['🇰🇷', 'South Korea', 'W L W'],
          ['🇨🇭', 'Switzerland', 'D D W'],
        ].map(([flag, team, form], index) => (
          <div key={team} className="mb-1 flex items-center gap-2 rounded-md bg-white/[0.04] px-2 py-1.5 last:mb-0">
            <span className="font-mono text-[9px] text-slate-600">{index + 1}</span>
            <span className="text-xs">{flag}</span>
            <span className="min-w-0 flex-1 truncate text-[10px] font-semibold text-slate-200">{team}</span>
            <span className="font-mono text-[8px] text-emerald-400">{form}</span>
          </div>
        ))}
      </div>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111922] p-3">
        <p className="font-mono text-[8px] text-slate-500">knockout path</p>
        <div className="mt-3 space-y-4">
          {['Round of 32', 'Quarter-final', 'Champion'].map((round, index) => (
            <div key={round} className={`rounded-md border px-2 py-1.5 text-[9px] ${
              index === 2
                ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300'
                : 'border-white/10 bg-white/[0.04] text-slate-300'
            }`}>
              {round}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const WhatsAppVisual = () => (
  <div className="absolute inset-0 overflow-hidden bg-[#0b1113] p-5 sm:p-7">
    <div className="mx-auto flex h-full max-w-sm flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#11181b] shadow-2xl shadow-black/50">
      <div className="flex items-center gap-3 border-b border-white/10 bg-[#20292d] px-4 py-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-500 text-xs font-bold text-white">AI</span>
        <div>
          <p className="text-xs font-semibold text-white">Grounded agent</p>
          <p className="text-[9px] text-emerald-400">online · private relay</p>
        </div>
        <span className="ml-auto text-xs tracking-widest text-slate-500">•••</span>
      </div>
      <div className="flex-1 space-y-2.5 bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:16px_16px] p-3">
        <p className="mx-auto w-fit rounded bg-white/5 px-2 py-1 font-mono text-[8px] text-slate-500">TODAY</p>
        <div className="ml-auto max-w-[82%] rounded-lg rounded-tr-sm bg-emerald-900 px-3 py-2 text-[10px] leading-relaxed text-slate-100">
          Find the latest Business Central MCP documentation.
        </div>
        <div className="max-w-[88%] rounded-lg rounded-tl-sm bg-[#20292d] px-3 py-2 text-[10px] leading-relaxed text-slate-200">
          I found Microsoft&apos;s current overview and configuration guide.
          <div className="mt-2 border-l-2 border-emerald-400 bg-black/20 px-2 py-1.5 text-[9px] text-slate-400">
            learn.microsoft.com · grounded result
          </div>
        </div>
      </div>
      <div className="m-3 flex items-center rounded-full bg-[#20292d] px-3 py-2 text-[9px] text-slate-500">
        Message grounded agent
        <span className="ml-auto grid h-6 w-6 place-items-center rounded-full bg-emerald-500 text-[10px] text-white">➤</span>
      </div>
    </div>
  </div>
);

const RadioVisual = () => (
  <div className="absolute inset-0 overflow-hidden bg-[#130f1c] p-5 sm:p-7">
    <div className="flex h-full flex-col rounded-2xl border border-violet-400/20 bg-gradient-to-br from-[#221a30] to-[#100d17] p-5 shadow-2xl shadow-black/50">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display text-base font-bold text-white">RadioDJ</p>
          <p className="font-mono text-[9px] text-violet-300">YOUR PERSONAL STATION</p>
        </div>
        <span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-2.5 py-1 font-mono text-[9px] text-violet-200">ON AIR</span>
      </div>
      <div className="my-auto flex items-center gap-4">
        <div className="grid h-20 w-20 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-rose to-brand-violet text-3xl shadow-lg shadow-brand-violet/20">♫</div>
        <div className="min-w-0">
          <p className="font-mono text-[9px] uppercase tracking-wider text-slate-500">now playing</p>
          <p className="mt-1 truncate font-display text-lg font-bold text-white">Late Night Drive</p>
          <p className="text-xs text-slate-400">Your Spotify playlist</p>
          <div className="mt-3 flex h-6 items-end gap-1">
            {[45, 80, 55, 95, 65, 35, 75, 50, 90, 60, 40, 70].map((height, index) => (
              <span
                key={index}
                className="w-1 rounded-full bg-violet-400/70"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
        <p className="font-mono text-[8px] uppercase tracking-wider text-brand-amber">up next · DJ segment</p>
        <p className="mt-1 text-[10px] leading-relaxed text-slate-300">
          Headlines, weather and context about the track—generated between songs.
        </p>
      </div>
    </div>
  </div>
);

export const FeaturedProjectVisual: React.FC<{ visual: FeaturedProject['visual'] }> = ({ visual }) => {
  if (visual === 'world-cup') return <WorldCupVisual />;
  if (visual === 'whatsapp') return <WhatsAppVisual />;
  return <RadioVisual />;
};
