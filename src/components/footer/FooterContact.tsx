import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const FooterContact = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-6">CONTACT US</h3>
      <div className="space-y-4">
        <div className="flex items-start">
          <Mail className="w-5 h-5 text-blue-400 mt-1 mr-3" />
          <div>
            <p className="text-sm">Email:</p>
            <a href="mailto:info@globalnexus.co.rw" className="hover:text-blue-400 transition-colors">
              info@globalnexus.co.rw
            </a>
          </div>
        </div>
        <div className="flex items-start">
          <MapPin className="w-5 h-5 text-blue-400 mt-1 mr-3" />
          <div>
            <p className="text-sm">Location:</p>
            <p>Norrsken, KN 78 St, Kigali, Rwanda</p>
          </div>
        </div>
        <div className="flex items-start">
          <Phone className="w-5 h-5 text-blue-400 mt-1 mr-3" />
          <div>
            <p className="text-sm">Phone:</p>
            <a href="tel:+250787406140" className="hover:text-blue-400 transition-colors">
              +250 787 406 140
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;