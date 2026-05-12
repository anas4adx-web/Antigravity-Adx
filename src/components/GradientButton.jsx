import React from 'react';
import { motion } from 'framer-motion';

export default function GradientButton({ children, onClick, className = '', type = 'button', disabled = false }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`gradient-btn w-full py-4 text-lg font-semibold tracking-wide transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </motion.button>
  );
}
