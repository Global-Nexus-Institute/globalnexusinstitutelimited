import React from 'react';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="pt-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-6">
              <Award className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Leading Tech Education</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Empower Your Future with Tech Skills
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join Global Nexus Institute for world-class training in Data Science, AI, and Cyber-Security.
              Transform your career with industry-leading certifications and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <a
                href="#courses"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Courses
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-gray-600">Expert Mentors</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                alt="Students learning"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <Users className="w-6 h-6 text-blue-600 mr-2" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Join Our</p>
                  <p className="text-2xl font-bold text-blue-600">Community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;