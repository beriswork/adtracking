"use client";

import React from 'react';
import Link from 'next/link';
import { HomeIcon, CalendarIcon } from '@heroicons/react/24/outline';

const Sidebar: React.FC = () => {
  return (
    <nav className="bg-nav-bg w-64 min-h-screen border-r border-nav-border">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-8">Ad Tracking</h1>
        <ul>
          <li className="mb-4">
            <Link href="/" className="flex items-center text-gray-300 hover:text-white">
              <HomeIcon className="w-6 h-6 mr-2" />
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/event-details" className="flex items-center text-gray-300 hover:text-white">
              <CalendarIcon className="w-6 h-6 mr-2" />
              Event Details
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;