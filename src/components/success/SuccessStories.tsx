import React from 'react';
import SuccessCard from './SuccessCard';
import { successStories } from './successData';

const SuccessStories = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600">
            Hear from our graduates who transformed their careers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <SuccessCard key={story.name} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;