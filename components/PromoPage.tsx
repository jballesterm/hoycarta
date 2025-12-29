import React, { useEffect } from 'react';
import { ArrowLeft, Sparkles, CheckCircle, ShieldCheck, Clock, MessageSquare, Rocket, Gift } from 'lucide-react';

interface PromoPageProps {
  onBack: () => void;
}

const PromoPage: React.FC<PromoPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-200/50 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors mb-12 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Offer details */}
          <div className="animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-lg shadow-orange-600/20">
              <Rocket className="h-4 w-4" />
              Oferta de Lanzamiento Exclusiva
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1]">
              Tu Carta Digital a <span className="text-orange-600">Coste Cero</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Somos el nuevo servicio de la agencia <strong>Jabatec</strong>. Queremos que los primeros en unirse a la revolución de HoyCarta lo hagan sin barreras.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                  <Gift className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Alta y Diseño GRATIS</h3>
                  <p className="text-slate-500 text-sm">Ahorra los 299€ de configuración inicial. Creamos tu diseño de autor desde cero sin coste.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Mantenimiento GRATIS (6 Meses)</h3>
                  <p className="text-slate-500 text-sm">Cambios ilimitados vía WhatsApp sin cuotas mensuales para los primeros negocios.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-6 w-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Garantía Jabatec</h3>
                  <p className="text-slate-500 text-sm">Tecnología robusta y soporte directo por una agencia con años de experiencia.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Counter and Form */}
          <div className="animate-in slide-in-from-right duration-700">
            <div className="bg-slate-900 rounded-[3rem] p-10 md:p-12 text-white relative shadow-2xl overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl"></div>
              
              <div className="text-center mb-10">
                <div className="inline-block p-4 rounded-3xl bg-white/10 backdrop-blur-md mb-6 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-orange-500">3</div>
                    <div className="text-left">
                      <p className="text-xs uppercase font-bold tracking-widest text-orange-500">Próximamente</p>
                      <p className="text-sm font-bold">En breve 3 plazas disponibles</p>
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-4">¿Quieres ser uno de ellos?</h2>
                <p className="text-slate-400 text-sm">Completa el formulario y te confirmaremos si entras en la promoción en cuanto se abran las plazas.</p>
              </div>

              <form className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Tu Nombre</label>
                  <input type="text" className="w-full bg-slate-800 border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="Ej. Antonio García" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Nombre del Negocio</label>
                  <input type="text" className="w-full bg-slate-800 border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="Ej. Restaurante La Brasa" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Teléfono de Contacto</label>
                  <input type="tel" className="w-full bg-slate-800 border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="+34 600 000 000" />
                </div>
                
                <button type="button" className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-2xl mt-6 shadow-xl shadow-orange-600/20 flex items-center justify-center gap-2 transition-all active:scale-95">
                  <Sparkles className="h-5 w-5" />
                  AVÍSAME CUANDO ESTÉN DISPONIBLES
                </button>
                
                <p className="text-center text-[10px] text-slate-500 mt-4">
                  Al enviar este formulario, te incluiremos en la lista de espera prioritaria. Oferta válida hasta completar las 3 plazas una vez se abra el registro.
                </p>
              </form>
            </div>

            {/* Success indicator mock */}
            <div className="mt-8 flex items-center justify-center gap-6 text-slate-400">
               <div className="flex items-center gap-2">
                 <CheckCircle className="h-4 w-4 text-green-500" />
                 <span className="text-xs font-medium">Sin compromiso</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle className="h-4 w-4 text-green-500" />
                 <span className="text-xs font-medium">Soporte Jabatec</span>
               </div>
            </div>
          </div>
        </div>

        {/* Benefits Section for the Promo */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">¿Por qué lo hacemos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <h4 className="text-xl font-bold mb-4 text-orange-600">Nuevos en el sector</h4>
                <p className="text-slate-600 text-sm leading-relaxed">HoyCarta es una nueva división de Jabatec. Necesitamos casos de éxito y queremos que los primeros sean espectaculares.</p>
             </div>
             <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <h4 className="text-xl font-bold mb-4 text-orange-600">Feedback Real</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Tu experiencia como hostelero nos ayudará a pulir los detalles de nuestro servicio gestionado premium.</p>
             </div>
             <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <h4 className="text-xl font-bold mb-4 text-orange-600">Relación a largo plazo</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Estamos seguros de que una vez veas cómo cuidamos de tu negocio, no querrás usar otra plataforma nunca más.</p>
             </div>
          </div>
        </div>

        {/* Floating WhatsApp for Promo */}
        <div className="mt-20 flex justify-center">
           <a href="https://wa.me/34600000000" className="flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-green-500 transition-all hover:scale-105">
             <MessageSquare className="h-6 w-6" />
             HABLAR POR WHATSAPP AHORA
           </a>
        </div>
      </div>
    </div>
  );
};

export default PromoPage;