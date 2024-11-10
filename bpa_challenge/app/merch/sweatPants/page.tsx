'use client'

import React from 'react';
import Navbar from '@/app/components/navbar';
import SweatCart from './components/sweatCart';
import SweatImg from './components/sweatImg';
import SweatInfo from './components/sweatInfo';
import SweatSize from './components/sweatSize';
import SweatTitle from './components/sweatTittle';


const Page = () => {
  return (
    <div className="container mx-auto p-4">
      <Navbar /> {/* Assuming Navbar component is in the components directory */}

      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
        {/* Product Image */}
        <SweatImg />

        <div className="flex flex-col space-y-4">
          {/* Product Title */}
          <SweatTitle />

          {/* Product Info (Description and Price) */}
          <SweatInfo />

          {/* Cart Section (Size Selection and Quantity) */}
          <SweatCart />
        </div>
      </div>
    </div>
  );
}

export default Page;
