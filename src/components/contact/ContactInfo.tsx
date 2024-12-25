import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start">
        <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4" />
        <div>
          <h3 className="font-medium text-gray-900">Email</h3>
          <p className="text-gray-600">info@globalnexus.co.rw</p>
        </div>
      </div>
      <div className="flex items-start">
        <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4" />
        <div>
          <h3 className="font-medium text-gray-900">Phone</h3>
          <p className="text-gray-600">+250787406140</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;