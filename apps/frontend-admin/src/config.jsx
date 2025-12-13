const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? "https://caasi-production.up.railway.app/api"
  : "http://localhost:8000/api";

export const API_ENDPOINTS = {
    projects: `${API_BASE_URL}/projects`,
    experiences: `${API_BASE_URL}/experiences`,
    posts: `${API_BASE_URL}/posts`,
    post: (id) => `${API_BASE_URL}/posts/${id}`,
};

export const AUTH_ENDPOINTS = {
    login: process.env.NODE_ENV === 'production' 
        ? "https://caasi-production.up.railway.app/auth/login"
        : "http://localhost:8000/auth/login",
};
