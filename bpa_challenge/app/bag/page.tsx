import React from 'react';
import CartTable from './components/cartTable';
import CartText from './components/cartText';
import BuyNow from './components/BuyNow';
import Navbar from '../components/navbar';

const Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Header section with background image */}
      <div 
        className="h-72 flex items-end bg-cover bg-center text-white"
        style={{
          backgroundImage: `url('/contactUs.jpg')`, // Replace with your image path
        }}
      >
        <h1 className="text-6xl font-bold p-4">Cart</h1>
      </div>

      <main className="p-8">
        <div className="flex justify-between items-start">
          <div className="w-2/3 h-full px-14"> {/* Adjusted width for CartTable */}
            <CartTable />
          </div>
          <div className="w-1/3 flex flex-col items-center ml-4">
            <CartText />
            <BuyNow />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
