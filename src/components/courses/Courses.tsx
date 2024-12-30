import React, { useState, useMemo } from 'react';
import CourseFilters from './CourseFilters';
import CourseList from './CourseList';
import { courses } from './courseData';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const categoryMatch =
        selectedCategory === 'All' || course.category === selectedCategory;
      const levelMatch = selectedLevel === 'All' || course.level === selectedLevel;
      return categoryMatch && levelMatch;
    });
  }, [selectedCategory, selectedLevel]);

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-lg text-gray-600">
            Transform your career with our industry-leading courses. 
            Unlock new opportunities and achieve professional success 
            with our expertly designed courses. Gain cutting-edge skills, 
            practical knowledge, and the confidence to excel in field of
            Data Analytics/Science, and Business Intelligence,etc.
          </p>
        </div>
        <CourseFilters
          selectedCategory={selectedCategory}
          selectedLevel={selectedLevel}
          onCategoryChange={setSelectedCategory}
          onLevelChange={setSelectedLevel}
        />
        <CourseList courses={filteredCourses} />
      </div>
    </section>
  );
};

export default Courses;