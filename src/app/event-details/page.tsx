"use client";

import React, { useState } from 'react';
import EventList from '@/components/EventList';
import EventForm from '@/components/EventForm';
import { Event } from '@/lib/eventStorage';

export default function EventDetailsPage() {
  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);

  const handleEventAdded = (newEvent: Event) => {
    setEvents(prevEvents => [...prevEvents, newEvent]);
  };

  return (
    <div className="flex-1 p-8 bg-main text-white">
      <h1 className="text-3xl font-bold mb-8">Event Details</h1>
      <button
        className="bg-primary text-white px-4 py-2 rounded mb-4"
        onClick={() => setShowForm(true)}
      >
        Add New Event
      </button>
      <EventList events={events} setEvents={setEvents} />
      {showForm && (
        <EventForm
          onClose={() => setShowForm(false)}
          onEventAdded={handleEventAdded}
        />
      )}
    </div>
  );
}