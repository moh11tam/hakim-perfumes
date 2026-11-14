import React from 'react';
import { Eye, ShoppingBag } from 'lucide-react';

export default function ProductCard({ product, currency, onQuickView, onAddToCart }) {
  // اختيار السعر الافتراضي (الحجم 50 مل أو أول سعر متاح)
  const defaultSize = product.price50 ? '50 مل' : 'حجم قياسي';
  const defaultPrice = product.price50 || product.price120 || 3500;

  return (
    <div className="group bg-[#1A1A1E] border luxury-border rounded-3xl overflow-hidden flex flex-col justify-between transition duration-500 hover:border-[#D4AF37]/50 hover:shadow-2xl hover:shadow-[#D4AF37]/10">
      
      {/* صورة المنتج مع الشارة */}
      <div className="relative aspect-[4/4] overflow-hidden bg-[#121214]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
        />
        
        {product.badge && (
          <span className="absolute top-3 right-3 bg-[#D4AF37] text-[#121214] text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
            {product.badge}
          </span>
        )}

        {/* زر المعالجة السريعة للهرم العطري */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute bottom-3 left-3 bg-[#121214]/80 backdrop-blur-md border luxury-border text-[#F9F8F6] p-2.5 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 hover:text-[#D4AF37] cursor-pointer"
          title="عرض التفاصيل والهرم العطري"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* تفاصيل المنتج */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-1.5">
          <span className="text-[10px] text-[#D4AF37] font-semibold tracking-wider uppercase block">{product.subtitle}</span>
          <h4 className="font-amiri text-lg font-bold text-[#F9F8F6] line-clamp-1">{product.name}</h4>
          <p className="text-xs text-[#C5C5C0] line-clamp-2 font-light leading-relaxed">{product.description}</p>
        </div>

        {/* السعر وزر الشراء المباشر */}
        <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-[#C5C5C0] block">يبدأ من</span>
            <span className="font-amiri text-base font-bold text-[#D4AF37]">{defaultPrice} {currency}</span>
          </div>

          <button
            onClick={() => onAddToCart(product, defaultSize, defaultPrice)}
            className="gold-btn font-bold px-4 py-2.5 rounded-xl text-xs tracking-wide shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>اقتناء</span>
          </button>
        </div>
      </div>

    </div>
  );
}