import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getBikeProfile } from '../data/bikeProfile';
import { isAuthenticated } from '../data/auth';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-[#05050f] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(138,43,226,0.14),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(0,0,0,0.75))]" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-white/5 blur-3xl opacity-40" />

      <motion.div
        initial={{ opacity: 0, scale: 0.82 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        <div className="relative h-24 w-24">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-white/10"
          />
          <motion.div
            initial={{ opacity: 0, y: 10, rotate: -15 }}
            animate={{ opacity: 1, y: 0, rotate: 15 }}
            transition={{ delay: 0.25, duration: 0.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            className="absolute left-1/2 top-1/2 h-10 w-1 -translate-x-1/2 rounded-full bg-accent-from"
          />
          <div className="absolute inset-6 rounded-full bg-[#090913] border border-white/10 flex items-center justify-center">
            <span className="text-3xl font-black text-white tracking-tighter">RS</span>
          </div>
        </div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.75 }}
          className="text-4xl font-black text-white tracking-[0.12em] sm:text-5xl"
        >
          REV<span className="text-transparent bg-clip-text bg-metallic-gradient">SYNC</span>
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.75 }}
          className="text-gray-500 text-sm uppercase tracking-[0.24em] font-medium"
        >
          Ignition engaged
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2"
      >
        <div className="h-1 w-16 rounded-full bg-white/10" />
        <div className="h-1 w-16 rounded-full bg-white/10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 h-24 w-24 rounded-full bg-white/5 blur-2xl"
      />
    </div>
  );
}
