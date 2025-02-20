import React from 'react';
import { Filter } from 'lucide-react';

interface CourseFiltersProps {
  selectedCategory: string;
  selectedLevel: string;
  onCategoryChange: (category: string) => void;
  onLevelChange: (level: string) => void;
}

const CourseFilters: React.FC<CourseFiltersProps> = ({
  selectedCategory,
  selectedLevel,
  onCategoryChange,
  onLevelChange,
}) => {
  const categories = [
    'All',
    'Data Analysis',
    'Business Intelligence',
    'AI & Machine Learning',
    'Visualization/Business Intelligence',
    'Data Science',
  ];

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <Filter className="h-5 w-5 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold">Filters</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Level
          </label>
          <select
            value={selectedLevel}
            onChange={(e) => onLevelChange(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CourseFilters;