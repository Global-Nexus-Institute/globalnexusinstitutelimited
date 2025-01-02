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
            <h3 className="font-semibold text-blue-900 mb-2">Early Bird ends in 10 Days: Get a 70% Scholarship!</h3>
            <ul className="space-y-2 text-blue-800">
              <li>• Starting: Anytime (self-paced)</li>
              <li>• Duration: 6 Weeks</li>
              <li>• Program: Python Data Analytics</li>
              <li>• Industry-recognized certification</li>
              <li>• Pay Now: 15K RWF / 1,600 KES</li>
              <li>• Pay Later: 5K RWF / 600 KES at the end (Certification) </li>
              <li>• Contact us if you are a person with special needs</li>
              <li>• For More Information, Contact: +2507 874 06140 (Rwanda) & +254 707 825 181(Kenya)</li>
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

// import React, { useState, useEffect } from 'react';
// import { X, GraduationCap } from 'lucide-react';

// const ApplicationPopup = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 5000); // Show popup after 5 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

//       <div
//         className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg p-8 animate-fade-up"
//         style={{
//           backgroundImage: 'url("/images/background.jpeg")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
//         >
//           <X className="w-5 h-5 text-gray-500" />
//         </button>

//         <div className="text-center mb-6">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
//             <GraduationCap className="w-8 h-8 text-blue-600" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">Applications Now Open!</h2>
//           <p className="text-gray-600">
//             Join our next cohort and transform your career in tech. Limited spots available!
//           </p>
//         </div>

//         <div className="space-y-4">
//           <div className="bg-blue-50 p-4 rounded-lg">
//             <h3 className="font-semibold text-blue-900 mb-2">Early Bird: Get a 70% Scholarship!</h3>
//             <ul className="space-y-2 text-blue-800">
//               <li>• Starting: Anytime (self-paced)</li>
//               <li>• Duration: 7 weeks</li>
//               <li>• Program: Python Data Analytics</li>
//               <li>• Industry-recognized certification</li>
//               <li>• Pay Now: 15K RWF / 1,600 KES at 030700</li>
//               <li>• Pay Later: 5K RWF / 600 KES at the end (Certification) </li>
//               <li>• Contact us if you are a person with special needs</li>
//               <li>• For More Information, Contact: +2507 874 06140 (Rwanda) & +254 707 825 181(Kenya)</li>
//             </ul>
//           </div>

//           <button
//             onClick={() => window.location.href = 'https://forms.gle/Je43tQzV1EhKdCeVA'}
//             className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
//           >
//             Apply Now
//           </button>

//           <p className="text-sm text-center text-gray-500">
//             Learn new skills of 21st Century in 2025
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApplicationPopup;