import { cache } from 'react';
import { API_ENDPOINTS } from '@/app/config';
import type { Post, Project, Experience, ApiError } from './types';

/**
 * Cache utility for session storage
 */
class CacheManager {
  static get<T>(key: string): T | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const cached = sessionStorage.getItem(key);
      return cached ? JSON.parse(cached) : null;
    } catch (error) {
      console.error(`Error reading cache for key ${key}:`, error);
      return null;
    }
  }

  static set<T>(key: string, data: T): void {
    if (typeof window === 'undefined') return;
    
    try {
      sessionStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`Error setting cache for key ${key}:`, error);
    }
  }

  static remove(key: string): void {
    if (typeof window === 'undefined') return;
    sessionStorage.removeItem(key);
  }

  static clear(): void {
    if (typeof window === 'undefined') return;
    sessionStorage.clear();
  }
}

/**
 * API Client for fetching portfolio data
 */
class ApiClient {
  /**
   * Generic fetch wrapper with error handling
   */
  private async fetchData<T>(url: string): Promise<T> {
    try {
      const res = await fetch(url, {
        cache: 'force-cache', // Use HTTP cache first
        next: { 
          revalidate: 3600, // Revalidate every hour
          tags: ['api-data'] 
        }
      });
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      return data;
    } catch (error) {
      const apiError: ApiError = {
        message: error instanceof Error ? error.message : 'An unknown error occurred',
        status: error instanceof Response ? error.status : undefined
      };
      throw apiError;
    }
  }

  async getPosts(useCache: boolean = true): Promise<Post[]> {
    const cacheKey = 'cachedPosts';
    
    if (useCache) {
      const cached = CacheManager.get<Post[]>(cacheKey);
      if (cached) return cached;
    }

    const posts = await this.fetchData<Post[]>(API_ENDPOINTS.posts);
    
    // Sort by date (most recent first)
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    CacheManager.set(cacheKey, posts);
    return posts;
  }


  async getPost(id: string): Promise<Post> {
    const cacheKey = "cachedPosts";

    const cachedPosts = CacheManager.get<Post[]>(cacheKey);
    if (cachedPosts) {
      const post = cachedPosts.find(p => p.id === id);
      if (post) return post;
    }

    const post = await this.fetchData<Post>(API_ENDPOINTS.post(id));
    CacheManager.set(cacheKey, [...(cachedPosts || []), post]);
    return post;
  }

  /**
   * Fetch all projects with optional caching
   */
  async getProjects(): Promise<Project[]> {
    
    const cacheKey = 'cachedProjects';
    const cached = CacheManager.get<Project[]>(cacheKey);

    if (cached) {return cached;}

    const projects = await this.fetchData<Project[]>(API_ENDPOINTS.projects);
    
    // Sort by year (most recent first)
    projects.sort((a, b) => {
      const yearA = parseInt(String(a.year).split(' ')[0]) || 0;
      const yearB = parseInt(String(b.year).split(' ')[0]) || 0;
      return yearB - yearA;
    });
    
    CacheManager.set(cacheKey, projects);
    return projects;
  }


  async getProject(slug: string): Promise<Project> {

      const cachedProjects = CacheManager.get<Project[]>('cachedProjects');
      if (cachedProjects) {
        const project = cachedProjects.find(p => p.slug === slug);
        if (project) return project;
      }

    const project = await this.fetchData<Project>(API_ENDPOINTS.project(slug));
    return project;
  }
  

  async getExperiences(): Promise<Experience[]> {
    const cacheKey = 'cachedExperiences';
    
    const cached = CacheManager.get<Experience[]>(cacheKey);
    if (cached) return cached;
    

    const experiences = await this.fetchData<Experience[]>(API_ENDPOINTS.experiences);
    
    // Sort by start date (most recent first)
    experiences.sort((a, b) => {
      const parseDate = (duration: string) => {
        const startDateStr = duration.split(' - ')[0].trim();
        const [month, year] = startDateStr.split(' '); 
        const monthMap: { [key: string]: number } = {
          Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
          Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
        };
        return new Date(parseInt(year), monthMap[month]);
      };

      const aDate = parseDate(a.duration);
      const bDate = parseDate(b.duration);

      return bDate.getTime() - aDate.getTime();
    });
    
    CacheManager.set(cacheKey, experiences);
    return experiences;
  }

  /**
   * Clear all cached data
   */
  clearCache(): void {
    CacheManager.clear();
  }

  /**
   * Clear specific cache entry
   */
  clearCacheEntry(key: string): void {
    CacheManager.remove(key);
  }
}

// Export singleton instance
export const api = new ApiClient();

// Wrap API methods with React cache for server-side deduplication
export const getCachedProjects = cache(async () => {
  return api.getProjects(); 
});
export const getCachedProject = cache(async (slug: string) => {
  return api.getProject(slug); 
});

export const getCachedPosts = cache(async () => {
  return api.getPosts(); 
});

export const getCachedPost = cache(async (id: string) => {
  return api.getPost(id); 
});

export const getCachedExperiences = cache(async () => {
  return api.getExperiences(); 
});


export { CacheManager };
