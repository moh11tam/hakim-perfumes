import React from 'react';
import { Sparkles, Compass } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b luxury-border py-14 sm:py-20 md:py-24 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.08),_transparent_65%)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center space-y-8 sm:space-y-10">
        
        {/* الجزء العلوي: الشارة + العنوان + النص المتحرك بالعرض البطيء */}
        <div className="space-y-5 max-w-2xl mx-auto">
          <div className="animate-slow-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border luxury-border text-[#D4AF37] text-[10px] sm:text-xs tracking-wider">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>HAKIM PERFUMES</span>
          </div>
          
          <h2 className="animate-slow-2 font-amiri text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F9F8F6] leading-[1.3]">
            اختر عطرك <br />
            <span className="gold-gradient-text">الذي يعبر عن حضورك</span>
          </h2>
          
          <p className="animate-slow-3 text-[#C5C5C0] text-sm sm:text-base lg:text-lg leading-relaxed font-light">
            عطور زيتية ومواد التجميل المصممة خصيصاً لتمنحك الأناقة والتميز في كل أوقاتك.
          </p>

          <div className="animate-slow-3 pt-2 flex justify-center">
            <a href="#collection" className="w-full sm:w-auto justify-center gold-btn font-bold px-9 py-3.5 rounded-full text-sm tracking-wide shadow-lg flex items-center gap-2">
              <Compass className="w-4 h-4" />
              تصفح المنتجات
            </a>
          </div>
        </div>

        {/* الجزء السفلي: صورتك الترحيبية تحت العنوان مباشرة */}
        <div className="animate-slow-4 relative w-full max-w-4xl mx-auto pt-2">
          <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/15 via-transparent to-transparent rounded-3xl blur-2xl -z-10" />
          
          <div className="group relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border luxury-border shadow-2xl bg-[#1A1A1E]">
            <img 
              src="/hero.jpg" 
              alt="Hakim Perfumes" 
              className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" 
            />
            
            {/* طبقة تدرج خفيفة أسفل الصورة لإبراز الفخامة */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}