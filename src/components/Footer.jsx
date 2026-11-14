import React from 'react';
import { Sparkles, MapPin, Phone, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#161619] border-t luxury-border text-[#F9F8F6] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-stone-800">
        
        {/* العمود الأول: عن الدار والهوية */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#AA7C11] to-[#D4AF37] flex items-center justify-center text-[#121214]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-amiri text-xl font-bold tracking-widest gold-gradient-text">HAKIM PERFUMES</h3>
              <span className="text-[9px] tracking-[0.3em] text-[#C5C5C0] uppercase block">عطور زيتية ومواد التجميل</span>
            </div>
          </div>
          <p className="text-sm text-[#C5C5C0] leading-relaxed font-light">
            وجهتك الأولى لتسوق أجود العطور الزيتية المركزة ومستحضرات التجميل الأصلية في تمنراست. أناقة تميز حضورك.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#D4AF37] pt-2">
            <ShieldCheck className="w-4 h-4" />
            <span>التوصيل متوفر ومحصور داخل ولاية تمنراست وأحياؤها</span>
          </div>
        </div>

        {/* العمود الثاني: معلومات التواصل والعنوان الدقيق */}
        <div className="space-y-4">
          <h4 className="font-amiri text-lg font-bold text-[#F9F8F6] pb-1 border-b border-stone-800 inline-block">
            معلومات التواصل والموقع
          </h4>
          
          <ul className="space-y-3 text-sm text-[#C5C5C0]">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>مقابل المحكمة العسكرية، شارع سيرسوف، ولاية تمنراست</span>
            </li>
            
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <span dir="ltr">0698 24 98 97</span>
            </li>

            <li className="pt-2">
              <a 
                href="https://wa.me/213698249897" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] px-4 py-2.5 rounded-xl text-xs font-bold transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>تواصل عبر الواتساب مباشرة</span>
              </a>
            </li>
          </ul>
        </div>

        {/* العمود الثالث: خريطة الموقع والوصول */}
        <div className="space-y-4">
          <h4 className="font-amiri text-lg font-bold text-[#F9F8F6] pb-1 border-b border-stone-800 inline-block">
            موقع المتجر الجغرافي
          </h4>
          <p className="text-xs text-[#C5C5C0] leading-relaxed">
            يسعدنا زيارتكم لمتجرنا في تمنراست، أو يمكنكم النقر على الزر أدناه لعرض الموقع بدقة عبر خرائط جوجل:
          </p>
          <div>
            <a
              href="https://maps.app.goo.gl/nMUGcZiyZDdcPvKC8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gold-btn font-bold px-5 py-2.5 rounded-xl text-xs shadow-md tracking-wide"
            >
              <MapPin className="w-4 h-4" />
              <span>فتح الموقع على خرائط Google</span>
            </a>
          </div>
        </div>

      </div>

      {/* الحقوق السفلى */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#C5C5C0]">
        <p>جميع الحقوق محفوظة © ٢٠٢٦ Hakim Perfumes - تمنراست</p>
        <p className="mt-2 sm:mt-0">التوصيل سريع ودقيق لكافة أحياء ولاية تمنراست</p>
      </div>
    </footer>
  );
}