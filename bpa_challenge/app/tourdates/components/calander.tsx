'use client'
import React from 'react';

const events = [
  { date: 1, location: 'Location A', time: '10:00 AM' },
  { date: 5, location: 'Location B', time: '12:00 PM' },
  { date: 10, location: 'Location C', time: '2:00 PM' },
  { date: 15, location: 'Location D', time: '9:00 AM' },
  { date: 20, location: 'Location E', time: '1:00 PM' },
  { date: 25, location: 'Location F', time: '3:00 PM' },
];

const Calendar: React.FC = () => {
  const daysInNovember = 30;
  
  return (
    <div className="border-2 border-gray-500 p-4 rounded-lg">
      <div className="grid grid-cols-7 ">
        {Array.from({ length: daysInNovember }, (_, index) => {
          const day = index + 1;
          const event = events.find((event) => event.date === day);
          
          return (
            <div key={day} className="p-4 border border-gray-300 rounded">
              <div className="font-bold text-center">{day}</div>
              {event ? (
                <div className="text-sm mt-2">
                  <div className="text-blue-500">
                    <a href="#" className="underline">{event.location}</a>
                  </div>
                  <div className="text-gray-600">{event.time}</div>
                </div>
              ) : (
                <div className="text-gray-500 text-sm mt-2">No events</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
