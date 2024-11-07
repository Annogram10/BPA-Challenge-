import React from 'react';
import HoodImg from './components/hoodImg';
import HoodTitle from './components/hoodTitle';
import HoodSize from './components/hoodSize';
import HoodInfo from './components/hoodInfo';
import HoodCart from './components/hoodCart';
import Navbar from '@/app/components/navbar';
const Product = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    <Navbar />
    <div className="flex-grow flex items-center justify-center p-4"> {/* Flex-grow allows space to be shared evenly */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8">
        {/* Image section */}
        <div className="flex-shrink-0 w-full sm:w-1/2 h-96 bg-gray-300 rounded-lg overflow-hidden">
          <HoodImg />
        </div>

        {/* Details section */}
        <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2 space-y-4">
          {/* Title */}
          <HoodTitle /> {/* Pass title prop here */}

          {/* Item Info */}
          <HoodInfo />

          {/* Size selector */}
          <HoodSize />

          {/* Add to Cart button */}
          <HoodCart />
        </div>
      </div>
    </div>
    <div className="h-16" /> {/* This empty div adds equal space at the bottom, adjust height as needed */}
  </div>
  );
};

export default Product;
