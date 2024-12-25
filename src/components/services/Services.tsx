import React from 'react';
import { ClipboardList, Database, FileSpreadsheet, FileText } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Training Enumerators',
      description: 'Professional training for data collection teams, ensuring high-quality field research and surveys.',
      Icon: ClipboardList,
    },
    {
      title: 'Data Collection',
      description: 'Comprehensive data collection services using modern tools and methodologies.',
      Icon: Database,
    },
    {
      title: 'Data Processing',
      description: 'Advanced data cleaning, validation, and analysis services for actionable insights.',
      Icon: FileSpreadsheet,
    },
    {
      title: 'Report Writing',
      description: 'Professional report creation with clear insights and recommendations.',
      Icon: FileText,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Consulting Solutions</h2>
          <p className="text-lg text-gray-600">
            We offer expert solutions for all your data needs. Our services include professional training for 
            enumerators to ensure accurate field research, comprehensive data collection using modern tools, and
             advanced data processing for actionable insights. Additionally, we provide professional report writing,
              delivering clear insights and tailored recommendations to support informed decision-making.


          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;