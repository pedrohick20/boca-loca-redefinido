import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Menu as MenuIcon, 
  X, 
  ChevronRight, 
  Search, 
  User, 
  Star,
  MapPin,
  Clock,
  Phone,
  Instagram,
  Facebook,
  Plus,
  Minus,
  Trash2
} from 'lucide-react';
import { products, categories, Product } from './data/menu';

// --- TYPES ---
interface CartItem extends Product {
  quantity: number;
  breadType?: string;
}

// --- COMPONENTS ---

const Navbar = ({ cartCount, onCartClick, onUserClick }: { cartCount: number; onCartClick: () => void; onUserClick: () => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-primary/30">
            B
          </div>
          <span className="font-display font-extrabold text-2xl tracking-tight hidden sm:block">
            BOCA<span className="text-brand-primary">LOCA</span>
          </span>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-1 text-sm font-medium text-text-main/60 bg-bg-soft px-3 py-1.5 rounded-full border border-gray-100">
            <MapPin className="w-4 h-4 text-brand-primary" />
            <span>Olímpia, SP</span>
          </div>
          
          <button 
            onClick={onUserClick}
            className="p-2.5 rounded-full hover:bg-bg-soft smooth-transition text-text-main/80"
          >
            <User className="w-6 h-6" />
          </button>

          <button 
            onClick={onCartClick}
            className="group relative flex items-center gap-3 bg-text-main text-white px-5 py-2.5 rounded-full font-medium shadow-xl shadow-gray-200 active:scale-95 smooth-transition"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Carrinho</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-6 h-6 bg-brand-primary text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white font-bold group-hover:scale-110 smooth-transition">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center pt-20 overflow-hidden bg-bg-base">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#D6282810_0%,transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Star className="w-3.5 h-3.5 fill-current" />
            O melhor burger de Olímpia
          </div>
          <h1 className="text-6xl md:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-8">
            Sabor que <br />
            <span className="text-brand-primary italic">derrete</span> na boca.
          </h1>
          <p className="text-xl text-text-main/60 leading-relaxed max-w-lg mb-10">
            Ingredientes selecionados, hambúrguer artesanal e uma experiência ultra-premium de delivery em cada mordida.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-brand-primary/30 hover:bg-brand-dark active:scale-95 smooth-transition flex items-center gap-2">
              Pedir Agora <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-white border-2 border-bg-soft px-8 py-4 rounded-2xl font-bold text-lg hover:bg-bg-soft active:scale-95 smooth-transition">
              Ver Cardápio
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm font-medium text-text-main/50">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-primary" />
              <span>30-45 min</span>
            </div>
            <div className="h-4 w-[1px] bg-gray-200" />
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span>4.9 (500+ reviews)</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-brand-primary/5 rounded-[3rem] blur-3xl -z-10" />
          <img 
            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1000&auto=format&fit=crop" 
            alt="Delicious Burger" 
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(214,40,40,0.3)] rounded-[3rem] object-cover"
          />
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 glass-card p-6 rounded-3xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-text-main/40 uppercase tracking-widest">Entrega Rápida</p>
                <p className="text-lg font-black tracking-tight leading-none">Menos de 30min</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const MenuSection = ({ onAddToCart }: { onAddToCart: (p: Product) => void }) => {
  const [activeCategory, setActiveCategory] = useState("Lanches");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredProducts = products.filter(p => 
    (activeCategory === "Todos" || p.category === activeCategory) &&
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     p.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const displayCategories = ["Todos", ...categories];

  return (
    <section id="menu" className="py-24 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-text-main">
              Explore Nosso <span className="text-brand-primary">Cardápio</span>
            </h2>
            <p className="text-lg text-text-main/50 max-w-md">
              O autêntico sabor da Boca Loca, preparado com ingredientes frescos e amor.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-main/30 group-focus-within:text-brand-primary smooth-transition" />
              <input 
                type="text" 
                placeholder="Buscar lanche, bebida..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 bg-white border border-gray-100 rounded-2xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary smooth-transition shadow-sm"
              />
            </div>
            
            <div className="flex overflow-x-auto pb-2 gap-3 no-scrollbar">
              {displayCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-6 py-2.5 rounded-full font-bold text-sm smooth-transition border ${
                    activeCategory === cat 
                    ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/30' 
                    : 'bg-white text-text-main hover:bg-bg-base border-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {activeCategory === "Cervejas" && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-brand-primary/5 border border-brand-primary/20 rounded-2xl flex items-center gap-3 text-brand-primary text-sm font-bold"
          >
            <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center flex-shrink-0">18+</div>
            O consumo de bebidas alcoólicas é proibido para menores de 18 anos. Aprecie com moderação.
          </motion.div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center opacity-30">
            <Search className="w-16 h-16 mx-auto mb-4" />
            <p className="text-xl font-bold">Nenhum item encontrado</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, idx) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] smooth-transition"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black tracking-tight leading-tight mb-2 group-hover:text-brand-primary smooth-transition">
                      {product.name}
                    </h3>
                    <p className="text-sm text-text-main/50 line-clamp-2 mb-8 min-h-[40px] leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-text-main/30 uppercase tracking-widest">Preço</span>
                        <span className="text-2xl font-black tracking-tighter">
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                      <button 
                        onClick={() => onAddToCart(product)}
                        className="w-14 h-14 bg-bg-soft hover:bg-brand-primary hover:text-white rounded-2xl flex items-center justify-center smooth-transition active:scale-90 shadow-sm"
                      >
                        <Plus className="w-7 h-7" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

const CartSidebar = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQty, 
  onRemove 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  items: CartItem[];
  onUpdateQty: (id: string, delta: number, breadType?: string) => void;
  onRemove: (id: string, breadType?: string) => void;
}) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-8 flex items-center justify-between border-b border-gray-100">
              <h2 className="text-2xl font-black tracking-tight">Seu Pedido</h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-bg-soft smooth-transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <ShoppingBag className="w-20 h-20 mb-4" />
                  <p className="text-lg font-bold">Seu carrinho está vazio</p>
                  <p className="text-sm">Explore nosso cardápio e adicione algo gostoso!</p>
                </div>
              ) : (
                items.map((item, index) => (
                  <div key={`${item.id}-${item.breadType}-${index}`} className="flex gap-4">
                    <img src={item.image} className="w-20 h-20 rounded-2xl object-cover flex-shrink-0" alt="" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-lg leading-tight mb-1 truncate">{item.name}</h4>
                      {item.breadType && (
                        <p className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-1">
                          {item.breadType}
                        </p>
                      )}
                      <p className="text-sm text-text-main/50 mb-3">R$ {item.price.toFixed(2)}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-bg-soft rounded-xl p-1">
                          <button 
                            onClick={() => onUpdateQty(item.id, -1, item.breadType)}
                            className="p-1.5 hover:bg-white rounded-lg transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQty(item.id, 1, item.breadType)}
                            className="p-1.5 hover:bg-white rounded-lg transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button 
                          onClick={() => onRemove(item.id, item.breadType)}
                          className="text-brand-primary hover:text-brand-dark p-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 bg-bg-soft">
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-main/60">Subtotal</span>
                    <span className="font-bold">R$ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-main/60">Entrega</span>
                    <span className="text-green-600 font-bold">GRÁTIS</span>
                  </div>
                  <div className="h-[1px] bg-gray-200 my-4" />
                  <div className="flex justify-between text-xl">
                    <span className="font-black">Total</span>
                    <span className="font-black text-brand-primary">R$ {subtotal.toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full bg-text-main text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-primary smooth-transition active:scale-95 shadow-xl shadow-gray-200">
                  Finalizar Pedido
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const AuthModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <div className="p-10">
              <div className="flex justify-between items-center mb-10">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
                  <User className="w-7 h-7" />
                </div>
                <button onClick={onClose} className="p-2 bg-bg-soft rounded-xl hover:bg-gray-100 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2 className="text-3xl font-black tracking-tight mb-2">Bem-vindo(a)</h2>
              <p className="text-text-main/50 mb-8">Faça login para acompanhar seus pedidos e ter uma experiência personalizada.</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2 ml-1">Telefone</label>
                  <input 
                    type="tel" 
                    placeholder="(00) 00000-0000"
                    className="w-full bg-bg-soft border-2 border-transparent focus:border-brand-primary focus:bg-white outline-none rounded-2xl py-4 px-6 font-medium transition-all"
                  />
                </div>
                <button className="w-full bg-brand-primary text-white py-4 rounded-2xl font-bold text-lg hover:bg-brand-dark transition-colors active:scale-95 shadow-xl shadow-brand-primary/20">
                  Continuar
                </button>
              </div>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
                </div>
                <div className="relative flex justify-center text-sm uppercase">
                  <span className="bg-white px-4 text-text-main/30 font-bold">Ou entre com</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 bg-bg-soft py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors">
                  <img src="https://www.svgrepo.com/show/475656/google_color.svg" className="w-5 h-5" alt="" />
                  Google
                </button>
                <button className="flex items-center justify-center gap-3 bg-bg-soft py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors">
                  <Facebook className="w-5 h-5 text-blue-600 fill-current" />
                  Facebook
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                B
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight">
                BOCA<span className="text-brand-primary">LOCA</span>
              </span>
            </div>
            <p className="text-text-main/50 leading-relaxed">
              Redefinindo o delivery artesanal em Olímpia. Qualidade premium, sabor inigualável e entrega ultrarrápida.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-bg-soft rounded-2xl hover:bg-brand-primary hover:text-white smooth-transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-bg-soft rounded-2xl hover:bg-brand-primary hover:text-white smooth-transition">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-text-main/60 font-medium">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Cardápio</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Trabalhe Conosco</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-6">Horário</h4>
            <ul className="space-y-4 text-text-main/60 font-medium">
              <li className="flex justify-between">
                <span>Seg - Qui:</span>
                <span>18:00 - 00:00</span>
              </li>
              <li className="flex justify-between text-text-main">
                <span className="font-bold">Sex - Dom:</span>
                <span className="font-bold">18:00 - 01:00</span>
              </li>
              <li className="flex justify-between">
                <span>Feriados:</span>
                <span>Sob consulta</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-text-main/60 font-medium">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-primary" />
                <span>(17) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-primary" />
                <span>Olímpia, SP - Centro</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 text-center text-sm text-text-main/30 font-medium tracking-wide">
          © 2026 LANCHONETE BOCA LOCA. TODOS OS DIREITOS RESERVADOS. PROJETADO POR ARTISTAS.
        </div>
      </div>
    </footer>
  );
};

const ProductDetailModal = ({ 
  product, 
  isOpen, 
  onClose, 
  onAddToCart 
}: { 
  product: Product | null; 
  isOpen: boolean; 
  onClose: () => void;
  onAddToCart: (p: Product, qty: number, breadType?: string) => void;
}) => {
  const [qty, setQty] = useState(1);
  const [breadType, setBreadType] = useState("Pão de Hambúrguer");

  useEffect(() => {
    if (isOpen) {
      setQty(1);
      setBreadType("Pão de Hambúrguer");
    }
  }, [isOpen]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            <div className="w-full md:w-1/2 relative bg-bg-soft">
              <img 
                src={product.image} 
                className="w-full h-full object-cover" 
                alt={product.name} 
              />
              <button 
                onClick={onClose}
                className="absolute top-6 left-6 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg hover:bg-brand-primary hover:text-white smooth-transition md:hidden"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col p-8 md:p-12 overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-2">{product.category}</p>
                  <h2 className="text-4xl font-black tracking-tight leading-none">{product.name}</h2>
                </div>
                <button 
                  onClick={onClose}
                  className="hidden md:flex p-3 bg-bg-soft rounded-2xl hover:bg-gray-100 smooth-transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-lg text-text-main/50 leading-relaxed mb-8">
                {product.description}
              </p>

              {product.category === "Lanches" && (
                <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h4 className="text-xs font-bold text-text-main/30 uppercase tracking-widest mb-4 ml-1">Escolha o Pão</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["Pão de Hambúrguer", "Pão de Sal"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setBreadType(type)}
                        className={`py-4 rounded-2xl font-bold text-sm smooth-transition border-2 ${
                          breadType === type 
                          ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20' 
                          : 'bg-white text-text-main border-gray-100 hover:border-gray-200'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-auto space-y-8">
                <div className="flex items-center justify-between p-6 bg-bg-soft rounded-3xl">
                  <span className="font-bold text-text-main/60 uppercase tracking-widest text-xs">Quantidade</span>
                  <div className="flex items-center gap-6">
                    <button 
                      onClick={() => setQty(q => Math.max(1, q - 1))}
                      className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:border-brand-primary hover:text-brand-primary smooth-transition"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="text-2xl font-black">{qty}</span>
                    <button 
                      onClick={() => setQty(q => q + 1)}
                      className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:border-brand-primary hover:text-brand-primary smooth-transition"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex-1 w-full">
                    <p className="text-xs font-bold text-text-main/30 uppercase tracking-widest pl-1 mb-1">Total</p>
                    <p className="text-4xl font-black tracking-tighter">R$ {(product.price * qty).toFixed(2).replace('.', ',')}</p>
                  </div>
                  <button 
                    onClick={() => {
                      onAddToCart(product, qty, product.category === "Lanches" ? breadType : undefined);
                      onClose();
                    }}
                    className="w-full sm:w-auto flex-1 bg-brand-primary text-white px-10 py-5 rounded-[2rem] font-bold text-xl shadow-2xl shadow-brand-primary/30 hover:bg-brand-dark active:scale-95 smooth-transition flex items-center justify-center gap-3"
                  >
                    Adicionar <ShoppingBag className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- MAIN APP ---

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product, quantity: number = 1, breadType?: string) => {
    setCartItems(prev => {
      const existing = prev.find(item => 
        item.id === product.id && item.breadType === breadType
      );
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.breadType === breadType) 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prev, { ...product, quantity, breadType }];
    });
    
    // Auto open cart on first add if mobile, or just visual feedback
    if (cartItems.length === 0) {
      setTimeout(() => setIsCartOpen(true), 500);
    }
  };

  const updateQuantity = (id: string, delta: number, breadType?: string) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id && item.breadType === breadType) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: string, breadType?: string) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.breadType === breadType)));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white">
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        onUserClick={() => setIsAuthOpen(true)}
      />
      
      <main>
        <Hero />
        <MenuSection onAddToCart={(p) => setSelectedProduct(p)} />
      </main>

      <Footer />

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQty={updateQuantity}
        onRemove={removeItem}
      />

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
      />

      <ProductDetailModal 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Floating Cart Button for Mobile */}
      <AnimatePresence>
        {cartCount > 0 && !isCartOpen && (
          <motion.button
            initial={{ scale: 0, y: 100, x: '-50%' }}
            animate={{ scale: 1, y: 0, x: '-50%' }}
            exit={{ scale: 0, y: 100, x: '-50%' }}
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-8 left-1/2 z-40 bg-brand-primary text-white px-8 py-5 rounded-[2rem] font-bold text-lg shadow-2xl shadow-brand-primary/40 flex items-center gap-4 md:hidden"
          >
            <ShoppingBag className="w-6 h-6" />
            Carrinho
            <span className="bg-white text-brand-primary w-7 h-7 rounded-full flex items-center justify-center text-sm font-black">
              {cartCount}
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
