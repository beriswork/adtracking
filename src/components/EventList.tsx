"use client";

import React, { useState, useEffect } from 'react';
import { getEvents } from '@/lib/eventStorage';
import EventCard from './EventCard';

const EventList: React.FC = () => {
  const [eventsByMonth, setEventsByMonth] = useState<Record<string, any[]>>({});

  useEffect(() => {
    const events = getEvents();
    const grouped = events.reduce((acc, event) => {
      const endDate = new Date(event.endDate);
      const month = endDate.toLocaleString('default', { month: 'long' });
      if (!acc[month]) acc[month] = [];
      acc[month].push(event);
      return acc;
    }, {} as Record<string, any[]>);
    setEventsByMonth(grouped);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(eventsByMonth).map(([month, events]) => (
        <div key={month} className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{month}</h2>
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default EventList;