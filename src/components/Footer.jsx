import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#121214] border-t luxury-border py-16 text-center text-xs text-[#C5C5C0] space-y-6">
      <div className="flex items-center justify-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#121214]">
          <Sparkles className="w-4 h-4" />
        </div>
        <span className="font-amiri text-lg font-bold gold-gradient-text">HAKIM PERFUMES</span>
      </div>
      <p className="max-w-md mx-auto font-light leading-relaxed">
        دار عطور فاخرة ترتقي بحواسك نحو آفاق جديدة من الفخامة والأناقة الحصرية. جميع الحقوق محفوظة © ٢٠٢٦.
      </p>
    </footer>
  );
}