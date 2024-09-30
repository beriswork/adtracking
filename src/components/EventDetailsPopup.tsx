"use client";
import React, { useState, useEffect } from 'react';
import { Event, EventDetail, getEventDetails, updateEventDetails, deleteEvent } from '@/lib/eventStorage';

interface EventDetailsPopupProps {
  event: Event;
  onClose: () => void;
}

const EventDetailsPopup: React.FC<EventDetailsPopupProps> = ({ event, onClose }) => {
  const [details, setDetails] = useState<EventDetail[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [newEntry, setNewEntry] = useState<EventDetail>({
    date: '',
    totalSpent: 0,
    totalLinkClicks: 0,
    totalGuideSignUps: 0,
    totalEventRegistrations: 0,
  });

  useEffect(() => {
    const existingDetails = getEventDetails(event.id);
    const dates = generateDateRange(new Date(event.startDate), new Date(event.endDate));
    const initialDetails = dates.map(date => {
      const dateString = date.toISOString().split('T')[0];
      const existingEntry = existingDetails.find(d => d.date === dateString);
      return existingEntry || {
        date: dateString,
        totalSpent: 0,
        totalLinkClicks: 0,
        totalGuideSignUps: 0,
        totalEventRegistrations: 0,
      };
    });
    setDetails(initialDetails);
  }, [event]);

  const generateDateRange = (start: Date, end: Date) => {
    const dates = [];
    let currentDate = new Date(start);
    while (currentDate <= end) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
    const existingEntry = details.find(d => d.date === date);
    setNewEntry(existingEntry || { ...newEntry, date });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEntry(prev => ({ ...prev, [name]: name === 'date' ? value : Number(value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedDetails = details.map(d => d.date === newEntry.date ? newEntry : d);
    updateEventDetails(event.id, updatedDetails);
    setDetails(updatedDetails);
    setSelectedDate(null);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      deleteEvent(event.id);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#292929] p-6 rounded-lg shadow-lg border border-[#424242] max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{event.name} Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            Close
          </button>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Event Date Range</h3>
          <p>{`${new Date(event.startDate).toLocaleDateString()} - ${new Date(event.endDate).toLocaleDateString()}`}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Daily Data</h3>
          <div className="grid grid-cols-7 gap-2">
            {details.map((detail) => (
              <button
                key={detail.date}
                onClick={() => handleDateClick(detail.date)}
                className={`p-2 rounded ${selectedDate === detail.date ? 'bg-primary text-white' : 'bg-gray-700 hover:bg-gray-600'}`}
              >
                {new Date(detail.date).getDate()}
              </button>
            ))}
          </div>
        </div>
        {selectedDate && (
          <form onSubmit={handleSubmit} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Edit Data for {new Date(selectedDate).toLocaleDateString()}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Total Spent ($)</label>
                <input
                  type="number"
                  name="totalSpent"
                  value={newEntry.totalSpent || ''}
                  onChange={handleInputChange}
                  onFocus={(e) => e.target.value === '0' && e.target.select()}
                  className="w-full bg-gray-700 p-2 rounded"
                  step="0.01"
                />
              </div>
              <div>
                <label className="block mb-1">Total Link Clicks</label>
                <input
                  type="number"
                  name="totalLinkClicks"
                  value={newEntry.totalLinkClicks || ''}
                  onChange={handleInputChange}
                  onFocus={(e) => e.target.value === '0' && e.target.select()}
                  className="w-full bg-gray-700 p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Total Guide Sign Ups</label>
                <input
                  type="number"
                  name="totalGuideSignUps"
                  value={newEntry.totalGuideSignUps || ''}
                  onChange={handleInputChange}
                  onFocus={(e) => e.target.value === '0' && e.target.select()}
                  className="w-full bg-gray-700 p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Total Event Registrations</label>
                <input
                  type="number"
                  name="totalEventRegistrations"
                  value={newEntry.totalEventRegistrations || ''}
                  onChange={handleInputChange}
                  onFocus={(e) => e.target.value === '0' && e.target.select()}
                  className="w-full bg-gray-700 p-2 rounded"
                />
              </div>
            </div>
            <button type="submit" className="mt-4 bg-primary text-white px-4 py-2 rounded">
              Save Entry
            </button>
          </form>
        )}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-[#424242] p-2">Date</th>
                <th className="border border-[#424242] p-2">Total Spent</th>
                <th className="border border-[#424242] p-2">Total Clicks</th>
                <th className="border border-[#424242] p-2">Total Sign Ups</th>
                <th className="border border-[#424242] p-2">Total Registrations</th>
              </tr>
            </thead>
            <tbody>
              {details.map((detail) => (
                <tr key={detail.date}>
                  <td className="border border-[#424242] p-2">{new Date(detail.date).toLocaleDateString()}</td>
                  <td className="border border-[#424242] p-2">${detail.totalSpent.toFixed(2)}</td>
                  <td className="border border-[#424242] p-2">{detail.totalLinkClicks}</td>
                  <td className="border border-[#424242] p-2">{detail.totalGuideSignUps}</td>
                  <td className="border border-[#424242] p-2">{detail.totalEventRegistrations}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button onClick={handleDelete} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Delete Event
        </button>
      </div>
    </div>
  );
};

export default EventDetailsPopup;