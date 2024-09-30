"use client";
import React, { useState, useEffect } from 'react';
import { getEventDetails, updateEventDetails } from '@/lib/eventStorage';
import { Event, EventDetail } from '../lib/eventStorage';

interface EventDetailsProps {
  event: Event;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  const [details, setDetails] = useState<EventDetail[]>([]);
  const [newEntry, setNewEntry] = useState<EventDetail>({
    date: '',
    totalSpent: 0,
    totalLinkClicks: 0,
    totalGuideSignUps: 0,
    totalEventRegistrations: 0,
  });

  useEffect(() => {
    const eventDetails = getEventDetails(event.id);
    setDetails(eventDetails);
  }, [event.id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEntry(prev => ({ ...prev, [name]: name === 'date' ? value : Number(value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateEventDetails(event.id, [...details, newEntry]);
    setDetails(prev => [...prev, newEntry]);
    setNewEntry({
      date: '',
      totalSpent: 0,
      totalLinkClicks: 0,
      totalGuideSignUps: 0,
      totalEventRegistrations: 0,
    });
  };

  return (
    <div className="bg-[#191919] text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">{event.name} Details</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Date</th>
            <th>Total Spent</th>
            <th>Total Clicks</th>
            <th>Total Sign Ups</th>
            <th>Total Registrations</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <td>{new Date(detail.date).toLocaleDateString()}</td>
              <td>${detail.totalSpent.toFixed(2)}</td>
              <td>{detail.totalLinkClicks}</td>
              <td>{detail.totalGuideSignUps}</td>
              <td>{detail.totalEventRegistrations}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="grid grid-cols-5 gap-2">
          <input
            type="date"
            name="date"
            value={newEntry.date}
            onChange={handleInputChange}
            required
            className="bg-gray-700 p-2 rounded"
          />
          <input
            type="number"
            name="totalSpent"
            value={newEntry.totalSpent}
            onChange={handleInputChange}
            placeholder="Total Spent ($)"
            required
            className="bg-gray-700 p-2 rounded"
          />
          <input
            type="number"
            name="totalLinkClicks"
            value={newEntry.totalLinkClicks}
            onChange={handleInputChange}
            placeholder="Total Clicks"
            required
            className="bg-gray-700 p-2 rounded"
          />
          <input
            type="number"
            name="totalGuideSignUps"
            value={newEntry.totalGuideSignUps}
            onChange={handleInputChange}
            placeholder="Total Sign Ups"
            required
            className="bg-gray-700 p-2 rounded"
          />
          <input
            type="number"
            name="totalEventRegistrations"
            value={newEntry.totalEventRegistrations}
            onChange={handleInputChange}
            placeholder="Total Registrations"
            required
            className="bg-gray-700 p-2 rounded"
          />
        </div>
        <button type="submit" className="mt-2 bg-primary text-white px-4 py-2 rounded">
          Add Entry
        </button>
      </form>
    </div>
  );
};

export default EventDetails;