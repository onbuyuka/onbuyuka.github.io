import React, { useEffect, useRef, useState } from 'react';
import type { FeaturedProject } from '../types';

type Screenshot = NonNullable<FeaturedProject['screenshots']>[number];

const BrowserFrame: React.FC<{
  title: string;
  screenshot: Screenshot;
  large?: boolean;
  onOpen?: () => void;
  triggerRef?: React.RefObject<HTMLButtonElement | null>;
}> = ({ title, screenshot, large = false, onOpen, triggerRef }) => {
  const content = (
    <>
      <div className={`flex items-center gap-1.5 border-b border-white/10 bg-white/[0.05] px-3 ${large ? 'h-9' : 'h-7'}`}>
        <span className="h-2 w-2 rounded-full bg-brand-rose/70" />
        <span className="h-2 w-2 rounded-full bg-brand-amber/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        <span className={`ml-2 truncate font-mono text-slate-600 ${large ? 'text-[10px]' : 'text-[8px]'}`}>
          {title}
        </span>
      </div>
      <div className="aspect-[16/10] bg-black/40">
        <img
          key={screenshot.src}
          src={`${import.meta.env.BASE_URL}${screenshot.src}`}
          alt={screenshot.alt}
          className="h-full w-full object-contain"
        />
      </div>
    </>
  );

  const className = `overflow-hidden rounded-lg border border-white/15 bg-[#080b10] shadow-2xl shadow-black/60 ${
    onOpen ? 'cursor-zoom-in transition-colors hover:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white' : ''
  }`;

  if (onOpen) {
    return (
      <button
        ref={triggerRef}
        type="button"
        onClick={onOpen}
        aria-label={`Open ${title} screenshot gallery`}
        className={`${className} w-[82%] text-left lg:w-[86%]`}
      >
        {content}
      </button>
    );
  }

  return <div className={`${className} w-full`}>{content}</div>;
};

export const ProjectScreenshotGallery: React.FC<{
  title: string;
  screenshots: NonNullable<FeaturedProject['screenshots']>;
}> = ({ title, screenshots }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const active = screenshots[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + screenshots.length) % screenshots.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % screenshots.length);
  };

  const closeExpanded = () => {
    setExpanded(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  };

  useEffect(() => {
    if (!expanded) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeExpanded();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [expanded]);

  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.045),transparent_68%)] bg-ink-950">
        <BrowserFrame
          title={title}
          screenshot={active}
          onOpen={() => setExpanded(true)}
          triggerRef={triggerRef}
        />

        {screenshots.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label={`Previous ${title} screenshot`}
              className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink-950/80 text-2xl leading-none text-white shadow-lg backdrop-blur transition-colors hover:bg-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label={`Next ${title} screenshot`}
              className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink-950/80 text-2xl leading-none text-white shadow-lg backdrop-blur transition-colors hover:bg-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span aria-hidden="true">›</span>
            </button>
            <span
              className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-ink-950/80 px-2.5 py-1 font-mono text-[10px] text-slate-300 backdrop-blur"
              aria-live="polite"
            >
              {activeIndex + 1} / {screenshots.length}
            </span>
          </>
        )}
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot gallery`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeExpanded();
          }}
        >
          <div
            className="relative w-full"
            style={{ maxWidth: 'min(92vw, calc(75vh * 1.6))' }}
          >
            <BrowserFrame title={title} screenshot={active} large />

            {screenshots.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label={`Previous ${title} screenshot`}
                  className="absolute left-2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink-950/90 text-3xl leading-none text-white shadow-lg backdrop-blur transition-colors hover:bg-ink-800 sm:left-0"
                >
                  <span aria-hidden="true">‹</span>
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label={`Next ${title} screenshot`}
                  className="absolute right-2 top-1/2 grid h-11 w-11 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink-950/90 text-3xl leading-none text-white shadow-lg backdrop-blur transition-colors hover:bg-ink-800 sm:right-0"
                >
                  <span aria-hidden="true">›</span>
                </button>
              </>
            )}

            <div className="mt-4 flex items-center justify-between">
              <span className="font-mono text-xs text-slate-500">
                {activeIndex + 1} / {screenshots.length}
              </span>
              <span className="font-mono text-[10px] text-slate-600">
                ← → navigate · esc close
              </span>
            </div>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={closeExpanded}
            className="absolute right-4 top-4 rounded-lg border border-white/15 bg-white/5 px-3 py-2 font-mono text-xs text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6 sm:top-6"
          >
            close
          </button>
        </div>
      )}
    </>
  );
};
