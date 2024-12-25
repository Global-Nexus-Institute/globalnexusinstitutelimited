import React from 'react';
import { Star, Quote } from 'lucide-react';
import { type SuccessStory } from './successData';

const SuccessCard: React.FC<SuccessStory> = ({ name, role, story, image, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-blue-600">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <Quote className="w-8 h-8 text-blue-600 mb-2" />
      <p className="text-gray-600 italic">{story}</p>
    </div>
  );
};

export default SuccessCard;