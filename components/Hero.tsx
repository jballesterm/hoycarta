import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface HeroProps {
  onShowDemos?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShowDemos }) => {
  return (
    <div id="home" className="relative bg-slate-50 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-orange-100 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-100 blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">Servicio Gestionado Premium</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Tú cocinas, nosotros <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">diseñamos</span> y actualizamos tu carta.
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              HoyCarta no es una app para que pierdas tiempo haciéndolo tú mismo. 
              Es un servicio integral de <strong>Jabatec</strong> donde diseñamos, publicamos y mantenemos tu menú digital por ti.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-slate-900 hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all">
                Hablar con un experto
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <button 
                onClick={onShowDemos}
                className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-all"
              >
                Ver Demos en Vivo
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Diseño a medida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Sin plataformas complicadas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Soporte Jabatec</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 mt-16 lg:mt-0 relative">
            <div className="relative rounded-2xl bg-white shadow-2xl p-4 border border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-500 cursor-pointer" onClick={onShowDemos}>
               <img 
                 src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" 
                 alt="Ejemplo de Carta Digital en Móvil" 
                 className="rounded-xl w-full h-auto object-cover shadow-inner"
               />
               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Carta Actualizada</p>
                    <p className="text-xs text-slate-500">Hace 5 minutos por HoyCarta</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;