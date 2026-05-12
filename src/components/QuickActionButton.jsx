import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

export default function QuickActionButton({ icon: Icon, title, subtitle, onClick, className = '' }) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      type="button"
      onClick={onClick}
      className={`group w-full rounded-3xl border border-white/10 bg-white/5 p-4 text-left transition duration-300 hover:border-accent-from/30 hover:bg-white/10 sm:p-5 ${className}`}
    >
      <div className="flex items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-accent-from/10 text-accent-from sm:h-14 sm:w-14">
            {Icon && <Icon size={22} />}
          </div>
          <div>
            <p className="text-sm font-semibold text-white sm:text-base">{title}</p>
            <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
          </div>
        </div>
        <div className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.24em] text-gray-400 transition group-hover:border-accent-from/30 group-hover:text-accent-from">
          Go
        </div>
      </div>
    </motion.button>
  );
}
