import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const FooterSocial = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">FOLLOW US ON</h3>
      <div className="flex space-x-4">
        <a
          href="https://www.facebook.com/p/Global-Nexus-Institute-61560364154598/"
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors no-underline"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/GlobalNexusInt"
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors no-underline"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/company/global-nexus-institute/?viewAsMember=true"
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors no-underline"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://www.instagram.com/globalnexusinstitute/"
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors no-underline"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default FooterSocial;
