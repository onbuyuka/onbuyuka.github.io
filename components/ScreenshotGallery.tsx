import { useEffect, useRef, useState } from 'react';
import type { FeaturedProject, ProjectScreenshot } from '../types';

function BrowserFrame({ title, screenshot }: { title: string; screenshot: ProjectScreenshot }) {
  return (
    <>
      <div className="ct-gallery-bar">
        <span className="ct-gallery-dots" aria-hidden="true"><span /><span /><span /></span>
        <span className="ct-gallery-title">{title}</span>
      </div>
      <div className="ct-gallery-image">
        <img key={screenshot.src} src={`${import.meta.env.BASE_URL}${screenshot.src}`} alt={screenshot.alt} />
      </div>
    </>
  );
}

export function ScreenshotGallery({ title, screenshots }: { title: string; screenshots: FeaturedProject['screenshots'] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const active = screenshots[activeIndex];
  const showPrevious = () => setActiveIndex((current) => (current - 1 + screenshots.length) % screenshots.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % screenshots.length);
  const closeExpanded = () => {
    setExpanded(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  };

  useEffect(() => {
    if (!expanded) return;
    const dialog = dialogRef.current;
    const close = closeRef.current;
    if (!dialog || !close) throw new Error('The screenshot gallery dialog is missing its controls.');
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    close.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      // Native dialogs can tab into browser chrome; keep gallery navigation cyclic.
      if (event.key === 'Tab') {
        const buttons = dialog.querySelectorAll<HTMLButtonElement>('button');
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        showPrevious();
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        showNext();
      }
    };
    dialog.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      dialog.removeEventListener('keydown', handleKeyDown);
      dialog.close();
    };
  }, [expanded]);

  return (
    <>
      <div className="ct-gallery">
        <button
          ref={triggerRef}
          type="button"
          className="ct-gallery-window"
          onClick={() => setExpanded(true)}
          aria-haspopup="dialog"
          aria-label={`Open ${title} screenshot gallery`}
        >
          <BrowserFrame title={title} screenshot={active} />
        </button>
        <button type="button" className="ct-gallery-arrow ct-gallery-previous" onClick={showPrevious} aria-label={`Previous ${title} screenshot`}>
          <span aria-hidden="true">&#8249;</span>
        </button>
        <button type="button" className="ct-gallery-arrow ct-gallery-next" onClick={showNext} aria-label={`Next ${title} screenshot`}>
          <span aria-hidden="true">&#8250;</span>
        </button>
        <span className="ct-gallery-counter" aria-live="polite">{activeIndex + 1} / {screenshots.length}</span>
      </div>

      {expanded && (
        <dialog
          ref={dialogRef}
          className="ct-gallery-modal"
          aria-modal="true"
          aria-label={`${title} screenshot gallery`}
          onCancel={(event) => { event.preventDefault(); closeExpanded(); }}
          onMouseDown={(event) => { if (event.target === event.currentTarget) closeExpanded(); }}
        >
          <div className="ct-gallery-modal-frame">
            <div className="ct-gallery-window ct-gallery-window-expanded">
              <BrowserFrame title={title} screenshot={active} />
            </div>
            <button type="button" className="ct-gallery-arrow ct-gallery-previous" onClick={showPrevious} aria-label={`Previous ${title} screenshot`}>
              <span aria-hidden="true">&#8249;</span>
            </button>
            <button type="button" className="ct-gallery-arrow ct-gallery-next" onClick={showNext} aria-label={`Next ${title} screenshot`}>
              <span aria-hidden="true">&#8250;</span>
            </button>
            <div className="ct-gallery-info">
              <span aria-live="polite">{activeIndex + 1} / {screenshots.length}</span>
              <span className="ct-gallery-hint">&#8592; &#8594; navigate &middot; esc close</span>
            </div>
          </div>
          <button ref={closeRef} type="button" className="ct-gallery-close" onClick={closeExpanded}>close</button>
        </dialog>
      )}
    </>
  );
}
