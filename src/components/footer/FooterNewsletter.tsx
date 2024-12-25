import React, { useState } from 'react';

const FooterNewsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(''); // Reset error when user starts typing again
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    // Simulate email submission (you can replace this with an API call)
    setTimeout(() => {
      console.log('Email submitted:', email);
      setIsSubmitting(false);
      setEmail('');
      alert('Thank you for subscribing!');
    }, 2000);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
      <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and opportunities.</p>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-4 py-2 ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600'} text-white rounded-md hover:bg-blue-700 transition-colors`}
        >
          {isSubmitting ? 'Submitting...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

export default FooterNewsletter;
