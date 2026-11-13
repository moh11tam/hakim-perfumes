import React from 'react';
import { X, Sparkles, ShoppingBag } from 'lucide-react';
import { CURRENCIES } from '../data/products';

export default function QuickViewModal({ product, currency, onClose, onAddToCart }) {
  if (!product) return null;
  const { symbol, rate } = CURRENCIES[currency];
  const priceFormatted = Math.round(product.price50 * rate);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-[#1A1A1E] border luxury-border rounded-3xl w-full max-w-3xl overflow-hidden relative grid grid-cols-1 md:grid-cols-2 shadow-2xl my-auto max-h-[90vh] overflow-y-auto">
        
        <button 
          onClick={onClose} 
          className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 p-2 rounded-full bg-[#121214]/90 text-[#F9F8F6] hover:text-[#D4AF37] border luxury-border cursor-pointer transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-[#121214] relative h-64 sm:h-80 md:h-full">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="p-5 sm:p-8 flex flex-col justify-between space-y-5">
          <div className="space-y-3 sm:space-y-4">
            <div>
              <span className="text-[11px] sm:text-xs text-[#C5C5C0] tracking-widest uppercase">{product.subtitle}</span>
              <h2 className="font-amiri text-2xl sm:text-3xl font-bold text-[#F9F8F6] mt-1">{product.name}</h2>
            </div>
            
            <p className="text-xs sm:text-sm text-[#C5C5C0] leading-relaxed font-light">{product.description}</p>

            {/* الهرم العطري */}
            <div className="bg-[#121214] border luxury-border p-3.5 sm:p-4 rounded-2xl space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-[#D4AF37] font-semibold mb-1">
                <Sparkles className="w-4 h-4" />
                <span>الهرم العطري</span>
              </div>
              <p className="text-[#F9F8F6]"><strong className="text-[#C5C5C0]">القمة:</strong> {product.notes.top}</p>
              <p className="text-[#F9F8F6]"><strong className="text-[#C5C5C0]">القلب:</strong> {product.notes.heart}</p>
              <p className="text-[#F9F8F6]"><strong className="text-[#C5C5C0]">القاعدة:</strong> {product.notes.base}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#121214] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex items-center justify-between sm:block">
              <span className="text-xs text-[#C5C5C0] block">السعر (50 مل)</span>
              <span className="text-xl sm:text-2xl font-bold gold-gradient-text">{priceFormatted} {symbol}</span>
            </div>
            <button 
              onClick={() => { onAddToCart(product, '50ml', product.price50); onClose(); }} 
              className="gold-btn font-bold px-6 py-3.5 rounded-2xl cursor-pointer flex items-center justify-center gap-2 text-sm shadow-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              أضف إلى حقيبتك
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}