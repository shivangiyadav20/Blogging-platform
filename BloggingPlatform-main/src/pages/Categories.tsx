import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, BookOpen, TrendingUp, Calendar, Eye, Heart } from 'lucide-react';
import { useBlogData } from '../hooks/useBlogData';
import { useAuth } from '../context/AuthContext';

const Categories: React.FC = () => {
  const { posts, likePost } = useBlogData();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'trending'>('latest');

  // Get all categories with post counts
  const categoriesWithCounts = useMemo(() => {
    const publishedPosts = posts.filter(post => post.status === 'published');
    const categoryMap = new Map<string, number>();
    
    publishedPosts.forEach(post => {
      categoryMap.set(post.category, (categoryMap.get(post.category) || 0) + 1);
    });

    return Array.from(categoryMap.entries())
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b.count - a.count);
  }, [posts]);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = posts.filter(post => post.status === 'published');
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query)) ||
        post.author.fullName.toLowerCase().includes(query)
      );
    }

    // Sort posts
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
  }, [posts, selectedCategory, searchQuery, sortBy]);

  const handleLike = (postId: string) => {
    if (user) {
      likePost(postId, user.id);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const stripHtml = (html: string) => {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
  };

  const getCategoryColor = (index: number) => {
    const colors = [
      'bg-gradient-to-r from-purple-500 to-pink-500',
      'bg-gradient-to-r from-blue-500 to-cyan-500',
      'bg-gradient-to-r from-green-500 to-teal-500',
      'bg-gradient-to-r from-yellow-500 to-orange-500',
      'bg-gradient-to-r from-red-500 to-pink-500',
      'bg-gradient-to-r from-indigo-500 to-purple-500',
      'bg-gradient-to-r from-cyan-500 to-blue-500',
      'bg-gradient-to-r from-teal-500 to-green-500',
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Categories</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Discover amazing content organized by topics that interest you most
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search posts, authors, tags..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
              />
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'latest' | 'popular' | 'trending')}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
              >
                <option value="latest">Latest Posts</option>
                <option value="popular">Most Liked</option>
                <option value="trending">Most Viewed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* All Categories Card */}
            <button
              onClick={() => setSelectedCategory('all')}
              className={`p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                  : 'bg-white text-gray-900 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <BookOpen className={`h-8 w-8 ${selectedCategory === 'all' ? 'text-white' : 'text-indigo-600'}`} />
                <span className={`text-2xl font-bold ${selectedCategory === 'all' ? 'text-white' : 'text-gray-900'}`}>
                  {posts.filter(p => p.status === 'published').length}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">All Categories</h3>
              <p className={`text-sm ${selectedCategory === 'all' ? 'text-indigo-100' : 'text-gray-600'}`}>
                Browse all posts
              </p>
            </button>

            {/* Individual Category Cards */}
            {categoriesWithCounts.map(({ category, count }, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  selectedCategory === category
                    ? getCategoryColor(index) + ' text-white'
                    : 'bg-white text-gray-900 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${
                    selectedCategory === category 
                      ? 'bg-white bg-opacity-20' 
                      : 'bg-gray-100'
                  }`}>
                    <BookOpen className={`h-6 w-6 ${
                      selectedCategory === category 
                        ? 'text-white' 
                        : 'text-gray-600'
                    }`} />
                  </div>
                  <span className={`text-2xl font-bold ${
                    selectedCategory === category ? 'text-white' : 'text-gray-900'
                  }`}>
                    {count}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{category}</h3>
                <p className={`text-sm ${
                  selectedCategory === category ? 'text-white text-opacity-80' : 'text-gray-600'
                }`}>
                  {count} {count === 1 ? 'post' : 'posts'}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' 
                ? `All Posts (${filteredPosts.length})`
                : `${selectedCategory} (${filteredPosts.length})`
              }
            </h2>
            {searchQuery && (
              <p className="text-gray-600">
                Search results for "<span className="font-semibold">{searchQuery}</span>"
              </p>
            )}
          </div>

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <BookOpen className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No posts found</h3>
              <p className="text-gray-500">
                {searchQuery 
                  ? "Try adjusting your search terms or browse different categories."
                  : "No posts available in this category yet."
                }
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-indigo-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
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
                            <span className="text-white text-sm font-medium">
                              {post.author.fullName.charAt(0)}
                            </span>
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
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                Load More Posts
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;