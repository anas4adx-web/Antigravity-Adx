import React from 'react';

/**
 * GlassCard – a reusable container with glassmorphism effect.
 * Applies a translucent background with backdrop blur, subtle border and rounded corners.
 * Props:
 *   children – React nodes to render inside the card.
 *   className – optional additional Tailwind classes.
 */
export default function GlassCard({ children, className = '' }) {
  return (
    <div className={`glass-card ${className}`}>
      {children}
    </div>
  );
}
