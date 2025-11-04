import React, { useMemo, useState } from 'react';

const currency = (n) =>
  new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(n);

const Estimator = () => {
  const [style, setStyle] = useState('moderna');
  const [top, setTop] = useState('laminato');
  const [length, setLength] = useState(3);

  // very simple pricing logic for demo purposes
  const price = useMemo(() => {
    const basePerMl = style === 'moderna' ? 800 : 900; // base for mod/classic
    const topAdd = {
      laminato: 0,
      quarzo: 350,
      hpl: 200,
      gres: 400,
    }[top] || 0;

    const subtotal = (basePerMl + topAdd) * Number(length || 0);
    // include a small design+logistics package
    const service = Math.min(600, subtotal * 0.08);
    const total = subtotal + service;
    return { basePerMl, topAdd, subtotal, service, total };
  }, [style, top, length]);

  return (
    <section id="preventivi" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Preventivatore cucina
            </h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              Scegli lo stile, il top e inserisci i metri lineari della cucina. Riceverai un
              costo indicativo immediato. Per una quotazione precisa offriamo sopralluogo e progetto gratuiti.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Stile cucina</label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-black focus:outline-none"
                >
                  <option value="moderna">Moderna</option>
                  <option value="classica">Classica</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Top</label>
                <select
                  value={top}
                  onChange={(e) => setTop(e.target.value)}
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-black focus:outline-none"
                >
                  <option value="laminato">Laminato</option>
                  <option value="quarzo">Quarzo</option>
                  <option value="hpl">HPL</option>
                  <option value="gres">Gres</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Metri lineari cucina (ml)</label>
                <input
                  type="number"
                  min={1}
                  step={0.5}
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-black focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">Stima</h3>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <div className="flex items-center justify-between">
                <span>
                  Base {style === 'moderna' ? 'moderna' : 'classica'}: {currency(price.basePerMl)} / ml
                </span>
                <span>× {length} ml</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Top {top.charAt(0).toUpperCase() + top.slice(1)}: +{currency(price.topAdd)} / ml</span>
                <span>× {length} ml</span>
              </div>
              <div className="my-3 h-px w-full bg-gray-200" />
              <div className="flex items-center justify-between font-medium">
                <span>Parziale</span>
                <span>{currency(price.subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Servizi (progetto, logistica)</span>
                <span>{currency(price.service)}</span>
              </div>
              <div className="my-3 h-px w-full bg-gray-200" />
              <div className="flex items-center justify-between text-base font-semibold">
                <span>Totale stimato</span>
                <span>{currency(price.total)}</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Stima non vincolante. Prezzi variabili in base a brand, elettrodomestici, impiantistica e cantiere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estimator;
