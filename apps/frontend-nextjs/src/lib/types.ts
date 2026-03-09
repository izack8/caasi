// API Response Types

import { Url } from "next/dist/shared/lib/router/router";
import { UrlObject } from "url";

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
    blog_post: string;
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

export interface CompanyProject {
  project_name: string;
  project_about: string;
  what: string;
  why: string;
  who: string;
}

export interface Experience {
  id: string;
  slug: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  location: string;
  tags: string[];
  link: string;
  timeline: Timeline[];
  projects?: CompanyProject[];
}

// API Error Types
export interface ApiError {
  message: string;
  status?: number;
}

// Cache utility types
export type CacheKey = 'cachedPosts' | 'cachedProjects' | 'cachedExperiences' | `lastVisitedPost_${string}` | `lastVisitedProject_${string}`;
