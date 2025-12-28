import React, { useEffect } from 'react';
import { 
  Palette, RefreshCw, Clock, Search, 
  BarChart3, ShieldCheck, UtensilsCrossed, MonitorSmartphone,
  Layers, MessageSquare, ArrowLeft, CalendarClock
} from 'lucide-react';

const extendedServices = [
  {
    title: "Cartas Digitales de Autor",
    desc: "Diseño exclusivo por el equipo de Jabatec. No usamos plantillas; cada restaurante recibe una interfaz única que respira su marca.",
    icon: Palette,
    category: "Diseño"
  },
  {
    title: "Mantenimiento Express",
    desc: "Cambios ilimitados de precios, platos o stock. Nos envías un mensaje y en tiempo récord tu carta está actualizada.",
    icon: RefreshCw,
    category: "Gestión"
  },
  {
    title: "Sincronización de Horarios",
    desc: "Gestionamos tus horarios, cierres por festivos y vacaciones en Google My Business, redes sociales y web. Evita que tus clientes lleguen a un local cerrado.",
    icon: CalendarClock,
    category: "Presencia"
  },
  {
    title: "Menús Dinámicos por Horario",
    desc: "Activamos automáticamente tus menús diarios, brunch o cartas nocturnas según el día de la semana y la hora.",
    icon: Clock,
    category: "Automatización"
  },
  {
    title: "SEO Local & Maps",
    desc: "Optimizamos tu perfil de Google My Business para que cuando busquen 'restaurantes cerca de mí', tú seas la primera opción.",
    icon: Search,
    category: "Marketing"
  },
  {
    title: "Ingeniería de Menús",
    desc: "Analizamos tu carta para destacar visualmente los platos con mayor margen de beneficio (Menú Engineering).",
    icon: UtensilsCrossed,
    category: "Consultoría"
  },
  {
    title: "Gestión de Alérgenos",
    desc: "Implementación técnica de la normativa de alérgenos, clara para el cliente y segura para el hostelero.",
    icon: ShieldCheck,
    category: "Legal"
  },
  {
    title: "Analítica de Interés",
    desc: "¿Qué plato es el más visto? ¿A qué hora abren más tu carta? Te entregamos informes mensuales de comportamiento.",
    icon: BarChart3,
    category: "Datos"
  },
  {
    title: "Cartelería y Displays",
    desc: "Diseñamos los soportes físicos para tus mesas (metacrilatos, madera, flyers) coordinados con tu imagen digital.",
    icon: Layers,
    category: "Diseño"
  },
  {
    title: "Soporte Multi-idioma",
    desc: "Traducciones profesionales (no automáticas) para que el turista disfrute de tu oferta sin barreras.",
    icon: MonitorSmartphone,
    category: "Gestión"
  }
];

interface FullServicesPageProps {
  onBack: () => void;
}

const FullServicesPage: React.FC<FullServicesPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-28 pb-20 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </button>

        {/* Header */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Servicios <span className="text-orange-600">360°</span> para Hostelería Moderna
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            HoyCarta no es solo un menú QR. Es la división especializada de Jabatec que cubre todas las necesidades digitales de tu negocio horeca, desde el diseño hasta el cumplimiento legal y la analítica.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {extendedServices.map((service, index) => (
            <div 
              key={index} 
              className="group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500 flex flex-col h-full"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-500">
                  <service.icon className="h-8 w-8 text-orange-600 group-hover:text-white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-200/50 px-3 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-32 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">¿Necesitas un plan personalizado?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Cada restaurante es un mundo. Si buscas un servicio que no ves aquí, probablemente el equipo de desarrollo de Jabatec pueda crearlo para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  onBack();
                  setTimeout(() => {
                    const el = document.getElementById('contact');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="px-10 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-500 transition-all shadow-xl shadow-orange-900/20"
              >
                Solicitar Auditoría Gratuita
              </button>
              <a 
                href="https://wa.me/34600000000"
                className="px-10 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10 flex items-center justify-center gap-2"
              >
                <MessageSquare className="h-5 w-5" />
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullServicesPage;