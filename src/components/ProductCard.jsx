import React from 'react';
import { Eye, Plus } from 'lucide-react';
import { CURRENCIES } from '../data/products';

export default function ProductCard({ product, currency, onQuickView, onAddToCart }) {
  const { symbol, rate } = CURRENCIES[currency];
  const priceFormatted = Math.round(product.price50 * rate);

  return (
    <div className="group bg-[#1A1A1E] border luxury-border rounded-3xl overflow-hidden hover:border-[#D4AF37] transition duration-500 flex flex-col shadow-xl">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#121214]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
        />
        {product.badge && (
          <span className="absolute top-4 right-4 bg-[#121214]/90 text-[#D4AF37] border luxury-border text-[11px] px-3.5 py-1 rounded-full font-medium tracking-wider">
            {product.badge}
          </span>
        )}
        <button 
          onClick={() => onQuickView(product)} 
          className="absolute bottom-4 left-4 p-3 rounded-full bg-[#121214]/90 text-[#F9F8F6] hover:text-[#D4AF37] border luxury-border opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer shadow-lg"
          title="معاينة الهرم العطري"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-[11px] text-[#C5C5C0] tracking-widest uppercase block">{product.subtitle}</span>
          <h3 
            onClick={() => onQuickView(product)} 
            className="font-amiri text-2xl font-bold text-[#F9F8F6] mt-1.5 cursor-pointer hover:text-[#D4AF37] transition"
          >
            {product.name}
          </h3>
          <p className="text-xs text-[#C5C5C0] mt-2.5 line-clamp-2 leading-relaxed font-light">
            {product.story}
          </p>
        </div>

        <div className="pt-4 border-t border-[#121214] flex items-center justify-between">
          <div>
            <span className="text-[10px] text-[#C5C5C0] block uppercase tracking-wider">حجم 50 مل</span>
            <span className="text-xl font-bold gold-gradient-text">
              {priceFormatted} {symbol}
            </span>
          </div>
          <button 
            onClick={() => onAddToCart(product, '50ml', product.price50)} 
            className="gold-btn text-xs font-bold px-5 py-3 rounded-2xl transition cursor-pointer flex items-center gap-1.5 shadow-md"
          >
            <Plus className="w-4 h-4" /> 
            اقتناء
          </button>
        </div>
      </div>
    </div>
  );
}