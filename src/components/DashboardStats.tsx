"use client";

import React, { useState, useEffect } from 'react';
import { getEvents, getEventDetails } from '../lib/eventStorage';

const DashboardStats: React.FC = () => {
  const [stats, setStats] = useState({
    totalEvents: 0,
    totalSpent: 0,
    totalClicks: 0,
    totalSignUps: 0,
    totalRegistrations: 0,
  });

  useEffect(() => {
    const events = getEvents();
    const calculatedStats = events.reduce((acc, event) => {
      acc.totalEvents += 1;
      const eventDetails = getEventDetails(event.id);
      eventDetails.forEach(detail => {
        acc.totalSpent += detail.totalSpent;
        acc.totalClicks += detail.totalLinkClicks;
        acc.totalSignUps += detail.totalGuideSignUps;
        acc.totalRegistrations += detail.totalEventRegistrations;
      });
      return acc;
    }, {
      totalEvents: 0,
      totalSpent: 0,
      totalClicks: 0,
      totalSignUps: 0,
      totalRegistrations: 0,
    });
    setStats(calculatedStats);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <StatCard title="Total Events" value={stats.totalEvents} />
      <StatCard title="Total Spent" value={`$${stats.totalSpent.toFixed(2)}`} />
      <StatCard title="Total Clicks" value={stats.totalClicks} />
      <StatCard title="Total Sign Ups" value={stats.totalSignUps} />
      <StatCard title="Total Registrations" value={stats.totalRegistrations} />
    </div>
  );
};

const StatCard: React.FC<{ title: string; value: string | number }> = ({ title, value }) => (
  <div className="bg-gray-800 p-6 rounded-lg">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);

export default DashboardStats;