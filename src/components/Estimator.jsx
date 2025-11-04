import React, { useState } from 'react';

const Estimator = () => {
  const [style, setStyle] = useState('moderna');
  const [top, setTop] = useState('laminato');
  const [length, setLength] = useState('3');

  return (
    <section id="preventivi" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Richiedi il preventivo cucina
            </h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              Seleziona preferenze e lascia i tuoi contatti: ti richiameremo per un preventivo preciso e un sopralluogo gratuito.
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
            <p className="mt-4 text-xs text-gray-500">
              Non è un preventivo automatico: i dati servono per ricontattarti e preparare un progetto su misura.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">Lascia i tuoi dati</h3>
            <form
              action="https://formspree.io/f/xkgrngwb"
              method="POST"
              className="mt-4 grid gap-4"
            >
              <input type="hidden" name="_subject" value="Lead preventivo cucina" />
              <input type="hidden" name="form" value="kitchen-estimator" />
              <input type="hidden" name="preferenze_stile" value={style} />
              <input type="hidden" name="preferenze_top" value={top} />
              <input type="hidden" name="metri_lineari" value={length} />

              <div>
                <label className="block text-sm font-medium text-gray-700">Nome</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-black focus:outline-none"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-black focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Telefono</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-black focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Note aggiuntive</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Es. consegna prevista, elettrodomestici, budget"
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-black focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-black/90"
              >
                Invia richiesta preventivo
              </button>
              <p className="text-xs text-gray-500">
                Inviando il modulo acconsenti a essere ricontattato da Emozione Arredo.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estimator;
