import { useState, useEffect } from 'react';
import { BlogPost, Comment, User } from '../types';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEYS = {
  POSTS: 'blogPosts',
  COMMENTS: 'blogComments',
  USERS: 'mockUsers',
};

// Initialize with sample data
const initializeSampleData = () => {
  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    const sampleUsers: (User & { password: string })[] = [
      {
        id: 'admin-1',
        username: 'admin',
        email: 'admin@bloghub.com',
        fullName: 'Admin User',
        bio: 'Platform administrator',
        isAdmin: true,
        joinedAt: '2024-01-01T00:00:00.000Z',
        password: 'admin123',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      {
        id: 'user-1',
        username: 'johndoe',
        email: 'john@example.com',
        fullName: 'John Doe',
        bio: 'Tech enthusiast and blogger',
        isAdmin: false,
        joinedAt: '2024-01-15T00:00:00.000Z',
        password: 'user123',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      {
        id: 'user-2',
        username: 'janesmith',
        email: 'jane@example.com',
        fullName: 'Jane Smith',
        bio: 'Creative writer and designer',
        isAdmin: false,
        joinedAt: '2024-02-01T00:00:00.000Z',
        password: 'user123',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(sampleUsers));
  }

  if (!localStorage.getItem(STORAGE_KEYS.POSTS)) {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
    const samplePosts: BlogPost[] = [
      {
        id: 'post-1',
        title: 'Getting Started with React and TypeScript',
        content: `<p>React and TypeScript make a powerful combination for building modern web applications. In this comprehensive guide, we'll explore how to set up a React project with TypeScript and leverage the benefits of static typing.</p>

<h2>Why Use TypeScript with React?</h2>
<p>TypeScript brings several advantages to React development:</p>
<ul>
<li>Static type checking catches errors at compile time</li>
<li>Better IDE support with autocomplete and refactoring</li>
<li>Improved code documentation and maintainability</li>
<li>Enhanced team collaboration through clear interfaces</li>
</ul>

<h2>Setting Up Your Project</h2>
<p>To create a new React TypeScript project, you can use Vite or Create React App:</p>
<pre><code>npm create vite@latest my-app -- --template react-ts</code></pre>

<p>This command creates a new project with all the necessary TypeScript configurations and dependencies.</p>`,
        excerpt: 'Learn how to combine React with TypeScript for better development experience and type safety.',
        author: users[1],
        category: 'Programming',
        tags: ['React', 'TypeScript', 'Frontend'],
        coverImage: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
        publishedAt: '2024-03-01T10:00:00.000Z',
        updatedAt: '2024-03-01T10:00:00.000Z',
        likes: ['user-2', 'admin-1'],
        views: 234,
        status: 'published'
      },
      {
        id: 'post-2',
        title: 'Modern CSS Techniques for Beautiful Web Design',
        content: `<p>CSS has evolved significantly over the years, offering powerful new features that make creating beautiful, responsive designs easier than ever. Let's explore some modern CSS techniques that every web developer should know.</p>

<h2>CSS Grid and Flexbox</h2>
<p>These layout systems have revolutionized how we approach web layouts:</p>
<ul>
<li><strong>Flexbox</strong>: Perfect for one-dimensional layouts</li>
<li><strong>CSS Grid</strong>: Ideal for two-dimensional layouts</li>
</ul>

<h2>CSS Custom Properties</h2>
<p>CSS variables make theming and maintenance much easier:</p>
<pre><code>:root {
  --primary-color: #6366f1;
  --secondary-color: #4f46e5;
}

.button {
  background-color: var(--primary-color);
}</code></pre>

<h2>Advanced Selectors</h2>
<p>Modern CSS selectors provide powerful ways to target elements without cluttering your HTML with classes.</p>`,
        excerpt: 'Discover modern CSS techniques including Grid, Flexbox, and custom properties for creating stunning web designs.',
        author: users[2],
        category: 'Design',
        tags: ['CSS', 'Web Design', 'Frontend'],
        coverImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
        publishedAt: '2024-03-05T14:30:00.000Z',
        updatedAt: '2024-03-05T14:30:00.000Z',
        likes: ['user-1'],
        views: 189,
        status: 'published'
      },
      {
        id: 'post-3',
        title: 'Building Scalable Backend APIs with Node.js',
        content: `<p>Building scalable and maintainable backend APIs is crucial for modern web applications. In this guide, we'll explore best practices for creating robust APIs using Node.js and Express.</p>

<h2>API Design Principles</h2>
<p>Good API design follows these principles:</p>
<ul>
<li>RESTful architecture</li>
<li>Consistent naming conventions</li>
<li>Proper HTTP status codes</li>
<li>Comprehensive error handling</li>
</ul>

<h2>Authentication and Security</h2>
<p>Implementing secure authentication is essential:</p>
<pre><code>const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.sendStatus(401);
  }
  
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};</code></pre>`,
        excerpt: 'Learn best practices for building scalable and secure backend APIs using Node.js and Express.',
        author: users[1],
        category: 'Backend',
        tags: ['Node.js', 'API', 'Backend'],
        coverImage: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
        publishedAt: '2024-03-08T09:15:00.000Z',
        updatedAt: '2024-03-08T09:15:00.000Z',
        likes: ['user-2'],
        views: 156,
        status: 'published'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(samplePosts));
  }

  if (!localStorage.getItem(STORAGE_KEYS.COMMENTS)) {
    const sampleComments: Comment[] = [
      {
        id: 'comment-1',
        postId: 'post-1',
        author: JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]')[2],
        content: 'Great article! TypeScript has really improved my React development workflow.',
        createdAt: '2024-03-02T08:30:00.000Z',
        likes: ['user-1']
      },
      {
        id: 'comment-2',
        postId: 'post-1',
        author: JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]')[0],
        content: 'Thanks for sharing this comprehensive guide. Very helpful for beginners!',
        createdAt: '2024-03-02T10:45:00.000Z',
        likes: []
      }
    ];
    localStorage.setItem(STORAGE_KEYS.COMMENTS, JSON.stringify(sampleComments));
  }
};

export const useBlogData = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeSampleData();
    loadData();
  }, []);

  const loadData = () => {
    try {
      const storedPosts = JSON.parse(localStorage.getItem(STORAGE_KEYS.POSTS) || '[]');
      const storedComments = JSON.parse(localStorage.getItem(STORAGE_KEYS.COMMENTS) || '[]');
      
      setPosts(storedPosts);
      setComments(storedComments);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const savePost = (post: Omit<BlogPost, 'id' | 'publishedAt' | 'updatedAt'>) => {
    const newPost: BlogPost = {
      ...post,
      id: uuidv4(),
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(updatedPosts));
    return newPost;
  };

  const updatePost = (id: string, updates: Partial<BlogPost>) => {
    const updatedPosts = posts.map(post =>
      post.id === id ? { ...post, ...updates, updatedAt: new Date().toISOString() } : post
    );
    setPosts(updatedPosts);
    localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(updatedPosts));
  };

  const deletePost = (id: string) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(updatedPosts));

    // Also delete related comments
    const updatedComments = comments.filter(comment => comment.postId !== id);
    setComments(updatedComments);
    localStorage.setItem(STORAGE_KEYS.COMMENTS, JSON.stringify(updatedComments));
  };

  const likePost = (postId: string, userId: string) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        const likes = post.likes.includes(userId)
          ? post.likes.filter(id => id !== userId)
          : [...post.likes, userId];
        return { ...post, likes };
      }
      return post;
    });
    setPosts(updatedPosts);
    localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(updatedPosts));
  };

  const addComment = (postId: string, content: string, author: User) => {
    const newComment: Comment = {
      id: uuidv4(),
      postId,
      author,
      content,
      createdAt: new Date().toISOString(),
      likes: [],
    };

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(STORAGE_KEYS.COMMENTS, JSON.stringify(updatedComments));
    return newComment;
  };

  const likeComment = (commentId: string, userId: string) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        const likes = comment.likes.includes(userId)
          ? comment.likes.filter(id => id !== userId)
          : [...comment.likes, userId];
        return { ...comment, likes };
      }
      return comment;
    });
    setComments(updatedComments);
    localStorage.setItem(STORAGE_KEYS.COMMENTS, JSON.stringify(updatedComments));
  };

  const getPostComments = (postId: string) => {
    return comments.filter(comment => comment.postId === postId);
  };

  return {
    posts,
    comments,
    loading,
    savePost,
    updatePost,
    deletePost,
    likePost,
    addComment,
    likeComment,
    getPostComments,
  };
};