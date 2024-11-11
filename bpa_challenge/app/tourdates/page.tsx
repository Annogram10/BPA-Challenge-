// EventPage.tsx
import React from 'react';
import Filter from './components/filter';
import Calendar from './components/calander';
import Navbar from '../components/navbar';
import Dropdown from './dropdown';

const EventPage: React.FC = () => {
  return (
    <div className='bg-base-200'>
      <Navbar/>
    {/* <div className="flex space-x-8">
      <div className="w-3/4">
        <Calendar />
      </div>
      <div className="w-1/4">
        <Filter />
      </div>
    </div> */}
    <div className='h-80 bg-red-500'>

    </div>
    <Dropdown />
    </div>
  );
};

export default EventPage;