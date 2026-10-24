export interface Project {
  title: string;
  tagline: string;
  liveUrl?: string;
  repoUrl: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
}

export interface FeaturedProject extends Project {
  description: string;
  liveUrl: string;
  screenshots: readonly [ProjectScreenshot, ProjectScreenshot, ProjectScreenshot];
  evidence: string[];
}
