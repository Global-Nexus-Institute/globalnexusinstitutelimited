import React from 'react';

const HeroBackground = () => {
  return (
    <>
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Students collaborating"
          className="w-full h-full object-cover"
          priority="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/60 via-red-800/50 to-gray-900/70"></div>
      </div>
      
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 via-transparent to-transparent z-[1]"></div>
      
      {/* Dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}
      ></div>
    </>
  );
};

export default HeroBackground;