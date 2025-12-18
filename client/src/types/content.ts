// Image declaration
declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.jpeg" {
  const value: string;
  export default value;
}
declare module "*.svg" {
  const value: string;
  export default value;
}

// Data types
export interface HeroContent {
  name: string;
  role: string;
  headline: string;
  description: string;
  avatar: string;
  resume?: string;
  primaryAction: string;
  secondaryAction: string;
}

export interface AboutContent {
  title: string;
  bio: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface ProjectItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  video?: string;
  tags?: string[];
  content?: string;
}

export interface ReferenceItem {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

export interface ContactContent {
  email: string;
  socials: {
    name: string;
    link: string;
  }[];
}

export interface ContentData {
  hero: HeroContent;
  about: AboutContent;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  references?: ReferenceItem[];
  contact: ContactContent;
}
