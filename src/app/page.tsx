"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import TestimonialsMarquee from '../components/TestimonialsMarquee';
import WhatWeOffer from '../components/WhatWeOffer';
import HowWeWork from '../components/HowWeWork';
import PricingPlans from '../components/PricingPlans';
import Footer from '../components/Footer';

export default function Home() {
  const router = useRouter();
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

  // Modal state for tag examples
  const [modalTag, setModalTag] = useState<string | null>(null);
  const tagExamples: Record<string, string> = {
    "HR": "Our AI automates candidate screening, schedules interviews, and provides onboarding checklists for new hires.",
    "Sales": "AI analyzes your pipeline, predicts deal closures, and suggests next-best actions for your sales team.",
    "Marketing": "Generate campaign ideas, optimize ad spend, and get real-time insights into your marketing performance.",
    "Finance": "Automate invoice processing, detect anomalies, and forecast cash flow with AI-driven insights.",
    "Customer Support": "AI chatbots handle FAQs, route tickets, and provide instant support 24/7.",
    "Planning": "Get AI-powered project timelines, resource allocation, and risk analysis for your planning needs.",
    "Reporting": "Generate custom reports, visualize KPIs, and automate data collection for your business.",
    "Onboarding": "Personalized onboarding flows, document management, and progress tracking for new employees.",
    // ... add more specific examples as needed ...
  };
  function getTagExample(tag: string) {
    return tagExamples[tag] || `Our AI system can automate, optimize, and provide insights for your ${tag.toLowerCase()} processes.`;
  }

  // Use case scenarios for each tag
  const tagUseCases: Record<string, { company: string; scenario: string; stats: { label: string; value: string }[] }> = {
    "HR": {
      company: "TechRecruiters BV",
      scenario: "TechRecruiters BV revolutionized their hiring process with our AI. Manual CV screening and interview scheduling became a thing of the past. The HR team now focuses on culture and growth, while AI ensures every candidate gets a fast, fair, and personal experience.",
      stats: [
        { label: "Time-to-hire", value: "-38%" },
        { label: "Candidate satisfaction", value: "+27%" },
        { label: "Manual admin", value: "-50%" }
      ]
    },
    "Sales": {
      company: "SalesGenix",
      scenario: "SalesGenix empowered their sales team with AI-driven pipeline analysis and next-best-action suggestions. Reps now close deals faster, never miss a follow-up, and have more time for high-value conversations. Revenue growth is no longer a guessing game—it's data-driven.",
      stats: [
        { label: "Conversion rate", value: "+19%" },
        { label: "Sales cycle", value: "-22%" },
        { label: "Revenue growth", value: "+31%" }
      ]
    },
    "Marketing": {
      company: "BrandMakers",
      scenario: "BrandMakers used our AI to generate campaign ideas, optimize ad spend, and get real-time insights. Their marketing team now launches more campaigns, adapts instantly to trends, and maximizes ROI with every euro spent.",
      stats: [
        { label: "Campaign ROI", value: "+44%" },
        { label: "Ad spend", value: "-28%" },
        { label: "Content output", value: "+3x" }
      ]
    },
    "Finance": {
      company: "Finwise Group",
      scenario: "Finwise Group automated invoice processing and cash flow forecasting with our AI. Finance teams now close books faster, spot risks before they happen, and make strategic decisions with confidence.",
      stats: [
        { label: "Processing time", value: "-61%" },
        { label: "Forecast accuracy", value: "+35%" },
        { label: "Manual errors", value: "-70%" }
      ]
    },
    "Customer Support": {
      company: "Helpify",
      scenario: "Helpify&apos;s AI chatbots now resolve most customer questions instantly, freeing up agents for complex cases. Customer satisfaction soared, and support costs dropped—without sacrificing quality.",
      stats: [
        { label: "First response time", value: "-80%" },
        { label: "CSAT score", value: "+18%" },
        { label: "Tickets automated", value: "+67%" }
      ]
    },
    "Planning": {
      company: "LogiPlan",
      scenario: "LogiPlan&apos;s project managers use AI to predict bottlenecks, allocate resources, and deliver projects on time. Delays are down, and clients are happier than ever.",
      stats: [
        { label: "On-time delivery", value: "+24%" },
        { label: "Resource utilization", value: "+31%" },
        { label: "Delays", value: "-40%" }
      ]
    },
    "Reporting": {
      company: "Insight Analytics",
      scenario: "Insight Analytics replaced manual reporting with AI-powered dashboards. Leaders now get instant, accurate KPIs and can act on insights in real time.",
      stats: [
        { label: "Reporting time", value: "-55%" },
        { label: "Decision speed", value: "+29%" },
        { label: "Data errors", value: "-60%" }
      ]
    },
    "Onboarding": {
      company: "StartRight",
      scenario: "StartRight&apos;s new hires now enjoy a personalized onboarding journey, guided by AI. HR spends less time on admin, and retention is at an all-time high.",
      stats: [
        { label: "Onboarding time", value: "-33%" },
        { label: "New hire retention", value: "+21%" },
        { label: "Admin workload", value: "-40%" }
      ]
    },
    // ... add more specific cases as needed ...
  };

  // Helper to generate a logical dummy company name from a tag
  function getDummyCompanyName(tag: string) {
    const suffixes = [
      'Logic', 'Solutions', 'Works', 'Edge', 'Flow', 'Tech', 'Labs', 'Dynamics', 'Systems', 'Group', 'Experts', 'Hub', 'Force', 'Partners', 'Analytics', 'Boost', 'Wise', 'Core', 'Plus', 'Pro'
    ];
    // Pick a suffix based on tag length for variety
    const suffix = suffixes[tag.length % suffixes.length];
    // Remove spaces and capitalize first letter
    const base = tag.replace(/\s+/g, '');
    return base.charAt(0).toUpperCase() + base.slice(1) + suffix;
  }

  function getTagUseCase(tag: string) {
    if (tagUseCases[tag]) return tagUseCases[tag];
    const company = getDummyCompanyName(tag);
    return {
      company,
      scenario: `${company} streamlined their ${tag.toLowerCase()} processes with our AI platform. Teams now work smarter, not harder—eliminating bottlenecks, reducing costs, and unlocking new growth opportunities.`,
      stats: [
        { label: "Efficiency", value: "+20%" },
        { label: "Cost savings", value: "-15%" },
        { label: "Accuracy", value: "+18%" }
      ]
    };
  }

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
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex justify-between items-center py-4 sm:py-6">
          <div className="text-2xl font-bold flex items-center gap-2 select-none">
            <img src="/improve-logo.svg" alt="Improve Logo" className="h-12 sm:h-16 w-auto" />
          </div>
          {/* Desktop nav */}
          <nav className="hidden lg:flex space-x-6">
            <a href="#" className="text-white/90 hover:text-[#00FFB2] transition-colors duration-200 font-medium relative after:content-[''] after:block after:h-[2px] after:bg-[#00FFB2] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left after:mt-1">Home</a>
            <a href="#" className="text-white/90 hover:text-[#00FFB2] transition-colors duration-200 font-medium relative after:content-[''] after:block after:h-[2px] after:bg-[#00FFB2] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left after:mt-1">About</a>
            <a href="#" className="text-white/90 hover:text-[#00FFB2] transition-colors duration-200 font-medium relative after:content-[''] after:block after:h-[2px] after:bg-[#00FFB2] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left after:mt-1">Services</a>
            <a href="#" className="text-white/90 hover:text-[#00FFB2] transition-colors duration-200 font-medium relative after:content-[''] after:block after:h-[2px] after:bg-[#00FFB2] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left after:mt-1">Pricing</a>
          </nav>
          <button className="hidden lg:flex border border-[#00FFB2] text-[#00FFB2] bg-transparent px-4 py-2 rounded-full items-center gap-2 font-semibold shadow-none hover:bg-[#00FFB2] hover:text-black transition-colors duration-200">
            Let&apos;s Talk <span className="text-xl">→</span>
          </button>
          {/* Hamburger voor mobiel */}
          <button className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5" onClick={() => setMenuOpen(true)} aria-label="Open menu">
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
              Let&apos;s Talk <span className="text-xl">→</span>
            </button>
          </div>
        )}

        {/* Hero sectie */}
        <main className="flex flex-col lg:flex-row justify-between items-center py-12 sm:py-16 lg:py-24 gap-8 lg:gap-12">
          {/* Tekst links */}
          <div className="w-full lg:max-w-xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Improve your
              <span className="inline-block ml-2 sm:ml-4 align-middle min-w-[180px] sm:min-w-[220px]">
                <span className="text-green-400">{displayed}</span>
                <span className="text-green-400 animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-xl sm:text-2xl italic mt-2 text-white/80">Built with AI</p>
            <p className="mt-4 sm:mt-6 text-white/70 text-base sm:text-lg">
              We help brands move faster with smart AI solutions.
            </p>
            {/* Knoppen */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              <button className="bg-green-400 text-black px-6 py-3 rounded-full text-lg font-medium hover:scale-105 transition shadow">
                Get Started Now <span className="ml-1">→</span>
              </button>
              <motion.button
                layoutId="explore-demo-btn"
                className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition shadow"
                onClick={() => router.push('/login')}
              >
                Explore demo
              </motion.button>
            </div>
          </div>

          {/* Afbeelding rechts met overlay box */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0 flex flex-col items-center lg:items-start justify-center py-12 lg:py-24">
            <div className="w-full bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg text-left">
              <h3 className="text-white font-semibold text-lg mb-4">
                AI isn&apos;t the future. It&apos;s the now.
              </h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className="bg-green-900/20 border border-green-500 text-green-300 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full hover:bg-green-900/40 hover:text-green-200 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00FFB2]"
                    onClick={() => setModalTag(tag)}
                    type="button"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            {/* Modal */}
            {modalTag && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div
                  className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
                  onClick={() => setModalTag(null)}
                  aria-label="Close modal"
                />
                <div className="relative bg-[#101A13] border border-[#00FFB2]/30 rounded-2xl p-8 max-w-md w-full shadow-xl z-10 flex flex-col items-start animate-fade-in">
                  <button
                    className="absolute top-4 right-4 text-white/60 hover:text-[#00FFB2] text-2xl font-bold focus:outline-none"
                    onClick={() => setModalTag(null)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <h4 className="text-xl font-bold text-[#00FFB2] mb-4">AI for {modalTag}</h4>
                  <p className="text-white/90 text-base mb-2 whitespace-pre-line">{getTagExample(modalTag)}</p>
                  {/* Use case scenario */}
                  {(() => {
                    const useCase = getTagUseCase(modalTag);
                    return (
                      <>
                        <div className="mb-4">
                          <div className="text-white/70 text-sm mb-1">What changed for <span className="font-semibold text-[#00FFB2]">{useCase.company}</span>?</div>
                          <div className="text-white/90 mb-2">{useCase.scenario.replace(/'/g, "&apos;")}</div>
                        </div>
                        <div className="flex gap-4 mt-2">
                          {useCase.stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center bg-white/5 border border-[#00FFB2]/10 rounded-lg px-4 py-2 min-w-[90px]">
                              <div className="text-[#00FFB2] font-bold text-lg">{stat.value}</div>
                              <div className="text-white/60 text-xs text-center">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
      {/* Logo slider */}
      <div className="relative w-full py-6 sm:py-8 bg-transparent">
        <div className="relative max-w-[1170px] mx-auto overflow-hidden">
          {/* Fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-black via-black/80 to-transparent" />
          {/* Slider track */}
          <motion.div
            className="flex gap-16 w-max"
            initial={{ x: '-50%' }}
            animate={{ x: '0%' }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 32,
              ease: 'linear',
            }}
            style={{ willChange: 'transform' }}
          >
            {Array(2).fill(null).flatMap(() =>
              logos.map((src, i) => (
                <img 
                  key={src + i + Math.random()} 
                  src={src} 
                  alt={`Logo ${i + 1}`} 
                  className="h-6 sm:h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" 
                />
              ))
            )}
          </motion.div>
        </div>
      </div>
      {/* Einde logo slider */}

      {/* Testimonials sectie */}
      <section className="w-full bg-[#101A13] py-12 sm:py-16 lg:py-20 mt-12 sm:mt-16 lg:mt-20 relative overflow-hidden">
        <TestimonialsMarquee />
      </section>

      {/* What We Offer sectie */}
      <WhatWeOffer />

      {/* How We Work sectie */}
      <HowWeWork />

      {/* Pricing Plans sectie */}
      <PricingPlans />

      {/* Footer */}
      <Footer />
    </div>
  );
}
