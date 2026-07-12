import { useEffect } from 'react';

const DURATION = 950; // ms
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/**
 * Intercepts in-page anchor clicks and animates the scroll with easing, so
 * navigating between sections glides instead of jump-cutting. Honors
 * prefers-reduced-motion by falling back to an instant jump.
 */
export function useSmoothScroll(): void {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;

    const scrollTo = (targetY: number) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / DURATION);
        window.scrollTo(0, startY + distance * easeInOutCubic(t));
        if (t < 1) raf = requestAnimationFrame(step);
      };
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(step);
    };

    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const id = link.getAttribute('href')!.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (id && !target) return;

      e.preventDefault();
      const targetY = target ? target.getBoundingClientRect().top + window.scrollY : 0;

      if (reduced) {
        window.scrollTo(0, targetY);
      } else {
        scrollTo(targetY);
      }
      history.pushState(null, '', id ? `#${id}` : location.pathname);
    };

    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      cancelAnimationFrame(raf);
    };
  }, []);
}
