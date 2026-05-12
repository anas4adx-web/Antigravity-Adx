import React from 'react';
import { motion } from 'framer-motion';
import MaintenanceCard from '../components/MaintenanceCard';
import { bikeProfile } from '../data/bikeProfile';

const maintenanceItems = [
  {
    title: 'Chain Cleaning',
    status: 'warning',
    lastService: '2026-04-18',
    km: '8,650 km',
    nextDue: '9,200 km',
    progress: 72,
  },
  {
    title: 'Chain Lubrication',
    status: 'good',
    lastService: '2026-04-30',
    km: '8,780 km',
    nextDue: '9,450 km',
    progress: 84,
  },
  {
    title: 'Engine Oil',
    status: 'urgent',
    lastService: '2026-03-12',
    km: '7,900 km',
    nextDue: '8,000 km',
    progress: 41,
  },
  {
    title: 'Brake Inspection',
    status: 'warning',
    lastService: '2026-04-02',
    km: '8,430 km',
    nextDue: '8,900 km',
    progress: 63,
  },
  {
    title: 'Air Filter',
    status: 'good',
    lastService: '2026-04-24',
    km: '8,720 km',
    nextDue: '9,720 km',
    progress: 88,
  },
  {
    title: 'Tyre Pressure',
    status: 'good',
    lastService: '2026-05-05',
    km: '8,830 km',
    nextDue: '9,100 km',
    progress: 92,
  },
  {
    title: 'Battery Health',
    status: 'warning',
    lastService: '2026-03-28',
    km: '7,950 km',
    nextDue: '9,000 km',
    progress: 58,
  },
  {
    title: 'Insurance Renewal',
    status: 'urgent',
    lastService: '2025-12-18',
    km: 'n/a',
    nextDue: '2026-06-01',
    progress: 34,
  },
];

export default function Maintenance() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05050f] px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(138,43,226,0.24),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(95,158,160,0.18),_transparent_24%),radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-2xl sm:p-7"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-accent-from/80">Maintenance Tracker</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">RevSync lifecycle health</h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                Keep every service interval in view with a premium maintenance control center designed for modern riders.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-[#0b0b17]/80 px-5 py-4 shadow-glass">
              <p className="text-sm uppercase tracking-[0.28em] text-gray-400">Next critical task</p>
              <p className="mt-2 text-xl font-semibold text-white">Engine Oil Renewal</p>
              <p className="mt-1 text-sm text-gray-400">Due within {Math.max(0, bikeProfile.nextServiceDueKm - bikeProfile.currentOdometer)} km</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-gray-500">Alerts</p>
            <p className="mt-4 text-4xl font-semibold text-white">2 urgent</p>
            <p className="mt-2 text-sm text-gray-400">Engine oil and insurance renewal need attention.</p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-gray-500">Healthy services</p>
            <p className="mt-4 text-4xl font-semibold text-white">4 items</p>
            <p className="mt-2 text-sm text-gray-400">Chain lubrication, air filter, tyre pressure and more are stable.</p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-gray-500">Due soon</p>
            <p className="mt-4 text-4xl font-semibold text-white">2 items</p>
            <p className="mt-2 text-sm text-gray-400">Chain cleaning and brake inspection are approaching their window.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-8 grid gap-6 lg:grid-cols-2"
        >
          <div className="space-y-6">
            {maintenanceItems.slice(0, 4).map((item) => (
              <MaintenanceCard key={item.title} {...item} />
            ))}
          </div>
          <div className="space-y-6">
            {maintenanceItems.slice(4).map((item) => (
              <MaintenanceCard key={item.title} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
