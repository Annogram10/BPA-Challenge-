"use client"

import React, { useState } from 'react';

const HoodSize: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeClick = (size: string) => {
    // Toggle the selected size
    if (selectedSize === size) {
      setSelectedSize(null); // Unselect if the same size is clicked
    } else {
      setSelectedSize(size); // Set the new size
    }
  };

  return (
    <div className="flex justify-center sm:justify-start space-x-4">
      {['S', 'M', 'L'].map((size: string) => (
        <button
          key={size}
          className={`btn rounded-lg ${selectedSize === size ? 'bg-black text-white font-bold' : 'btn-outline border-gray-400'}`}
          onClick={() => handleSizeClick(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default HoodSize;
