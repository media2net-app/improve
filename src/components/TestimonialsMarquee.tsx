import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Peter van Dijk',
    role: 'Operations Manager, Manufacturing Company',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Since using Improve, there\'s no more chaos on the production floor. The AI-driven planning prevents errors and literally saves us thousands of euros every month.'
  },
  {
    name: 'Marlies de Boer',
    role: 'Logistics Coordinator, Logistics Company',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'We now act proactively instead of reactively. The AI route planner and alerts are a real gamechanger for our efficiency.'
  },
  {
    name: 'Jeroen van Hout',
    role: 'Creative Director, Marketing Agency',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'Thanks to Improve, we deliver faster and smarter. Our AI copywriter and reporting bot save us a huge amount of time.'
  },
  {
    name: 'Lisanne Jansen',
    role: 'Partner, Financial Advisory Firm',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Reports and forecasts now take a fraction of the time. Our clients are impressed by both the speed and the insights.'
  },
  {
    name: 'Timo Bakker',
    role: 'Founder, E-commerce Business',
    avatar: 'https://randomuser.me/api/portraits/men/49.jpg',
    text: 'The AI chatbot handles 80% of our customer inquiries, and our stock updates are now always real-time. We truly have control over everything.'
  }
];

export default function TestimonialsMarquee() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-[#101A13] via-[#101A13]/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-[#101A13] via-[#101A13]/80 to-transparent" />
      {/* Slider track */}
      <motion.div
        className="flex gap-8 w-max"
        initial={{ x: '0%' }}
        animate={{ x: '-50%' }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 32,
          ease: 'linear',
        }}
        style={{ willChange: 'transform' }}
      >
        {Array(2).fill(null).flatMap(() =>
          testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name + i + Math.random()}
              className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] bg-white/5 backdrop-blur-lg p-4 sm:p-6 lg:p-8 rounded-xl border border-[#00FFB2]/20 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-white/60">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed">{testimonial.text}</p>
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
} 