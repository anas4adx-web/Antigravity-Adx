import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wrench, Droplet, ShieldCheck, CalendarDays, Bolt, Clock3, Gauge } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import DashboardMetricCard from '../components/DashboardMetricCard';
import QuickActionButton from '../components/QuickActionButton';
import { bikeProfile } from '../data/bikeProfile';

export default function Dashboard() {
  const actions = [
    {
      title: 'Log a Ride',
      subtitle: 'Track your next mission',
      icon: Gauge,
    },
    {
      title: 'Schedule Service',
      subtitle: 'Book your next maintenance',
      icon: Wrench,
    },
    {
      title: 'Fuel Check',
      subtitle: 'Update fuel expense',
      icon: Droplet,
    },
    {
      title: 'Inspect Alerts',
      subtitle: 'Review system warnings',
      icon: ShieldCheck,
    },
  ];

  const maintenanceItems = [
    {
      title: 'Brake pad refresh',
      due: '2 days',
      status: 'High priority',
      icon: Wrench,
    },
    {
      title: 'Chain lubrication',
      due: '4 days',
      status: 'Recommended',
      icon: Droplet,
    },
    {
      title: 'Tire pressure',
      due: '6 days',
      status: 'Crew alert',
      icon: Clock3,
    },
  ];

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  const riderName = bikeProfile.name;
  const serviceRemainingKm = Math.max(0, bikeProfile.nextServiceDueKm - bikeProfile.currentOdometer);
  const fuelRange = {
    remainingKm: Math.round(bikeProfile.fuelLeft * bikeProfile.mileage),
    tankLevel: `${bikeProfile.fuelLeft.toFixed(1)} L`,
    warning: true,
    note: 'Estimated range reduced due to overdue oil service and aggressive ride patterns.',
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05050f] px-4 py-6 text-white sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(138,43,226,0.24),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(95,158,160,0.18),_transparent_24%),radial-gradient(circle_at_center,_rgba(255,255,255,0.03),_transparent_40%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,_rgba(0,0,0,0.65))]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="mb-6 rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-2xl"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.34em] text-accent-from/80">Rider control center</p>
              <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{greeting}, {riderName}.</h1>
              <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base">Your bike is live with premium guidance, fuel range estimates, and smart service reminders for every mission.</p>
            </div>

            <div className="grid gap-3 sm:items-end">
              <span className="inline-flex rounded-full bg-accent-from/10 px-3 py-2 text-xs uppercase tracking-[0.28em] text-accent-from">Ready for the road</span>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[28px] bg-[#0b0b17]/90 border border-white/10 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500">Bike status</p>
                  <p className="mt-2 text-lg font-semibold text-white">Healthy</p>
                </div>
                <div className="rounded-[28px] bg-[#0b0b17]/90 border border-white/10 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500">Next service</p>
                  <p className="mt-2 text-lg font-semibold text-white">Oil in {serviceRemainingKm} km</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[1.3fr_0.95fr]">
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="space-y-5"
          >
            <GlassCard className="p-5 sm:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-gray-500">Bike Health Score</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">Performance pulse</h2>
                  <p className="mt-2 text-sm text-gray-400">Your motorcycle is tuned for premium rides with balanced service and fuel routines.</p>
                </div>

                <div className="relative mx-auto flex h-[220px] w-[220px] items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-glass sm:mx-0 sm:h-[260px] sm:w-[260px]">
                  <div className="absolute inset-0 rounded-full bg-[conic-gradient(at_top,_rgba(138,43,226,0.9)_0deg,_rgba(95,158,160,0.75)_220deg,_rgba(255,255,255,0.08)_360deg)] opacity-60 blur-sm" />
                  <div className="absolute inset-3 sm:inset-4 rounded-full border border-white/10 bg-[#080814]/90" />
                  <div className="relative flex h-[calc(100%-4rem)] w-[calc(100%-4rem)] items-center justify-center rounded-full bg-[#05050f] shadow-[0_0_0_5px_rgba(255,255,255,0.04)]">
                    <div className="text-center">
                      <p className="text-6xl font-bold text-white">{bikeProfile.bikeHealthScore}<span className="text-accent-from">%</span></p>
                      <p className="mt-3 text-sm uppercase tracking-[0.28em] text-gray-400">Excellent</p>
                      <p className="mt-2 text-xs text-gray-500">Bike health index</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-gray-500">Engine status</p>
                  <p className="mt-3 text-xl font-semibold text-white">Stable</p>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-gray-500">Bracket temp</p>
                  <p className="mt-3 text-xl font-semibold text-white">43°C</p>
                </div>
              </div>
            </GlassCard>

            <div className="grid gap-4 md:grid-cols-2">
              <DashboardMetricCard
                title="Fuel Expense"
                value="₹312"
                description="This month’s fuel spend"
                icon={Droplet}
              />
              <DashboardMetricCard
                title="Ride Efficiency"
                value={`${bikeProfile.fuelEfficiency} km/L`}
                description="Average economy over 4 rides"
                icon={Bolt}
              />
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-5"
          >
            <GlassCard className="p-5 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-gray-500">Maintenance Preview</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Upcoming work</h2>
                </div>
                <span className="rounded-full bg-accent-from/10 px-3 py-2 text-sm font-medium text-accent-from">4 items</span>
              </div>

              <div className="mt-8 space-y-4">
                {maintenanceItems.map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 4 }}
                    className="rounded-[28px] border border-white/10 bg-white/5 p-5 transition"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-accent-from">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <p className="text-base font-semibold text-white">{item.title}</p>
                          <p className="mt-1 text-sm text-gray-400">{item.status}</p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-white">{item.due}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-5 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-gray-500">Fuel Range Intelligence</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Estimated range</h2>
                </div>
                <div className={`rounded-full px-3 py-2 text-sm font-medium ${fuelRange.warning ? 'bg-rose-500/10 text-rose-300' : 'bg-emerald-500/10 text-emerald-300'}`}>
                  {fuelRange.warning ? 'Low fuel warning' : 'Range stable'}
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-white/10 bg-[#0b0b17]/80 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500">Remaining range</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{fuelRange.remainingKm} km</p>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-[#0b0b17]/80 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500">Current tank</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{fuelRange.tankLevel}</p>
                </div>
              </div>

              <div className="mt-5 rounded-[28px] border border-white/10 bg-white/5 p-4 text-sm text-gray-400">
                <p className="font-semibold text-white">Fuel range note</p>
                <p className="mt-2">{fuelRange.note}</p>
              </div>
            </GlassCard>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-6"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {actions.map((item) => (
              <QuickActionButton
                key={item.title}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
