import React, { useEffect } from 'react';
import { ArrowLeft, Map as MapIcon, ChevronRight, Home, Layout, FileText, Sparkles, PhoneCall, Info } from 'lucide-react';

interface SitemapPageProps {
  onBack: () => void;
  onNavigate: (view: 'home' | 'services' | 'demos' | 'promo' | 'sitemap') => void;
}

const SitemapPage: React.FC<SitemapPageProps> = ({ onBack, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Página Principal",
      icon: Home,
      links: [
        { name: "Inicio", view: 'home' as const, anchor: 'home' },
        { name: "Servicios Destacados", view: 'home' as const, anchor: 'services' },
        { name: "Tabla Comparativa", view: 'home' as const, anchor: 'comparison' },
        { name: "Contacto y Presupuesto", view: 'home' as const, anchor: 'contact' },
      ]
    },
    {
      title: "Servicios y Producto",
      icon: Layout,
      links: [
        { name: "Todos los Servicios Detallados", view: 'services' as const },
        { name: "Cartas Digitales Premium", view: 'services' as const },
        { name: "Mantenimiento Gestionado", view: 'services' as const },
        { name: "Menús Inteligentes (Automatización)", view: 'services' as const },
        { name: "Demos en Vivo", view: 'demos' as const },
      ]
    },
    {
      title: "Promociones y Ofertas",
      icon: Sparkles,
      links: [
        { name: "Oferta Lanzamiento (3 Plazas)", view: 'promo' as const },
        { name: "Alta y Diseño Gratuito", view: 'promo' as const },
        { name: "Mantenimiento 6 Meses Gratis", view: 'promo' as const },
      ]
    },
    {
      title: "Información Corporativa",
      icon: Info,
      links: [
        { name: "Sobre Jabatec", view: 'home' as const, anchor: 'home' },
        { name: "Aviso Legal", view: 'sitemap' as const },
        { name: "Política de Privacidad", view: 'sitemap' as const },
        { name: "Política de Cookies", view: 'sitemap' as const },
      ]
    }
  ];

  const handleLinkClick = (link: { view: 'home' | 'services' | 'demos' | 'promo' | 'sitemap', anchor?: string }) => {
    onNavigate(link.view);
    if (link.anchor) {
      setTimeout(() => {
        const el = document.getElementById(link.anchor!);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20 animate-in fade-in duration-700">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors mb-12 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </button>

        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-4">
            <MapIcon className="h-3 w-3" />
            Estructura Web
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 font-serif">Mapa del Sitio</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Accede rápidamente a cualquier sección de HoyCarta. Aquí encontrarás un listado completo de todos nuestros servicios, demos y promociones activas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-orange-50 rounded-xl flex items-center justify-center">
                  <section.icon className="h-5 w-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 font-serif">{section.title}</h2>
              </div>
              
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <button 
                      onClick={() => handleLinkClick(link)}
                      className="flex items-center justify-between w-full text-left group"
                    >
                      <span className="text-slate-600 group-hover:text-orange-600 transition-colors">
                        {link.name}
                      </span>
                      <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-slate-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">¿No encuentras lo que buscas?</h3>
            <p className="text-slate-400">Nuestro equipo de soporte está disponible por WhatsApp para ayudarte.</p>
          </div>
          <a 
            href="https://wa.me/34600000000" 
            className="px-8 py-4 bg-orange-600 rounded-full font-bold hover:bg-orange-500 transition-all shadow-xl shadow-orange-900/40 flex items-center gap-2"
          >
            <PhoneCall className="h-5 w-5" />
            Contactar ahora
          </a>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;