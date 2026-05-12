import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import MaintenanceCard from '../components/MaintenanceCard';
import { bikeProfile } from '../data/bikeProfile';

const serviceDefinitions = [
  {
    key: 'engineOil',
    title: 'Engine Oil',
    intervalKm: 3500,
    intervalMonths: 6,
    oem: {
      brand: 'Yamaha Genuine Oil',
      name: '4T Semi Synthetic',
      price: 420,
      reason: 'OEM match for stable lubrication and predictable wear.',
      image: 'https://images.unsplash.com/photo-1612068345505-e8b185f5a759?auto=format&fit=crop&w=400&q=80',
    },
    alternatives: [
      {
        brand: 'Motul',
        name: '300V Scooter Oil',
        price: 650,
        reason: 'Trusted third-party high-performance synthetic blend.',
        image: 'https://images.unsplash.com/photo-1517072205255-b0b8292838d3?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    key: 'brakePads',
    title: 'Brake Pads',
    intervalKm: 4500,
    intervalMonths: 9,
    oem: {
      brand: 'Yamaha Genuine Parts',
      name: 'Brake Pad Set',
      price: 1200,
      reason: 'OEM friction compound tuned for consistent stopping power.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80',
    },
    alternatives: [
      {
        brand: 'Brembo',
        name: 'Sport Brake Pad',
        price: 1800,
        reason: 'Trusted alternative with stable wear under aggressive riding.',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    key: 'airFilter',
    title: 'Air Filter',
    intervalKm: 6000,
    intervalMonths: 12,
    oem: {
      brand: 'Yamaha',
      name: 'Air Filter Element',
      price: 350,
      reason: 'OEM fitment helps preserve engine breathing and fuel efficiency.',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80',
    },
    alternatives: [
      {
        brand: 'K&N',
        name: 'High-Flow Filter',
        price: 900,
        reason: 'Trusted third-party performance air filter with longer life.',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    key: 'tireReplacement',
    title: 'Tire Replacement',
    intervalKm: 8000,
    intervalMonths: 10,
    oem: {
      brand: 'Yamaha',
      name: 'OEM Tube & Tyre Kit',
      price: 2600,
      reason: 'Match the factory ride feel with OEM-approved tire geometry.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80',
    },
    alternatives: [
      {
        brand: 'Michelin',
        name: 'City Grip Scooter Tyres',
        price: 3400,
        reason: 'Well-regarded for grip and wear balance in urban riding.',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    key: 'batteryReplacement',
    title: 'Battery',
    intervalKm: 12000,
    intervalMonths: 24,
    oem: {
      brand: 'Yamaha',
      name: 'Battery Pack',
      price: 3200,
      reason: 'OEM reliability reduces the chance of starter and charging issues.',
      image: 'https://images.unsplash.com/photo-1519838264498-6313a55a44ea?auto=format&fit=crop&w=400&q=80',
    },
    alternatives: [
      {
        brand: 'Exide',
        name: 'Maintenance-Free Battery',
        price: 2400,
        reason: 'Trusted replacement with stable cranking power for scooters.',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    key: 'cvtBeltReplacement',
    title: 'CVT Belt',
    intervalKm: 10000,
    intervalMonths: 18,
    oem: {
      brand: 'Yamaha',
      name: 'Drive Belt',
      price: 2100,
      reason: 'OEM belt keeps CVT power delivery consistent and durable.',
      image: 'https://images.unsplash.com/photo-1506596073252-829f1c3d4f8b?auto=format&fit=crop&w=400&q=80',
    },
    alternatives: [
      {
        brand: 'Malossi',
        name: 'Sport CVT Belt',
        price: 2600,
        reason: 'Trusted third-party option for riders with higher wear rates.',
        image: 'https://images.unsplash.com/photo-1519817650390-64a93db511aa?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    key: 'coolantChange',
    title: 'Coolant',
    intervalKm: 12000,
    intervalMonths: 24,
    oem: {
      brand: 'Yamaha',
      name: 'Coolant Fluid',
      price: 400,
      reason: 'OEM coolant helps preserve engine temperatures during daily use.',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    },
    alternatives: [
      {
        brand: 'Castrol',
        name: 'Engine Coolant',
        price: 480,
        reason: 'Trusted aftermarket fluid for consistent thermal performance.',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
];

const ridingImpact = {
  relaxed: { brake: 0.9, oil: 0.9, tire: 0.92, belt: 0.95 },
  balanced: { brake: 1.0, oil: 1.0, tire: 1.0, belt: 1.0 },
  sport: { brake: 1.12, oil: 1.1, tire: 1.1, belt: 1.08 },
  aggressive: { brake: 1.25, oil: 1.2, tire: 1.22, belt: 1.18 },
};

function formatLabel(key) {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
}

function parseDate(dateString) {
  if (!dateString) {
    return null;
  }
  const date = new Date(dateString);
  return Number.isNaN(date.getTime()) ? null : date;
}

export default function Maintenance() {
  const maintenanceItems = useMemo(() => {
    const style = bikeProfile.ridingStyle || 'balanced';
    const impact = ridingImpact[style] || ridingImpact.balanced;
    const now = new Date();

    return serviceDefinitions.map((item) => {
      const history = bikeProfile.serviceHistory?.[item.key] || {};
      const lastDate = parseDate(history.lastChangedDate);
      const lastKm = Number(history.lastChangedKm) || 0;
      const kmSince = history.unknown ? null : Math.max(0, bikeProfile.currentOdometer - lastKm);
      const monthsSince = lastDate ? Math.max(1, Math.ceil((now - lastDate) / (1000 * 60 * 60 * 24 * 30))) : null;
      const wearFactor = item.key === 'brakePads' ? impact.brake : item.key === 'engineOil' ? impact.oil : item.key === 'tireReplacement' ? impact.tire : item.key === 'cvtBeltReplacement' ? impact.belt : 1.0;
      const estimatedWear = kmSince !== null ? Math.min(100, Math.round((kmSince / item.intervalKm) * 100 * wearFactor)) : null;
      const remainingKm = kmSince !== null ? Math.max(0, Math.round(item.intervalKm - kmSince * wearFactor)) : null;
      const intervalLabel = remainingKm !== null ? (remainingKm <= 0 ? 'Due now' : `In ~${remainingKm.toLocaleString()} km`) : 'Inspection advised';
      const risk = estimatedWear !== null ? (estimatedWear > 90 ? 'urgent' : estimatedWear > 70 ? 'warning' : 'good') : 'warning';
      const summary = history.unknown
        ? 'Estimate unavailable; rely on visual inspection and ride feel.'
        : `Estimated ${Math.min(100, estimatedWear)}% wear after ${monthsSince} months of service.`;
      const inspection = history.unknown
        ? 'Inspect immediately if you feel any vibration or drag.'
        : remainingKm !== null && remainingKm <= 600
        ? `Recommended within ${remainingKm.toLocaleString()} km`
        : `Next check in ${remainingKm?.toLocaleString() || '—'} km`;
      const riskText = risk === 'urgent' ? 'High risk' : risk === 'warning' ? 'Moderate risk' : 'Stable';

      return {
        title: item.title,
        status: risk,
        lastService: history.lastChangedDate || 'Not recorded',
        km: history.unknown ? 'Unknown' : kmSince !== null ? `${kmSince.toLocaleString()} km` : 'Unknown',
        nextDue: intervalLabel,
        progress: estimatedWear !== null ? Math.min(100, estimatedWear) : 45,
        summary,
        inspection,
        remainingKm: remainingKm !== null ? `${remainingKm.toLocaleString()} km` : 'Unknown',
        recommendations: [item.oem, ...item.alternatives],
      };
    });
  }, []);

  const anomalyCard = useMemo(() => {
    const gpsKm = Number(bikeProfile.recentGpsTripKm || 0);
    const odoKm = Number(bikeProfile.recentOdometerKm || 0);
    const fuelLiters = Number(bikeProfile.recentFuelUsedLiters || 0);
    if (!gpsKm || !odoKm || !fuelLiters) {
      return null;
    }

    const delta = Math.abs(gpsKm - odoKm);
    const fuelKmPerL = odoKm > 0 ? odoKm / fuelLiters : 0;
    const expectedKmPerL = bikeProfile.fuelEfficiency || 30;
    const fuelMismatch = Math.abs(fuelKmPerL - expectedKmPerL) / expectedKmPerL;

    if (delta > 60 || fuelMismatch > 0.22) {
      return {
        title: 'Possible odometer issue detected',
        description: `GPS distance differs by ${delta.toLocaleString()} km from odometer progression. Fuel efficiency is ${fuelKmPerL.toFixed(1)} km/L, compared with expected ${expectedKmPerL} km/L.`,
        advice: 'Check speedometer, odometer cable, or wheel speed sensor before your next major service.',
        causes: ['Speed sensor issue', 'Speedometer cable', 'Meter malfunction'],
      };
    }
    return null;
  }, []);

  const urgentCount = maintenanceItems.filter((item) => item.status === 'urgent').length;
  const stableCount = maintenanceItems.filter((item) => item.status === 'good').length;
  const dueSoonCount = maintenanceItems.filter((item) => item.status === 'warning').length;
  const nextServiceRemaining = Math.max(0, bikeProfile.nextServiceDueKm - bikeProfile.currentOdometer);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05050f] px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(138,43,226,0.24),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(95,158,160,0.18),_transparent_24%),radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-2xl sm:p-7"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-accent-from/80">Maintenance Tracker</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">RevSync lifecycle health</h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                Keep every service interval in view with a premium maintenance control center designed for modern riders.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-[#0b0b17]/80 px-5 py-4 shadow-glass">
              <p className="text-sm uppercase tracking-[0.28em] text-gray-400">Next critical task</p>
              <p className="mt-2 text-xl font-semibold text-white">Engine Oil Renewal</p>
              <p className="mt-1 text-sm text-gray-400">Due within {Math.max(0, bikeProfile.nextServiceDueKm - bikeProfile.currentOdometer)} km</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-gray-500">Alerts</p>
            <p className="mt-4 text-4xl font-semibold text-white">{urgentCount} urgent</p>
            <p className="mt-2 text-sm text-gray-400">Critical service items that need attention soon.</p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-gray-500">Healthy services</p>
            <p className="mt-4 text-4xl font-semibold text-white">{stableCount} items</p>
            <p className="mt-2 text-sm text-gray-400">Services with healthy wear estimates and solid remaining life.</p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-gray-500">Due soon</p>
            <p className="mt-4 text-4xl font-semibold text-white">{dueSoonCount} items</p>
            <p className="mt-2 text-sm text-gray-400">Maintenance due soon based on recent service intervals and riding impact.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-8 grid gap-6 lg:grid-cols-2"
        >
          <div className="space-y-6">
            {anomalyCard && (
              <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-glass backdrop-blur-2xl">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-300">Diagnostic alert</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{anomalyCard.title}</h2>
                <p className="mt-4 text-sm leading-6 text-gray-300">{anomalyCard.description}</p>
                <div className="mt-4 rounded-[24px] border border-white/10 bg-[#0b0b17]/80 p-4 text-sm text-gray-400">
                  <p className="font-semibold text-white">Possible causes</p>
                  <ul className="mt-3 space-y-2">
                    {anomalyCard.causes.map((cause) => (
                      <li key={cause}>• {cause}</li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4 text-sm text-gray-400">{anomalyCard.advice}</p>
              </div>
            )}

            {maintenanceItems.slice(0, 4).map((item) => (
              <MaintenanceCard key={item.title} {...item} />
            ))}
          </div>
          <div className="space-y-6">
            {maintenanceItems.slice(4).map((item) => (
              <MaintenanceCard key={item.title} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
