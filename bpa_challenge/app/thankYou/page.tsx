'use client'
import React from 'react';

const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Image Banner */}
      <div className="w-full max-h-[500px] overflow-hidden">
        <img
          src="/contactUs.jpg" // Path to your downloaded image in the public folder
          alt="Thank You Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thank You Message */}
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full mt-8 text-center">
        <h2 className="text-4xl font-semibold text-green-600 mb-4">Thank You for Purchasing!</h2>
        <p className="text-lg text-gray-700">Your order is being processed, and you'll receive an email confirmation shortly.</p>
      </div>
    </div>
  );
};

export default ThankYouPage;
