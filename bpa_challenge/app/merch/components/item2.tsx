"use client"
import React, { useState } from 'react';

const Item2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/frontSweater.jpg", "/backSweater.jpeg"];

  const nextImage = () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);

  return (
    <div className="card bg-base-100 shadow-xl w-full">
      <figure className="relative">
        <div className="w-[500px] h-[400px] overflow-hidden">
          <img 
            src={images[currentImageIndex]} 
            alt="Product"  
            className="w-full h-full object-cover" 
          />
        </div>
        <button 
          onClick={prevImage} 
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full shadow-md"
        >
          &#8592;
        </button>
        <button 
          onClick={nextImage} 
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full shadow-md"
        >
          &#8594;
        </button>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Sweater</h2>
        <p>Use the sleeves of my sweater
Let's have an adventure $39.99</p>
        <div className="card-actions justify-end">
          <li className="btn btn-primary"><a href="merch/sweater">Buy now</a></li>
        </div>
      </div>
    </div>
  );
};

export default Item2;
