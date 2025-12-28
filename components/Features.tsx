import React from 'react';
import { Palette, RefreshCw, Smartphone, QrCode, Clock, ShieldCheck } from 'lucide-react';
import { ServiceFeature } from '../types';

const features: ServiceFeature[] = [
  {
    title: "Diseño 100% A Medida",
    description: "No usamos plantillas genéricas. Nuestros diseñadores crean una carta que refleja fielmente la identidad visual de tu restaurante.",
    icon: Palette
  },
  {
    title: "Mantenimiento Incluido",
    description: "¿Cambio de precios? ¿Nuevo plato del día? Solo envíanos un WhatsApp y nosotros actualizamos la carta al instante.",
    icon: RefreshCw
  },
  {
    title: "Optimizado para Móvil",
    description: "Una experiencia de usuario fluida y rápida. Sin descargas de PDF pesados que frustran a tus clientes.",
    icon: Smartphone
  },
  {
    title: "Códigos QR Personalizados",
    description: "Te entregamos los QRs listos para imprimir, integrados con tu logo y colores corporativos.",
    icon: QrCode
  },
  {
    title: "Menús Diarios Automáticos",
    description: "Programamos tu oferta para que cambie sola. El menú se activa entre semana y se oculta los fines de semana y festivos.",
    icon: Clock
  },
  {
    title: "Garantía Jabatec",
    description: "El respaldo tecnológico de una agencia de desarrollo web consolidada. Servidores rápidos y seguros.",
    icon: ShieldCheck
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-600 font-semibold tracking-wide uppercase text-sm mb-2">Nuestros Servicios</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Todo lo que necesitas, sin el trabajo duro</h3>
          <p className="text-lg text-slate-600">
            A diferencia de otras plataformas, en HoyCarta no te vendemos una herramienta, te vendemos un <strong>servicio completo</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                <feature.icon className="h-6 w-6 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;