'use client'
import React, { useState } from 'react';

const HoodImg = () => {
  // Manage the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image URLs: Add your image files here
  const images = [
    "/frontHoodie.jpeg",   // First image
    "/backHoodie.jpeg",  // Second image (Replace with your second image file)
    // Add more images if needed
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
    <div className="relative w-full h-full bg-gray-300 rounded-lg overflow-hidden">
      {/* Left Arrow */}
      <button 
        onClick={prevImage} 
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full shadow-md"
      >
        &#8592;
      </button>

      {/* Image */}
      {/* Ensure the image takes up full width and height */}
      <img 
        src={images[currentImageIndex]}  // This is where the src points to the image file path
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

export default HoodImg;
