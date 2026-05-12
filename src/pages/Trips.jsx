import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Bolt, CircleDot, Flame, Moon } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import DashboardMetricCard from '../components/DashboardMetricCard';
import QuickActionButton from '../components/QuickActionButton';
import Input from '../components/Input';
import { bikeProfile } from '../data/bikeProfile';

const ridingStyles = [
  {
    label: 'Relaxed',
    value: 'relaxed',
    factor: 1.08,
    description: 'Smooth cruising, low throttle.',
    icon: Moon,
  },
  {
    label: 'Balanced',
    value: 'balanced',
    factor: 1.0,
    description: 'Standard road pacing.',
    icon: CircleDot,
  },
  {
    label: 'Sport',
    value: 'sport',
    factor: 0.92,
    description: 'Firmer acceleration, dynamic cornering.',
    icon: Bolt,
  },
  {
    label: 'Aggressive',
    value: 'aggressive',
    factor: 0.82,
    description: 'High performance and responsive mode.',
    icon: Flame,
  },
];

const actionItems = [
  { title: 'Save route', subtitle: 'Keep this plan for your next ride' },
  { title: 'Preview map', subtitle: 'Open smart route overview' },
  { title: 'Share plan', subtitle: 'Send trip details to your team' },
];

export default function Trips() {
  const [start, setStart] = useState('Downtown Garage');
  const [destination, setDestination] = useState('Coastal Waypoint');
  const [distance, setDistance] = useState('280');
  const [fuelPrice, setFuelPrice] = useState('1.35');
  const [mileage, setMileage] = useState(String(bikeProfile.fuelEfficiency));
  const [ridingStyle, setRidingStyle] = useState('balanced');
  const [passenger, setPassenger] = useState(false);
  const [luggage, setLuggage] = useState(false);
  const [cityRatio, setCityRatio] = useState('45');

  const computed = useMemo(() => {
    const distanceValue = Number(distance) || 0;
    const fuelPriceValue = Number(fuelPrice) || 0;
    const mileageValue = Number(mileage) || 0;
    const cityPercent = Number(cityRatio) || 0;

    const styleFactor = ridingStyles.find((item) => item.value === ridingStyle)?.factor ?? 1;
    const passengerFactor = passenger ? 0.92 : 1;
    const luggageFactor = luggage ? 0.94 : 1;
    const cityEffect = 1 - Math.min(Math.max(cityPercent, 0), 100) * 0.0022;

    const predictedMileage = Math.max(10, mileageValue * styleFactor * passengerFactor * luggageFactor * cityEffect);
    const fuelNeeded = predictedMileage > 0 ? distanceValue / predictedMileage : 0;
    const fuelCost = fuelNeeded * fuelPriceValue;
    const suggestedStops = Math.max(1, Math.ceil(distanceValue / 220));
    const budget = fuelCost * 1.08;

    return {
      predictedMileage: predictedMileage.toFixed(1),
      fuelNeeded: fuelNeeded.toFixed(1),
      fuelCost: fuelCost.toFixed(2),
      suggestedStops,
      budget: budget.toFixed(2),
      styleNote: ridingStyles.find((item) => item.value === ridingStyle)?.description,
      riderInsight: passenger
        ? 'Added passenger weight may reduce mileage slightly.'
        : luggage
        ? 'Luggage load can cause mild fuel efficiency drop.'
        : 'Optimized route for stable performance and smooth economy.',
    };
  }, [distance, fuelPrice, mileage, ridingStyle, passenger, luggage, cityRatio]);

  return (
    <div className="min-h-screen bg-[#05050f] px-4 py-6 text-white sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-5"
      >
        <GlassCard className="p-5 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent-from/80">Smart Trip Planner</p>
              <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">Plan your next ride with precision.</h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
                Enter your route details and let RevSync deliver fuel estimates, cost predictions, and rider insights for a premium journey.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 shadow-glass">
              <p className="font-semibold text-white">Bike baseline</p>
              <p className="mt-1 text-sm text-gray-400">{bikeProfile.name} • {bikeProfile.mileage} km/L average</p>
            </div>
          </div>
        </GlassCard>

        <div className="grid gap-5 xl:grid-cols-[1.4fr_0.95fr]">
          <GlassCard className="p-5 sm:p-8">
            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Start location" placeholder="Downtown Garage" value={start} onChange={(e) => setStart(e.target.value)} />
                <Input label="Destination" placeholder="Coastal Waypoint" value={destination} onChange={(e) => setDestination(e.target.value)} />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">Total distance (km)</label>
                  <input
                    type="number"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent-from focus:ring-2 focus:ring-accent-from/20"
                    placeholder="280"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">Fuel price (₹/L)</label>
                  <input
                    type="number"
                    value={fuelPrice}
                    onChange={(e) => setFuelPrice(e.target.value)}
                    className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent-from focus:ring-2 focus:ring-accent-from/20"
                    placeholder="1.35"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">Bike mileage (km/L)</label>
                  <input
                    type="number"
                    value={mileage}
                    onChange={(e) => setMileage(e.target.value)}
                    className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent-from focus:ring-2 focus:ring-accent-from/20"
                    placeholder="36"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-400">Riding style</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {ridingStyles.map((style) => {
                      const Icon = style.icon;
                      const active = ridingStyle === style.value;

                      return (
                        <button
                          key={style.value}
                          type="button"
                          onClick={() => setRidingStyle(style.value)}
                          className={`group flex min-h-[56px] items-center gap-3 rounded-3xl border px-4 py-3 text-left transition-all duration-200 ${active ? 'border-accent-from bg-accent-from/10 shadow-glass' : 'border-white/10 bg-white/5 hover:border-accent-from/30 hover:bg-white/10'}`}
                          aria-pressed={active}
                        >
                          <div className={`flex h-12 w-12 items-center justify-center rounded-3xl ${active ? 'bg-accent-from text-black' : 'bg-white/10 text-accent-from'}`}>
                            <Icon size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">{style.label}</p>
                            <p className="mt-1 text-xs text-gray-400">{style.description}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">City/Highway ratio (%)</label>
                  <input
                    type="number"
                    value={cityRatio}
                    onChange={(e) => setCityRatio(e.target.value)}
                    className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent-from focus:ring-2 focus:ring-accent-from/20"
                    placeholder="45"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <label className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition hover:border-accent-from/30">
                  <input type="checkbox" checked={passenger} onChange={(e) => setPassenger(e.target.checked)} className="h-4 w-4 rounded border-white/20 bg-[#06060f] text-accent-from focus:ring-accent-from" />
                  Passenger / pillion
                </label>
                <label className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition hover:border-accent-from/30">
                  <input type="checkbox" checked={luggage} onChange={(e) => setLuggage(e.target.checked)} className="h-4 w-4 rounded border-white/20 bg-[#06060f] text-accent-from focus:ring-accent-from" />
                  Luggage load
                </label>
                <div className="rounded-3xl border border-white/10 bg-[#0b0b17]/80 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-gray-500">Riding notes</p>
                  <p className="mt-2 text-sm text-gray-400">Choose a riding style and optional load conditions for smarter planning.</p>
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="space-y-6">
            <GlassCard className="p-5 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-accent-from/80">Trip summary</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Smart rider insights</h2>
                </div>
                <span className="rounded-full bg-accent-from/10 px-4 py-2 text-sm font-semibold text-accent-from">Live forecast</span>
              </div>

              <div className="mt-6 space-y-3">
                <p className="text-sm text-gray-400">{computed.styleNote}</p>
                <p className="text-sm text-gray-400">{computed.riderInsight}</p>
                <div className="rounded-3xl border border-white/10 bg-[#0b0b17]/80 p-4 text-sm text-gray-300">
                  <p className="font-semibold text-white">Smart recommendation</p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-400">
                    <li>• Estimated fuel stop recommended after {computed.suggestedStops === 1 ? 180 : 220} km.</li>
                    <li>• A cautious riding style helps preserve efficiency on long journeys.</li>
                    <li>• Use the “Save route” action to keep this plan for later.</li>
                  </ul>
                </div>
              </div>
            </GlassCard>

          <GlassCard className="p-5 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <DashboardMetricCard title="Estimated fuel" value={`${computed.fuelNeeded} L`} description="Fuel needed for the trip" />
                <DashboardMetricCard title="Fuel cost" value={`₹${computed.fuelCost}`} description="Estimated fuel budget" />
                <DashboardMetricCard title="Predicted mileage" value={`${computed.predictedMileage} km/L`} description="Forecasted ride efficiency" />
                <DashboardMetricCard title={`Trip budget`} value={`₹${computed.budget}`} description="Cost including margin" />
              </div>
            </GlassCard>

            <div className="space-y-3">
              {actionItems.map((item) => (
                <QuickActionButton key={item.title} title={item.title} subtitle={item.subtitle} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
