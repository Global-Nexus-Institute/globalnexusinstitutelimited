import React from 'react';

const HeroStats = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-4">
        <div className="text-4xl font-bold text-white mb-1">500+</div>
        <div className="text-sm text-blue-200">Students Trained</div>
      </div>
      <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-4">
        <div className="text-4xl font-bold text-white mb-1">95%</div>
        <div className="text-sm text-blue-200">Success Rate</div>
      </div>
      <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-4">
        <div className="text-4xl font-bold text-white mb-1">50+</div>
        <div className="text-sm text-blue-200">Expert Mentors</div>
      </div>
    </div>
  );
};

export default HeroStats;