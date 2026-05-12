import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { bikeProfile } from '../data/bikeProfile';

export default function Fuel() {
  const remainingKm = Math.round(bikeProfile.fuelLeft * bikeProfile.mileage);
  const tankFillPercent = Math.round((bikeProfile.fuelLeft / bikeProfile.tankCapacity) * 100);

  return (
    <div className="min-h-screen bg-[#05050f] px-4 py-8 text-white sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-4"
      >
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-from/80">Fuel Center</p>
          <h1 className="mt-4 text-3xl font-semibold text-white">Fuel tracking and spend</h1>
          <p className="mt-3 text-sm leading-6 text-gray-400">Manage fuel logs, refuels and efficiency metrics in one premium view.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-[#0b0b17]/80 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Tank capacity</p>
              <p className="mt-3 text-3xl font-semibold text-white">{bikeProfile.tankCapacity} L</p>
              <p className="mt-2 text-sm text-gray-400">Current fuel available: {bikeProfile.fuelLeft.toFixed(1)} L</p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-[#0b0b17]/80 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Estimated range</p>
              <p className="mt-3 text-3xl font-semibold text-white">{remainingKm} km</p>
              <p className="mt-2 text-sm text-gray-400">Based on {bikeProfile.mileage} km/L average economy</p>
            </div>
          </div>
        </div>

        <GlassCard className="p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-[#0b0b17]/80 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Available fuel</p>
              <p className="mt-3 text-3xl font-semibold text-white">{tankFillPercent}%</p>
              <p className="mt-2 text-sm text-gray-400">Remaining capacity of the current tank</p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-[#0b0b17]/80 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Service reminder</p>
              <p className="mt-3 text-3xl font-semibold text-white">{Math.max(0, bikeProfile.nextServiceDueKm - bikeProfile.currentOdometer)} km</p>
              <p className="mt-2 text-sm text-gray-400">Until next scheduled service</p>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
