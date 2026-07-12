import React, { useEffect, useRef, useState, type ElementType } from 'react';

/**
 * Fades + slides its children in the first time they scroll into view.
 * Respects prefers-reduced-motion via the .reveal CSS in index.html.
 */
export const Reveal: React.FC<{
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
  /** Delay in ms before the reveal transition starts. */
  delay?: number;
}> = ({ children, as: Tag = 'div', className = '', delay = 0 }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};
