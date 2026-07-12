import React from 'react';

/** Monospace “// section” eyebrow label used above each section heading. */
export const Eyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <p className={`font-mono text-xs font-medium tracking-wider text-brand-rose ${className}`}>
    <span className="text-slate-600">{'// '}</span>
    {children}
  </p>
);
