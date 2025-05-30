import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    title: 'Intake & Process Scan',
    description: `We start with a smart intake that maps out your current workflows, tools, teams and bottlenecks.\nYou'll get instant insight into where AI can deliver the most impact.`,
    output: 'Your custom AI action plan'
  },
  {
    title: 'Baseline & Data Collection',
    description: `We run a 7-day observation phase.\nOur system passively monitors processes, timing, workload and tools — creating your "starting point zero".`,
    output: 'Clear baseline to measure future AI results'
  },
  {
    title: 'AI Activation & Team Training',
    description: `In week 2, Improve starts deploying AI tools in your business.\nMeanwhile, your team begins learning how to use them with short in-app training modules.`,
    output: 'Active AI support + first trained team members'
  },
  {
    title: 'Automate & Scale',
    description: `Weeks 3 and 4: your company runs with full AI assistance.\nYou get real-time data, predictions, optimizations — and results you can measure.`,
    output: 'Time saved, cost reduced, team empowered — all within 30 days'
  }
];

const stepIcons = [
  // Step 1: Magnifying glass
  <svg className="w-8 h-8 text-[#00FFB2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" key="icon1">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>,
  // Step 2: Database/chart
  <svg className="w-8 h-8 text-[#00FFB2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" key="icon2">
    <ellipse cx="12" cy="6" rx="8" ry="3" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
  </svg>,
  // Step 3: Graduation cap
  <svg className="w-8 h-8 text-[#00FFB2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" key="icon3">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0a2 2 0 104 0 2 2 0 00-4 0z" />
  </svg>,
  // Step 4: Gear
  <svg className="w-8 h-8 text-[#00FFB2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" key="icon4">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-1.14 1.603-1.14 1.902 0a1.724 1.724 0 002.573 1.01c.943-.545 2.042.454 1.497 1.398a1.724 1.724 0 001.01 2.573c1.14.3 1.14 1.603 0 1.902a1.724 1.724 0 00-1.01 2.573c.545.943-.454 2.042-1.398 1.497a1.724 1.724 0 00-2.573 1.01c-.3 1.14-1.603 1.14-1.902 0a1.724 1.724 0 00-2.573-1.01c-.943.545-2.042-.454-1.497-1.398a1.724 1.724 0 00-1.01-2.573c-1.14-.3-1.14-1.603 0-1.902a1.724 1.724 0 001.01-2.573c-.545-.943.454-2.042 1.398-1.497.943.545 2.042-.454 1.497-1.398z" />
    <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
  </svg>
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, type: 'spring' }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3 }
  })
};

export default function HowWeWork() {
  const [[step, direction], setStep] = useState([0, 0]);
  const numSteps = steps.length;

  const paginate = (newDirection: number) => {
    setStep(([prev]) => {
      let next = prev + newDirection;
      if (next < 0) next = 0;
      if (next >= numSteps) next = numSteps - 1;
      return [next, newDirection];
    });
  };

  const handleDragEnd = (event: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) paginate(1);
    else if (info.offset.x > 50) paginate(-1);
  };

  return (
    <section className="w-full bg-[#101A13] py-24 relative overflow-hidden">
      {/* Green glow background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00FFB2]/10 rounded-full blur-3xl z-0" />
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            How We Work <span className="text-white/70 font-normal">– From idea to implementation</span>
          </h2>
        </div>
        <div className="relative flex items-center justify-center">
          {/* Left arrow */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#00FFB2] hover:bg-[#00ffb2]/80 text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition disabled:opacity-30"
            onClick={() => paginate(-1)}
            disabled={step === 0}
            aria-label="Previous step"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          {/* Step card */}
          <div className="w-full flex justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                className="bg-white/5 border border-[#00FFB2]/20 rounded-2xl p-8 backdrop-blur-md shadow-lg flex flex-col items-center text-center min-w-[320px] max-w-[480px] mx-auto hover:bg-white/10 transition-colors duration-300"
                style={{ touchAction: 'pan-y' }}
              >
                <div className="flex items-center justify-center mb-6">
                  {stepIcons[step]}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{steps[step].title}</h3>
                <p className="text-white/80 text-base sm:text-lg whitespace-pre-line mb-4">{steps[step].description}</p>
                <div className="mt-auto pt-2 text-[#00FFB2] font-semibold text-base">→ Output: {steps[step].output}</div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Right arrow */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#00FFB2] hover:bg-[#00ffb2]/80 text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition disabled:opacity-30"
            onClick={() => paginate(1)}
            disabled={step === numSteps - 1}
            aria-label="Next step"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        {/* Progress dots */}
        <div className="flex justify-center gap-3 mt-8">
          {steps.map((stepObj, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-200 border-2 ${step === idx ? 'bg-[#00FFB2] border-[#00FFB2] scale-125' : 'bg-white/20 border-white/40'}`}
              onClick={() => setStep([idx, idx > step ? 1 : -1])}
              aria-label={`Go to step ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 