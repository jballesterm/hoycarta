import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Comparison from './components/Comparison';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FullServicesPage from './components/FullServicesPage';
import DemosPage from './components/DemosPage';
import PromoPage from './components/PromoPage';
import SitemapPage from './components/SitemapPage';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'services' | 'demos' | 'promo' | 'sitemap'>('home');

  // Handle simple routing via state
  const navigateTo = (view: 'home' | 'services' | 'demos' | 'promo' | 'sitemap') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-orange-100 selection:text-orange-900 scroll-smooth">
      <Navbar onNavigate={navigateTo} currentView={currentView} />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero onShowDemos={() => navigateTo('demos')} />
            <div className="bg-orange-600 py-3 text-white text-center font-bold text-sm">
              <button onClick={() => navigateTo('promo')} className="hover:underline flex items-center justify-center gap-2 mx-auto">
                🚀 ¡OFERTA LANZAMIENTO! Alta y mantenimiento GRATIS para los 3 primeros. Saber más →
              </button>
            </div>
            <Services onExpand={() => navigateTo('services')} />
            <Comparison />
            <Contact />
          </>
        ) : currentView === 'services' ? (
          <FullServicesPage onBack={() => navigateTo('home')} />
        ) : currentView === 'demos' ? (
          <DemosPage onBack={() => navigateTo('home')} />
        ) : currentView === 'promo' ? (
          <PromoPage onBack={() => navigateTo('home')} />
        ) : (
          <SitemapPage onBack={() => navigateTo('home')} onNavigate={navigateTo} />
        )}
      </main>
      
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;