'use client'
import React, { useState } from 'react';

const Filter: React.FC = () => {
  const locations = ['Location A', 'Location B', 'Location C', 'Location D', 'Location E', 'Location F'];
  const times = ['10:00 AM', '12:00 PM', '2:00 PM', '9:00 AM', '1:00 PM', '3:00 PM'];

  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  return (
    <div className="p-4 border rounded shadow-lg">
      <h3 className="font-semibold">Filter Events</h3>
      <div className="mt-4">
        <label className="block mb-2">Location</label>
        <select
          className="w-full p-2 border rounded"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">Select a location</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <label className="block mb-2">Time</label>
        <select
          className="w-full p-2 border rounded"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="">Select a time</option>
          {times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
