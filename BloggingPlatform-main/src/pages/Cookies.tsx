import React from 'react';
import { Cookie, Settings, Eye, BarChart, Shield, Mail } from 'lucide-react';

const Cookies: React.FC = () => {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Required for basic website functionality',
      examples: [
        'Authentication tokens',
        'Session management',
        'Security features',
        'Form submissions'
      ],
      canDisable: false
    },
    {
      icon: BarChart,
      title: 'Analytics Cookies',
      description: 'Help us understand how you use our website',
      examples: [
        'Page views and traffic',
        'User behavior patterns',
        'Performance metrics',
        'Error tracking'
      ],
      canDisable: true
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'Remember your preferences and settings',
      examples: [
        'Language preferences',
        'Theme settings',
        'Layout preferences',
        'Accessibility options'
      ],
      canDisable: true
    },
    {
      icon: Eye,
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements',
      examples: [
        'Ad personalization',
        'Social media integration',
        'Cross-site tracking',
        'Conversion tracking'
      ],
      canDisable: true
    }
  ];

  const thirdPartyServices = [
    {
      name: 'Google Analytics',
      purpose: 'Website analytics and performance monitoring',
      dataCollected: 'Usage statistics, page views, user interactions',
      retention: '26 months',
      optOut: 'https://tools.google.com/dlpage/gaoptout'
    },
    {
      name: 'Social Media Platforms',
      purpose: 'Social sharing and login functionality',
      dataCollected: 'Profile information, social interactions',
      retention: 'Varies by platform',
      optOut: 'Platform-specific privacy settings'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Cookie className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Policy</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-4 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to improve your experience on BlogHub.
            </p>
            <p className="text-indigo-200">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
          <p className="text-gray-600 mb-4">
            Cookies are small text files that are stored on your device when you visit a website. They help websites remember information about your visit, which can make it easier to visit the site again and make the site more useful to you.
          </p>
          <p className="text-gray-600 mb-4">
            BlogHub uses cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from.
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <p className="text-indigo-800">
              <strong>Your Choice:</strong> You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
            </p>
          </div>
        </div>

        {/* Types of Cookies */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Types of Cookies We Use</h2>
          
          {cookieTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-lg mr-4">
                  <type.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                  <p className="text-gray-600 mt-1">{type.description}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  type.canDisable 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {type.canDisable ? 'Optional' : 'Required'}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {type.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span className="text-gray-600">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Third-Party Services */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
          <p className="text-gray-600 mb-6">
            We use third-party services that may set their own cookies. Here's information about the main services we use:
          </p>
          
          <div className="space-y-6">
            {thirdPartyServices.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Purpose:</p>
                    <p className="text-gray-600 mb-3">{service.purpose}</p>
                    <p className="text-sm font-medium text-gray-700 mb-1">Data Collected:</p>
                    <p className="text-gray-600">{service.dataCollected}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Data Retention:</p>
                    <p className="text-gray-600 mb-3">{service.retention}</p>
                    <p className="text-sm font-medium text-gray-700 mb-1">Opt-Out:</p>
                    <p className="text-gray-600">{service.optOut}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Managing Cookies */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Browser Settings</h3>
              <p className="text-gray-600 mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">View cookies stored on your device</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">Delete existing cookies</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">Block cookies from specific sites</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">Block all cookies</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">Set cookie expiration preferences</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">Receive notifications about cookies</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Browser-Specific Instructions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Chrome</h4>
                  <p className="text-sm text-gray-600">Settings → Privacy and Security → Cookies</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Firefox</h4>
                  <p className="text-sm text-gray-600">Options → Privacy & Security</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Safari</h4>
                  <p className="text-sm text-gray-600">Preferences → Privacy</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Edge</h4>
                  <p className="text-sm text-gray-600">Settings → Cookies and Site Permissions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Devices */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mobile Devices</h2>
          <p className="text-gray-600 mb-4">
            For mobile devices, cookie management is typically handled through your browser app settings:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">iOS (Safari)</h3>
              <p className="text-gray-600">
                Settings → Safari → Privacy & Security → Block All Cookies
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Android (Chrome)</h3>
              <p className="text-gray-600">
                Chrome app → Menu → Settings → Site Settings → Cookies
              </p>
            </div>
          </div>
        </div>

        {/* Impact of Disabling */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact of Disabling Cookies</h2>
          <p className="text-gray-600 mb-4">
            While you can disable cookies, please note that this may affect your experience on BlogHub:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Potential Issues</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-yellow-800">
                  <span className="mr-2">⚠</span>
                  <span>Difficulty staying logged in</span>
                </li>
                <li className="flex items-center text-yellow-800">
                  <span className="mr-2">⚠</span>
                  <span>Loss of personalized settings</span>
                </li>
                <li className="flex items-center text-yellow-800">
                  <span className="mr-2">⚠</span>
                  <span>Reduced functionality</span>
                </li>
                <li className="flex items-center text-yellow-800">
                  <span className="mr-2">⚠</span>
                  <span>Repeated consent requests</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What Still Works</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-green-800">
                  <span className="mr-2">✓</span>
                  <span>Reading blog posts</span>
                </li>
                <li className="flex items-center text-green-800">
                  <span className="mr-2">✓</span>
                  <span>Browsing categories</span>
                </li>
                <li className="flex items-center text-green-800">
                  <span className="mr-2">✓</span>
                  <span>Searching content</span>
                </li>
                <li className="flex items-center text-green-800">
                  <span className="mr-2">✓</span>
                  <span>Basic site navigation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Updates */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
          <p className="text-gray-600 mb-4">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
          </p>
          <p className="text-gray-600">
            We will notify you of any material changes by posting the updated policy on this page and updating the "Last updated" date.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white p-8 mt-8">
          <div className="text-center">
            <Mail className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-2xl font-bold mb-4">Questions About Cookies?</h2>
            <p className="text-indigo-100 mb-6">
              If you have any questions about our use of cookies or this Cookie Policy, please don't hesitate to contact us.
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

export default Cookies;