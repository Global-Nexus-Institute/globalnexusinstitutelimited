import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react'; // Removed the GraduationCap import

const ApplicationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // Show popup after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Dimmed Background */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Popup Content */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg p-8 animate-fade-up">
        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            {/* Replacing the GraduationCap icon with the logo */}
            <img src="/images/logo.png" alt="Logo" className="w-19 h-19 object-cover" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Applications Now Open!</h2>
          <p className="text-gray-600">
            Join our next cohort and transform your career in tech. Limited spots available!
          </p>
        </div>

        {/* Cancel Button with Text Behind */}
        <div className="relative flex justify-center items-center mb-8">
          {/* Cancel Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full z-10"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
          {/* Text Behind Button */}
          <h3 className="absolute text-blue-900 text-xl font-semibold opacity-30">
            Call For Application: Python Data Analytics
          </h3>
        </div>

        {/* Training Details */}
        <div className="space-y-4 w-full">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Details</h3>
            <ul className="space-y-2 text-blue-800">
              <li>• Mode of Training: Live Online </li>
              <li>• Support: One on One Office Hours </li>
              <li>• Starting Date: February 21, 2025</li>
              <li>• Duration: 4 Weeks with two sessions per week </li>
              <li>• Online: Sat & Sun from 7:30PM-9:30PM CAT </li>
              <li>• Fee: 60K RWF In-person or 40K RWF/5K KES (Online)</li>
              <li>• Contact us if you are a person with special needs</li>
              <li>• WhatsApp: +2507 874 06140 or +254 707 825 181 </li>
              <li>
                <a
                  href="https://store.pesapal.com/pythondataanalyticsprogram"
                  target="_blank"
                  style={{
                    display: 'block',
                    padding: '8px 16px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    textAlign: 'center',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    width: 'auto',
                    maxWidth: '200px',
                    margin: '0 auto',
                  }}
                >
                  Make a Payment
                </a>
              </li>
            </ul>
          </div>

          {/* Apply Button */}
          <button
            onClick={() => (window.location.href = 'https://forms.gle/nS7WhSWjrfez9Est9')}
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Apply Now
          </button>

          {/* Footer Text */}
          <p className="text-sm text-center text-gray-500">
            Learn new skills of 21st Century in 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPopup;
