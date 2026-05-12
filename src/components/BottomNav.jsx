import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, Wrench, Fuel, Map, User } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', to: '/dashboard', icon: Home },
  { label: 'Maintenance', to: '/maintenance', icon: Wrench },
  { label: 'Fuel', to: '/fuel', icon: Fuel },
  { label: 'Trips', to: '/trips', icon: Map },
  { label: 'Profile', to: '/profile', icon: User },
];

export default function BottomNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const visiblePaths = ['/dashboard', '/maintenance', '/fuel', '/trips', '/profile'];
  if (!visiblePaths.includes(currentPath)) return null;

  return (
    <nav className="fixed inset-x-4 bottom-4 z-50 rounded-[36px] border border-white/10 bg-white/10 p-2.5 shadow-glass backdrop-blur-3xl sm:inset-x-8 sm:p-3">
      <div className="grid grid-cols-5 gap-2">
        {navItems.map((item) => {
          const active = currentPath === item.to;
          const Icon = item.icon;

          return (
            <Link
              key={item.to}
              to={item.to}
              aria-label={item.label}
              className="relative flex min-h-[56px] items-center justify-center rounded-3xl px-2.5 py-2.5 text-center transition hover:text-white sm:px-3 sm:py-3"
            >
              {active && (
                <motion.span
                  layoutId="bottom-nav-active"
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-from to-accent-to opacity-90"
                  transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                />
              )}
              <div className="relative z-10 flex flex-col items-center gap-1 text-sm font-semibold">
                <Icon size={20} className={active ? 'text-white' : 'text-gray-400'} />
                <span className={`${active ? 'text-white' : 'text-gray-400'} hidden sm:inline-block`}>{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
