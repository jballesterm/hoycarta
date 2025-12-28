import React from 'react';
import { Palette, RefreshCw, Clock, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onExpand?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onExpand }) => {
  const mainServices = [
    {
      title: "Cartas Digitales Premium",
      description: "No es una herramienta de autogestión. Diseñamos tu carta desde cero siguiendo tu imagen de marca. Lectura fluida y diseño de alta cocina digital.",
      icon: Palette,
      features: ["Diseño UX exclusivo", "Optimización de fotos", "Categorización lógica"]
    },
    {
      title: "Mantenimiento Total Jabatec",
      description: "Olvídate de entrar en paneles. ¿Cambias un precio? ¿Añades un plato? Nos envías un WhatsApp y el equipo de Jabatec lo actualiza por ti.",
      icon: RefreshCw,
      features: ["Actualizaciones en < 24h", "Soporte personalizado", "Gestión de alérgenos"]
    },
    {
      title: "Menús Diarios Dinámicos",
      description: "Programamos tu oferta para que cambie sola. Tu menú del día se activa de lunes a viernes y se oculta automáticamente los fines de semana.",
      icon: Clock,
      features: ["Activación por horario", "Gestión de festivos", "Evita errores de pedidos"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Rocket className="h-4 w-4" />
            Servicios a Medida
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Tú te ocupas de la cocina, <span className="text-orange-600">nosotros de lo digital</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            HoyCarta es el brazo digital de <strong>Jabatec</strong> para hostelería. No te damos una app para que trabajes tú; nos convertimos en tu departamento experto.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div key={index} className="relative group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-500">
                <service.icon className="h-7 w-7 text-orange-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle2 className="h-4 w-4 text-orange-400" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* New "View More" Trigger */}
        <div className="flex justify-center mb-20">
          <button 
            onClick={onExpand}
            className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-orange-600 transition-all group"
          >
            Ver todos los servicios detallados
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Highlight Banner - Sustitución de Navidad por Menús Inteligentes */}
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Menús Inteligentes y Horarios</h3>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                Optimiza la experiencia de tus clientes con cartas que se adaptan al momento. Activamos tus menús de mediodía de lunes a viernes y los desactivamos automáticamente los fines de semana y festivos.
              </p>
              <button 
                onClick={onExpand}
                className="text-orange-400 font-bold hover:text-white transition-colors flex items-center gap-2"
              >
                Saber más sobre automatización <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="relative group bg-slate-800 rounded-2xl p-8 border border-slate-700 text-center">
                <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold">Programación Automática</h4>
                <p className="text-slate-400 text-sm mt-2">Gestión de menús diarios incluida en todos nuestros planes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;