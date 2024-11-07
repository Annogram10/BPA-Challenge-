import React from 'react';
import Person1 from './components/person1';
import Person2 from './components/person2';
import Person3 from './components/person3';
import Person4 from './components/person4';
import Navbar from '../components/navbar';
import Music from './components/music';
import Story from './components/story';

const Page = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar /> {/* Navbar stays at the top without padding */}
      <div className="flex-grow flex flex-col items-center px-4 py-14"> {/* Set equal padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-fit max-w-screen-xl">
          <Person1 />
          <Person2 />
          <Person3 />
          <Person4 />
          <Story />
          <Music />
        </div>
      </div>
      <div className="py-8" /> {/* Add padding below the last row to match the top padding */}
    </div>
  );
};

export default Page;
