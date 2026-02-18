// API Response Types

export interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  content: string;
  type: string;
  tags?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  year: string | number;
  what_i_learnt: string;
  technologies: Technology[];
  url: {
    live: string;
    github: string;
  };
  www: {
    what: string;
    why: string;
    who: string;
  };
  timeline: Timeline[];
}

export interface Technology {
  name: string;
  icon?: string;
}

export interface Timeline {
  timeline_date: string;
  timeline_description: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  location: string;
  tags: string[];
  link?: string;
}

// API Error Types
export interface ApiError {
  message: string;
  status?: number;
}

// Cache utility types
export type CacheKey = 'cachedPosts' | 'cachedProjects' | 'cachedExperiences' | `lastVisitedPost_${string}` | `lastVisitedProject_${string}`;
