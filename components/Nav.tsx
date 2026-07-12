import React, { useEffect, useState } from 'react';
import type { NavLink } from '../types';

const links: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-white/5 bg-ink-950/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          aria-label="Back to top"
          className="flex items-center font-mono text-lg font-semibold transition-transform duration-300 hover:scale-105"
        >
          <span className="text-slate-600">//</span>
          <span className="ml-1 animate-gradient-pan bg-gradient-to-r from-brand-amber via-brand-rose to-brand-violet bg-[length:200%_auto] bg-clip-text text-transparent">
            ob
          </span>
        </a>
        <ul className="flex items-center gap-6 text-sm text-slate-400">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
