import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
  {
    title: 'AI-Powered Business Assistant',
    description: 'Tailored AI assistants per department (Marketing, HR, Sales, Finance...). Get insights, predictions and suggestions — 24/7, 365 days a year.',
    icon: (
      <svg className="w-12 h-12 text-[#00FFB2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    stats: {
      'decision-making': '+89%',
      'team clarity': '+76%',
      'delays': '-62%'
    }
  },
  {
    title: 'Realtime Company Dashboard',
    description: 'One central dashboard with all your key business data, updated live. Track bottlenecks, KPIs, performance and forecasts at a glance.',
    icon: (
      <svg className="w-12 h-12 text-[#00FFB2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    stats: {
      'visibility': '+100%',
      'efficiency': '+83%',
      'manual reporting': '-50%'
    }
  },
  {
    title: 'AI Training & Certification',
    description: 'Short e-learning modules for every role in your team. Train your staff to actually use AI, not just understand it.',
    icon: (
      <svg className="w-12 h-12 text-[#00FFB2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    stats: {
      'employee adoption': '+68%',
      'productivity': '+42%',
      'certified team': '+1'
    }
  },
  {
    title: 'Smart Intake & Action Plan Generator',
    description: 'Let our smart intake generate a custom action plan in minutes. Discover your hidden time- and cost-savers without hiring consultants.',
    icon: (
      <svg className="w-12 h-12 text-[#00FFB2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    stats: {
      'value': 'Instant',
      'insights': 'Real, actionable',
      'personalized': '100%'
    }
  },
  {
    title: 'AI-Powered Market Monitor',
    description: 'Our system watches your competition for you — automatically. Get alerts when prices change, products launch or trends shift.',
    icon: (
      <svg className="w-12 h-12 text-[#00FFB2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    stats: {
      'ahead': '+1 step',
      'market response': '+77%',
      'blind spots': '-'
    }
  },
  {
    title: 'Custom Work',
    description: 'Everything is possible — we build custom AI solutions tailored to your unique business needs.',
    icon: (
      <svg className="w-12 h-12 text-[#00FFB2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536l-9.193 9.193a2 2 0 01-.878.515l-4.243 1.06a1 1 0 01-1.213-1.213l1.06-4.243a2 2 0 01.515-.878l9.193-9.193z" />
      </svg>
    ),
    stats: {
      'flexibility': '100%',
      'customization': 'Unlimited',
      'support': 'Full guidance'
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function WhatWeOffer() {
  return (
    <section className="w-full bg-black py-24 relative overflow-hidden">
      {/* Green glow background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00FFB2]/10 rounded-full blur-3xl z-0" />
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            What We Offer
          </h2>
          <p className="text-[#00FFB2] text-base sm:text-lg font-semibold">
            — Practical AI solutions that give you control, not complexity
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-[#00FFB2]/20 shadow-lg hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#00FFB2]/10 flex items-center justify-center">
                  {solution.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">{solution.title}</h3>
              </div>
              <p className="text-white/70 text-base sm:text-lg">{solution.description}</p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                {Object.entries(solution.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-[#00FFB2] font-bold text-lg">{value}</div>
                    <div className="text-white/60 text-sm capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 