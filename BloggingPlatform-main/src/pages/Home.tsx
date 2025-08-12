import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Eye, Calendar, User, TrendingUp, Filter } from 'lucide-react';
import { useBlogData } from '../hooks/useBlogData';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const Home: React.FC = () => {
  const { posts, loading, likePost } = useBlogData();
  const { user } = useAuth();
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'trending'>('latest');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = ['all', ...new Set(posts.map(post => post.category))];
    return cats;
  }, [posts]);

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = posts.filter(post => post.status === 'published');
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    switch (sortBy) {
      case 'popular':
        return filtered.sort((a, b) => b.likes.length - a.likes.length);
      case 'trending':
        return filtered.sort((a, b) => b.views - a.views);
      case 'latest':
      default:
        return filtered.sort((a, b) => 
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
    }
  }, [posts, sortBy, selectedCategory]);

  const handleLike = (postId: string) => {
    if (user) {
      likePost(postId, user.id);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const stripHtml = (html: string) => {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">BlogHub</span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Discover amazing stories, share your thoughts, and connect with writers from around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Start Writing Today
              </Link>
              <Link
                to="/categories"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-200 transform hover:-translate-y-1"
              >
                Explore Categories
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'latest' | 'popular' | 'trending')}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="latest">Latest Posts</option>
              <option value="popular">Most Liked</option>
              <option value="trending">Most Viewed</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {filteredAndSortedPosts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <TrendingUp className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No posts found</h3>
            <p className="text-gray-500">Try adjusting your filters or check back later for new content.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                {post.coverImage && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(post.publishedAt)}
                    </div>
                  </div>

                  <Link to={`/post/${post.id}`}>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-indigo-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt || stripHtml(post.content).substring(0, 150) + '...'}
                  </p>

                  <div className="flex items-center justify-between">
                    <Link
                      to={`/profile/${post.author.id}`}
                      className="flex items-center space-x-2 hover:text-indigo-600 transition-colors"
                    >
                      {post.author.avatar ? (
                        <img
                          src={post.author.avatar}
                          alt={post.author.fullName}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-8 w-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-white" />
                        </div>
                      )}
                      <span className="text-sm font-medium text-gray-700">
                        {post.author.fullName}
                      </span>
                    </Link>

                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center space-x-1 hover:text-red-500 transition-colors ${
                          user && post.likes.includes(user.id) ? 'text-red-500' : ''
                        }`}
                      >
                        <Heart
                          className={`h-4 w-4 ${
                            user && post.likes.includes(user.id) ? 'fill-current' : ''
                          }`}
                        />
                        <span>{post.likes.length}</span>
                      </button>
                      
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {filteredAndSortedPosts.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
              Load More Posts
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;