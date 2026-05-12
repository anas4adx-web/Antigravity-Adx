import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Check, Edit2 } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import VehicleSelector from '../components/VehicleSelector';
import Input from '../components/Input';
import { setBikeProfileFromVehicle, updateBikeProfile } from '../data/bikeProfile';
import { getVehicleById } from '../data/vehicles';

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState('vehicle'); // 'vehicle' | 'customize' | 'complete'
  const [selectedVehicleId, setSelectedVehicleId] = useState(null);
  const [registration, setRegistration] = useState('');
  const [odometer, setOdometer] = useState('0');
  const [errors, setErrors] = useState({});

  const selectedVehicle = selectedVehicleId ? getVehicleById(selectedVehicleId) : null;

  const handleVehicleSelect = (vehicleId) => {
    setSelectedVehicleId(vehicleId);
  };

  const handleContinue = () => {
    if (!selectedVehicleId) {
      setErrors({ vehicle: 'Please select a vehicle' });
      return;
    }
    setStep('customize');
    setErrors({});
  };

  const handleSetup = () => {
    const newErrors = {};

    if (!registration.trim()) {
      newErrors.registration = 'Registration number is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Create profile from vehicle and apply customizations
    const profile = setBikeProfileFromVehicle(selectedVehicleId);
    if (profile) {
      updateBikeProfile({
        registration,
        currentOdometer: parseInt(odometer) || 0,
      });
      setStep('complete');
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05050f] px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(138,43,226,0.2),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(95,158,160,0.15),_transparent_25%)]" />
      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-accent-from/10 p-4">
              <Sparkles className="h-8 w-8 text-accent-from" />
            </div>
          </div>
          <h1 className="text-3xl font-semibold sm:text-4xl">Welcome to RevSync</h1>
          <p className="mt-3 text-gray-400">Premium bike management for modern riders</p>
        </motion.div>

        {/* Step 1: Vehicle Selection */}
        {step === 'vehicle' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <GlassCard className="p-5 sm:p-8">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent-from/80">Step 1 of 3</p>
                <h2 className="mt-4 text-2xl font-semibold">Select your vehicle</h2>
                <p className="mt-3 text-sm text-gray-400">
                  Choose your motorcycle or scooter from our database. We'll auto-fill specifications for accurate tracking.
                </p>
              </div>

              <VehicleSelector onSelect={handleVehicleSelect} selectedVehicleId={selectedVehicleId} />

              {errors.vehicle && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 rounded-[20px] border border-red-500/30 bg-red-500/5 p-3 text-sm text-red-300"
                >
                  {errors.vehicle}
                </motion.div>
              )}
            </GlassCard>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleContinue}
              disabled={!selectedVehicleId}
              className="w-full rounded-[28px] border border-accent-from bg-accent-from px-6 py-4 font-semibold text-black transition disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-accent-from/30"
            >
              Continue to Setup
            </motion.button>
          </motion.div>
        )}

        {/* Step 2: Customization */}
        {step === 'customize' && selectedVehicle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <GlassCard className="p-5 sm:p-8">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent-from/80">Step 2 of 3</p>
                <h2 className="mt-4 text-2xl font-semibold">Customize your profile</h2>
                <p className="mt-3 text-sm text-gray-400">Add registration details and current mileage.</p>
              </div>

              {/* Vehicle Summary */}
              <div className="mb-8 rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-gray-500">Selected vehicle</p>
                <p className="mt-3 text-lg font-semibold text-white">{selectedVehicle.brand} {selectedVehicle.model}</p>
                <div className="mt-3 grid gap-2 text-sm text-gray-400">
                  <span>• {selectedVehicle.year} • {selectedVehicle.engineCC} cc • {selectedVehicle.category}</span>
                  <span>• Expected Mileage: {selectedVehicle.expectedMileage} km/L</span>
                  <span>• Tank Capacity: {selectedVehicle.tankCapacity}L</span>
                </div>
                <button
                  onClick={() => setStep('vehicle')}
                  className="mt-4 inline-flex items-center gap-2 text-sm text-accent-from transition hover:text-accent-from/80"
                >
                  <Edit2 size={14} /> Change vehicle
                </button>
              </div>

              {/* Registration Number */}
              <div className="space-y-4">
                <Input
                  label="Registration Number"
                  placeholder="e.g., RVS-7X21"
                  value={registration}
                  onChange={(e) => {
                    setRegistration(e.target.value);
                    if (errors.registration) {
                      const newErrors = { ...errors };
                      delete newErrors.registration;
                      setErrors(newErrors);
                    }
                  }}
                  error={errors.registration}
                />

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">Current Odometer (km)</label>
                  <input
                    type="number"
                    value={odometer}
                    onChange={(e) => setOdometer(e.target.value)}
                    placeholder="0"
                    className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent-from focus:ring-2 focus:ring-accent-from/20"
                  />
                  <p className="mt-1 text-xs text-gray-500">Leave at 0 if you're starting fresh</p>
                </div>
              </div>
            </GlassCard>

            <div className="grid gap-3 sm:grid-cols-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setStep('vehicle');
                  setErrors({});
                }}
                className="rounded-[28px] border border-white/10 px-6 py-4 font-semibold text-white transition hover:border-white/20 hover:bg-white/5"
              >
                Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSetup}
                className="rounded-[28px] border border-accent-from bg-accent-from px-6 py-4 font-semibold text-black transition hover:shadow-lg hover:shadow-accent-from/30"
              >
                Complete Setup
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Complete */}
        {step === 'complete' && selectedVehicle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <GlassCard className="p-5 sm:p-8">
              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-accent-from/10 text-accent-from"
                >
                  <Check size={40} />
                </motion.div>
              </div>

              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-accent-from/80">Setup Complete</p>
                <h2 className="mt-4 text-2xl font-semibold">Your bike is ready!</h2>
                <p className="mt-4 text-gray-400">
                  Your {selectedVehicle.brand} {selectedVehicle.model} has been configured with smart defaults.
                </p>

                {/* Profile Summary */}
                <div className="mt-8 space-y-3 rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-sm text-gray-400">Vehicle</span>
                    <span className="text-sm font-semibold text-white">
                      {selectedVehicle.brand} {selectedVehicle.model}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-sm text-gray-400">Engine</span>
                    <span className="text-sm font-semibold text-white">{selectedVehicle.engineCC} cc</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-sm text-gray-400">Expected Mileage</span>
                    <span className="text-sm font-semibold text-white">{selectedVehicle.expectedMileage} km/L</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Tank Capacity</span>
                    <span className="text-sm font-semibold text-white">{selectedVehicle.tankCapacity}L</span>
                  </div>
                </div>

                <p className="mt-6 text-sm text-gray-400">
                  You can customize these details anytime from your profile settings.
                </p>
              </div>
            </GlassCard>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/dashboard')}
              className="w-full rounded-[28px] border border-accent-from bg-accent-from px-6 py-4 font-semibold text-black transition hover:shadow-lg hover:shadow-accent-from/30"
            >
              Go to Dashboard
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
