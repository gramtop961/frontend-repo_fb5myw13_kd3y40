import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const whatsappHref = `https://wa.me/393793205801?text=${encodeURIComponent(
    'Ciao Emozione Arredo, vorrei un preventivo e un sopralluogo gratuito.'
  )}`;

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-28 sm:py-36">
        <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          Emozione Arredo • Mobili • Infissi • Ristrutturazioni
        </span>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Arredi su misura e ristrutturazioni chiavi in mano
        </h1>
        <p className="max-w-2xl text-white/80">
          Arredatore gratuito a domicilio per rilievo misure e progetto. Sopralluogo gratuito per infissi e ristrutturazioni.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => handleScrollTo('preventivi')}
            className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Richiedi preventivo
          </button>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/30 bg-transparent px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white hover:bg-white/10"
          >
            Scrivici su WhatsApp
          </a>
          <button
            onClick={() => handleScrollTo('contatti')}
            className="rounded-md border border-white/30 bg-transparent px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white hover:bg-white/10"
          >
            Contatti
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
