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
      role: 'Lead Data Scientist & Board',
      specialty: 'Machine Learning, AI Research',
      imageUrl: '/images/francis.jpg',

    },
    {
      name: 'Grace INGABIRE',
      role: 'Director of Funding and Partnership',
      specialty: 'Education Support, Statistical Analysis',
      imageUrl: '/images/grace.jpeg',

    },
    {
      name: 'Joe Sophia UMUHOZA',
      role: 'Marketing Officer',
      specialty: 'Mental Health, Education',
      imageUrl: '/images/sophia.jpeg',
    },
    {
      name: 'Didier NGAMIJE',
      role: 'Data Analytics Lead & Graphic Designer',
      specialty: 'Data Analytics, Business Intelligence',
      imageUrl: '/images/didier.jpeg',
    },
    {
      name: 'Dieudonne UWASE',
      role: 'Business Coach & Training Coordinator',
      specialty: 'Educational Technology, Course Development',
      imageUrl: '/images/Uwase.jpg',

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
      imageUrl:'/images/elizen.jpeg'
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