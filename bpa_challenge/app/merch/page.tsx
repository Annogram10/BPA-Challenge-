import React from 'react';
import Navbar from '../components/navbar';
import Item1 from './components/item1';
import Item2 from './components/item2';
import Item3 from './components/item3';

const Page = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex justify-center px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            <div className='p-5'>
            <Item1 />
            </div>
            <div className='p-5'>
            <Item2 />      
            </div>
            <div className='p-5'>
                <Item3/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
