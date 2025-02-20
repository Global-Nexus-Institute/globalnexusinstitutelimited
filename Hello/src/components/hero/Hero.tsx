import React from 'react';
import HeroBackground from './HeroBackground';
import HeroTitle from './HeroTitle';
import HeroStats from './HeroStats';
import ApplicationButtons from './ApplicationButtons';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center">
      <HeroBackground />
      
      <div className="relative z-10 w-full pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <HeroTitle />
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-16">
              <ApplicationButtons />
            </div>

            <div className="pt-12 border-t border-blue-400/30">
              <HeroStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;