import React, { useState } from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    monthly: 245,
    roi: 2100,
    description: 'For small teams that want to get started with AI the smart way.',
    features: [
      'Intake + AI scan',
      'Realtime dashboard',
      '3 AI tools activated',
      '1 employee training & certification',
      '12 months support & updates'
    ],
    cta: 'Start with Starter',
    highlight: false,
    isCustom: false
  },
  {
    name: 'Pro',
    monthly: 495,
    roi: 4800,
    description: 'For companies that want to implement AI structurally.',
    features: [
      'Everything in Starter',
      'Full AI implementation',
      '5+ AI tools (e.g. Marketing, HR, Finance)',
      '5 employees training & certification',
      'Predictive dashboards & AI notifications',
      '12 months support & updates'
    ],
    cta: 'Start with Pro',
    highlight: true,
    isCustom: false
  },
  {
    name: 'Enterprise',
    monthly: 829,
    roi: 8900,
    description: 'For companies that want maximum automation.',
    features: [
      'Everything in Pro',
      'Onboarding on-site or live',
      'Up to 15 employees training & certification',
      'Competitor scanner + AI scenarios',
      'Private cloud environment possible',
      '12 months premium support & updates'
    ],
    cta: 'Start with Enterprise',
    highlight: false,
    isCustom: false
  },
  {
    name: 'Custom',
    monthly: null,
    roi: null,
    description: 'For companies that need a completely tailored AI solution.',
    features: [
      'Fully customized AI implementation',
      'Custom AI tools development',
      'Unlimited employee training & certification',
      'Dedicated AI development team',
      'Custom integration with existing systems',
      'Priority support & updates'
    ],
    cta: 'Contact for Custom Quote',
    highlight: false,
    isCustom: true
  }
];

const GREEN = '#00FFB2';
const GOLD = '#FFD700';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

interface Plan {
  name: string;
  monthly: number | null;
  roi: number | null;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
  isCustom: boolean;
}

export default function PricingPlans() {
  // Global billing period
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <section className="w-full bg-black py-24 relative overflow-hidden">
      {/* Green glow background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00FFB2]/10 rounded-full blur-3xl z-0" />
      <div className="relative z-10 w-full px-4 md:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pricing Plans
          </h2>
          <p className="text-[#00FFB2] text-lg font-semibold mb-4">
            Flexible plans for every stage of your growth
          </p>
          {/* Global billing switch */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <button
              className={`px-3 py-0.5 rounded-full text-sm font-medium transition-colors duration-200 border ${
                billing === 'monthly' 
                  ? 'border-[#00FFB2] text-[#00FFB2]' 
                  : 'border-white/20 text-white/50'
              }`}
              onClick={() => setBilling('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-3 py-0.5 rounded-full text-sm font-medium transition-colors duration-200 border ${
                billing === 'yearly' 
                  ? 'border-[#00FFB2] text-[#00FFB2]' 
                  : 'border-white/20 text-white/50'
              }`}
              onClick={() => setBilling('yearly')}
            >
              Yearly
            </button>
            {billing === 'yearly' && (
              <span className="ml-3 text-[#00FFB2] font-medium text-sm border border-[#00FFB2]/30 rounded-full px-3 py-0.5 inline-block">Save 15% (billed yearly)</span>
            )}
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 max-w-[1400px] mx-auto"
        >
          {plans.map((plan: Plan) => {
            const isYearly = billing === 'yearly';
            const yearlyPrice = plan.monthly ? Math.round(plan.monthly * 12 * 0.85) : null;
            const roiValue = plan.roi ? (isYearly ? plan.roi * 12 : plan.roi) : null;
            return (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                className={`relative bg-white/5 border ${
                  plan.highlight ? 'ring-2 ring-[#00FFB2] scale-105 z-10' : 
                  plan.isCustom ? 'border-[#FFD700]/40 ring-1 ring-[#FFD700]/30' : 'border-[#00FFB2]/20'
                } rounded-2xl p-8 backdrop-blur-md shadow-lg flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300`}
              >
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  {plan.name}
                  {plan.isCustom && (
                    <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  )}
                </h3>
                {/* Price */}
                <div className="text-3xl font-extrabold mb-1" style={{ color: plan.isCustom ? GOLD : GREEN }}>
                  {plan.isCustom ? (
                    <span className="text-xl">Price on calculation</span>
                  ) : (
                    isYearly ? `€${yearlyPrice} / year` : `€${plan.monthly} / month`
                  )}
                </div>
                {!plan.isCustom && (
                  <div className="text-white font-semibold mb-4 text-base bg-white/10 rounded-full px-4 py-1 inline-block relative group">
                    Avg. ROI: +€{roiValue?.toLocaleString('en-US')}{isYearly ? '/year' : '/mo'}
                    <span className="ml-2 align-middle inline-block relative">
                      <svg
                        className="w-4 h-4 text-[#00FFB2] cursor-pointer inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        tabIndex={0}
                      >
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16v-4m0-4h.01" />
                      </svg>
                      <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-black text-white text-xs rounded-lg px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity pointer-events-none z-20 border border-[#00FFB2]/30">
                        Avg. ROI is based on real client results using our AI platform for 12+ months. Actual ROI may vary by company size, industry, and implementation.
                      </span>
                    </span>
                  </div>
                )}
                <p className="text-white/80 mb-6">{plan.description}</p>
                <ul className="text-white/70 text-left mb-8 space-y-2 w-full max-w-xs mx-auto">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke={GREEN}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`px-4 py-2 rounded-full font-medium text-sm border transition-colors duration-200 ${
                    plan.isCustom 
                      ? 'border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10' 
                      : 'border-[#00FFB2] text-[#00FFB2] hover:bg-[#00FFB2]/10'
                  }`}
                >
                  {plan.isCustom ? (
                    <span className="flex items-center gap-2">
                      {plan.cta}
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  ) : (
                    plan.cta
                  )}
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
} 