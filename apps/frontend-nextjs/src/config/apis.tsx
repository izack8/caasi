export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? "https://caasi-production.up.railway.app/api"
  : "http://127.0.0.1:8000/api";

export const API_ENDPOINTS = {
    projects: `${API_BASE_URL}/projects`,
    project: (slug: string) => `${API_BASE_URL}/projects/${slug}`,
    experiences: `${API_BASE_URL}/experiences`,
    experience: (slug: string) => `${API_BASE_URL}/experiences/${slug}`,
    posts: `${API_BASE_URL}/posts`,
    post: (id: string) => `${API_BASE_URL}/posts/${id}`,
};