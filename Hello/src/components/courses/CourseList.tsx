import React from 'react';
import CourseCard from './CourseCard';
import { Course } from './types';

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          title={course.title}
          description={course.description}
          duration={course.duration}
          price={course.price}
          level={course.level}
          link={course.link}
          category={course.category}
          paymentLink={course.paymentLink} // Added this prop to pass the payment link
        />
      ))}
    </div>
  );
};

export default CourseList;
