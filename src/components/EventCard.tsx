import React, { useState } from 'react';
import EventDetailsPopup from './EventDetailsPopup';
import { Event } from '@/lib/eventStorage';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div className="mb-4">
        <button
          className="w-full text-left bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
          onClick={() => setIsPopupOpen(true)}
        >
          <h3 className="text-xl font-semibold">{event.name}</h3>
          <p>{`${new Date(event.startDate).toLocaleDateString()} - ${new Date(event.endDate).toLocaleDateString()}`}</p>
        </button>
      </div>
      {isPopupOpen && (
        <EventDetailsPopup event={event} onClose={() => setIsPopupOpen(false)} />
      )}
    </>
  );
};

export default EventCard;