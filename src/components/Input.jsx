import React from 'react';

export default function Input({ label, type = 'text', placeholder, value, onChange, icon: Icon, className = '' }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <label className="text-gray-400 text-sm font-medium ml-1">{label}</label>}
      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
            <Icon size={20} />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 ${Icon ? 'pl-12' : 'pl-4'} text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-from/50 focus:border-accent-from transition-all`}
        />
      </div>
    </div>
  );
}
