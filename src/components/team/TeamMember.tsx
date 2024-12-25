import React from 'react';
import { User } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  specialty: string;
  imageUrl?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, specialty, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform hover:transform hover:scale-105">
      <div className="mb-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-32 h-32 rounded-full mx-auto object-cover"
          />
        ) : (
          <div className="w-32 h-32 rounded-full mx-auto bg-gray-100 flex items-center justify-center">
            <User className="w-16 h-16 text-gray-400" />
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-blue-600 font-medium mb-2">{role}</p>
      <p className="text-gray-600">{specialty}</p>
    </div>
  );
};

export default TeamMember;