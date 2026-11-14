import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from './data/products';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import ProductCard from './components/ProductCard';
import QuickViewModal from './components/QuickViewModal';
import CheckoutModal from './components/CheckoutModal';
import CategoryModal from './components/CategoryModal';
import Footer from './components/Footer';

import {
  Sparkles,
  ShieldCheck,
  Truck,
  Heart,
  Crown,
  MapPin,
  ArrowLeft
} from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const currency = 'DZD';

  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [activeCategoryModal, setActiveCategoryModal] = useState(null);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchSearch = String(p.name || '').toLowerCase().includes(query) || String(p.subtitle || '').toLowerCase().includes(query);
    return matchCat && matchSearch;
  });

  const handleDirectCheckout = (product, size, price) => {
    setCheckoutProduct({
      ...product,
      selectedSize: size,
      selectedPrice: price
    });
  };

  // قائمة البطاقات الأربعة الرئيسية (تمت إضافة طاقم هدايا)
  const featuredCategories = [
    {
      id: 'women',
      name: 'عطور نسائية',
      subtitle: 'أنوثة ورقي لا يُنسى',
      image: '/women.jpg',
      desc: 'تشكيلة ساحرة من الروائح الزيتية النسائية الفاخرة والثابتة.'
    },
    {
      id: 'men',
      name: 'عطور رجالية',
      subtitle: 'حضور قوي وفخم',
      image: '/men.jpg',
      desc: 'نفحات خشبية وعطرية تجسد الأصالة والجاذبية للرجل العصري.'
    },
    {
      id: 'cosmetics',
      name: 'مواد التجميل والعناية الشخصية',
      subtitle: 'عناية تليق بجمالك',
      image: '/cosmetics.jpg',
      desc: 'مستحضرات أصلية ومختارة بعناية لروتين عناية متكامل ومميز.'
    },
    {
      id: 'gifts',
      name: 'طاقم هدايا للمناسبات',
      subtitle: 'أجمل الهدايا لمن تحب',
      image: '/gifts.jpg', // ضع صورة gifts.jpg في مجلد public
      desc: 'تشكيلات مختارة ومغلفة بعناية لتهديها لمن تحب في كل المناسبات.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#101012] text-[#F9F8F6] flex flex-col font-['Cairo'] relative overflow-hidden notranslate" translate="no">

      <div className="relative z-20">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      <div id="home" className="relative z-10">
        <Hero />
      </div>

      <div id="services" className="relative z-10">
        <StorySection />
      </div>

      {/* قسم بطاقات الأقسام الأربعة */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#D4AF37]/[0.07] border border-[#D4AF37]/20 text-[#D4AF37] text-xs">
            <Sparkles className="w-4 h-4" />
            <span>تصنيفات الدار الفاخرة</span>
          </div>
          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-[#F9F8F6]">
            استكشف أقسامنا الرئيسية
          </h2>
          <p className="text-sm text-[#A7A49D] max-w-xl mx-auto">
            اضغط على أي قسم لتتصفح كافة احتياجاتك من السلع والمنتجات وتشكيلات الهدايا الفاخرة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActiveCategoryModal(cat)}
              className="group relative bg-[#19191D] border border-[#302C23] hover:border-[#D4AF37] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-xl flex flex-col justify-between"
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-[#121214]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#19191D] via-transparent to-transparent" />
              </div>

              <div className="p-6 space-y-3 relative -mt-10">
                <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest block font-bold">{cat.subtitle}</span>
                <h3 className="font-amiri text-xl font-bold text-[#F9F8F6] group-hover:text-[#D4AF37] transition-colors">{cat.name}</h3>
                <p className="text-xs text-[#A7A49D] font-light leading-relaxed">{cat.desc}</p>
                
                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#D4AF37]">
                  <span>استعراض التشكيلة</span>
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* مجموعة المنتجات العامة */}
      <main id="collection" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="font-amiri text-2xl sm:text-3xl text-[#F9F8F6]">مختارات عامة للمتجر</h3>
            <p className="text-xs text-[#817C70] mt-1">تصفح كافة العطور ومستحضرات التجميل المتاحة</p>
          </div>
          <div className="text-xs text-[#D4AF37] bg-[#D4AF37]/[0.07] border border-[#D4AF37]/20 px-4 py-2 rounded-full">
            {filteredProducts.length} منتج
          </div>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto pb-6 no-scrollbar mb-8">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`shrink-0 px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'gold-btn shadow-lg'
                  : 'bg-[#19191D] border border-[#34312A] text-[#BDB9AE] hover:text-[#D4AF37]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              currency={currency}
              onQuickView={setQuickViewProduct}
              onAddToCart={handleDirectCheckout}
            />
          ))}
        </div>
      </main>

      {/* قسم من نحن */}
      <section id="about" className="relative py-24 border-t border-b border-[#D4AF37]/10 bg-[#17171A] px-4 sm:px-6 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#D4AF37]/[0.07] border border-[#D4AF37]/20 text-[#D4AF37] text-xs">
            <Crown className="w-4 h-4" />
            <span>حكاية علامة تجارية</span>
          </div>
          <h2 className="font-amiri text-4xl font-bold text-[#F9F8F6]">من نحن؟</h2>
          <p className="text-[#C0BBB0] text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto">
            نحن <strong className="text-[#D4AF37]">Hakim Perfumes</strong>، وجهتك الموثوقة في تمنراست لتقديم أرقى العطور الزيتية ومستحضرات التجميل والعناية الشخصية، مع التزام تام بالجودة والاحترافية.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-[#D4AF37]">
            <MapPin className="w-4 h-4" />
            <span>تمنراست — الشارع الرئيسي، بالقرب من المحكمة العسكرية</span>
          </div>
        </div>
      </section>

      {/* قسم لماذا نحن؟ */}
      <section id="why-us" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 z-10">
        <div className="text-center space-y-3 mb-14">
          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-[#F9F8F6]">لماذا تختارنا؟</h2>
          <p className="text-xs text-[#A7A49D]">نحرص على تقديم أفضل تجربة تسوق داخل تمنراست</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-[#19191D] border border-[#302C23] p-6 rounded-3xl text-center space-y-3">
            <Sparkles className="w-7 h-7 text-[#D4AF37] mx-auto" />
            <h4 className="font-amiri text-lg font-bold text-[#F9F8F6]">عطور زيتية أصلية</h4>
            <p className="text-xs text-[#A7A49D]">ثبات وفوحان دائم يناسب ذوقك.</p>
          </div>
          <div className="bg-[#19191D] border border-[#302C23] p-6 rounded-3xl text-center space-y-3">
            <ShieldCheck className="w-7 h-7 text-[#D4AF37] mx-auto" />
            <h4 className="font-amiri text-lg font-bold text-[#F9F8F6]">جودة مضمونة</h4>
            <p className="text-xs text-[#A7A49D]">معايير دقيقة لاختيار كافة المنتجات.</p>
          </div>
          <div className="bg-[#19191D] border border-[#302C23] p-6 rounded-3xl text-center space-y-3">
            <Truck className="w-7 h-7 text-[#D4AF37] mx-auto" />
            <h4 className="font-amiri text-lg font-bold text-[#F9F8F6]">توصيل محلي</h4>
            <p className="text-xs text-[#A7A49D]">توصيل سريع يغطي أحياء تمنراست.</p>
          </div>
          <div className="bg-[#19191D] border border-[#302C23] p-6 rounded-3xl text-center space-y-3">
            <Heart className="w-7 h-7 text-[#D4AF37] mx-auto" />
            <h4 className="font-amiri text-lg font-bold text-[#F9F8F6]">خدمة عملاء</h4>
            <p className="text-xs text-[#A7A49D]">مساعدة فورية لاختيار ما يناسبك.</p>
          </div>
        </div>
      </section>

      <QuickViewModal
        product={quickViewProduct}
        currency={currency}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleDirectCheckout}
      />

      <CheckoutModal
        isOpen={Boolean(checkoutProduct)}
        onClose={() => setCheckoutProduct(null)}
        selectedProduct={checkoutProduct}
        currency={currency}
      />

      <CategoryModal
        isOpen={Boolean(activeCategoryModal)}
        onClose={() => setActiveCategoryModal(null)}
        category={activeCategoryModal}
        products={PRODUCTS}
        currency={currency}
        onAddToCart={handleDirectCheckout}
      />

      <div id="footer" className="relative z-10">
        <Footer />
      </div>

    </div>
  );
}