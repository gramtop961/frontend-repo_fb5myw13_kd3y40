import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contatti" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Contatti
            </h2>
            <p className="mt-2 max-w-xl text-gray-600">
              Chiamaci o scrivici per fissare il sopralluogo gratuito o una visita del nostro arredatore a domicilio.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3 text-gray-700">
                <Phone className="mt-0.5 h-5 w-5" />
                <a href="tel:+390000000000" className="hover:underline">+39 000 000 0000</a>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <Mail className="mt-0.5 h-5 w-5" />
                <a href="mailto:info@tuaazienda.it" className="hover:underline">info@tuaazienda.it</a>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <MapPin className="mt-0.5 h-5 w-5" />
                <span>Via Esempio 123, 00100 Roma</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <form action="mailto:info@tuaazienda.it" method="post" encType="text/plain" className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nome</label>
                <input
                  type="text"
                  name="Nome"
                  required
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-black focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="Email"
                  required
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-black focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Messaggio</label>
                <textarea
                  name="Messaggio"
                  rows={4}
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-black focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-black/90"
              >
                Invia richiesta
              </button>
              <p className="text-xs text-gray-500">Oppure scrivici direttamente a info@tuaazienda.it</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
