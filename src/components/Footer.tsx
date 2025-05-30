import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 pt-16 pb-8 px-4 md:px-0 relative z-20">
      <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-0">
        {/* Left: Logo & CTA */}
        <div className="flex-1 flex flex-col gap-4 items-start">
          <img src="/improve-logo.svg" alt="Improve Logo" className="h-10 w-auto mb-2" />
          <h3 className="text-2xl font-bold text-white mb-2">Let&apos;s Bring Your AI Vision to Life</h3>
          <p className="text-white/60 max-w-xs mb-2">Ready to unlock the next level for your business? Let&apos;s talk about what AI can do for you.</p>
          <a href="mailto:info@improve.ai" className="inline-block bg-[#00FFB2] text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-[#00e6a0] transition-colors duration-200 mt-2">Contact Us</a>
        </div>
        {/* Center: Navigation */}
        <div className="flex-1 flex flex-col items-start md:items-center gap-4">
          <nav className="flex flex-col md:flex-row gap-2 md:gap-6 text-white/80 text-base font-medium">
            <a href="#" className="hover:text-[#00FFB2] transition">Home</a>
            <a href="#" className="hover:text-[#00FFB2] transition">About</a>
            <a href="#" className="hover:text-[#00FFB2] transition">Services</a>
            <a href="#" className="hover:text-[#00FFB2] transition">Process</a>
            <a href="#" className="hover:text-[#00FFB2] transition">Pricing</a>
          </nav>
        </div>
        {/* Right: Contact & Social */}
        <div className="flex-1 flex flex-col items-start md:items-end gap-4">
          <div className="text-white/80 text-base mb-2">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00FFB2]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 01-8 0 4 4 0 018 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l-1.414-1.414M6.05 6.05L4.636 4.636" /></svg>
              Sheridan, Wyoming 82801, USA
            </div>
            <div className="flex items-center gap-2 mt-2">
              <svg className="w-5 h-5 text-[#00FFB2]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 01-8 0 4 4 0 018 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79V12a9 9 0 10-9 9c.27 0 .54-.01.81-.03" /></svg>
              info@improve.ai
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="LinkedIn" className="hover:text-[#00FFB2] text-white/80 transition"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5a6 6 0 016-6" /><circle cx="8.5" cy="8.5" r="1.5" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 21V9" /></svg></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#00FFB2] text-white/80 transition"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1.64a9.09 9.09 0 01-2.88 1.1A4.48 4.48 0 0016.5 1c-2.5 0-4.5 2.01-4.5 4.5 0 .35.04.69.1 1.02A12.94 12.94 0 013 2.1a4.48 4.48 0 001.39 6A4.48 4.48 0 012 7.13v.06A4.48 4.48 0 004.48 11a4.48 4.48 0 01-2.03.08A4.48 4.48 0 006.29 14a9 9 0 01-5.58 1.92A9.13 9.13 0 012 16.29a12.94 12.94 0 007 2.05c8.4 0 13-6.96 13-13 0-.2 0-.39-.01-.58A9.18 9.18 0 0023 3z" /></svg></a>
          </div>
        </div>
      </div>
      {/* Legal */}
      <div className="max-w-[1170px] mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
        <div>© {new Date().getFullYear()} Improve. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#00FFB2] transition">Terms & Conditions</a>
          <a href="#" className="hover:text-[#00FFB2] transition">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
} 