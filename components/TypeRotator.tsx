import React, { useEffect, useState } from 'react';

const TYPING = 70;
const DELETING = 35;
const HOLD = 1400;

/** Types each word out, holds, deletes, moves to the next — with a blinking caret. */
export const TypeRotator: React.FC<{ words: string[] }> = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[index]);
      return;
    }
    const current = words[index];
    let delay = deleting ? DELETING : TYPING;

    if (!deleting && text === current) {
      delay = HOLD;
      const t = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(t);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <span className="text-brand-rose">
      {text}
      <span className="ml-0.5 inline-block w-2 animate-pulse text-brand-amber">▍</span>
    </span>
  );
};
