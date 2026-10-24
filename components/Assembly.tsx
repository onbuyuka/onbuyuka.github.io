import { useId, useState, type CSSProperties } from 'react';

const parts = [
  { id: 'left', path: 'M80 106H180Q204 106 204 130V170H164V240H204V280Q204 304 180 304H80Q54 304 54 280V130Q54 106 80 106Z', fill: 'face', offset: [-44, -12] },
  { id: 'right', path: 'M300 132H400Q426 132 426 158V304Q426 330 400 330H300Q276 330 276 304V240H316V170H276V158Q276 132 300 132Z', fill: 'face', offset: [44, 12] },
  { id: 'connector', path: 'M168 172H312Q316 172 316 176V234Q316 238 312 238H168Q164 238 164 234V176Q164 172 168 172Z', fill: 'connector-fill', offset: [0, -42] },
] as const;

type PartStyle = CSSProperties & {
  '--enter-x': string;
  '--enter-y': string;
  '--hover-x': string;
  '--hover-y': string;
};

export function Assembly() {
  const [separated, setSeparated] = useState(false);
  const id = useId();

  return (
    <button
      type="button"
      className="ct-assembly"
      data-separated={separated}
      aria-pressed={separated}
      aria-label={separated ? 'Reassemble the connecting pieces' : 'Separate the connecting pieces'}
      onClick={() => setSeparated((current) => !current)}
    >
      <svg className="ct-assembly-art" viewBox="0 0 480 420" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-face`} gradientUnits="userSpaceOnUse" x1="70" y1="70" x2="400" y2="350">
            <stop offset="0" stopColor="#5678ff" />
            <stop offset=".55" stopColor="#2b53eb" />
            <stop offset="1" stopColor="#193dcd" />
          </linearGradient>
          <linearGradient id={`${id}-connector-fill`} x1="0" y1="0" x2="1" y2=".8">
            <stop offset="0" stopColor="#6a88ff" />
            <stop offset="1" stopColor="#244ce8" />
          </linearGradient>
          <filter id={`${id}-shadow`} x="-40%" y="-40%" width="180%" height="190%">
            <feDropShadow dx="0" dy="14" stdDeviation="9" floodColor="#182651" floodOpacity=".14" />
          </filter>
          {parts.map((part) => <path key={part.id} id={`${id}-${part.id}`} d={part.path} />)}
        </defs>
        <g className="ct-registration" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M24 63h16m-8-8v16M440 63h16m-8-8v16M24 357h16m-8-8v16M440 357h16m-8-8v16" />
          <path d="M32 335h416M240 45v329" strokeDasharray="3 7" />
          <path d="M48 118v-12h70M401 345h21v-34M240 118v46" />
        </g>
        <g filter={`url(#${id}-shadow)`}>
          {parts.map((part) => {
            const style: PartStyle = {
              '--enter-x': `${part.offset[0]}px`,
              '--enter-y': `${part.offset[1]}px`,
              '--hover-x': `${part.offset[0] * .14}px`,
              '--hover-y': `${part.offset[1] * .14}px`,
            };
            return (
              <g className="ct-part" style={style} key={part.id}>
                <use href={`#${id}-${part.id}`} fill="#1738b3" transform="translate(0 7)" />
                <use href={`#${id}-${part.id}`} fill={`url(#${id}-${part.fill})`} />
              </g>
            );
          })}
        </g>
        <g className="ct-drawing-label" fill="currentColor">
          <text x="48" y="82">01</text>
          <text x="250" y="112">02</text>
          <text x="430" y="118">03</text>
          <text x="32" y="387">FIG. 01 / THE ASSEMBLY</text>
        </g>
      </svg>
      <span className="ct-assembly-control ct-mono">
        <span className="ct-assembly-control-icon" aria-hidden="true">{separated ? '\u2212' : '+'}</span>
        <span>{separated ? 'Bring it together' : 'Take it apart'}</span>
      </span>
    </button>
  );
}
