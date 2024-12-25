import React from 'react';
import { Users } from 'lucide-react';

const HeroImages = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="relative rounded-lg overflow-hidden shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
          alt="Students collaborating"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
      </div>
      <div className="space-y-4">
        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
            alt="Student learning"
            className="w-full h-[140px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
            alt="Instructor teaching"
            className="w-full h-[140px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
        </div>
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
  );
};

export default HeroImages;