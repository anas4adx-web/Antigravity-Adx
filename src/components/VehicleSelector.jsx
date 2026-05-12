import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronRight, X } from 'lucide-react';
import { getBrands, getVehiclesByBrand, getVehicleById } from '../data/vehicles';

/**
 * VehicleSelector - Premium vehicle selection component
 * Supports brand-based navigation and search
 */
export default function VehicleSelector({ onSelect, selectedVehicleId }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(null);
  const brands = getBrands();

  // Get all vehicles for search
  const allVehicles = useMemo(() => {
    if (!selectedBrand) return [];
    return getVehiclesByBrand(selectedBrand);
  }, [selectedBrand]);

  // Filter vehicles by search
  const filteredVehicles = useMemo(() => {
    if (!searchTerm.trim()) return allVehicles;
    const term = searchTerm.toLowerCase();
    return allVehicles.filter(
      (v) =>
        v.model.toLowerCase().includes(term) ||
        v.category.toLowerCase().includes(term) ||
        v.engineCC.toString().includes(term)
    );
  }, [allVehicles, searchTerm]);

  const selectedVehicle = selectedVehicleId ? getVehicleById(selectedVehicleId) : null;

  return (
    <div className="space-y-5">
      {/* Selected Vehicle Display */}
      {selectedVehicle && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[28px] border border-accent-from/30 bg-accent-from/5 p-4 backdrop-blur"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-gray-400">Selected vehicle</p>
              <p className="mt-2 text-lg font-semibold text-white">{selectedVehicle.brand} {selectedVehicle.model}</p>
              <p className="mt-1 text-sm text-gray-400">
                {selectedVehicle.year} • {selectedVehicle.engineCC} cc • {selectedVehicle.category}
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedBrand(null);
                setSearchTerm('');
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition hover:bg-white/20"
              aria-label="Change vehicle"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}

      {/* Search Bar */}
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search model, cc, category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-3xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white placeholder-gray-500 outline-none transition focus:border-accent-from/50 focus:ring-2 focus:ring-accent-from/20"
        />
      </div>

      {/* Brand Selection */}
      {!selectedBrand ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-gray-400">Select a brand</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {brands.map((brand) => (
              <motion.button
                key={brand.key}
                onClick={() => setSelectedBrand(brand.key)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-[24px] border border-white/10 bg-white/5 p-4 text-left transition hover:border-accent-from/30 hover:bg-white/8"
              >
                <p className="font-semibold text-white">{brand.name}</p>
                <p className="mt-1 text-xs text-gray-400">{brand.models} models available</p>
                <div className="mt-3 flex items-center text-accent-from/60 group-hover:text-accent-from">
                  <span className="text-xs uppercase tracking-[0.2em]">Browse</span>
                  <ChevronRight size={14} className="ml-2" />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      ) : (
        /* Vehicle List */
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <button
            onClick={() => {
              setSelectedBrand(null);
              setSearchTerm('');
            }}
            className="text-sm text-gray-400 transition hover:text-accent-from"
          >
            ← Back to brands
          </button>

          {filteredVehicles.length > 0 ? (
            <div className="space-y-3">
              {filteredVehicles.map((vehicle) => (
                <motion.button
                  key={vehicle.id}
                  onClick={() => onSelect(vehicle.id)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full rounded-[24px] border p-4 text-left transition ${
                    selectedVehicleId === vehicle.id
                      ? 'border-accent-from/50 bg-accent-from/10'
                      : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-semibold text-white">{vehicle.model}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-gray-300">
                          {vehicle.year}
                        </span>
                        <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-gray-300">
                          {vehicle.engineCC} cc
                        </span>
                        <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-gray-300">
                          {vehicle.category}
                        </span>
                      </div>
                      <div className="mt-3 grid gap-2 text-xs text-gray-400 sm:grid-cols-2">
                        <span>Mileage: {vehicle.expectedMileage} km/L</span>
                        <span>Tank: {vehicle.tankCapacity}L</span>
                        <span>Power: {vehicle.maxPower}</span>
                        <span>Torque: {vehicle.maxTorque}</span>
                      </div>
                    </div>
                    <div className="ml-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent-from/10 text-accent-from">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          ) : (
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 text-center">
              <p className="text-sm text-gray-400">No vehicles match your search.</p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
