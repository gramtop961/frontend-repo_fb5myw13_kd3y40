import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, ExternalLink } from 'lucide-react';

const Contact = () => {
  const whatsappHref = `https://wa.me/393793205801?text=${encodeURIComponent(
    'Ciao Emozione Arredo, vorrei informazioni e fissare un sopralluogo gratuito.'
  )}`;

  return (
    <section id="contatti" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Contatti
            </h2>
            <p className="mt-2 max-w-xl text-gray-600">
              Scrivici o chiamaci per fissare il sopralluogo gratuito o una visita del nostro arredatore a domicilio.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3 text-gray-700">
                <MessageCircle className="mt-0.5 h-5 w-5" />
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="hover:underline">
                  WhatsApp: +39 379 3205801
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <Phone className="mt-0.5 h-5 w-5" />
                <a href="tel:+393793205801" className="hover:underline">
                  +39 379 3205801
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <Mail className="mt-0.5 h-5 w-5" />
                <a href="mailto:emozionearredo@gmail.com" className="hover:underline">emozionearredo@gmail.com</a>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <ExternalLink className="mt-0.5 h-5 w-5" />
                <a
                  href="https://www.tiktok.com/@emozionearredo?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  TikTok @emozionearredo
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <MapPin className="mt-0.5 h-5 w-5" />
                <span>Operiamo a domicilio: sopralluoghi gratuiti in zona</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <form
              action="https://formspree.io/f/xkgrngwb"
              method="POST"
              className="grid gap-4"
            >
              <input type="hidden" name="_subject" value="Nuova richiesta contatti dal sito" />
              <input type="hidden" name="source" value="contact-section" />

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
                    className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-black focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Messaggio</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-black focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-black/90"
              >
                Invia richiesta
              </button>
              <p className="text-xs text-gray-500">
                Preferisci WhatsApp? Scrivici su{' '}
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="underline">
                  +39 379 3205801
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
