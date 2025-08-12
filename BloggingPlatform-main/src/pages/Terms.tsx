import React from 'react';
import { FileText, Scale, AlertTriangle, Shield, Users, Mail } from 'lucide-react';

const Terms: React.FC = () => {
  const sections = [
    {
      icon: Users,
      title: 'User Accounts',
      content: [
        'You must be at least 13 years old to create an account',
        'Provide accurate and complete information',
        'Keep your account credentials secure',
        'You are responsible for all activities under your account',
        'One person may not maintain multiple accounts',
        'We reserve the right to suspend or terminate accounts'
      ]
    },
    {
      icon: FileText,
      title: 'Content Guidelines',
      content: [
        'You retain ownership of content you create',
        'Content must be original or properly attributed',
        'No spam, harassment, or abusive content',
        'Respect intellectual property rights',
        'No illegal or harmful content',
        'We may remove content that violates these terms'
      ]
    },
    {
      icon: Shield,
      title: 'Platform Usage',
      content: [
        'Use the platform for lawful purposes only',
        'Do not attempt to hack or disrupt our services',
        'Respect other users and their content',
        'Follow community guidelines and standards',
        'Report violations to our moderation team',
        'We may limit access for policy violations'
      ]
    },
    {
      icon: Scale,
      title: 'Legal Responsibilities',
      content: [
        'You are liable for your content and actions',
        'Indemnify BlogHub against claims related to your use',
        'We provide the platform "as is" without warranties',
        'Our liability is limited to the maximum extent allowed by law',
        'Disputes will be resolved through binding arbitration',
        'These terms are governed by applicable law'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Scale className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Service</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-4 max-w-3xl mx-auto">
              Please read these terms carefully before using BlogHub. By using our platform, you agree to these terms.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
          <p className="text-gray-600 mb-4">
            These Terms of Service ("Terms") govern your use of BlogHub ("we," "our," or "us"), a blogging platform operated by Shruti Gupta. By accessing or using our services, you agree to be bound by these Terms.
          </p>
          <p className="text-gray-600">
            If you disagree with any part of these terms, then you may not access or use our services. These Terms apply to all visitors, users, and others who access or use the service.
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

        {/* Prohibited Uses */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <div className="flex items-center mb-6">
            <div className="bg-red-600 p-3 rounded-lg mr-4">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Prohibited Uses</h2>
          </div>
          <p className="text-gray-600 mb-4">
            You may not use our service for any of the following prohibited activities:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center text-red-600">
                <span className="mr-2">✗</span>
                <span className="text-gray-600">Illegal activities</span>
              </div>
              <div className="flex items-center text-red-600">
                <span className="mr-2">✗</span>
                <span className="text-gray-600">Harassment or abuse</span>
              </div>
              <div className="flex items-center text-red-600">
                <span className="mr-2">✗</span>
                <span className="text-gray-600">Spam or unsolicited content</span>
              </div>
              <div className="flex items-center text-red-600">
                <span className="mr-2">✗</span>
                <span className="text-gray-600">Malware or viruses</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-red-600">
                <span className="mr-2">✗</span>
                <span className="text-gray-600">Copyright infringement</span>
              </div>
              <div className="flex items-center text-red-600">
                <span className="mr-2">✗</span>
                <span className="text-gray-600">Impersonation</span>
              </div>
              <div className="flex items-center text-red-600">
                <span className="mr-2">✗</span>
                <span className="text-gray-600">System interference</span>
              </div>
              <div className="flex items-center text-red-600">
                <span className="mr-2">✗</span>
                <span className="text-gray-600">Data mining or scraping</span>
              </div>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Content</h3>
              <p className="text-gray-600">
                You retain all rights to content you create and publish on BlogHub. By posting content, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content on our platform.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Platform</h3>
              <p className="text-gray-600">
                BlogHub and its original content, features, and functionality are owned by Shruti Gupta and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy and Data */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy and Data Protection</h2>
          <p className="text-gray-600 mb-4">
            Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our services.
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <p className="text-indigo-800">
              <strong>Important:</strong> By using BlogHub, you also agree to our Privacy Policy. Please review it carefully to understand our data practices.
            </p>
          </div>
        </div>

        {/* Service Availability */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Availability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Provide</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Blogging platform and tools</li>
                <li>• Content hosting and distribution</li>
                <li>• Community features</li>
                <li>• Technical support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Limitations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Services provided "as is"</li>
                <li>• No guarantee of uninterrupted access</li>
                <li>• We may modify or discontinue features</li>
                <li>• Maintenance may cause temporary outages</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Termination */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Termination</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">By You</h3>
              <p className="text-gray-600">
                You may terminate your account at any time by contacting us or using the account deletion feature in your settings.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">By Us</h3>
              <p className="text-gray-600">
                We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 mt-8">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Disclaimer</h2>
          </div>
          <p className="text-gray-600">
            The information on this platform is provided on an "as is" basis. To the fullest extent permitted by law, BlogHub excludes all representations, warranties, obligations, and liabilities arising out of or in connection with your use of our services.
          </p>
        </div>

        {/* Changes to Terms */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
          </p>
          <p className="text-gray-600">
            Your continued use of our services after any changes constitutes acceptance of the new Terms.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white p-8 mt-8">
          <div className="text-center">
            <Mail className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-indigo-100 mb-6">
              If you have any questions about these Terms of Service, please contact us.
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

export default Terms;