import React from 'react';

export default function StorySection() {
  return (
    <section className="py-20 border-b luxury-border bg-[#1A1A1E]/40">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
        <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase block">
          HAKIM PERFUMES
        </span>
        <h3 className="font-amiri text-2xl sm:text-3xl font-bold text-[#F9F8F6] leading-relaxed">
          مرحباً بك في Hakim Perfumes
        </h3>
        <p className="text-[#C5C5C0] text-base sm:text-lg font-light leading-relaxed">
          وجهتك لاكتشاف عالم استثنائي من العطور الزيتية ومستحضرات التجميل والعناية الشخصية. انتقينا لك أجمل الروائح وأرقى المنتجات لتمنحك حضوراً مميزاً، ولمسة من الأناقة في كل تفاصيل يومك.
        </p>
      </div>
    </section>
  );
}