"use client";

import React, { useState } from 'react';
import { addEvent, Event } from '@/lib/eventStorage';

interface EventFormProps {
  onClose: () => void;
  onEventAdded: (event: Event) => void;
}

const EventForm: React.FC<EventFormProps> = ({ onClose, onEventAdded }) => {
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now().toString(),
      name: eventName,
      startDate,
      endDate,
    };
    addEvent(newEvent);
    onEventAdded(newEvent);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Event Name</label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="w-full bg-gray-700 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full bg-gray-700 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full bg-gray-700 p-2 rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 bg-gray-600 text-white px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;