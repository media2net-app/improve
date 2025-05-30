import React from 'react';

const benefits = [
  {
    icon: (
      <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v7m0 0H7m5 0h5" /></svg>
    ),
    title: 'Tijd en kosten besparen',
    text: 'Automatiseer processen en werk efficiënter.'
  },
  {
    icon: (
      <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h3m-7 6v2a4 4 0 004 4h3m-7-6H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4" /></svg>
    ),
    title: 'Slimmer werken',
    text: 'Minder handmatig gedoe, meer focus op wat telt.'
  },
  {
    icon: (
      <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg>
    ),
    title: 'Medewerkers trainen',
    text: 'Direct toepassen met praktische AI-trainingen.'
  },
  {
    icon: (
      <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v7m0 0H7m5 0h5" /></svg>
    ),
    title: 'Volledig maatwerk',
    text: 'Oplossingen afgestemd op jouw processen.'
  }
];

const Benefits = () => (
  <section className="bg-gray-50 py-16">
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {benefits.map((b, i) => (
          <div key={i} className="flex flex-col items-center text-center bg-white rounded-xl shadow p-8 h-full">
            <div className="mb-4">{b.icon}</div>
            <div className="font-semibold text-lg text-gray-800 mb-2">{b.title}</div>
            <div className="text-gray-600">{b.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits; 