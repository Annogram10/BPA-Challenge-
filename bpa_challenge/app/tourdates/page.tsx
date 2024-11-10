// EventPage.tsx
import React from 'react';
import Filter from './components/filter';
import Calendar from './components/calander';
import Navbar from '../components/navbar';
const EventPage: React.FC = () => {
  return (
    <div>
      <Navbar/>
    <div className="flex space-x-8">
      <div className="w-3/4">
        <Calendar />
      </div>
      <div className="w-1/4">
        <Filter />
      </div>
    </div>
    </div>
  );
};

export default EventPage;
