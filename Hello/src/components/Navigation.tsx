import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import logo from '/images/lgo.jpeg';  // Import the logo image


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '#home' },
    { title: 'Courses', href: '#courses' },
    { title: 'Team', href: '#team' },
    { title: 'Services', href: '#services' },
    { title: 'Donate', href: '#donate' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="Global Nexus Institute Logo" className="h-14 w-20" /> {/* Replace GraduationCap with the logo */}
            <span className="ml-2 text-xl font-bold text-gray-800">Global Nexus Institute</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {item.title}
              </a>
            ))}
            <a
              href="https://forms.gle/ZTJHU6RouKCfHUCGA"
              className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <a
              href="#apply-student"
              className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;