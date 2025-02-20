import React from 'react';
import { Clock, Award } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  price: string;
  level: string;
  link: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  duration,
  price,
  level,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-gray-500 mb-2">
          <Clock className="h-4 w-4 mr-2" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center text-gray-500 mb-4">
          <Award className="h-4 w-4 mr-2" />
          <span>{level}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">{price}</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Enroll Now
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Apply Now
              </a>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;