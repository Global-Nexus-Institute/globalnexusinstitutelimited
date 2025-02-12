import React from 'react';
import TeamMember from './TeamMember';

const Team = () => {
  const teamMembers = [
    {
      name: 'Theoneste NDAYISENGA',
      role: 'Founder and CEO & Project Lead',
      specialty: 'Education, Data Science, Financial Engineering',
      imageUrl: '/images/theoneste.jpeg',
    },
    {
      name: 'Francis KIPKOGEI YEGO',
      role: 'Board Member & Data Scientist',
      specialty: 'Machine Learning, AI Research',
      imageUrl: '/images/francis.jpg',

    },
    {
      name: 'Dieudonne UWASE',
      role: 'Board Member & Business Coach',
      specialty: 'Educational Technology, Course Development',
      imageUrl: '/images/Uwase.jpg',

    },
    {
      name: 'Eugene MUTUYIMANA',
      role: 'Course Facilitator',
      specialty: 'Software development, Data Analysis',
      imageUrl: '/images/eugene.jpg',

    },
    {
      name: 'Francis Muhirwa',
      role: 'Web & Graphic Designer',
      specialty: 'Project management, Content Creation',
      imageUrl: '/images/sophia.jpeg',
    },

    {
      name: 'Didier NGAMIJE',
      role: 'Data Analytics Lead & Graphic Designer',
      specialty: 'Data Analytics, Business Intelligence',
      imageUrl: '/images/didier.jpeg',
    },
    {
      name: 'Dr. Innocent NGARUYE',
      role: 'Senior Researcher & Data Scientist',
      specialty: 'Applied Maths, Data Science & Research',
      imageUrl: '/images/innocent.png',
    },
    {
      name: 'Geredi NIYIBIGIRA',
      role: 'Artificial Intelligence Instructor',
      specialty: 'Computer science, Artifificial Intelligence',
      imageUrl: '/images/geredi.png',

    },
    {
      name: 'Elizen Awuor',
      role: 'Client Experience Coordinator ',
      specialty: 'Customer Experience, Quality Assurance',
      imageUrl: '/images/elizen.jpeg'
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
          <p className="text-lg text-gray-600">
            Meet our dedicated professionals committed to your success.
            Our team of experienced professionals is deeply committed to
            your growth and success. With passion, expertise, and a client-focused
            approach, we strive to deliver exceptional results and support you in
            achieving your goals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;