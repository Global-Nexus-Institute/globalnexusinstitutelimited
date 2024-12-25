import React from 'react';
import { BookOpen, UserPlus, GraduationCap } from 'lucide-react';

const ApplicationButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="https://forms.gle/Je43tQzV1EhKdCeVA"
        className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transform transition-all hover:scale-105 shadow-lg hover:shadow-green-500/25"
      >
        <UserPlus className="w-6 h-6 mr-2" />
        Apply as Student
      </a>
      <a
        href="https://forms.gle/2SkwwvzuKrjrUsEH6"
        className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transform transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/25"
      >
        <GraduationCap className="w-6 h-6 mr-2" />
        Become an Instructor
      </a>
      <a
        href="#courses"
        className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-gray-900 bg-white hover:bg-gray-50 transform transition-all hover:scale-105 shadow-lg"
      >
        <BookOpen className="w-6 h-6 mr-2" />
        Browse Courses
      </a>
    </div>
  );
};

export default ApplicationButtons;