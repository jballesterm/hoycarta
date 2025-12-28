import React from 'react';
import { ChefHat } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: 'home' | 'services' | 'demos' | 'promo' | 'sitemap') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div 
            className="flex items-center gap-2 mb-4 md:mb-0 cursor-pointer"
            onClick={() => onNavigate?.('home')}
          >
            <div className="bg-orange-500 p-1.5 rounded">
               <ChefHat className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl text-white font-serif">HoyCarta</span>
          </div>
          
          <div className="text-sm">
            &copy; {new Date().getFullYear()} HoyCarta. Un servicio de <span className="text-white font-bold">Jabatec</span>.
          </div>
          
          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <button 
              onClick={() => onNavigate?.('sitemap')}
              className="hover:text-orange-400 transition-colors"
            >
              Mapa del sitio
            </button>
            <a href="#" className="hover:text-orange-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Términos</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;