import React from 'react';
import { Clock, Award, BookOpen, Download, CreditCard } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  price: string;
  level: string;
  link: string;
  paymentLink: string; // Added payment link prop
  category: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  duration,
  price,
  level,
  category,
  link,
  paymentLink,
}) => {
  const downloadPDF = () => {
    // Replace this with the actual URL structure for your PDFs
    const pdfUrl = `/images/${title.replace(/\s+/g, '_')}.pdf`;
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
      <div className="p-6">
        <div className="text-sm text-blue-600 font-medium mb-2">{category}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 min-h-[80px]">{description}</p>
        <div className="flex items-center text-gray-500 mb-2">
          <Clock className="h-4 w-4 mr-2" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center text-gray-500 mb-4">
          <Award className="h-4 w-4 mr-2" />
          <span>{level}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-blue-600">{price}</span>
          <div className="flex gap-2">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Sign In
              </a>
            )}
            {paymentLink && (
              <a
                href={paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Pay Now
              </a>
            )}
          </div>
        </div>
        <button
          onClick={downloadPDF}
          className="w-full inline-flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
