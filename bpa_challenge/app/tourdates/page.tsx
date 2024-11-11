import React from 'react';
import Filter from './components/filter';
import Calendar from './components/calander';
import Navbar from '../components/navbar';
import Dropdown from './dropdown';

const EventPage: React.FC = () => {
  return (
    <div className='bg-base-200'>
      <Navbar/>
      
      {/* Main Tour Dates Section with Image Background */}
      <div
        className="h-72 flex flex-col justify-end"
        style={{
          backgroundImage: 'url("/contactUs.jpg")', // Path to your downloaded image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-6xl text-left pl-4 text-white pb-4 font-bold">Tour Dates</div>
      </div>
      
      <Dropdown />
    </div>
  );
};

export default EventPage;
