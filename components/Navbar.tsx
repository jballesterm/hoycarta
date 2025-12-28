import React, { useState } from 'react';
import { Menu, X, ChefHat, Sparkles } from 'lucide-react';

// Fix: Added 'sitemap' to allowed view types to match App.tsx state
interface NavbarProps {
  onNavigate: (view: 'home' | 'services' | 'demos' | 'promo' | 'sitemap') => void;
  currentView: 'home' | 'services' | 'demos' | 'promo' | 'sitemap';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);

    if (href === '#services-page') {
      e.preventDefault();
      onNavigate('services');
      return;
    }

    if (href === '#demos') {
      e.preventDefault();
      onNavigate('demos');
      return;
    }

    if (href === '#promo') {
      e.preventDefault();
      onNavigate('promo');
      return;
    }

    // Navegación a secciones de la Home (#home, #contact, etc.)
    if (currentView !== 'home') {
      e.preventDefault();
      onNavigate('home');
      
      // Si el enlace es a una sección específica (no solo el inicio)
      if (href !== '#home') {
        setTimeout(() => {
          const id = href.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <div className="bg-orange-500 p-2 rounded-lg group-hover:rotate-12 transition-transform">
               <ChefHat className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-slate-900 font-serif tracking-tight">HoyCarta</span>
          </div>
          
          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentView === 'home' ? 'text-orange-600' : 'text-slate-600 hover:text-orange-600'}`}
            >
              Inicio
            </a>
            <a
              href="#promo"
              onClick={(e) => handleLinkClick(e, '#promo')}
              className={`px-3 py-2 rounded-md text-sm font-bold transition-all flex items-center gap-1 ${currentView === 'promo' ? 'text-orange-600 scale-105' : 'text-slate-600 hover:text-orange-600'}`}
            >
              <Sparkles className="h-4 w-4 text-orange-500 animate-pulse" />
              Oferta Lanzamiento
            </a>
            <a
              href="#demos"
              onClick={(e) => handleLinkClick(e, '#demos')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentView === 'demos' ? 'text-orange-600 font-bold' : 'text-slate-600 hover:text-orange-600'}`}
            >
              Demos
            </a>
            <a
              href="#services-page"
              onClick={(e) => handleLinkClick(e, '#services-page')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentView === 'services' ? 'text-orange-600 font-bold' : 'text-slate-600 hover:text-orange-600'}`}
            >
              Servicios Detallados
            </a>
            
            <a 
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Solicitar Presupuesto
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="block text-slate-600 hover:text-orange-600 hover:bg-orange-50 px-3 py-3 rounded-md text-base font-medium"
            >
              Inicio
            </a>
            <a
              href="#promo"
              onClick={(e) => handleLinkClick(e, '#promo')}
              className="block text-orange-600 font-bold bg-orange-50 px-3 py-3 rounded-md text-base"
            >
              🚀 Oferta Lanzamiento
            </a>
            <a
              href="#demos"
              onClick={(e) => handleLinkClick(e, '#demos')}
              className="block text-slate-600 hover:text-orange-600 hover:bg-orange-50 px-3 py-3 rounded-md text-base font-medium"
            >
              Demos
            </a>
            <a
              href="#services-page"
              onClick={(e) => handleLinkClick(e, '#services-page')}
              className="block text-slate-600 hover:text-orange-600 hover:bg-orange-50 px-3 py-3 rounded-md text-base font-medium"
            >
              Servicios Detallados
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;