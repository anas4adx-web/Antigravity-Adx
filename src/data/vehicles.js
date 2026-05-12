/**
 * RevSync Vehicle Database
 * Comprehensive Indian motorcycle and scooter specifications
 */

export const vehicles = {
  yamaha: [
    {
      id: 'yamaha-ray-zr-2021',
      brand: 'Yamaha',
      model: 'Ray ZR',
      year: 2021,
      category: 'Scooter',
      engineCC: 110,
      transmission: 'Automatic CVT',
      coolingType: 'Air cooled',
      fuelType: 'Petrol',
      expectedMileage: 45, // km/L
      tankCapacity: 5.2, // liters
      oilCapacity: 0.75, // liters
      tyreSize: '100/90-10 (front) & 100/90-10 (rear)',
      serviceIntervalKm: 1000,
      maxPower: '8 bhp @ 7500 rpm',
      maxTorque: '8.8 Nm @ 5500 rpm',
      features: ['LED Headlight', 'Digital Speedometer', 'Underseat Storage'],
    },
    {
      id: 'yamaha-fz-fi-v3',
      brand: 'Yamaha',
      model: 'FZ-Fi v3.0',
      year: 2021,
      category: 'Street Bike',
      engineCC: 149,
      transmission: 'Manual',
      coolingType: 'Air cooled',
      fuelType: 'Petrol',
      expectedMileage: 42, // km/L
      tankCapacity: 14, // liters
      oilCapacity: 1.1, // liters
      tyreSize: '140/60-17 (front) & 130/70-17 (rear)',
      serviceIntervalKm: 1500,
      maxPower: '13.1 bhp @ 6000 rpm',
      maxTorque: '12.8 Nm @ 4800 rpm',
      features: ['ABS', 'Digital Speedometer', 'Side reflectors', 'Stylish design'],
    },
    {
      id: 'yamaha-fz25',
      brand: 'Yamaha',
      model: 'FZ25',
      year: 2022,
      category: 'Street Bike',
      engineCC: 250,
      transmission: 'Manual',
      coolingType: 'Air cooled',
      fuelType: 'Petrol',
      expectedMileage: 38, // km/L
      tankCapacity: 16, // liters
      oilCapacity: 1.3, // liters
      tyreSize: '150/60-17 (front) & 130/70-17 (rear)',
      serviceIntervalKm: 2000,
      maxPower: '20.9 bhp @ 8000 rpm',
      maxTorque: '19.0 Nm @ 6500 rpm',
      features: ['ABS', 'Dual channel ABS', 'LED Lamps', 'Aggressive design'],
    },
  ],
  honda: [
    {
      id: 'honda-activa-6',
      brand: 'Honda',
      model: 'Activa 6G',
      year: 2022,
      category: 'Scooter',
      engineCC: 110,
      transmission: 'Automatic CVT',
      coolingType: 'Air cooled',
      fuelType: 'Petrol',
      expectedMileage: 48, // km/L
      tankCapacity: 5.3, // liters
      oilCapacity: 0.8, // liters
      tyreSize: '100/90-10 (front) & 90/100-10 (rear)',
      serviceIntervalKm: 1000,
      maxPower: '8 bhp @ 7500 rpm',
      maxTorque: '8.8 Nm @ 5500 rpm',
      features: ['Smart Power, Anti-theft Helmet Storage', 'Bright LED Headlight'],
    },
    {
      id: 'honda-cb-shine-sp',
      brand: 'Honda',
      model: 'CB Shine SP',
      year: 2022,
      category: 'Street Bike',
      engineCC: 125,
      transmission: 'Manual',
      coolingType: 'Air cooled',
      fuelType: 'Petrol',
      expectedMileage: 55, // km/L (excellent fuel efficiency)
      tankCapacity: 12, // liters
      oilCapacity: 1.0, // liters
      tyreSize: '90/100-18 (front) & 130/70-17 (rear)',
      serviceIntervalKm: 1500,
      maxPower: '11 bhp @ 8000 rpm',
      maxTorque: '11 Nm @ 6000 rpm',
      features: ['LED Headlight', 'Mobile Charging', 'Comfort Seat', 'Fuel Efficient'],
    },
    {
      id: 'honda-cb-350',
      brand: 'Honda',
      model: 'CB 350',
      year: 2022,
      category: 'Street Bike',
      engineCC: 350,
      transmission: 'Manual',
      coolingType: 'Air cooled',
      fuelType: 'Petrol',
      expectedMileage: 35, // km/L
      tankCapacity: 15, // liters
      oilCapacity: 1.3, // liters
      tyreSize: '130/70-18 (front) & 110/80-18 (rear)',
      serviceIntervalKm: 2500,
      maxPower: '20.8 bhp @ 5500 rpm',
      maxTorque: '30 Nm @ 3000 rpm',
      features: ['Classic Styling', 'ABS', 'Comfort Ergonomics', 'Retro Design'],
    },
  ],
  suzuki: [
    {
      id: 'suzuki-gixxer-fi',
      brand: 'Suzuki',
      model: 'Gixxer Fi',
      year: 2022,
      category: 'Street Bike',
      engineCC: 155,
      transmission: 'Manual',
      coolingType: 'Air cooled',
      fuelType: 'Petrol',
      expectedMileage: 38, // km/L
      tankCapacity: 12, // liters
      oilCapacity: 1.0, // liters
      tyreSize: '130/70-17 (front) & 110/70-17 (rear)',
      serviceIntervalKm: 1500,
      maxPower: '14.1 bhp @ 8000 rpm',
      maxTorque: '14 Nm @ 6400 rpm',
      features: ['Fuel Injection', 'ABS', 'Digital Console', 'Sporty Design'],
    },
    {
      id: 'suzuki-access-125',
      brand: 'Suzuki',
      model: 'Access 125',
      year: 2021,
      category: 'Scooter',
      engineCC: 125,
      transmission: 'Automatic CVT',
      coolingType: 'Air cooled',
      fuelType: 'Petrol',
      expectedMileage: 46, // km/L
      tankCapacity: 5.2, // liters
      oilCapacity: 0.8, // liters
      tyreSize: '100/90-10 (front) & 90/100-10 (rear)',
      serviceIntervalKm: 1000,
      maxPower: '8.8 bhp @ 7500 rpm',
      maxTorque: '9.5 Nm @ 5000 rpm',
      features: ['Spacious Under-seat Storage', 'LED Headlight', 'Comfortable Seat'],
    },
  ],
  tvs: [
    {
      id: 'tvs-apache-rtr-160',
      brand: 'TVS',
      model: 'Apache RTR 160',
      year: 2022,
      category: 'Street Bike',
      engineCC: 159.7,
      transmission: 'Manual',
      coolingType: 'Air cooled',
      fuelType: 'Petrol',
      expectedMileage: 40, // km/L
      tankCapacity: 12, // liters
      oilCapacity: 1.0, // liters
      tyreSize: '100/80-17 (front) & 130/70-17 (rear)',
      serviceIntervalKm: 1500,
      maxPower: '16.45 bhp @ 8500 rpm',
      maxTorque: '13 Nm @ 6500 rpm',
      features: ['Fuel Injection', 'ABS', 'Sport Design', 'Digital Speedometer'],
    },
    {
      id: 'tvs-jupiter',
      brand: 'TVS',
      model: 'Jupiter',
      year: 2022,
      category: 'Scooter',
      engineCC: 110,
      transmission: 'Automatic CVT',
      coolingType: 'Air cooled',
      fuelType: 'Petrol',
      expectedMileage: 50, // km/L
      tankCapacity: 5.1, // liters
      oilCapacity: 0.75, // liters
      tyreSize: '100/90-10 (front) & 100/90-10 (rear)',
      serviceIntervalKm: 1000,
      maxPower: '8 bhp @ 7500 rpm',
      maxTorque: '8.2 Nm @ 5500 rpm',
      features: ['Front and Rear Disc Brakes', 'LED Headlight', 'Spacious Boot'],
    },
  ],
  'royal-enfield': [
    {
      id: 'royal-enfield-bullet-350',
      brand: 'Royal Enfield',
      model: 'Bullet 350',
      year: 2022,
      category: 'Cruiser',
      engineCC: 346,
      transmission: 'Manual',
      coolingType: 'Air cooled',
      fuelType: 'Petrol',
      expectedMileage: 33, // km/L
      tankCapacity: 13.8, // liters
      oilCapacity: 2.0, // liters
      tyreSize: '100/90-19 (front) & 130/70-17 (rear)',
      serviceIntervalKm: 2000,
      maxPower: '19.36 bhp @ 5250 rpm',
      maxTorque: '28 Nm @ 4000 rpm',
      features: ['Classic Styling', 'Single Downtube Frame', 'Twin Shock Suspension'],
    },
    {
      id: 'royal-enfield-classic-350',
      brand: 'Royal Enfield',
      model: 'Classic 350',
      year: 2022,
      category: 'Cruiser',
      engineCC: 346,
      transmission: 'Manual',
      coolingType: 'Air cooled',
      fuelType: 'Petrol',
      expectedMileage: 35, // km/L
      tankCapacity: 13.8, // liters
      oilCapacity: 2.0, // liters
      tyreSize: '100/90-19 (front) & 130/70-17 (rear)',
      serviceIntervalKm: 2000,
      maxPower: '19.36 bhp @ 5250 rpm',
      maxTorque: '28 Nm @ 4000 rpm',
      features: ['Retro Styling', 'Chrome Accents', 'Dual Cradle Frame', 'Comfort Seat'],
    },
  ],
  bajaj: [
    {
      id: 'bajaj-pulsar-150',
      brand: 'Bajaj',
      model: 'Pulsar 150',
      year: 2022,
      category: 'Street Bike',
      engineCC: 149.5,
      transmission: 'Manual',
      coolingType: 'Air cooled',
      fuelType: 'Petrol',
      expectedMileage: 42, // km/L
      tankCapacity: 12, // liters
      oilCapacity: 1.0, // liters
      tyreSize: '90/80-17 (front) & 130/70-17 (rear)',
      serviceIntervalKm: 1500,
      maxPower: '13.6 bhp @ 8000 rpm',
      maxTorque: '12.24 Nm @ 6000 rpm',
      features: ['ABS', 'Digital Speedometer', 'Sporty Design', 'LED Taillight'],
    },
    {
      id: 'bajaj-pulsar-125',
      brand: 'Bajaj',
      model: 'Pulsar 125',
      year: 2022,
      category: 'Street Bike',
      engineCC: 125,
      transmission: 'Manual',
      coolingType: 'Air cooled',
      fuelType: 'Petrol',
      expectedMileage: 50, // km/L
      tankCapacity: 12, // liters
      oilCapacity: 0.9, // liters
      tyreSize: '80/100-18 (front) & 100/90-18 (rear)',
      serviceIntervalKm: 1500,
      maxPower: '11.8 bhp @ 8500 rpm',
      maxTorque: '11 Nm @ 6500 rpm',
      features: ['ABS (Single channel)', 'Digital Console', 'LED Lighting', 'Sporty Look'],
    },
    {
      id: 'bajaj-chetak',
      brand: 'Bajaj',
      model: 'Chetak',
      year: 2022,
      category: 'Scooter',
      engineCC: 110,
      transmission: 'Automatic CVT',
      coolingType: 'Air cooled',
      fuelType: 'Petrol',
      expectedMileage: 52, // km/L
      tankCapacity: 5, // liters
      oilCapacity: 0.7, // liters
      tyreSize: '90/100-10 (front) & 90/100-10 (rear)',
      serviceIntervalKm: 1000,
      maxPower: '8 bhp @ 7500 rpm',
      maxTorque: '8.2 Nm @ 5500 rpm',
      features: ['Retro Styling', 'Spacious Seat', 'Under-seat Storage', 'Telescopic Front Fork'],
    },
  ],
  ktm: [
    {
      id: 'ktm-390-duke',
      brand: 'KTM',
      model: '390 Duke',
      year: 2022,
      category: 'Street Bike',
      engineCC: 373.2,
      transmission: 'Manual',
      coolingType: 'Liquid cooled',
      fuelType: 'Petrol',
      expectedMileage: 32, // km/L
      tankCapacity: 13.7, // liters
      oilCapacity: 1.45, // liters
      tyreSize: '110/80-17 (front) & 140/70-17 (rear)',
      serviceIntervalKm: 2000,
      maxPower: '43.5 bhp @ 8000 rpm',
      maxTorque: '37 Nm @ 5500 rpm',
      features: ['ABS', 'Liquid Cooling', 'LED DRL', 'Aggressive Design'],
    },
    {
      id: 'ktm-250-duke',
      brand: 'KTM',
      model: '250 Duke',
      year: 2022,
      category: 'Street Bike',
      engineCC: 248.8,
      transmission: 'Manual',
      coolingType: 'Liquid cooled',
      fuelType: 'Petrol',
      expectedMileage: 36, // km/L
      tankCapacity: 13.7, // liters
      oilCapacity: 1.4, // liters
      tyreSize: '100/80-17 (front) & 130/70-17 (rear)',
      serviceIntervalKm: 2000,
      maxPower: '29.66 bhp @ 8000 rpm',
      maxTorque: '24 Nm @ 6000 rpm',
      features: ['ABS', 'Liquid Cooling', 'LED Lights', 'Sporty Styling'],
    },
    {
      id: 'ktm-125-duke',
      brand: 'KTM',
      model: '125 Duke',
      year: 2022,
      category: 'Street Bike',
      engineCC: 124.7,
      transmission: 'Manual',
      coolingType: 'Liquid cooled',
      fuelType: 'Petrol',
      expectedMileage: 40, // km/L
      tankCapacity: 11, // liters
      oilCapacity: 1.0, // liters
      tyreSize: '100/80-17 (front) & 120/80-17 (rear)',
      serviceIntervalKm: 1500,
      maxPower: '14.5 bhp @ 8000 rpm',
      maxTorque: '12 Nm @ 6500 rpm',
      features: ['ABS', 'Liquid Cooling', 'LED Lights', 'Dynamic Design'],
    },
  ],
};

/**
 * Flatten vehicle list for search and lookup
 */
export function getAllVehicles() {
  const all = [];
  Object.keys(vehicles).forEach((brand) => {
    all.push(...vehicles[brand]);
  });
  return all;
}

/**
 * Get vehicle by ID
 */
export function getVehicleById(vehicleId) {
  const all = getAllVehicles();
  return all.find((v) => v.id === vehicleId);
}

/**
 * Get vehicles by brand
 */
export function getVehiclesByBrand(brand) {
  return vehicles[brand] || [];
}

/**
 * Get unique brands
 */
export function getBrands() {
  return Object.keys(vehicles).map((key) => {
    // Convert key to brand name (royal-enfield -> Royal Enfield)
    const brandName = key
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return {
      key,
      name: brandName,
      models: vehicles[key].length,
    };
  });
}

/**
 * Generate default bike profile from vehicle data
 */
export function generateBikeProfileFromVehicle(vehicleId) {
  const vehicle = getVehicleById(vehicleId);
  if (!vehicle) return null;

  return {
    vehicleId: vehicleId,
    name: `${vehicle.brand} ${vehicle.model}`,
    model: `${vehicle.year} • ${vehicle.category}`,
    brand: vehicle.brand,
    registration: 'RVS-7X21', // Will be set by user
    currentOdometer: 0,
    fuelLeft: vehicle.tankCapacity * 0.7, // Start at 70% fuel
    mileage: vehicle.expectedMileage,
    fuelEfficiency: vehicle.expectedMileage,
    tankCapacity: vehicle.tankCapacity,
    serviceIntervalKm: vehicle.serviceIntervalKm,
    nextServiceDueKm: vehicle.serviceIntervalKm,
    lastOilChange: new Date().toISOString().split('T')[0],
    insuranceExpiry: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
      .toISOString()
      .split('T')[0],
    pucExpiry: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
      .toISOString()
      .split('T')[0],
    bikeHealthScore: 95,
    engineCC: vehicle.engineCC,
    transmission: vehicle.transmission,
    coolingType: vehicle.coolingType,
    oilCapacity: vehicle.oilCapacity,
    tyreSize: vehicle.tyreSize,
    maxPower: vehicle.maxPower,
    maxTorque: vehicle.maxTorque,
    category: vehicle.category,
    features: vehicle.features,
  };
}
