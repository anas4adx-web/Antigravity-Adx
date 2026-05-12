import React from 'react';
import { motion } from 'framer-motion';

const statusStyles = {
  good: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
  warning: 'bg-amber-500/15 text-amber-300 border-amber-500/20',
  urgent: 'bg-rose-500/15 text-rose-300 border-rose-500/20',
};

export default function MaintenanceCard({
  title,
  status,
  lastService,
  km,
  nextDue,
  progress,
  summary,
  inspection,
  remainingKm,
  recommendations = [],
  className = '',
}) {
  const statusLabel = status === 'urgent' ? 'Urgent' : status === 'warning' ? 'Due Soon' : 'Good';
  const statusClass = statusStyles[status] || statusStyles.good;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-2xl ${className}`}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="mt-2 text-sm text-gray-400">Last serviced on {lastService}</p>
        </div>
        <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${statusClass}`}>
          {statusLabel}
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-3xl bg-[#0b0b17]/80 p-4">
          <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500">KM</p>
          <p className="mt-2 text-lg font-semibold text-white">{km}</p>
        </div>
        <div className="rounded-3xl bg-[#0b0b17]/80 p-4">
          <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500">Next due</p>
          <p className="mt-2 text-lg font-semibold text-white">{nextDue}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-3xl bg-[#0b0b17]/80 p-4">
          <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500">Wear estimate</p>
          <p className="mt-2 text-lg font-semibold text-white">{summary}</p>
        </div>
        <div className="rounded-3xl bg-[#0b0b17]/80 p-4">
          <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500">Inspection</p>
          <p className="mt-2 text-lg font-semibold text-white">{inspection}</p>
        </div>
        <div className="rounded-3xl bg-[#0b0b17]/80 p-4">
          <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500">Remaining km</p>
          <p className="mt-2 text-lg font-semibold text-white">{remainingKm}</p>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-sm text-gray-400">
          <span>Progress</span>
          <span className="font-semibold text-white">{progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <div className={`h-full rounded-full ${status === 'urgent' ? 'bg-rose-400' : status === 'warning' ? 'bg-amber-400' : 'bg-emerald-400'}`} style={{ width: `${progress}%` }} />
        </div>
      </div>

      {recommendations.length > 0 && (
        <div className="mt-5 space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-gray-500">Recommended products</p>
          <div className="grid gap-3">
            {recommendations.map((item) => (
              <div key={item.name} className="rounded-3xl border border-white/10 bg-[#0b0b17]/80 p-3">
                <div className="flex items-center gap-3">
                  {item.image && <img src={item.image} alt={item.name} className="h-12 w-12 rounded-2xl object-cover" />}
                  <div>
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.brand} • ₹{item.price}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-400">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
