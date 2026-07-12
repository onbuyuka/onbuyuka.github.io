export interface Project {
  /** Short title shown on the card. */
  title: string;
  /** One-line hook. */
  tagline: string;
  /** Two-to-three sentence description. */
  description: string;
  /** Tech stack / topic tags. */
  tags: string[];
  /** Public live URL, if the project is deployed. */
  liveUrl?: string;
  /** Source repository URL. */
  repoUrl?: string;
  /** Emoji used as the card glyph. */
  emoji: string;
}

export interface NavLink {
  label: string;
  href: string;
}
