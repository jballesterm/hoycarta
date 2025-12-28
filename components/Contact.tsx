import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Empieza hoy mismo</h2>
            <p className="text-lg text-slate-600 mb-8">
              Déjanos tus datos y un especialista de HoyCarta te contactará para entender tus necesidades y darte un presupuesto a medida.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Llámanos</h4>
                  <p className="text-slate-600">+34 900 123 456</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">WhatsApp</h4>
                  <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-green-600 transition-colors">
                    +34 600 000 000
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Email</h4>
                  <p className="text-slate-600">hola@hoycarta.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Oficinas Jabatec</h4>
                  <p className="text-slate-600">Av. de Francia, 35. Edificio Hub<br/>46023 Valencia, España</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="Juan Pérez" />
                </div>
                <div>
                  <label htmlFor="restaurant" className="block text-sm font-medium text-slate-700 mb-1">Restaurante / Hotel</label>
                  <input type="text" id="restaurant" className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="Restaurante El Sabor" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="juan@ejemplo.com" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="+34 600 000 000" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">¿Qué necesitas?</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="Me gustaría actualizar la carta de vinos y..."></textarea>
              </div>

              <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors shadow-lg">
                Solicitar Información
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;