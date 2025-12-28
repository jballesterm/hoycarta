import React from 'react';
import { Check, X, Info } from 'lucide-react';
import { ComparisonPoint } from '../types';

const comparisonData: ComparisonPoint[] = [
  { feature: "Diseño Gráfico Profesional", hoyCarta: true, others: false },
  { feature: "Actualización de Precios/Platos", hoyCarta: "Nosotros lo hacemos", others: "Tú lo haces" },
  { feature: "Menús Diarios Automáticos", hoyCarta: true, others: false },
  { feature: "Soporte Técnico Directo", hoyCarta: "Whatsapp / Teléfono", others: "Tickets / Chatbot" },
  { feature: "Dominio Personalizado", hoyCarta: true, others: "Subdominio genérico" },
  { feature: "Tiempo requerido por ti", hoyCarta: "0 minutos", others: "Horas/Mes" },
];

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Por qué elegir HoyCarta?</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              La mayoría de servicios en el mercado son herramientas de "hazlo tú mismo". Te cobran una suscripción y te dejan solo con un editor complicado.
              <br /><br />
              <strong>HoyCarta es diferente.</strong> Somos tu departamento digital externo. <strong>Precios siempre actualizados, no más errores.</strong> Nos envías los cambios por WhatsApp y nosotros nos encargamos de todo.
            </p>
            
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <div className="flex gap-4">
                 <Info className="h-6 w-6 text-orange-400 shrink-0 mt-1" />
                 <div>
                   <h4 className="font-bold text-lg mb-2 text-orange-400">El enfoque Jabatec</h4>
                   <p className="text-slate-300 text-sm">
                     Respaldados por Jabatec, aplicamos las mejores prácticas de UX/UI para que tus clientes pidan más y más rápido.
                   </p>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-3 bg-slate-100 p-4 border-b border-slate-200">
              <div className="col-span-1"></div>
              <div className="col-span-1 text-center font-bold text-slate-900">Otras Apps</div>
              <div className="col-span-1 text-center font-bold text-orange-600 flex items-center justify-center gap-2">
                 HoyCarta
              </div>
            </div>
            {comparisonData.map((row, idx) => (
              <div key={idx} className={`grid grid-cols-3 p-5 items-center ${idx !== comparisonData.length - 1 ? 'border-b border-slate-100' : ''}`}>
                <div className="col-span-1 font-medium text-slate-700 text-sm md:text-base">{row.feature}</div>
                <div className="col-span-1 flex justify-center text-center text-sm text-slate-500">
                  {typeof row.others === 'boolean' ? (
                    row.others ? <Check className="text-green-500" /> : <X className="text-red-400" />
                  ) : (
                    <span>{row.others}</span>
                  )}
                </div>
                <div className="col-span-1 flex justify-center text-center font-semibold text-slate-900 bg-orange-50/50 py-2 rounded-lg -my-2">
                   {typeof row.hoyCarta === 'boolean' ? (
                    row.hoyCarta ? <Check className="text-orange-600 h-6 w-6" /> : <X className="text-red-400" />
                  ) : (
                    <span className="text-orange-700 text-sm">{row.hoyCarta}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;