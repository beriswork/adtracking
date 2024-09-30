"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import EventDetails from '@/components/EventDetails';
import { getEvents } from '@/lib/eventStorage';

const DashboardStats = dynamic(() => import('../components/DashboardStats'), {
  ssr: false,
});

const EventList = dynamic(() => import('../components/EventList'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <DashboardStats />
      <h2 className="text-2xl font-bold mt-8 mb-4">Events</h2>
      <EventList />
    </div>
  );
}

