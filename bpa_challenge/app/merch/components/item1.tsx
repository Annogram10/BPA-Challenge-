'use client'
import React, { useState } from 'react';

const Item1 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/frontHoodie.jpeg", "/backHoodie.jpeg"];

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
        <h2 className="card-title">Hoodies</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <li className="btn btn-primary"><a href="/hoodies">Buy now</a></li>
        </div>
      </div>
    </div>
  );
};

export default Item1;
