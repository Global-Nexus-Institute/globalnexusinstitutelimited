import React from 'react';
import { type Partner } from './partnerData';

const PartnerCard: React.FC<Partner> = ({ name, logo, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
      <img
        src={logo}
        alt={name}
        className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default PartnerCard;