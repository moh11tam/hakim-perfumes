import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from './data/products';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import ProductCard from './components/ProductCard';
import QuickViewModal from './components/QuickViewModal';
import CheckoutModal from './components/CheckoutModal';
import Footer from './components/Footer';

import {
  Sparkles,
  ShieldCheck,
  Truck,
  Award,
  Users,
  MapPin,
  Crown,
  Heart,
  Gem,
  ArrowDown,
  Star
} from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const currency = 'DZD';

  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [checkoutProduct, setCheckoutProduct] = useState(null);

  // البحث والتصفية
  const filteredProducts = PRODUCTS.filter(p => {
    const matchCat =
      selectedCategory === 'all' ||
      p.category === selectedCategory;

    const query = searchQuery.trim().toLowerCase();

    const matchSearch =
      String(p.name || '').toLowerCase().includes(query) ||
      String(p.subtitle || '').toLowerCase().includes(query);

    return matchCat && matchSearch;
  });

  // الانتقال إلى تأكيد الطلب
  const handleDirectCheckout = (product, size, price) => {
    setCheckoutProduct({
      ...product,
      selectedSize: size,
      selectedPrice: price
    });
  };

  return (
    <div
      className="min-h-screen bg-[#101012] text-[#F9F8F6] flex flex-col font-['Cairo'] relative overflow-hidden notranslate"
      translate="no"
    >

      {/* الإضاءة الذهبية الخلفية */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D4AF37]/[0.045] blur-[120px] rounded-full" />
        <div className="absolute top-[45%] -left-40 w-96 h-96 bg-[#A47B24]/[0.035] blur-[120px] rounded-full" />
      </div>

      {/* شريط التنقل */}
      <div className="relative z-20">
        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>

      {/* الواجهة الرئيسية */}
      <div id="home" className="relative z-10">
        <Hero />
      </div>

      {/* قصة العلامة التجارية */}
      <div id="services" className="relative z-10">
        <StorySection />
      </div>

      {/* مجموعة المنتجات */}
      <main
        id="collection"
        className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 w-full relative z-10"
      >

        {/* عنوان المجموعة */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">

          <div className="space-y-4">

            <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-[0.18em]">
              <Sparkles className="w-4 h-4" />
              <span>THE ART OF FRAGRANCE</span>
            </div>

            <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-[#F9F8F6] leading-relaxed">
              اكتشف عالمك العطري
            </h2>

            <p className="text-[#A7A49D] text-sm sm:text-base leading-8 max-w-xl font-light">
              لكل شخص رائحة تشبهه، ولكل لحظة عطر يستحق أن يرافقها.
              اكتشف تشكيلتنا المختارة من العطور الزيتية ومستحضرات
              التجميل والعناية، واجعل من تفاصيلك حكاية لا تُنسى.
            </p>

          </div>

          <div className="hidden md:flex items-center gap-3 text-[#D4AF37]/70">
            <Gem className="w-9 h-9" strokeWidth={1} />
            <div className="text-right">
              <span className="block text-xs tracking-widest">
                HAKIM COLLECTION
              </span>
              <span className="text-[10px] text-[#817C70]">
                Elegance in every detail
              </span>
            </div>
          </div>

        </div>

        {/* الشريط الإعلاني */}
        <div className="relative bg-gradient-to-r from-[#74530D] via-[#D4AF37] to-[#74530D] text-[#15130D] py-3 rounded-xl overflow-hidden whitespace-nowrap mb-12 shadow-[0_8px_35px_rgba(212,175,55,0.10)]">

          <div className="inline-block animate-[marquee_25s_linear_infinite] text-xs sm:text-sm font-bold tracking-wider">

            ✨ HAKIM PERFUMES — لأن حضورك يستحق رائحة استثنائية ✨
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            عطور زيتية مختارة • مستحضرات تجميل وعناية • الدفع عند الاستلام
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            ✨ دع عطرك يتحدث عنك قبل أن تتكلم ✨

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            ✨ HAKIM PERFUMES — لأن حضورك يستحق رائحة استثنائية ✨

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            عطور زيتية مختارة • مستحضرات تجميل وعناية • الدفع عند الاستلام

          </div>
        </div>

        {/* تصنيفات المنتجات */}
        <div className="mb-12">

          <div className="flex items-center gap-2 mb-5">
            <span className="w-1 h-5 bg-[#D4AF37] rounded-full" />
            <h3 className="text-sm font-bold text-[#F0E9D8]">
              تسوّق حسب ذوقك
            </h3>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">

            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 px-5 sm:px-7 py-3 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer tracking-wide ${
                  selectedCategory === cat.id
                    ? 'gold-btn shadow-[0_4px_20px_rgba(212,175,55,0.18)] scale-[1.03]'
                    : 'bg-[#19191D] border border-[#34312A] text-[#BDB9AE] hover:border-[#D4AF37]/60 hover:text-[#D4AF37]'
                }`}
              >
                {cat.name}
              </button>
            ))}

          </div>
        </div>

        {/* عنوان المنتجات */}
        <div className="flex items-center justify-between mb-7">

          <div>
            <h3 className="font-amiri text-2xl text-[#F9F8F6]">
              مختاراتنا لك
            </h3>
            <p className="text-[11px] text-[#817C70] mt-1">
              تفاصيل صغيرة تصنع فرقاً كبيراً
            </p>
          </div>

          <div className="text-xs text-[#D4AF37] bg-[#D4AF37]/[0.07] border border-[#D4AF37]/20 px-4 py-2 rounded-full">
            {filteredProducts.length} منتج
          </div>

        </div>

        {/* شبكة المنتجات */}
        {filteredProducts.length === 0 ? (

          <div className="text-center py-24 bg-[#19191D] rounded-3xl border border-[#302C23]">

            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-5">
              <Sparkles className="w-7 h-7 text-[#D4AF37]" />
            </div>

            <h3 className="font-amiri text-2xl text-[#F9F8F6] mb-3">
              لم نعثر على ما تبحث عنه
            </h3>

            <p className="text-[#A7A49D] text-sm">
              جرّب البحث باسم آخر أو استكشف بقية مجموعتنا العطرية.
            </p>

            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-6 px-6 py-2.5 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] text-xs hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              عرض جميع المنتجات
            </button>

          </div>

        ) : (

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

        )}

        {/* عبارة ختامية للمجموعة */}
        <div className="text-center mt-20 pt-12 border-t border-[#D4AF37]/10">

          <Sparkles className="w-6 h-6 text-[#D4AF37] mx-auto mb-4" />

          <p className="font-amiri text-xl sm:text-2xl text-[#D4AF37]">
            العطر ليس مجرد رائحة... إنه جزء من هويتك.
          </p>

          <p className="text-[10px] text-[#777268] tracking-[0.25em] mt-3">
            DISCOVER YOUR SIGNATURE
          </p>

        </div>

      </main>

      {/* من نحن */}
      <section
        id="about"
        className="relative py-24 sm:py-32 border-t border-b border-[#D4AF37]/10 bg-[#17171A] px-4 sm:px-6 overflow-hidden z-10"
      >

        {/* إضاءة زخرفية */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#D4AF37]/[0.04] blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-7 relative">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#D4AF37]/[0.07] border border-[#D4AF37]/20 text-[#D4AF37] text-xs">
            <Crown className="w-4 h-4" />
            <span>حكاية علامة تجارية</span>
          </div>

          <h2 className="font-amiri text-4xl sm:text-6xl font-bold text-[#F9F8F6]">
            من نحن؟
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-[#D4AF37]/40" />
            <Gem className="w-4 h-4 text-[#D4AF37]" />
            <span className="w-12 h-px bg-[#D4AF37]/40" />
          </div>

          <p className="text-[#C0BBB0] text-sm sm:text-base leading-[2.4] font-light max-w-3xl mx-auto">

            في <strong className="text-[#D4AF37] font-bold">Hakim Perfumes</strong>،
            نؤمن بأن العطر أكثر من مجرد رائحة؛ إنه ذكرى تُستعاد،
            وانطباع يبقى، وتفصيل يعبّر عن شخصيتك دون كلمات.

            <br />

            انطلقنا بشغف نحو عالم العطور الزيتية ومستحضرات التجميل
            والعناية، لنقدم لك تشكيلة تجمع بين جمال الروائح،
            وتنوع الاختيارات، والاهتمام بأدق التفاصيل.

            <br />

            رؤيتنا أن نجعل تجربة اختيار عطرك أكثر تميزاً،
            وأن نمنحك مساحة لاكتشاف الرائحة التي تعبّر عنك
            وترافق أجمل لحظاتك.

          </p>

          <div className="pt-6 flex flex-col items-center gap-3">

            <div className="flex items-center gap-2 text-[#D4AF37] text-xs">
              <MapPin className="w-4 h-4" />
              <span>
                تمنراست — الشارع الرئيسي، بالقرب من المحكمة العسكرية
              </span>
            </div>

            <span className="text-[10px] text-[#827B6D] tracking-[0.3em]">
              HAKIM PERFUMES • THE ART OF ELEGANCE
            </span>

          </div>

        </div>
      </section>

      {/* لماذا حكيم بيرفيومز؟ */}
      <section
        id="why-us"
        className="relative py-24 sm:py-28 px-4 sm:px-6 z-10"
      >

        <div className="max-w-6xl mx-auto">

          <div className="text-center space-y-4 mb-16">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#D4AF37]/[0.07] border border-[#D4AF37]/20 text-[#D4AF37] text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>تجربة تستحق ثقتك</span>
            </div>

            <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-[#F9F8F6]">
              لماذا تختارنا؟
            </h2>

            <p className="text-sm text-[#A7A49D] max-w-xl mx-auto leading-8">
              لأن التفاصيل هي ما يصنع التجربة الاستثنائية،
              نحرص على تقديم تجربة تسوق تجمع بين التنوع
              والاهتمام والجودة في كل خطوة.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* الميزة الأولى */}
            <div className="group bg-[#19191D] border border-[#302C23] hover:border-[#D4AF37]/50 p-8 rounded-3xl text-center space-y-5 transition-all duration-500 hover:-translate-y-2">

              <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/[0.08] text-[#D4AF37] flex items-center justify-center mx-auto border border-[#D4AF37]/20 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                <Sparkles className="w-7 h-7" />
              </div>

              <h4 className="font-amiri text-xl font-bold text-[#F9F8F6]">
                عالم من العطور
              </h4>

              <p className="text-xs text-[#A7A49D] font-light leading-7">
                اكتشف تشكيلة متنوعة من العطور الزيتية
                بروائح وشخصيات مختلفة تناسب مختلف الأذواق.
              </p>

            </div>

            {/* الميزة الثانية */}
            <div className="group bg-[#19191D] border border-[#302C23] hover:border-[#D4AF37]/50 p-8 rounded-3xl text-center space-y-5 transition-all duration-500 hover:-translate-y-2">

              <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/[0.08] text-[#D4AF37] flex items-center justify-center mx-auto border border-[#D4AF37]/20 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                <ShieldCheck className="w-7 h-7" />
              </div>

              <h4 className="font-amiri text-xl font-bold text-[#F9F8F6]">
                اهتمام بالجودة
              </h4>

              <p className="text-xs text-[#A7A49D] font-light leading-7">
                نولي اهتماماً باختيار المنتجات وتقديم
                تجربة شراء واضحة ومريحة لعملائنا.
              </p>

            </div>

            {/* الميزة الثالثة */}
            <div className="group bg-[#19191D] border border-[#302C23] hover:border-[#D4AF37]/50 p-8 rounded-3xl text-center space-y-5 transition-all duration-500 hover:-translate-y-2">

              <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/[0.08] text-[#D4AF37] flex items-center justify-center mx-auto border border-[#D4AF37]/20 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                <Truck className="w-7 h-7" />
              </div>

              <h4 className="font-amiri text-xl font-bold text-[#F9F8F6]">
                توصيل إلى بابك
              </h4>

              <p className="text-xs text-[#A7A49D] font-light leading-7">
                نوفر خدمة التوصيل داخل ولاية تمنراست
                لتصلك اختياراتك بكل سهولة وراحة.
              </p>

            </div>

            {/* الميزة الرابعة */}
            <div className="group bg-[#19191D] border border-[#302C23] hover:border-[#D4AF37]/50 p-8 rounded-3xl text-center space-y-5 transition-all duration-500 hover:-translate-y-2">

              <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/[0.08] text-[#D4AF37] flex items-center justify-center mx-auto border border-[#D4AF37]/20 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                <Heart className="w-7 h-7" />
              </div>

              <h4 className="font-amiri text-xl font-bold text-[#F9F8F6]">
                عناية بكل عميل
              </h4>

              <p className="text-xs text-[#A7A49D] font-light leading-7">
                نحرص على مساعدتك في اكتشاف المنتجات
                واختيار ما يتناسب مع ذوقك واحتياجاتك.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* عبارة العلامة التجارية */}
      <section className="relative py-20 px-4 text-center border-t border-[#D4AF37]/10 bg-[#17171A] z-10">

        <Star className="w-5 h-5 text-[#D4AF37] mx-auto mb-5" />

        <h2 className="font-amiri text-2xl sm:text-4xl text-[#F9F8F6] leading-relaxed">
          اترك أثراً... واجعل لعطرك حكاية.
        </h2>

        <p className="text-[#D4AF37] text-xs tracking-[0.3em] mt-5">
          HAKIM PERFUMES
        </p>

      </section>

      {/* نافذة تفاصيل المنتج */}
      <QuickViewModal
        product={quickViewProduct}
        currency={currency}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleDirectCheckout}
      />

      {/* نافذة إتمام الطلب */}
      <CheckoutModal
        isOpen={Boolean(checkoutProduct)}
        onClose={() => setCheckoutProduct(null)}
        selectedProduct={checkoutProduct}
        currency={currency}
      />

      {/* تذييل الموقع */}
      <div id="footer" className="relative z-10">
        <Footer />
      </div>

    </div>
  );
}