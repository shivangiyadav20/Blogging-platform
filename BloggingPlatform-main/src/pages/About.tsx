import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Target, Heart, Award, Globe, Github, Linkedin } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Shruti Gupta',
      role: 'Founder & Lead Developer',
      bio: 'Passionate full-stack developer with a love for creating meaningful digital experiences.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      social: {
        github: 'https://github.com/Student1shruti',
        linkedin: '#',
        email: '13579shrutigupta@gmail.com'
      }
    }
  ];

  const values = [
    {
      icon: BookOpen,
      title: 'Knowledge Sharing',
      description: 'We believe in the power of sharing knowledge and experiences to help others grow and learn.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a supportive community where writers and readers can connect and inspire each other.'
    },
    {
      icon: Target,
      title: 'Quality Content',
      description: 'Promoting high-quality, well-researched content that provides real value to our readers.'
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'Everything we do is driven by our passion for writing, learning, and helping others succeed.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Articles Published' },
    { number: '500+', label: 'Active Writers' },
    { number: '10K+', label: 'Monthly Readers' },
    { number: '50+', label: 'Categories Covered' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">BlogHub</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Empowering writers and readers to share knowledge, inspire creativity, and build meaningful connections through the power of storytelling.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To create a platform where knowledge flows freely, creativity flourishes, and every voice has the power to inspire and educate others.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why BlogHub?</h3>
                <p className="text-gray-600 mb-4">
                  In a world overflowing with information, we believe in the power of quality content and meaningful connections. BlogHub was created to bridge the gap between writers who have valuable insights to share and readers who are eager to learn and grow.
                </p>
                <p className="text-gray-600 mb-6">
                  Our platform combines modern technology with user-centric design to create an environment where creativity thrives and knowledge is accessible to everyone.
                </p>
                <Link
                  to="/register"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
                >
                  Join Our Community
                </Link>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-lg shadow-lg">
                  <Globe className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-indigo-100">
                Numbers that reflect our growing community and impact
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-indigo-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              The passionate individuals behind BlogHub
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition-shadow">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Heart className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Us?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're a seasoned writer or just starting your journey, BlogHub provides the tools and community you need to share your voice with the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
              >
                Start Writing Today
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;