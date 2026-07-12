import React, { useEffect, useRef } from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon, DocumentIcon, ArrowDownIcon } from './Icons';
import { TypeRotator } from './TypeRotator';

const RESUME_URL = `${import.meta.env.BASE_URL}Onat_Buyukakkus_resume.pdf`;

export const Hero: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Cursor-follow glow — subtle, hero only.
  useEffect(() => {
    const el = spotlightRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const section = el.parentElement;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--x', `${e.clientX - r.left}px`);
      el.style.setProperty('--y', `${e.clientY - r.top}px`);
    };
    section?.addEventListener('mousemove', onMove);
    return () => section?.removeEventListener('mousemove', onMove);
  }, []);

  // Parallax: the aurora drifts slower and the content lifts + fades as you
  // scroll into the next section, so the page "flows" instead of jump-cutting.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (bgRef.current) bgRef.current.style.transform = `translateY(${y * 0.35}px)`;
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${y * 0.18}px)`;
          contentRef.current.style.opacity = String(Math.max(0, 1 - y / 520));
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
      {/* Drifting aurora */}
      <div ref={bgRef} className="pointer-events-none absolute inset-0 -z-10 will-change-transform">
        <div className="animate-aurora-slow absolute left-[8%] top-[6%] h-[34rem] w-[34rem] rounded-full bg-brand-violet/20 blur-[120px]" />
        <div className="animate-aurora-slower absolute right-[4%] top-[24%] h-[30rem] w-[30rem] rounded-full bg-brand-rose/20 blur-[120px]" />
        <div className="animate-aurora-slow absolute bottom-[-8%] left-[34%] h-[26rem] w-[26rem] rounded-full bg-brand-amber/10 blur-[120px]" />
      </div>

      {/* Cursor spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(340px circle at var(--x, 50%) var(--y, 30%), rgba(251,113,133,0.10), transparent 70%)',
        }}
      />

      <div ref={contentRef} className="mx-auto w-full max-w-5xl will-change-transform">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs font-medium text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-rose opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-rose" />
          </span>
          senior software engineer @ microsoft
        </p>

        <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
          Onat
          <br />
          <span className="animate-gradient-pan bg-gradient-to-r from-brand-amber via-brand-rose to-brand-violet bg-[length:200%_auto] bg-clip-text text-transparent">
            Buyukakkus
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
          Software engineer with 7+ years building enterprise-grade integrations, API
          ecosystems and ERP platforms — lately focused on connecting business
          applications for the AI era. Off the clock, I build small web apps nobody
          asked for.
        </p>

        <div className="mt-5 font-mono text-sm text-slate-500">
          <span className="text-slate-600">{'> '}</span>
          currently into <TypeRotator
            words={['application integration', 'API ecosystems', 'ERP platforms', 'the AI era', 'small web apps']}
          />
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-rose to-brand-violet px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-rose/20 transition-transform hover:scale-[1.03]"
          >
            <DocumentIcon className="h-4 w-4" />
            Résumé
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5 text-slate-400">
          <a href="https://github.com/onbuyuka" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-white">
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/onat-buyukakkus-1b3b54a4" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-white">
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a href="mailto:onatbuyukakkus@gmail.com" aria-label="Email" className="transition-colors hover:text-white">
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-slate-300"
      >
        <ArrowDownIcon className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
};
