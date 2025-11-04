import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Estimator from './components/Estimator';
import Contact from './components/Contact';

function App() {
  const whatsappHref = `https://wa.me/393793205801?text=${encodeURIComponent(
    'Ciao Emozione Arredo, vorrei informazioni.'
  )}`;

  return (
    <div className="font-inter antialiased">
      <Hero />
      <Services />
      <Estimator />
      <Contact />
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-600 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} Emozione Arredo • Tutti i diritti riservati
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.tiktok.com/@emozionearredo?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              TikTok
            </a>
            <a href="mailto:emozionearredo@gmail.com" className="hover:underline">
              emozionearredo@gmail.com
            </a>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="hover:underline">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
