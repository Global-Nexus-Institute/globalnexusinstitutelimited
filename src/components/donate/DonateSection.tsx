import React from 'react';
import { Heart, Users } from 'lucide-react';

const DonateSection = () => {
  return (
    <section id="donate" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <Heart className="w-12 h-12 text-red-500 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Help us provide education opportunities to underrepresented groups including females,
                young mothers, and people with disabilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Your Impact</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Fund scholarships for deserving students</li>
                <li>✓ Support educational resources and equipment</li>
                <li>✓ Enable mentorship programs</li>
                <li>✓ Create opportunities for practical training</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Make a Donation</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 border-2 border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50 font-semibold">
                  $25
                </button>
                <button className="p-4 border-2 border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50 font-semibold">
                  $50
                </button>
                <button className="p-4 border-2 border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50 font-semibold">
                  $100
                </button>
                <button className="p-4 border-2 border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50 font-semibold">
                  $250
                </button>
              </div>
              <input
                type="number"
                placeholder="Custom amount"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;