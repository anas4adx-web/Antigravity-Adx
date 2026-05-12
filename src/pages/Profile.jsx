import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import QuickActionButton from '../components/QuickActionButton';
import { bikeProfile } from '../data/bikeProfile';

const profileStats = [
  {
    title: 'Current KM',
    value: `${bikeProfile.currentOdometer.toLocaleString()} km`,
    description: 'Last logged ride distance',
    icon: null,
  },
  {
    title: 'Insurance Expiry',
    value: bikeProfile.insuranceExpiry,
    description: 'Renew before the ride season',
    icon: null,
  },
  {
    title: 'PUC Expiry',
    value: bikeProfile.pucExpiry,
    description: 'Clean emissions certified',
    icon: null,
  },
  {
    title: 'Last Service',
    value: bikeProfile.lastOilChange,
    description: 'Premium tune and checkup',
    icon: null,
  },
];

const quickActions = [
  { title: 'Update profile', subtitle: 'Edit owner and bike details' },
  { title: 'Schedule service', subtitle: 'Book your next maintenance' },
  { title: 'Fuel log', subtitle: 'Add latest fill-up details' },
];

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#05050f] px-4 py-6 text-white sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-5"
      >
        <section className="grid gap-5 lg:grid-cols-[1.3fr_0.95fr]">
          <GlassCard className="p-5 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative">
                  <div className="h-24 w-24 rounded-[32px] bg-gradient-to-br from-accent-from to-accent-to p-1 shadow-glass sm:h-28 sm:w-28">
                    <div className="flex h-full w-full items-center justify-center rounded-[28px] bg-[#0b0b17]">
                      <img
                        src="https://images.unsplash.com/photo-1518378188024-114e4d8a65b3?auto=format&fit=crop&w=400&q=80"
                        alt="Bike profile"
                        className="h-full w-full rounded-[28px] object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Bike profile</p>
                  <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{bikeProfile.name}</h1>
                  <p className="mt-2 text-sm text-gray-400">{bikeProfile.model}</p>
                  <p className="mt-3 text-sm text-gray-400">Reg. No: {bikeProfile.registration}</p>
                </div>
              </div>

              <button className="inline-flex min-h-[48px] items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Edit Profile
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-[#0b0b17]/80 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Bike health score</p>
                <p className="mt-3 text-4xl font-semibold text-white">{bikeProfile.bikeHealthScore}<span className="text-accent-from">%</span></p>
                <p className="mt-2 text-sm text-gray-400">Optimized for performance and reliability.</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-[#0b0b17]/80 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Fuel efficiency</p>
                <p className="mt-3 text-4xl font-semibold text-white">{bikeProfile.fuelEfficiency} km/L</p>
                <p className="mt-2 text-sm text-gray-400">Average across the last 5 rides.</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent-from/80">Rider focus</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Maintenance quick actions</h2>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {quickActions.map((action) => (
                <QuickActionButton
                  key={action.title}
                  title={action.title}
                  subtitle={action.subtitle}
                  className="bg-white/5"
                />
              ))}
            </div>
          </GlassCard>
        </section>

        <section className="space-y-5">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-2xl sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Bike lifecycle</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Vital registration & service data</h2>
              </div>
              <span className="rounded-full bg-accent-from/10 px-4 py-2 text-sm font-semibold text-accent-from">Premium record</span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {profileStats.map((item) => (
                <div key={item.title} className="rounded-[28px] border border-white/10 bg-[#0b0b17]/80 p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500">{item.title}</p>
                  <p className="mt-3 text-xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
