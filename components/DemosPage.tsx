import React, { useEffect, useState } from 'react';
import { ArrowLeft, Smartphone, ExternalLink, MessageCircle, ChevronRight, Info, X as CloseIcon, Image as ImageIcon, Type as TextIcon } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  desc: string;
  allergens: string[];
  image?: string;
}

interface DemoItem {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  color: string;
  theme: 'light' | 'dark' | 'sepia';
  hasImages: boolean;
  categories: {
    name: string;
    items: MenuItem[];
  }[];
}

const demos: DemoItem[] = [
  {
    id: 'italian',
    name: 'La Trattoria',
    type: 'Alta Cocina Italiana',
    description: 'Diseño elegante con tipografías serif, fondos crema y fotografía gastronómica de alta resolución.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600',
    color: 'bg-stone-100',
    theme: 'sepia',
    hasImages: true,
    categories: [
      {
        name: 'Antipasti',
        items: [
          { name: 'Bruschetta Classica', price: '12,50€', desc: 'Tomate cherry, albahaca fresca y aceite de oliva virgen extra.', allergens: ['G'], image: 'https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&q=80&w=400' },
          { name: 'Burrata de Puglia', price: '16,00€', desc: 'Sobre cama de rúcula y tomates secos hidratados.', allergens: ['L'], image: 'https://images.unsplash.com/photo-1510629954389-c1e0da47d414?auto=format&fit=crop&q=80&w=400' }
        ]
      },
      {
        name: 'Pasta',
        items: [
          { name: 'Lasagna alla Bolognese', price: '18,50€', desc: 'Receta tradicional de la abuela con ragú de 6 horas.', allergens: ['G', 'L'], image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=400' }
        ]
      }
    ]
  },
  {
    id: 'modern',
    name: 'Bistró & Co',
    type: 'Casual Dining / Brunch',
    description: 'Interfaz minimalista, moderna y rápida. Ideal para públicos jóvenes que buscan inmediatez.',
    image: 'https://images.unsplash.com/photo-1550966842-30c29a0d20d8?auto=format&fit=crop&q=80&w=600',
    color: 'bg-sky-50',
    theme: 'light',
    hasImages: true,
    categories: [
      {
        name: 'Brunch',
        items: [
          { name: 'Avocado Toast', price: '9,50€', desc: 'Pan de masa madre, aguacate, huevo poché y semillas.', allergens: ['G', 'H'], image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=400' },
          { name: 'Açai Bowl', price: '8,00€', desc: 'Frutos rojos, granola casera y plátano.', allergens: ['F'], image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=400' }
        ]
      }
    ]
  },
  {
    id: 'sushi',
    name: 'Kobe Sushi',
    type: 'Cocina Japonesa',
    description: 'Efecto Dark Mode con detalles en dorado y rojo neón. Categorización por tipos de maki y sashimi.',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=600',
    color: 'bg-zinc-900',
    theme: 'dark',
    hasImages: true,
    categories: [
      {
        name: 'Maki Rolls',
        items: [
          { name: 'Dragon Roll', price: '14,00€', desc: 'Langostino en tempura, aguacate y salsa unagi.', allergens: ['G', 'P'], image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=80&w=400' },
          { name: 'Spicy Tuna', price: '12,50€', desc: 'Atún rojo, mayonesa picante y cebollino.', allergens: ['P', 'H'], image: 'https://images.unsplash.com/photo-1559461678-8348d2dd23c0?auto=format&fit=crop&q=80&w=400' }
        ]
      }
    ]
  },
  {
    id: 'classic-text',
    name: 'Mesón del Valle',
    type: 'Asador Tradicional',
    description: 'Estilo sobrio sin imágenes, centrado en la legibilidad y la elegancia del texto. Ideal para menús extensos.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600',
    color: 'bg-stone-50',
    theme: 'sepia',
    hasImages: false,
    categories: [
      {
        name: 'Carnes a la Brasa',
        items: [
          { name: 'Chuletón de Ávila', price: '45,00€', desc: 'Madurado 45 días, 800g de sabor puro a la parrilla de encina.', allergens: [] },
          { name: 'Cochinillo Asado', price: '22,00€', desc: 'Crujiente por fuera y tierno por dentro, estilo Segovia.', allergens: [] },
          { name: 'Entrecot de Ternera', price: '19,50€', desc: 'Acompañado de patatas panadera y pimientos de padrón.', allergens: [] }
        ]
      }
    ]
  },
  {
    id: 'wine-list',
    name: 'Bodega Selección',
    type: 'Carta de Vinos',
    description: 'Diseño tipo listado limpio, enfocado en añadas y denominaciones de origen. Sin distracciones visuales.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600',
    color: 'bg-zinc-950',
    theme: 'dark',
    hasImages: false,
    categories: [
      {
        name: 'Tintos Ribera',
        items: [
          { name: 'Pago de los Capellanes', price: '32,00€', desc: 'Crianza, Tempranillo. Notas de fruta negra y tostados.', allergens: ['S'] },
          { name: 'Aalto 2021', price: '48,00€', desc: 'Elegante, potente y muy equilibrado. 100% Tinto Fino.', allergens: ['S'] }
        ]
      },
      {
        name: 'Blancos Rías Baixas',
        items: [
          { name: 'Terras Gauda', price: '24,00€', desc: 'Albariño, Loureiro y Caiño blanco. Frescura marina.', allergens: ['S'] }
        ]
      }
    ]
  }
];

interface DemosPageProps {
  onBack: () => void;
}

const DemosPage: React.FC<DemosPageProps> = ({ onBack }) => {
  const [filter, setFilter] = useState<'all' | 'with' | 'without'>('all');
  const [activeDemo, setActiveDemo] = useState<DemoItem>(demos[0]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredDemos = demos.filter(d => {
    if (filter === 'all') return true;
    if (filter === 'with') return d.hasImages;
    if (filter === 'without') return !d.hasImages;
    return true;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveCategory(0);
    setSelectedItem(null);
    // Si la demo activa ya no está en la lista filtrada, selecciona la primera del filtro
    if (!filteredDemos.find(d => d.id === activeDemo.id) && filteredDemos.length > 0) {
      setActiveDemo(filteredDemos[0]);
    }
  }, [activeDemo, filter]);

  const getThemeStyles = () => {
    switch (activeDemo.theme) {
      case 'dark': return 'bg-zinc-950 text-white';
      case 'sepia': return 'bg-[#fdf9f3] text-stone-900';
      default: return 'bg-white text-slate-900';
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text and Selector */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Diseño <span className="text-orange-600 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">a medida</span>
            </h1>
            
            {/* Filter Tabs */}
            <div className="flex p-1 bg-slate-200 rounded-xl w-fit mb-8">
              <button 
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${filter === 'all' ? 'bg-white text-orange-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Todos
              </button>
              <button 
                onClick={() => setFilter('with')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${filter === 'with' ? 'bg-white text-orange-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <ImageIcon className="h-3.5 w-3.5" />
                Con Fotos
              </button>
              <button 
                onClick={() => setFilter('without')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${filter === 'without' ? 'bg-white text-orange-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <TextIcon className="h-3.5 w-3.5" />
                Solo Texto
              </button>
            </div>

            <div className="space-y-4 mb-12 max-h-[500px] overflow-y-auto pr-2 scrollbar-hide">
              {filteredDemos.length > 0 ? filteredDemos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo)}
                  className={`w-full text-left p-6 rounded-2xl transition-all border ${
                    activeDemo.id === demo.id 
                      ? 'bg-white shadow-xl border-orange-200 ring-2 ring-orange-500/10' 
                      : 'bg-white/50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600 mb-1 block">
                        {demo.type}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{demo.name}</h3>
                      <p className={`text-sm ${activeDemo.id === demo.id ? 'text-slate-600' : 'text-slate-400'}`}>
                        {demo.description}
                      </p>
                    </div>
                    {activeDemo.id === demo.id && <div className="h-3 w-3 rounded-full bg-orange-500 mt-2"></div>}
                  </div>
                </button>
              )) : (
                <div className="text-center py-10 bg-white/50 rounded-2xl border-2 border-dashed border-slate-200">
                  <p className="text-slate-400 font-medium">No hay demos en esta categoría</p>
                </div>
              )}
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-2xl">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Info className="h-5 w-5 text-orange-400" />
                Tu carta será única
              </h4>
              <p className="text-slate-400 text-sm mb-6">
                Esto es solo una pequeña muestra. El equipo de Jabatec personalizará cada píxel para que la carta sea una extensión de tu local físico.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-orange-500 transition-colors text-sm">
                Quiero una carta así
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Mobile Simulator */}
          <div className="flex justify-center relative">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] opacity-40 transition-colors duration-1000 ${activeDemo.id === 'sushi' || activeDemo.id === 'wine-list' ? 'bg-zinc-800' : 'bg-orange-400'}`}></div>
            
            <div className="relative z-10">
              {/* Phone Frame */}
              <div className="w-[320px] h-[660px] bg-slate-900 rounded-[3.2rem] p-3 shadow-[0_0_80px_rgba(0,0,0,0.3)] border-4 border-slate-800 relative overflow-hidden ring-12 ring-slate-900/10">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-40"></div>
                
                {/* Screen Content */}
                <div className={`w-full h-full rounded-[2.5rem] overflow-hidden relative flex flex-col ${getThemeStyles()}`}>
                  
                  {/* Phone Header */}
                  <div className={`sticky top-0 z-30 px-6 pt-10 pb-4 backdrop-blur-lg ${activeDemo.theme === 'dark' ? 'bg-zinc-950/80 border-zinc-800' : 'bg-white/80 border-slate-100'} border-b`}>
                    <div className="flex justify-between items-center mb-6">
                      <div className="h-8 w-8 bg-orange-500 rounded-lg flex items-center justify-center">
                         <Smartphone className="h-4 w-4 text-white" />
                      </div>
                      <span className={`text-xs font-bold ${activeDemo.theme === 'dark' ? 'text-zinc-400' : 'text-slate-400'}`}>DEMO LIVE</span>
                      <div className="h-8 w-8 bg-slate-100 rounded-lg flex items-center justify-center">
                         <MessageCircle className="h-4 w-4 text-green-600" />
                      </div>
                    </div>
                    <h4 className={`text-xl font-bold mb-1 ${activeDemo.theme === 'sepia' ? 'font-serif' : ''}`}>{activeDemo.name}</h4>
                    <p className="text-[10px] opacity-60 uppercase tracking-widest font-bold">Carta Digital Gestionada</p>
                  </div>

                  {/* Category Tabs */}
                  <div className={`sticky top-[148px] z-20 flex gap-4 px-6 py-4 overflow-x-auto scrollbar-hide border-b ${activeDemo.theme === 'dark' ? 'bg-zinc-950/50 border-zinc-900' : 'bg-white/50 border-slate-50'}`}>
                    {activeDemo.categories.map((cat, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setActiveCategory(idx)}
                        className={`whitespace-nowrap text-xs font-bold px-3 py-1.5 rounded-full transition-all ${
                          activeCategory === idx 
                            ? 'bg-orange-600 text-white shadow-md shadow-orange-900/20' 
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>

                  {/* Menu Items List */}
                  <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 scroll-smooth scrollbar-hide pb-20">
                    <div className="mb-2">
                      <h5 className={`text-lg font-bold mb-6 ${activeDemo.theme === 'sepia' ? 'font-serif border-b-2 border-stone-200 inline-block pb-1' : ''}`}>
                        {activeDemo.categories[activeCategory].name}
                      </h5>
                    </div>
                    
                    {activeDemo.categories[activeCategory].items.map((item, i) => (
                      <button 
                        key={i} 
                        onClick={() => setSelectedItem(item)}
                        className="w-full group flex items-start gap-4 text-left animate-in slide-in-from-right-4 duration-300"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        {/* Conditional Image */}
                        {activeDemo.hasImages && item.image && (
                          <div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden shadow-sm border border-black/5">
                             <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                        )}
                        
                        <div className="flex-1 min-w-0">
                          <div className={`flex justify-between items-baseline gap-2 mb-1 ${!activeDemo.hasImages ? 'border-b pb-1' : ''} ${activeDemo.theme === 'dark' ? 'border-zinc-800' : 'border-slate-100'}`}>
                            <h6 className={`font-bold truncate ${!activeDemo.hasImages ? 'text-base' : 'text-sm'}`}>{item.name}</h6>
                            <span className="text-orange-600 font-bold text-xs shrink-0">{item.price}</span>
                          </div>
                          <p className={`text-[10px] line-clamp-2 leading-relaxed opacity-60`}>
                            {item.desc}
                          </p>
                          <div className="flex gap-1 mt-2">
                            {item.allergens.map(a => (
                              <span key={a} className={`w-4 h-4 rounded-full flex items-center justify-center text-[7px] font-bold ${activeDemo.theme === 'dark' ? 'bg-zinc-800 text-zinc-400' : 'bg-slate-100 text-slate-500'}`}>
                                {a}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 shrink-0 text-slate-300 self-center" />
                      </button>
                    ))}

                    {/* Footer Mock */}
                    <div className="py-12 text-center opacity-30 text-[10px] font-bold tracking-widest">
                       HOYCARTA.COM BY JABATEC
                    </div>
                  </div>

                  {/* Detail Overlay */}
                  {selectedItem && (
                    <div className={`absolute inset-0 z-50 p-6 flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-500 ${getThemeStyles()}`}>
                      <button 
                        onClick={() => setSelectedItem(null)}
                        className="absolute top-10 right-6 w-10 h-10 rounded-full bg-black/10 backdrop-blur-md flex items-center justify-center z-10 hover:bg-black/20"
                      >
                        <CloseIcon className="h-5 w-5" />
                      </button>
                      
                      <div className="flex-1 overflow-y-auto scrollbar-hide">
                        {activeDemo.hasImages && selectedItem.image ? (
                          <div className="aspect-square -mx-6 mb-8 shadow-xl">
                            <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className={`h-40 -mx-6 mb-8 flex items-center justify-center ${activeDemo.theme === 'dark' ? 'bg-zinc-900' : 'bg-slate-100'}`}>
                             <TextIcon className="h-12 w-12 opacity-20" />
                          </div>
                        )}
                        
                        <div className="flex justify-between items-start mb-4">
                          <h2 className={`text-3xl font-bold ${activeDemo.theme === 'sepia' ? 'font-serif' : ''}`}>
                            {selectedItem.name}
                          </h2>
                          <span className="text-2xl font-bold text-orange-600">
                            {selectedItem.price}
                          </span>
                        </div>
                        
                        <p className="text-sm opacity-80 leading-relaxed mb-8">
                          {selectedItem.desc}
                        </p>
                        
                        <div className="space-y-6">
                          <div>
                            <h5 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-3">Ingredientes destacados</h5>
                            <p className="text-sm">Seleccionamos cada ingrediente de proveedores locales para garantizar la máxima frescura.</p>
                          </div>
                          
                          <div className={`p-4 rounded-2xl border ${activeDemo.theme === 'dark' ? 'bg-zinc-900 border-zinc-800 text-zinc-300' : 'bg-orange-50 border-orange-100 text-orange-800'}`}>
                            <h5 className="text-xs font-bold mb-2">Información sobre Alérgenos</h5>
                            <div className="flex gap-2">
                              {selectedItem.allergens.length > 0 ? selectedItem.allergens.map(a => (
                                <span key={a} className="bg-white px-2 py-1 rounded text-[10px] font-bold text-orange-600 shadow-sm">
                                  Contiene {a === 'G' ? 'Gluten' : a === 'L' ? 'Lácteos' : a === 'P' ? 'Pescado' : a === 'S' ? 'Sulfitos' : 'Huevo'}
                                </span>
                              )) : (
                                <span className="text-[10px] opacity-60">No se han declarado alérgenos para este plato.</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => setSelectedItem(null)}
                        className={`mt-8 w-full py-4 rounded-2xl font-bold shadow-xl active:scale-95 transition-transform ${activeDemo.theme === 'dark' ? 'bg-orange-600 text-white' : 'bg-slate-900 text-white'}`}
                      >
                        Volver a la carta
                      </button>
                    </div>
                  )}

                  {/* Fixed Bottom Action */}
                  <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-40 w-4/5`}>
                    <button className="w-full bg-green-600 text-white h-12 rounded-full shadow-lg shadow-green-900/20 flex items-center justify-center gap-2 font-bold text-xs hover:bg-green-500 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      PEDIR POR WHATSAPP
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Tooltips around phone */}
              <div className="absolute -right-20 top-40 bg-white p-3 rounded-xl shadow-xl border border-slate-100 hidden xl:flex flex-col gap-1 max-w-[120px] animate-bounce">
                <span className="text-[10px] font-bold text-orange-600">¡PRUEBA!</span>
                <span className="text-[9px] text-slate-500">Pulsa en un plato para ver detalles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemosPage;