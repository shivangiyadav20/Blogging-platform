import React from 'react';
import { Shield, Eye, Lock, Database, Users, Mail } from 'lucide-react';

const Privacy: React.FC = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Account information (name, email, username)',
        'Profile information (bio, avatar, social links)',
        'Content you create (blog posts, comments)',
        'Usage data (page views, interactions)',
        'Device and browser information',
        'Cookies and similar technologies'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'Provide and maintain our services',
        'Personalize your experience',
        'Communicate with you about updates',
        'Improve our platform and features',
        'Ensure security and prevent abuse',
        'Comply with legal obligations'
      ]
    },
    {
      icon: Users,
      title: 'Information Sharing',
      content: [
        'We do not sell your personal information',
        'Public content is visible to all users',
        'We may share data with service providers',
        'Legal compliance may require disclosure',
        'Business transfers may include your data',
        'Anonymous analytics may be shared'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'Encryption of sensitive data',
        'Secure server infrastructure',
        'Regular security audits',
        'Access controls and monitoring',
        'Incident response procedures',
        'Staff security training'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Policy</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-4 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-600 mb-4">
            BlogHub ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our blogging platform.
          </p>
          <p className="text-gray-600">
            By using BlogHub, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
          </p>
        </div>

        {/* Main Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-lg mr-4">
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-indigo-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Access and Control</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• View and edit your profile information</li>
                <li>• Download your data</li>
                <li>• Delete your account</li>
                <li>• Control privacy settings</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication Preferences</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Opt out of marketing emails</li>
                <li>• Manage notification settings</li>
                <li>• Control comment notifications</li>
                <li>• Update contact preferences</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cookies */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
          <p className="text-gray-600 mb-4">
            We use cookies and similar tracking technologies to enhance your experience on our platform. These technologies help us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
              <p className="text-sm text-gray-600">Required for basic functionality</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
              <p className="text-sm text-gray-600">Help us improve our services</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Preference Cookies</h3>
              <p className="text-sm text-gray-600">Remember your settings</p>
            </div>
          </div>
        </div>

        {/* Data Retention */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
          <p className="text-gray-600 mb-4">
            We retain your information for as long as necessary to provide our services and comply with legal obligations:
          </p>
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-indigo-600 rounded-full mr-3"></span>
              <span className="text-gray-600"><strong>Account Data:</strong> Retained while your account is active</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-indigo-600 rounded-full mr-3"></span>
              <span className="text-gray-600"><strong>Published Content:</strong> May remain public even after account deletion</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-indigo-600 rounded-full mr-3"></span>
              <span className="text-gray-600"><strong>Analytics Data:</strong> Aggregated data may be retained indefinitely</span>
            </div>
          </div>
        </div>

        {/* International Transfers */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
          <p className="text-gray-600 mb-4">
            Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during these transfers.
          </p>
        </div>

        {/* Children's Privacy */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
          <p className="text-gray-600">
            BlogHub is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.
          </p>
        </div>

        {/* Updates */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Updates</h2>
          <p className="text-gray-600 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by:
          </p>
          <ul className="space-y-2 text-gray-600 mb-4">
            <li>• Posting the new policy on this page</li>
            <li>• Sending you an email notification</li>
            <li>• Displaying a prominent notice on our platform</li>
          </ul>
          <p className="text-gray-600">
            Your continued use of our services after any changes constitutes acceptance of the new policy.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white p-8 mt-8">
          <div className="text-center">
            <Mail className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
            <p className="text-indigo-100 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us.
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

export default Privacy;