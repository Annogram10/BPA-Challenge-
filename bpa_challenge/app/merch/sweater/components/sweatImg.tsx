"use client"
import React, { useState } from 'react';

const SweatImg = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image sources
  const images = [
    "/frontSweater.jpeg",   // Replace with your first image
    "/backSweater.jpeg"   // Replace with your second image
  ];

  // Next and previous image logic
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[80vh] bg-gray-300 rounded-lg overflow-hidden flex-shrink-0">
      {/* Left Arrow */}
      <button 
        onClick={prevImage} 
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full shadow-md"
      >
        &#8592;
      </button>

      {/* Image */}
      <img 
        src={images[currentImageIndex]} // Add your image paths here
        alt="Product" 
        className="w-full h-full object-cover" 
      />

      {/* Right Arrow */}
      <button 
        onClick={nextImage} 
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full shadow-md"
      >
        &#8594;
      </button>
    </div>
  );
};

export default SweatImg;
