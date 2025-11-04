import React from 'react';
import { Sofa, Wrench, Home } from 'lucide-react';

const services = [
  {
    title: 'Mobili su misura',
    desc:
      "Arredatore gratuito a domicilio: rilievo misure, moodboard e progetto personalizzato.",
    icon: Sofa,
    chip: 'Servizio gratuito',
  },
  {
    title: 'Infissi',
    desc:
      'Sopralluogo gratuito per finestre, porte e sistemi ad alta efficienza energetica.',
    icon: Home,
    chip: 'Sopralluogo gratuito',
  },
  {
    title: 'Ristrutturazioni',
    desc:
      'Dalla demolizione al chiavi in mano: impianti, finiture, pratiche. Consulenza inclusa.',
    icon: Wrench,
    chip: 'Sopralluogo gratuito',
  },
];

const Services = () => {
  return (
    <section className="bg-white py-16" id="servizi">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Cosa facciamo per te
        </h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          Dalla progettazione dell’arredo alla posa degli infissi, fino alla ristrutturazione completa.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-6 transition hover:shadow-xl"
            >
              <div className="mb-4 inline-flex items-center gap-2">
                <s.icon className="h-6 w-6 text-gray-900" />
                <span className="rounded-full bg-black/5 px-2 py-0.5 text-xs font-medium text-gray-700">
                  {s.chip}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-black/5 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
