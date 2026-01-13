export interface Link {
  label: string;
  url: string;
  type: 'github' | 'external' | 'paper' | 'linkedin' | 'email';
}

export interface TechStack {
  category: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface Education {
  degree: string;
  university: string;
  location: string;
  period: string;
  grade: string;
  thesis?: string;
  coursework?: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  impact?: string; // Highlighting quantitative results
  tags: string[];
  links: Link[];
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  description: string;
  stats?: string[]; // e.g. "50+ Citations"
  link?: string;
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  description: string;
}