import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Estimator from './components/Estimator';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter antialiased">
      <Hero />
      <Services />
      <Estimator />
      <Contact />
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Tua Azienda Arredo & Ristrutturazioni • P.IVA 00000000000
        </div>
      </footer>
    </div>
  );
}

export default App;
