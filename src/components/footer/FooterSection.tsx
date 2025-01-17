import React from 'react';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import FooterNewsletter from './FooterNewsletter';
import FooterSocial from './FooterSocial';
import logo from '/images/lgo.jpeg';  // Import the logo image

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand and Mission */}
          <div>
            <div className="flex items-center mb-6">
              <img src={logo} alt="Global Nexus Institute Logo" className="h-12 w-18" /> {/* Replace GraduationCap with the logo */}
              <span className="ml-2 text-xl font-bold text-white">Global Nexus Institute </span>
            </div>

            <div className="space-y-4 text-sm">
              <p>Connect with future tech leaders</p>
              <p>Earn international certifications</p>
              <p>Master key tech skills of 21st Century</p>
              <p>Connect with Industry Leaders</p>
              <p>Engage in Collaborative Projects</p>
            </div>
          </div>

          {/* Quick Links */}
          <FooterLinks />

          {/* Contact Information */}
          <FooterContact />

          {/* Newsletter and Social */}
          <div className="space-y-8">
            <FooterNewsletter />
            <FooterSocial />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Global Nexus Institute of Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
