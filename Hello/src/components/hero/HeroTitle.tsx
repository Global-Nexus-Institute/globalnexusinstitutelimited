import React from 'react';
import { Award } from 'lucide-react';

const HeroTitle = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-200 rounded-full mb-8 backdrop-blur-sm">
        <Award className="w-5 h-5 mr-2" />
        <span className="text-sm font-medium">Leading in EdTech and Consultancy </span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
        Shape Your Future<br />in Tech
      </h1>
      
      <p className="text-xl text-blue-100 mb-12 leading-relaxed">
        Join Global Nexus Institute for Consultant and world-class training in Data Analytics,<br />
        Data Science, AI, and Machine Learning. Transform your career with industry-leading<br />
        certifications and expert guidance.
      </p>
    </div>
  );
};

export default HeroTitle;