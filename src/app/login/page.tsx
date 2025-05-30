"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Vul zowel gebruikersnaam als wachtwoord in.");
      return;
    }
    if (email === 'demo' && password === 'demo') {
      setError("");
      router.push('/dashboard');
    } else {
      setError('Ongeldige inloggegevens. Probeer demo/demo.');
    }
  };

  return (
    <motion.div
      initial={{ x: '-100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100vw', opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Blurred dark overlay */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-0" />
      {/* Achtergrond met grid-overlay */}
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10 pointer-events-none z-0" />
      {/* Logo bovenaan */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <img src="/improve-logo.svg" alt="Improve Logo" className="h-16 w-auto mb-6" />
      </div>
      <motion.div layoutId="explore-demo-btn" className="relative w-full max-w-md z-10">
        <div
          className="bg-white/5 rounded-3xl shadow-lg p-8 backdrop-blur-lg border border-[#00FFB2]/40 ring-1 ring-[#00FFB2]/30 text-white"
        >
          <h1 className="text-3xl font-bold text-center mb-6 text-white">Inloggen</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-white mb-1 font-medium">Gebruikersnaam</label>
              <input
                id="username"
                type="text"
                autoComplete="username"
                className="w-full px-4 py-3 border border-[#00FFB2]/30 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFB2] text-white placeholder:text-white/60"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-white mb-1 font-medium">Wachtwoord</label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                className="w-full px-4 py-3 border border-[#00FFB2]/30 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFB2] text-white placeholder:text-white/60"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="text-red-400 text-sm">{error}</div>}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 bg-[#00FFB2] text-black rounded-lg font-semibold hover:bg-[#00e6a0] transition shadow"
            >
              Inloggen
            </motion.button>
          </form>
          <div className="mt-6 text-center">
            <a href="#" className="text-[#00FFB2] hover:underline text-sm font-medium">Wachtwoord vergeten?</a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage; 