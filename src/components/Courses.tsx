import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    title: 'Professional Data Analytics',
    description: 'Master the basics of Python programming and its powerful data analysis libraries including Pandas and NumPy.',
    duration: '8 weeks',
    price: '$100',
    level: 'Intermediate',
    category: 'Data Analysis',
    link: "https://canvas.instructure.com/register"
  },
  {
    title: 'Power BI Business Intelligence',
    description: 'Learn to create powerful dashboards and reports using Microsoft Power BI for business insights.',
    duration: '5 weeks',
    price: '$60',
    level: 'Intermediate',
    category: 'Business Intelligence',
    link: "https://canvas.instructure.com/register"
  },
  {
    title: 'Machine Learning Fundamentals',
    description: 'Introduction to machine learning concepts, algorithms, and practical applications using Python.',
    duration: '6 weeks',
    price: '$80',
    level: 'Intermediate',
    category: 'AI & Machine Learning',
    link: "https://canvas.instructure.com/register"
  },
  {
    title: 'Basics Python Programming',
    description: 'Learn fundamental python program concepts, and pandas for data analysis.',
    duration: '6 weeks',
    price: '$50',
    level: 'Beginner',
    category: 'Data Science',
    link: "https://canvas.instructure.com/register"
  },
  {
    title: 'SQL for Data Analysis',
    description: 'Learn SQL to query, aggregate, and analyze data, enabling effective decision-making and data-driven insights for analysis.',
    duration: '7 weeks',
    price: '$60',
    level: 'Beginner',
    category: 'Data Analysis',
    link: "https://canvas.instructure.com/register"
  },
  {
    title: 'Data Science: Intermeidate',
    description: 'Bridge the gap between data science and business strategy with practical applications and case studies.',
    duration: '10 weeks',
    price: '$120',
    level: 'Intermediate',
    category: 'Data Science',
    link: "https://canvas.instructure.com/register"
  },

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-lg text-gray-600">
            Transform your career with our industry-leading courses
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;