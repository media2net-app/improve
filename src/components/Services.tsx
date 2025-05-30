import React from 'react';

const services = [
  {
    title: 'Gratis AI-bedrijfsscan',
    desc: 'Ontdek direct waar jij als bedrijf kunt automatiseren of verbeteren met AI.'
  },
  {
    title: 'Persoonlijk actieplan',
    desc: 'Na de intake krijg je een concreet AI-actieplan op maat.'
  },
  {
    title: 'E-learning + certificering',
    desc: 'Train je medewerkers met praktische AI-modules en laat ze gecertificeerd aan de slag.'
  },
  {
    title: 'Toolbox & begeleiding',
    desc: 'Toegang tot een groeiende AI-toolkit + optionele 1-op-1 begeleiding.'
  }
];

const Services = () => (
  <section className="bg-white py-16">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Wat we doen</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-blue-50 rounded-xl shadow p-8 flex flex-col items-center text-center h-full">
            <div className="font-semibold text-lg text-blue-700 mb-2">{s.title}</div>
            <div className="text-gray-700">{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services; 