import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, Chrome } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import Input from '../components/Input';
import GradientButton from '../components/GradientButton';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/onboarding');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05050f] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(138,43,226,0.24),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(95,158,160,0.18),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(255,255,255,0.06),_transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%,rgba(0,0,0,0.5))]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-xl flex-col justify-center px-4 py-10 sm:max-w-2xl sm:px-6 lg:max-w-3xl lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 max-w-lg sm:max-w-2xl"
        >
          <span className="inline-flex rounded-full bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-accent-from shadow-glass">
            Premium Access
          </span>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Dark glassmorphism login for elite riders.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-gray-400">
            Secure your garage with ultra-smooth glass panels, neon accent lighting, and premium motion-ready UX.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="w-full rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-2xl sm:p-8 lg:max-w-3xl"
        >
          <div className="mb-6 flex flex-col gap-3 rounded-3xl bg-white/5 p-3 text-sm text-gray-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-gray-400">Live system</p>
              <p className="mt-1 text-sm text-white">Engine room networks synchronized</p>
            </div>
            <span className="rounded-full bg-accent-from/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-accent-from">Secure</span>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              label="Email Address"
              placeholder="rider@revsync.com"
              icon={Mail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              icon={Lock}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button type="button" className="text-sm text-accent-from transition hover:text-white">
                Forgot Password?
              </button>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gray-400">
                Elite login
              </span>
            </div>

            <GradientButton type="submit" className="mt-2 !py-3.5">
              <div className="flex items-center justify-center gap-3">
                <LogIn size={20} />
                <span>Enter the Garage</span>
              </div>
            </GradientButton>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-sm text-gray-500">
              <span className="bg-[#05050f] px-4">Or continue with</span>
            </div>
          </div>

          <button className="w-full rounded-3xl border border-white/10 bg-white/5 py-3.5 text-white transition hover:bg-white/10">
            <div className="flex items-center justify-center gap-3">
              <Chrome size={20} />
              <span>Continue with Google</span>
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
