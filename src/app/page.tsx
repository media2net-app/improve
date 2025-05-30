"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const tags = [
    "Recruitment",
    "Planning",
    "Marketing",
    "Finance",
    "Operations",
    "Innovation",
    "Decision-Making",
    "Sales",
    "Productivity",
    "Communication",
    "Customer Support",
    "Reporting",
    "Onboarding",
    "Performance",
    "Automation",
    "Strategy",
    "Content",
    "Workflow",
    "Growth",
    "Focus"
  ];

  // Typewriter animatie voor hero
  const words = [
    "HR",
    "Sales",
    "Marketing",
    "Finance",
    "Operations",
    "Customer Support",
    "Planning",
    "Performance"
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const logos = [
    "/logo1.svg",
    "/logo2.svg",
    "/logo3.svg"
  ];

  useEffect(() => {
    let timeout;
    const currentWord = words[wordIndex];
    if (typing) {
      if (displayed.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length + 1));
        }, 80);
      } else {
        // Wacht 1 seconde als het woord volledig is getypt
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length - 1));
        }, 40);
      } else {
        // Volgende woord
        timeout = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
          setTyping(true);
        }, 200);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIndex, words]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Ffflux achtergrond */}
      <img src="/ffflux.svg" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" style={{ pointerEvents: 'none' }} />
      {/* Achtergrond met grid-overlay */}
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10 pointer-events-none z-0" />

      {/* Container voor alle content */}
      <div className="relative z-10 max-w-[1170px] mx-auto px-4 md:px-8">
        {/* Header */}
        <header className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold flex items-center gap-2 select-none">
            <img src="/improve-logo.svg" alt="Improve Logo" className="h-16 w-auto" />
          </div>
          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white/90 hover:text-[#00FFB2] transition-colors duration-200 font-medium relative after:content-[''] after:block after:h-[2px] after:bg-[#00FFB2] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left after:mt-1">Home</a>
            <a href="#" className="text-white/90 hover:text-[#00FFB2] transition-colors duration-200 font-medium relative after:content-[''] after:block after:h-[2px] after:bg-[#00FFB2] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left after:mt-1">About</a>
            <a href="#" className="text-white/90 hover:text-[#00FFB2] transition-colors duration-200 font-medium relative after:content-[''] after:block after:h-[2px] after:bg-[#00FFB2] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left after:mt-1">Services</a>
            <a href="#" className="text-white/90 hover:text-[#00FFB2] transition-colors duration-200 font-medium relative after:content-[''] after:block after:h-[2px] after:bg-[#00FFB2] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left after:mt-1">Pricing</a>
          </nav>
          <button className="hidden md:flex border border-[#00FFB2] text-[#00FFB2] bg-transparent px-4 py-2 rounded-full items-center gap-2 font-semibold shadow-none hover:bg-[#00FFB2] hover:text-black transition-colors duration-200">
            Let's Talk <span className="text-xl">→</span>
          </button>
          {/* Hamburger voor mobiel */}
          <button className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span className="block w-7 h-1 bg-white rounded transition-all"></span>
            <span className="block w-7 h-1 bg-white rounded transition-all"></span>
            <span className="block w-7 h-1 bg-white rounded transition-all"></span>
          </button>
        </header>
        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center animate-fade-in">
            <button className="absolute top-6 right-6 text-white text-3xl" onClick={() => setMenuOpen(false)} aria-label="Close menu">&times;</button>
            <nav className="flex flex-col gap-8 text-2xl font-semibold">
              <a href="#" className="hover:text-[#00FFB2]" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#" className="hover:text-[#00FFB2]" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#" className="hover:text-[#00FFB2]" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#" className="hover:text-[#00FFB2]" onClick={() => setMenuOpen(false)}>Pricing</a>
            </nav>
            <button className="mt-10 border border-[#00FFB2] text-[#00FFB2] bg-transparent px-8 py-3 rounded-full font-semibold shadow-none hover:bg-[#00FFB2] hover:text-black transition-colors duration-200 text-lg">
              Let's Talk <span className="text-xl">→</span>
            </button>
          </div>
        )}

        {/* Hero sectie */}
        <main className="flex flex-col md:flex-row justify-between items-center py-24 gap-12">
          {/* Tekst links */}
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold">
              Improve your
              <span className="inline-block ml-4 align-middle min-w-[220px]">
                <span className="text-green-400">{displayed}</span>
                <span className="text-green-400 animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-2xl italic mt-2 text-white/80">Built with AI</p>
            <p className="mt-6 text-white/70 text-lg">
              We help brands move faster with smart AI solutions.
            </p>
            {/* Knoppen */}
            <div className="flex flex-row gap-4 mt-8">
              <button className="bg-green-400 text-black px-6 py-3 rounded-full text-lg font-medium hover:scale-105 transition shadow">
                Get Started Now <span className="ml-1">→</span>
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition shadow">
                Explore demo
              </button>
            </div>
          </div>

          {/* Afbeelding rechts met overlay box */}
          <div className="relative max-w-md w-full flex flex-col items-center">
            <img src="/orb.png" alt="AI Object" className="w-full rounded-2xl" />

            <div className="absolute bottom-[-3rem] right-0 w-full bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg">
              <h3 className="text-white font-semibold text-lg mb-4">
                AI isn't the future. It's the now.
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-green-900/20 border border-green-500 text-green-300 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Logo slider */}
      <div className="relative w-full py-8 bg-transparent">
        <div className="relative max-w-[1170px] mx-auto overflow-hidden">
          {/* Fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-black via-black/80 to-transparent" />
          {/* Slider track */}
          <div className="logo-slider-track">
            {Array(2).fill(null).flatMap(() =>
              logos.map((src, i) => (
                <img key={src + i + Math.random()} src={src} alt={`Logo ${i + 1}`} className="h-8 w-auto" />
              ))
            )}
          </div>
        </div>
      </div>
      {/* Einde logo slider */}
    </div>
  );
}
