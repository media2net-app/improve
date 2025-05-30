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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-xl shadow-xl p-8"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Inloggen</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-gray-700 mb-1">Gebruikersnaam</label>
            <input
              id="username"
              type="text"
              autoComplete="username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1">Wachtwoord</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Inloggen
          </motion.button>
        </form>
        <div className="mt-6 text-center">
          <a href="#" className="text-blue-600 hover:underline text-sm">Wachtwoord vergeten?</a>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage; 