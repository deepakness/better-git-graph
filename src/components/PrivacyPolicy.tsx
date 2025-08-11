import React from 'react';
import { ArrowLeft } from 'lucide-react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <a 
            href="/" 
            className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </a>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy for Better Git Graph</h1>
          
          <p className="text-gray-600 mb-8">Last updated: January 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
            <p className="text-gray-600 mb-6">
              Better Git Graph is a browser extension that enhances the visual display of GitHub contribution graphs. 
              We are committed to protecting your privacy and being transparent about our data practices.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Collection</h2>
            <p className="text-gray-600 mb-4">We DO NOT collect, store, or transmit any personal data. Specifically:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>No user identification or tracking</li>
              <li>No analytics or usage statistics</li>
              <li>No network requests to external servers</li>
              <li>No access to your GitHub account or repositories</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Usage</h2>
            <p className="text-gray-600 mb-4">The extension only:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Stores your preferences (activity level, pattern, theme) locally in your browser</li>
              <li>Modifies the visual appearance of GitHub contribution graphs</li>
              <li>Operates entirely offline after installation</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Storage</h2>
            <p className="text-gray-600 mb-4">All settings are stored locally using Chrome's storage API:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Settings remain on your device only</li>
              <li>No cloud synchronization of personal data</li>
              <li>Data can be cleared by removing the extension</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Permissions</h2>
            <p className="text-gray-600 mb-4">The extension requests minimal permissions:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li><strong>activeTab:</strong> To access the current GitHub page when you click the extension</li>
              <li><strong>storage:</strong> To save your preferences locally</li>
              <li><strong>scripting:</strong> To modify the visual display of contribution graphs</li>
              <li><strong>github.com host:</strong> Restricts functionality to GitHub pages only</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Third Party Services</h2>
            <p className="text-gray-600 mb-6">
              The extension does not integrate with any third-party services or analytics platforms.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to Privacy Policy</h2>
            <p className="text-gray-600 mb-6">
              Any updates to this privacy policy will be reflected in the extension's store listing.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
            <p className="text-gray-600">
              For privacy concerns or questions, please contact: 
              <a 
                href="https://deepakness.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 ml-1"
              >
                deepakness.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;