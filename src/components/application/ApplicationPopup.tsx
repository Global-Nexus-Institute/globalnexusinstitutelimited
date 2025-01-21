import React, { useState, useEffect } from 'react';
import { X, GraduationCap } from 'lucide-react';

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
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg p-8 animate-fade-up">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <GraduationCap className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Applications Now Open!</h2>
          <p className="text-gray-600">
            Join our next cohort and transform your career in tech. Limited spots available!
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Call For Application: Python Data Analytics</h3>
            <ul className="space-y-2 text-blue-800">
              <li>• Mode of Training: In-Person & Online </li>
              <li>• Starting Date: February 21, 2025</li>
              <li>• Duration: 4 Weeks with two sessions per week </li>
              <li>• In-person : Sat & Sun  from 9:00AM-3:00PM CAT (Kigali) </li>
              <li>• Online: Sat & Sun from 7:30PM-9:30PM CAT  </li>
              <li>• Fee: 60K RWF In-person or 40K RWF/5K KES (Online)</li>
              <li>• Contact us if you are a person with special needs</li>
              <li>• WatsApp: +2507 874 06140 or +254 707 825 181 </li>
              <li>
                <a href="https://store.pesapal.com/pythondataanalyticsprogram" target="_blank"
                  style={{
                    display: 'block',
                    padding: '8px 16px',  // Reduced padding
                    backgroundColor: '#dc3545',  // Red color
                    color: 'white',
                    textAlign: 'center',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',  // Smaller font size
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    width: 'auto',
                    maxWidth: '200px', // Prevents button from stretching too wide
                    margin: '0 auto'  // Centers the button
                  }}>
                  Make a Payment
                </a>
              </li>
            </ul>
          </div>

          <button
            onClick={() => window.location.href = 'https://forms.gle/nS7WhSWjrfez9Est9'}
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Apply Now
          </button>

          <p className="text-sm text-center text-gray-500">
            Learn new skills of 21st Century in 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPopup;
