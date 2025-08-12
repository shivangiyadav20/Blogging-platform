import React from 'react';
import { Users, Heart, Shield, AlertTriangle, CheckCircle, Mail, Flag } from 'lucide-react';

const Guidelines: React.FC = () => {
  const guidelines = [
    {
      icon: Heart,
      title: 'Be Respectful and Kind',
      description: 'Treat all community members with respect and kindness',
      rules: [
        'Use respectful language in all interactions',
        'Avoid personal attacks or harassment',
        'Respect different opinions and perspectives',
        'Be constructive in your criticism',
        'Help create a welcoming environment for everyone'
      ]
    },
    {
      icon: Shield,
      title: 'Create Quality Content',
      description: 'Share valuable, original, and well-crafted content',
      rules: [
        'Write original content or properly attribute sources',
        'Ensure your posts are well-researched and factual',
        'Use proper grammar and formatting',
        'Add relevant tags to help others discover your content',
        'Include engaging titles and descriptions'
      ]
    },
    {
      icon: Users,
      title: 'Engage Meaningfully',
      description: 'Participate in discussions that add value to the community',
      rules: [
        'Leave thoughtful comments that contribute to the discussion',
        'Ask questions and share insights',
        'Support other writers with constructive feedback',
        'Share content that you genuinely find valuable',
        'Participate in community events and discussions'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Avoid Prohibited Content',
      description: 'Keep our platform safe by avoiding harmful content',
      rules: [
        'No spam, self-promotion, or repetitive content',
        'No hate speech, discrimination, or harassment',
        'No illegal content or activities',
        'No explicit or inappropriate material',
        'No misinformation or deliberately false content'
      ]
    }
  ];

  const reportingSteps = [
    {
      step: 1,
      title: 'Identify the Issue',
      description: 'Determine what type of violation you\'ve encountered'
    },
    {
      step: 2,
      title: 'Use Report Feature',
      description: 'Click the report button on the content or user profile'
    },
    {
      step: 3,
      title: 'Provide Details',
      description: 'Explain the issue clearly and provide context'
    },
    {
      step: 4,
      title: 'Our Review',
      description: 'Our team will review and take appropriate action'
    }
  ];

  const consequences = [
    {
      level: 'Warning',
      description: 'First-time minor violations',
      action: 'Educational message and guidance',
      color: 'yellow'
    },
    {
      level: 'Content Removal',
      description: 'Violating content is removed',
      action: 'Post or comment deletion',
      color: 'orange'
    },
    {
      level: 'Temporary Suspension',
      description: 'Repeated or serious violations',
      action: '1-30 day account suspension',
      color: 'red'
    },
    {
      level: 'Permanent Ban',
      description: 'Severe or repeated violations',
      action: 'Permanent account termination',
      color: 'red'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Users className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Guidelines</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Our community guidelines help create a safe, respectful, and inspiring environment for all BlogHub members.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Our Community</h2>
          <p className="text-gray-600 mb-4">
            BlogHub is a platform where writers, readers, and thinkers come together to share knowledge, inspire creativity, and build meaningful connections. These guidelines help ensure our community remains a positive and productive space for everyone.
          </p>
          <p className="text-gray-600">
            By participating in our community, you agree to follow these guidelines. Violations may result in content removal, account suspension, or permanent bans.
          </p>
        </div>

        {/* Core Guidelines */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Core Community Guidelines</h2>
          
          {guidelines.map((guideline, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-lg mr-4">
                  <guideline.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{guideline.title}</h3>
                  <p className="text-gray-600 mt-1">{guideline.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {guideline.rules.map((rule, ruleIndex) => (
                  <li key={ruleIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Specific Policies */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Specific Policies</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Ownership and Attribution</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Only post content you own or have permission to use</li>
                <li>• Always credit original sources when sharing others' work</li>
                <li>• Use proper citations for quotes and references</li>
                <li>• Respect copyright and intellectual property rights</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Privacy and Personal Information</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Don't share others' personal information without consent</li>
                <li>• Respect privacy settings and boundaries</li>
                <li>• Be cautious about sharing your own personal details</li>
                <li>• Report any privacy violations immediately</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Commercial Content and Self-Promotion</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Occasional self-promotion is allowed if it adds value</li>
                <li>• Don't spam the community with promotional content</li>
                <li>• Disclose any commercial relationships or sponsorships</li>
                <li>• Focus on providing value rather than just promoting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reporting and Enforcement */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Reporting Violations</h2>
          <p className="text-gray-600 mb-6">
            If you encounter content or behavior that violates our guidelines, please report it. Here's how:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reportingSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
            <div className="flex items-center">
              <Flag className="h-5 w-5 text-indigo-600 mr-3" />
              <p className="text-indigo-800">
                <strong>Emergency Situations:</strong> For urgent safety concerns, contact us immediately at 13579shrutigupta@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Consequences */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Enforcement and Consequences</h2>
          <p className="text-gray-600 mb-6">
            We take violations seriously and apply consequences fairly and consistently:
          </p>
          
          <div className="space-y-4">
            {consequences.map((consequence, index) => (
              <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg">
                <div className={`w-4 h-4 rounded-full mr-4 ${
                  consequence.color === 'yellow' ? 'bg-yellow-400' :
                  consequence.color === 'orange' ? 'bg-orange-400' :
                  'bg-red-400'
                }`}></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{consequence.level}</h3>
                  <p className="text-sm text-gray-600">{consequence.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{consequence.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Appeals Process */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Appeals Process</h2>
          <p className="text-gray-600 mb-4">
            If you believe your content was removed or your account was suspended in error, you can appeal our decision:
          </p>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-indigo-600 mr-3 mt-1">1.</span>
              <span className="text-gray-600">Contact us within 30 days of the action</span>
            </div>
            <div className="flex items-start">
              <span className="text-indigo-600 mr-3 mt-1">2.</span>
              <span className="text-gray-600">Provide specific details about why you believe the action was incorrect</span>
            </div>
            <div className="flex items-start">
              <span className="text-indigo-600 mr-3 mt-1">3.</span>
              <span className="text-gray-600">Our team will review your appeal within 5-7 business days</span>
            </div>
            <div className="flex items-start">
              <span className="text-indigo-600 mr-3 mt-1">4.</span>
              <span className="text-gray-600">We'll notify you of our decision and any next steps</span>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips for Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Building Your Reputation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Consistently create high-quality content</li>
                <li>• Engage authentically with other users</li>
                <li>• Be helpful and supportive to newcomers</li>
                <li>• Share knowledge and expertise generously</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Growing Your Audience</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Write about topics you're passionate about</li>
                <li>• Use relevant tags and categories</li>
                <li>• Respond to comments on your posts</li>
                <li>• Collaborate with other writers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Updates */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Updates to Guidelines</h2>
          <p className="text-gray-600 mb-4">
            We may update these guidelines from time to time to reflect changes in our community or platform. When we make significant changes, we'll:
          </p>
          <ul className="space-y-2 text-gray-600 mb-4">
            <li>• Notify all users via email and platform announcements</li>
            <li>• Provide a summary of key changes</li>
            <li>• Give you time to review before changes take effect</li>
            <li>• Update the "Last updated" date at the top of this page</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white p-8 mt-8">
          <div className="text-center">
            <Mail className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-2xl font-bold mb-4">Questions or Concerns?</h2>
            <p className="text-indigo-100 mb-6">
              If you have questions about these guidelines or need to report a violation, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:13579shrutigupta@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;