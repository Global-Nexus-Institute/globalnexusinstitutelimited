import React from 'react';

const FooterLinks = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">WHAT WE DO</h3>
      <ul className="space-y-3">
        <li><a href="#training" className="hover:text-blue-400 transition-colors">Training</a></li>
        <li><a href="#consultancy" className="hover:text-blue-400 transition-colors">Consultancy</a></li>
        <li><a href="#advisory" className="hover:text-blue-400 transition-colors">Advisory</a></li>
        <li><a href="#trends" className="hover:text-blue-400 transition-colors">Hire Graduates</a></li>
        <li><a href="#partners" className="hover:text-blue-400 transition-colors">Recent Trends</a></li>
        <li><a href="#partners" className="hover:text-blue-400 transition-colors">Partner with Us</a></li>
      </ul>
    </div>
  );
};

export default FooterLinks;