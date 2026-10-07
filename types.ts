export interface Project {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  emoji: string;
}

export interface FeaturedProject extends Project {
  visual: 'world-cup' | 'whatsapp' | 'radio';
  screenshots?: {
    src: string;
    alt: string;
  }[];
  evidence: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
