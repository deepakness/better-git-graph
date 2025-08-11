import React, { useState } from 'react';
import { Flame, Dice6, Zap, Moon, Download, Star, Shield, Repeat, Eye } from 'lucide-react';

function App() {
  const [selectedActivity, setSelectedActivity] = useState('legendary');
  const [selectedPattern, setSelectedPattern] = useState('steady');

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activityLevels = [
    {
      id: 'modest',
      title: 'Modest',
      description: 'Slightly more active',
      squares: [2, 1, 2, 3, 2]
    },
    {
      id: 'active',
      title: 'Active',
      description: '1.5x more active',
      squares: [3, 2, 3, 4, 3]
    },
    {
      id: 'impressive',
      title: 'Impressive',
      description: 'Double your activity',
      squares: [3, 3, 4, 3, 3]
    },
    {
      id: 'legendary',
      title: 'Legendary',
      description: 'Triple your activity',
      squares: [4, 4, 4, 4, 4]
    }
  ];

  const patterns = [
    {
      id: 'random',
      title: 'Random',
      description: 'Natural looking activity',
      icon: Dice6
    },
    {
      id: 'streaks',
      title: 'Streaks',
      description: 'Show dedication periods',
      icon: Flame
    },
    {
      id: 'steady',
      title: 'Steady',
      description: 'Consistent daily activity',
      icon: Zap
    },
    {
      id: 'weekends',
      title: 'Weekends',
      description: 'Weekend warrior style',
      icon: Moon
    }
  ];

  const getSquareColor = (intensity: number) => {
    const colors = [
      'bg-gray-100',
      'bg-green-200',
      'bg-green-300',
      'bg-green-500',
      'bg-green-700'
    ];
    return colors[intensity] || colors[0];
  };

  const features = [
    {
      icon: Star,
      title: '4 Activity Levels',
      description: 'From modest improvements to legendary profiles'
    },
    {
      icon: Zap,
      title: '4 Distribution Patterns',
      description: 'Random, streaks, steady, or weekend activity'
    },
    {
      icon: Eye,
      title: 'Live Preview',
      description: 'See exactly how your graph will look'
    },
    {
      icon: Repeat,
      title: 'One-Click Reset',
      description: 'Restore original graph anytime'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Works offline, no data collection'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Flame className="w-12 h-12 mr-4 text-orange-400" />
              <h1 className="text-5xl font-bold">Better Git Graph</h1>
            </div>
            <p className="text-xl mb-8 opacity-90">Make your contributions look impressive!</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a 
                href="https://chromewebstore.google.com/detail/better-git-graph/pfhjpbahlhhnohgflbdalghmphgmmmdm"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Add to Chrome
              </a>
              <button 
                onClick={scrollToDemo}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                View Demo
              </button>
            </div>
            <div className="flex justify-center text-sm opacity-75">
              <span>Free to Use • No Registration Required • Works Offline</span>
            </div>
            <div className="flex justify-center text-sm opacity-75">
              <span>Free to Use</span>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Video Section */}
      <div id="demo-section" className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">See It In Action</h2>
          <p className="text-lg text-gray-600">Watch how Better Git Graph transforms your GitHub profile</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/-2b_MGmBzMo"
            title="Better Git Graph Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Extension Interface Preview */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Activity Level Selection */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Choose Your Activity Level</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activityLevels.map((level) => (
                <div
                  key={level.id}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedActivity === level.id
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedActivity(level.id)}
                >
                  <div className="flex justify-center mb-4">
                    <div className="flex gap-1">
                      {level.squares.map((intensity, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-sm ${getSquareColor(intensity)}`}
                        />
                      ))}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 text-center mb-2">
                    {level.title}
                  </h4>
                  <p className="text-gray-600 text-center">{level.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Distribution Pattern */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Distribution Pattern</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {patterns.map((pattern) => {
                const IconComponent = pattern.icon;
                return (
                  <div
                    key={pattern.id}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedPattern === pattern.id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedPattern(pattern.id)}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-gray-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 text-center mb-2">
                      {pattern.title}
                    </h4>
                    <p className="text-gray-600 text-center">{pattern.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
              Make It Better
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Better Git Graph?</h2>
            <p className="text-lg text-gray-600">Transform your GitHub presence with powerful features</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Get started in seconds</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Install Extension',
                description: 'Add Better Git Graph to your Chrome browser'
              },
              {
                step: '2',
                title: 'Visit GitHub',
                description: 'Navigate to any GitHub profile with a contribution graph'
              },
              {
                step: '3',
                title: 'Transform',
                description: 'Click the extension icon and choose your settings'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your GitHub Profile?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of developers showcasing their best work</p>
          <a 
            href="https://chromewebstore.google.com/detail/better-git-graph/pfhjpbahlhhnohgflbdalghmphgmmmdm"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            <Download className="w-5 h-5 mr-2" />
            Install Better Git Graph
          </a>
          <p className="mt-4 text-sm opacity-75">Free to Use • No Registration Required • Works Offline</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Flame className="w-6 h-6 mr-2 text-orange-400" />
              <span className="text-lg font-semibold text-white">Better Git Graph</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="https://deepakness.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm">
            <p>&copy; 2025 Better Git Graph. Made with ❤️ for developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;