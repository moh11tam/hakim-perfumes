import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from './data/products';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import ProductCard from './components/ProductCard';
import QuickViewModal from './components/QuickViewModal';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { Sparkles, ShieldCheck, Truck, Award } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const currency = 'DZD'; // مثبت على الدينار الجزائري
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchSearch = p.name.includes(searchQuery) || p.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleAddToCart = (product, size, price) => {
    const cartId = `${product.id}-${size}`;
    setCart(prev => {
      const idx = prev.findIndex(item => item.cartId === cartId);
      if (idx > -1) {
        const updated = [...prev];
        updated[idx].quantity += 1;
        return updated;
      }
      return [...prev, { ...product, cartId, size, price, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#121214] text-[#F9F8F6] flex flex-col font-['Cairo']">
      
      {/* شريط التنقل العلوي والهمبرغر (بدون زر العملات) */}
      <Navbar
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* الواجهة السينمائية الرئيسية مع العنوان والصورة الترحيبية تحتها */}
      <Hero />

      {/* قسم قصة الدار والترحيب */}
      <StorySection />

      {/* قسم مميزات الدار (لماذا نحن؟) */}
      <section className="py-16 border-b luxury-border bg-[#1A1A1E]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#1A1A1E] border luxury-border p-6 rounded-3xl text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mx-auto border luxury-border">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="font-amiri text-lg font-bold text-[#F9F8F6]">عطور زيتية أصلية</h4>
            <p className="text-xs text-[#C5C5C0] font-light leading-relaxed">نخبة من أجود الزيوت العطرية المركزة والثابتة.</p>
          </div>

          <div className="bg-[#1A1A1E] border luxury-border p-6 rounded-3xl text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mx-auto border luxury-border">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-amiri text-lg font-bold text-[#F9F8F6]">جودة مضمونة 100%</h4>
            <p className="text-xs text-[#C5C5C0] font-light leading-relaxed">معايير دقيقة في اختيار مواد التجميل والعناية.</p>
          </div>

          <div className="bg-[#1A1A1E] border luxury-border p-6 rounded-3xl text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mx-auto border luxury-border">
              <Truck className="w-6 h-6" />
            </div>
            <h4 className="font-amiri text-lg font-bold text-[#F9F8F6]">توصيل سريع وآمن</h4>
            <p className="text-xs text-[#C5C5C0] font-light leading-relaxed">خدمة توصيل تغطي كافة الولايات بعناية فائقة.</p>
          </div>

          <div className="bg-[#1A1A1E] border luxury-border p-6 rounded-3xl text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mx-auto border luxury-border">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-amiri text-lg font-bold text-[#F9F8F6]">خدمة عملاء راقية</h4>
            <p className="text-xs text-[#C5C5C0] font-light leading-relaxed">فريق مختص لمساعدتك في اختيار ما يناسبك.</p>
          </div>
        </div>
      </section>

      {/* قسم المنتجات والعطور الرئيسية */}
      <main id="collection" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
          <div>
            <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] block mb-2">تسوق حسب التصنيف</span>
            <h3 className="font-amiri text-2xl sm:text-4xl font-bold text-[#F9F8F6]">اختر عطرك ومستحضراتك المفضلة</h3>
          </div>

          {/* فلاتر التصنيفات بالتمرير الأفقي السلس */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition cursor-pointer tracking-wider ${
                  selectedCategory === cat.id 
                    ? 'gold-btn shadow-lg' 
                    : 'bg-[#1A1A1E] border luxury-border text-[#C5C5C0] hover:text-[#F9F8F6]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* شبكة عرض المنتجات الفاخرة */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-[#C5C5C0] text-sm">
            عذراً، لم نتمكن من العثور على منتجات تطابق بحثك.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                currency={currency}
                onQuickView={setQuickViewProduct}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}

      </main>

      {/* نافذة تفاصيل العطر والهرم العطري */}
      <QuickViewModal
        product={quickViewProduct}
        currency={currency}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* سلة التسوق الملكية */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={(id, qty) => setCart(cart.map(c => c.cartId === id ? {...c, quantity: qty} : c))}
        onRemoveItem={(id) => setCart(cart.filter(c => c.cartId !== id))}
        currency={currency}
        onClearCart={() => setCart([])}
      />

      {/* تذييل الصفحة */}
      <Footer />

    </div>
  );
}