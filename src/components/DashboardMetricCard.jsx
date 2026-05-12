import React from 'react';
import GlassCard from './GlassCard';

export default function DashboardMetricCard({ title, value, description, icon: Icon, className = '' }) {
  return (
    <GlassCard className={`p-5 ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500">{title}</p>
          <p className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{value}</p>
          {description && <p className="mt-2 text-sm text-gray-400">{description}</p>}
        </div>
        {Icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-accent-from shadow-glass">
            <Icon size={20} />
          </div>
        )}
      </div>
    </GlassCard>
  );
}
