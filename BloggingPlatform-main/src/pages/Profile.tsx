import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { User, Calendar, MapPin, Link as LinkIcon, Mail, Edit, Settings } from 'lucide-react';
import { useBlogData } from '../hooks/useBlogData';
import { useAuth } from '../context/AuthContext';
import { User as UserType } from '../types';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { posts } = useBlogData();
  const { user: currentUser } = useAuth();
  
  const [profileUser, setProfileUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = () => {
      if (id) {
        const users = JSON.parse(localStorage.getItem('mockUsers') || '[]');
        const foundUser = users.find((u: UserType) => u.id === id);
        setProfileUser(foundUser || null);
      } else if (currentUser) {
        setProfileUser(currentUser);
      }
      setLoading(false);
    };

    loadProfile();
  }, [id, currentUser]);

  const userPosts = posts.filter(post => 
    post.author.id === (profileUser?.id || currentUser?.id) && 
    post.status === 'published'
  );

  const isOwnProfile = !id || (currentUser && profileUser?.id === currentUser.id);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (!profileUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">User Not Found</h1>
          <p className="text-gray-600 mb-8">The user profile you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="h-32 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800"></div>
          
          <div className="relative px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-6">
              {/* Avatar */}
              <div className="relative -mt-16 mb-4 sm:mb-0">
                {profileUser.avatar ? (
                  <img
                    src={profileUser.avatar}
                    alt={profileUser.fullName}
                    className="h-32 w-32 rounded-full border-4 border-white object-cover"
                  />
                ) : (
                  <div className="h-32 w-32 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full border-4 border-white flex items-center justify-center">
                    <User className="h-16 w-16 text-white" />
                  </div>
                )}
                {profileUser.isAdmin && (
                  <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium">
                    Admin
                  </div>
                )}
              </div>

              {/* User Info */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{profileUser.fullName}</h1>
                    <p className="text-gray-600">@{profileUser.username}</p>
                  </div>
                  
                  {isOwnProfile && (
                    <div className="flex space-x-3 mt-4 sm:mt-0">
                      <Link
                        to="/settings"
                        className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Link>
                      <Link
                        to="/profile/edit"
                        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Link>
                    </div>
                  )}
                </div>

                {profileUser.bio && (
                  <p className="mt-4 text-gray-700">{profileUser.bio}</p>
                )}

                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Joined {formatDate(profileUser.joinedAt)}
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-1" />
                    {profileUser.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-2xl font-bold text-indigo-600">{userPosts.length}</div>
            <div className="text-sm text-gray-500">Published Posts</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-2xl font-bold text-green-600">
              {userPosts.reduce((sum, post) => sum + post.likes.length, 0)}
            </div>
            <div className="text-sm text-gray-500">Total Likes</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-2xl font-bold text-blue-600">
              {userPosts.reduce((sum, post) => sum + post.views, 0)}
            </div>
            <div className="text-sm text-gray-500">Total Views</div>
          </div>
        </div>

        {/* Posts */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {isOwnProfile ? 'Your Posts' : `${profileUser.fullName}'s Posts`}
          </h2>

          {userPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <User className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No posts yet</h3>
              <p className="text-gray-500 mb-4">
                {isOwnProfile 
                  ? "You haven't published any posts yet. Start writing your first post!" 
                  : "This user hasn't published any posts yet."
                }
              </p>
              {isOwnProfile && (
                <Link
                  to="/write"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Write Your First Post
                </Link>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {userPosts.map((post) => (
                <article
                  key={post.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {formatDate(post.publishedAt)}
                        </span>
                      </div>
                      
                      <Link to={`/post/${post.id}`}>
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-indigo-600 transition-colors mb-2">
                          {post.title}
                        </h3>
                      </Link>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{post.likes.length} likes</span>
                        <span>{post.views} views</span>
                      </div>
                    </div>
                    
                    {post.coverImage && (
                      <div className="ml-4 flex-shrink-0">
                        <img
                          src={post.coverImage}
                          alt=""
                          className="h-20 w-20 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;