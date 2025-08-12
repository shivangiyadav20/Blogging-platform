import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getProfile: () => api.get('/auth/me'),
  updateProfile: (userData) => api.put('/auth/profile', userData),
};

// Posts API
export const postsAPI = {
  getPosts: (params) => api.get('/posts', { params }),
  getPost: (id) => api.get(`/posts/${id}`),
  createPost: (postData) => api.post('/posts', postData),
  updatePost: (id, postData) => api.put(`/posts/${id}`, postData),
  deletePost: (id) => api.delete(`/posts/${id}`),
  likePost: (id) => api.post(`/posts/${id}/like`),
  getCategories: () => api.get('/posts/categories/stats'),
};

// Comments API
export const commentsAPI = {
  getComments: (postId) => api.get(`/comments/post/${postId}`),
  createComment: (commentData) => api.post('/comments', commentData),
  likeComment: (id) => api.post(`/comments/${id}/like`),
  deleteComment: (id) => api.delete(`/comments/${id}`),
};

// Users API
export const usersAPI = {
  getUser: (id) => api.get(`/users/${id}`),
  getUserPosts: (id, params) => api.get(`/users/${id}/posts`, { params }),
  followUser: (id) => api.post(`/users/${id}/follow`),
  getUsers: (params) => api.get('/users', { params }),
};

// Contact API
export const contactAPI = {
  sendMessage: (messageData) => api.post('/contact', messageData),
};

export default api;