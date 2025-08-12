import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, MessageCircle, Eye, Calendar, User, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { useBlogData } from '../hooks/useBlogData';
import { useAuth } from '../context/AuthContext';
import { BlogPost, Comment } from '../types';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { posts, likePost, addComment, likeComment, getPostComments, deletePost } = useBlogData();
  const { user, isAuthenticated } = useAuth();
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundPost = posts.find(p => p.id === id);
      setPost(foundPost || null);
      setComments(getPostComments(id));
      setLoading(false);
    }
  }, [id, posts, getPostComments]);

  const handleLike = () => {
    if (user && post) {
      likePost(post.id, user.id);
      // Update local post state
      setPost(prev => prev ? {
        ...prev,
        likes: prev.likes.includes(user.id)
          ? prev.likes.filter(userId => userId !== user.id)
          : [...prev.likes, user.id]
      } : null);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user && post && newComment.trim()) {
      const comment = addComment(post.id, newComment.trim(), user);
      setComments(prev => [...prev, comment]);
      setNewComment('');
    }
  };

  const handleCommentLike = (commentId: string) => {
    if (user) {
      likeComment(commentId, user.id);
      setComments(prev => prev.map(comment =>
        comment.id === commentId
          ? {
              ...comment,
              likes: comment.likes.includes(user.id)
                ? comment.likes.filter(userId => userId !== user.id)
                : [...comment.likes, user.id]
            }
          : comment
      ));
    }
  };

  const handleDelete = () => {
    if (post && user && (user.id === post.author.id || user.isAdmin)) {
      if (window.confirm('Are you sure you want to delete this post?')) {
        deletePost(post.id);
        navigate('/');
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The post you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const canEditOrDelete = user && (user.id === post.author.id || user.isAdmin);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </button>

        {/* Post Header */}
        <article className="bg-white rounded-xl shadow-sm overflow-hidden">
          {post.coverImage && (
            <div className="aspect-video overflow-hidden">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-8">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(post.publishedAt)}
                </div>
              </div>

              {canEditOrDelete && (
                <div className="flex items-center space-x-2">
                  <Link
                    to={`/edit/${post.id}`}
                    className="flex items-center px-3 py-1 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="flex items-center px-3 py-1 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </button>
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
              <Link
                to={`/profile/${post.author.id}`}
                className="flex items-center space-x-3 hover:text-indigo-600 transition-colors"
              >
                {post.author.avatar ? (
                  <img
                    src={post.author.avatar}
                    alt={post.author.fullName}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-12 w-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900">{post.author.fullName}</p>
                  <p className="text-sm text-gray-500">@{post.author.username}</p>
                </div>
              </Link>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{post.views} views</span>
                </div>
                
                <button
                  onClick={handleLike}
                  disabled={!isAuthenticated}
                  className={`flex items-center space-x-1 hover:text-red-500 transition-colors ${
                    user && post.likes.includes(user.id) ? 'text-red-500' : ''
                  } ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      user && post.likes.includes(user.id) ? 'fill-current' : ''
                    }`}
                  />
                  <span>{post.likes.length}</span>
                </button>
              </div>
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg prose-gray max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>

        {/* Comments Section */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Comments ({comments.length})
          </h3>

          {/* Comment Form */}
          {isAuthenticated ? (
            <form onSubmit={handleCommentSubmit} className="mb-8">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                required
              />
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  disabled={!newComment.trim()}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Post Comment
                </button>
              </div>
            </form>
          ) : (
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">
                <Link to="/login" className="text-indigo-600 hover:underline">
                  Login
                </Link>{' '}
                or{' '}
                <Link to="/register" className="text-indigo-600 hover:underline">
                  register
                </Link>{' '}
                to post a comment.
              </p>
            </div>
          )}

          {/* Comments List */}
          <div className="space-y-6">
            {comments.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No comments yet. Be the first to share your thoughts!
              </p>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-start space-x-3">
                    {comment.author.avatar ? (
                      <img
                        src={comment.author.avatar}
                        alt={comment.author.fullName}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-10 w-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Link
                          to={`/profile/${comment.author.id}`}
                          className="font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
                        >
                          {comment.author.fullName}
                        </Link>
                        <span className="text-sm text-gray-500">
                          {formatDate(comment.createdAt)}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-3">{comment.content}</p>
                      
                      <button
                        onClick={() => handleCommentLike(comment.id)}
                        disabled={!isAuthenticated}
                        className={`flex items-center space-x-1 text-sm hover:text-red-500 transition-colors ${
                          user && comment.likes.includes(user.id) ? 'text-red-500' : 'text-gray-500'
                        } ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                      >
                        <Heart
                          className={`h-3 w-3 ${
                            user && comment.likes.includes(user.id) ? 'fill-current' : ''
                          }`}
                        />
                        <span>{comment.likes.length}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;