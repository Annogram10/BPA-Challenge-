'use client'
import React, { useState } from 'react';

const SweatImg = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/frontShirt.jpeg",   // Replace with your image file
    "/backShirt.jpeg",    // Replace with your image file
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };

  return (
    <div className="relative w-full h-full bg-gray-300 rounded-lg overflow-hidden">
      <button 
        onClick={prevImage} 
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full shadow-md"
      >
        &#8592;
      </button>

      {/* Image */}
      <img 
        src={images[currentImageIndex]} 
        alt="Product" 
        className="w-full h-full object-cover" // Use object-cover to prevent empty spaces and fit the box
      />

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
