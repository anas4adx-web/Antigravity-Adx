import { generateBikeProfileFromVehicle } from './vehicles.js';

/**
 * Default bike profile (fallback for Yamaha Ray ZR 2021)
 */
const defaultProfile = {
  vehicleId: 'yamaha-ray-zr-2021',
  name: 'Kuro Racer',
  model: '2024 Nebula Edition • Streetfighter',
  brand: 'Yamaha',
  registration: 'RVS-7X21',
  mileage: 36,
  tankCapacity: 12,
  fuelLeft: 4.2,
  currentOdometer: 8920,
  serviceIntervalKm: 1000,
  lastOilChange: '2026-05-04',
  insuranceExpiry: '2026-11-09',
  pucExpiry: '2026-07-16',
  nextServiceDueKm: 9000,
  bikeHealthScore: 94,
  fuelEfficiency: 36,
  ridingStyle: 'balanced',
  onboardingComplete: false,
  serviceHistory: {
    engineOil: { lastChangedDate: '2026-05-04', lastChangedKm: 7900, unknown: false },
    brakePads: { lastChangedDate: '2026-04-02', lastChangedKm: 8430, unknown: false },
    airFilter: { lastChangedDate: '2026-04-24', lastChangedKm: 8720, unknown: false },
    tireReplacement: { lastChangedDate: '2026-02-18', lastChangedKm: 7300, unknown: false },
    batteryReplacement: { lastChangedDate: '2025-11-21', lastChangedKm: 5200, unknown: false },
    cvtBeltReplacement: { lastChangedDate: '2025-10-10', lastChangedKm: 4600, unknown: false },
    coolantChange: { lastChangedDate: '2025-12-05', lastChangedKm: 6200, unknown: false },
  },
  engineCC: 110,
  transmission: 'Automatic CVT',
  coolingType: 'Air cooled',
  oilCapacity: 0.75,
  tyreSize: '100/90-10 (front) & 100/90-10 (rear)',
  maxPower: '8 bhp @ 7500 rpm',
  maxTorque: '8.8 Nm @ 5500 rpm',
  category: 'Scooter',
  features: ['LED Headlight', 'Digital Speedometer', 'Underseat Storage'],
};

/**
 * Initialize bike profile - loads from localStorage or returns default
 */
function initializeBikeProfile() {
  try {
    const saved = localStorage.getItem('revSync_bikeProfile');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn('Could not load bike profile from storage:', e);
  }
  return { ...defaultProfile };
}

let bikeProfile = initializeBikeProfile();

/**
 * Get current bike profile
 */
export function getBikeProfile() {
  return bikeProfile;
}

/**
 * Update bike profile with new vehicle
 * @param {string} vehicleId - ID of the vehicle to load
 * @returns {object} Updated profile or null if vehicle not found
 */
export function setBikeProfileFromVehicle(vehicleId) {
  const newProfile = generateBikeProfileFromVehicle(vehicleId);
  if (newProfile) {
    bikeProfile = newProfile;
    try {
      localStorage.setItem('revSync_bikeProfile', JSON.stringify(bikeProfile));
    } catch (e) {
      console.warn('Could not save bike profile to storage:', e);
    }
    return bikeProfile;
  }
  return null;
}

/**
 * Update specific bike profile fields
 * @param {object} updates - Fields to update
 */
export function updateBikeProfile(updates) {
  bikeProfile = { ...bikeProfile, ...updates };
  try {
    localStorage.setItem('revSync_bikeProfile', JSON.stringify(bikeProfile));
  } catch (e) {
    console.warn('Could not save bike profile to storage:', e);
  }
  return bikeProfile;
}

/**
 * Reset to default profile
 */
export function resetBikeProfile() {
  bikeProfile = { ...defaultProfile };
  try {
    localStorage.removeItem('revSync_bikeProfile');
  } catch (e) {
    console.warn('Could not clear bike profile from storage:', e);
  }
  return bikeProfile;
}

// Export default profile object for backward compatibility
export { bikeProfile };
