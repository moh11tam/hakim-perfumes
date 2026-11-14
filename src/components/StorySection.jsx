import React from 'react';
import { Sparkles, FlaskConical, Gem } from 'lucide-react';

export default function StorySection() {
  return (
    <section className="py-20 border-b luxury-border bg-gradient-to-b from-[#121214] via-[#1A1A1E]/40 to-[#121214] relative overflow-hidden notranslate" translate="no">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* النص الاحترافي الهادئ */}
          <div className="space-y-6 text-right">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#D4AF37]/10 border luxury-border text-[#D4AF37] text-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ورشة التركيب والعطور</span>
            </div>

            <h2 className="font-amiri text-3xl sm:text-4xl font-bold text-[#F9F8F6] leading-tight">
              تركيب الروائح المخصصة <br />
              <span className="gold-gradient-text">بعناية واختيار دقيق</span>
            </h2>

            <p className="text-[#C5C5C0] text-sm sm:text-base leading-relaxed font-light">
              نقدم في محلنا بتمنراست خدمة دمج وتركيب الزيوت العطرية بحرفية تامة لتناسب تفضيلاتك الشخصية، مع التعبئة في قوارير زجاجية متينة تضمن الحفاظ على جودة وثبات العطر لفترات طويلة.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#1A1A1E] border luxury-border p-4 rounded-2xl flex items-start gap-3">
                <FlaskConical className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <h4 className="font-amiri font-bold text-sm text-[#F9F8F6]">مكونات مركزة</h4>
                  <p className="text-xs text-[#C5C5C0] mt-1">زيوت عطرية مختارة بعناية لثبات مرضٍ ومستقر.</p>
                </div>
              </div>

              <div className="bg-[#1A1A1E] border luxury-border p-4 rounded-2xl flex items-start gap-3">
                <Gem className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <h4 className="font-amiri font-bold text-sm text-[#F9F8F6]">تعبئة زجاجية</h4>
                  <p className="text-xs text-[#C5C5C0] mt-1">قوارير عملية وأنيقة تحافظ على خصائص العطر.</p>
                </div>
              </div>
            </div>
          </div>

          {/* عرض الفيديو المحلي perfume.mp4 */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-3xl blur-3xl -z-10" />
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border luxury-border bg-[#1A1A1E] shadow-2xl relative group">
              
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-90"
              >
                <source src="/perfume.mp4" type="video/mp4" />
                متصفحك لا يدعم عرض الفيديو.
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 right-6 left-6 text-center pointer-events-none">
                <span className="text-[11px] tracking-[0.2em] text-[#D4AF37] uppercase block mb-1">تجهيز محلي بتمنراست</span>
                <p className="font-amiri text-base text-[#F9F8F6]">جودة تلامس تطلعاتك بكل بساطة</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}