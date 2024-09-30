export interface Event {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
}

export interface EventDetail {
  date: string;
  totalSpent: number;
  totalLinkClicks: number;
  totalGuideSignUps: number;
  totalEventRegistrations: number;
}

export const getEvents = (): Event[] => {
  if (typeof window === 'undefined') return [];
  const events = localStorage.getItem('events');
  return events ? JSON.parse(events) : [];
};

export const addEvent = (event: Omit<Event, 'id'>): void => {
  const events = getEvents();
  const newEvent = { ...event, id: Date.now().toString() };
  events.push(newEvent);
  localStorage.setItem('events', JSON.stringify(events));

  // Initialize event details for each day of the event
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);
  const details: EventDetail[] = [];

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    details.push({
      date: d.toISOString().split('T')[0],
      totalSpent: 0,
      totalLinkClicks: 0,
      totalGuideSignUps: 0,
      totalEventRegistrations: 0,
    });
  }

  updateEventDetails(newEvent.id, details);
};

export const getEventDetails = (eventId: string): EventDetail[] => {
  if (typeof window === 'undefined') return [];
  const details = localStorage.getItem(`eventDetails_${eventId}`);
  return details ? JSON.parse(details) : [];
};

export const updateEventDetails = (eventId: string, details: EventDetail[]): void => {
  localStorage.setItem(`eventDetails_${eventId}`, JSON.stringify(details));
};

export const deleteEvent = (id: string): void => {
  const events = getEvents();
  const updatedEvents = events.filter(e => e.id !== id);
  localStorage.setItem('events', JSON.stringify(updatedEvents));
  localStorage.removeItem(`eventDetails_${id}`);
};

export const getTotalStats = (): { totalEvents: number, totalSpent: number, totalClicks: number, totalSignUps: number, totalRegistrations: number } => {
  const events = getEvents();
  let totalSpent = 0;
  let totalClicks = 0;
  let totalSignUps = 0;
  let totalRegistrations = 0;

  events.forEach(event => {
    const details = getEventDetails(event.id);
    details.forEach(detail => {
      totalSpent += detail.totalSpent;
      totalClicks += detail.totalLinkClicks;
      totalSignUps += detail.totalGuideSignUps;
      totalRegistrations += detail.totalEventRegistrations;
    });
  });

  return {
    totalEvents: events.length,
    totalSpent,
    totalClicks,
    totalSignUps,
    totalRegistrations
  };
};