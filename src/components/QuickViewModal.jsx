import React, { useState } from 'react';
import { X, Sparkles, ShoppingBag } from 'lucide-react';

export default function QuickViewModal({ product, currency, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('50 مل');

  if (!product) return null;

  const currentPrice = selectedSize === '50 مل' ? product.price50 : (product.price100 || product.price120 || product.price50 * 1.8);

  const handleBuyNow = () => {
    onAddToCart(product, selectedSize, currentPrice);
    onClose(); // إغلاق نافذة التفاصيل وفتح نافذة إدخال المعلومات مباشرة
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#121214] border luxury-border w-full max-w-2xl rounded-3xl p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[95vh]">
        
        {/* زر الإغلاق */}
        <button 
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-xl bg-[#1A1A1E] border luxury-border text-[#C5C5C0] hover:text-[#F9F8F6] cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* صورة المنتج */}
          <div className="relative aspect-square rounded-2xl overflow-hidden border luxury-border bg-[#1A1A1E]">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            {product.badge && (
              <span className="absolute top-3 right-3 bg-[#D4AF37] text-[#121214] text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                {product.badge}
              </span>
            )}
          </div>

          {/* تفاصيل الهرم العطري والقصة */}
          <div className="space-y-4">
            <div>
              <span className="text-[10px] text-[#D4AF37] font-semibold tracking-wider uppercase block">{product.subtitle}</span>
              <h3 className="font-amiri text-2xl font-bold text-[#F9F8F6]">{product.name}</h3>
              <p className="text-xs text-[#C5C5C0] font-light mt-1 leading-relaxed">{product.story}</p>
            </div>

            {/* الهرم العطري */}
            {product.notes && (
              <div className="space-y-1.5 bg-[#1A1A1E]/50 border luxury-border p-3 rounded-xl text-xs">
                <div className="flex items-center gap-1.5 text-[#D4AF37] font-bold pb-1 border-b border-stone-800">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>الهرم العطري والمكونات</span>
                </div>
                <p className="text-[#C5C5C0]"><strong className="text-[#F9F8F6]">القمة:</strong> {product.notes.top}</p>
                <p className="text-[#C5C5C0]"><strong className="text-[#F9F8F6]">القلب:</strong> {product.notes.heart}</p>
                <p className="text-[#C5C5C0]"><strong className="text-[#F9F8F6]">القاعدة:</strong> {product.notes.base}</p>
              </div>
            )}

            {/* اختيار الحجم */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#F9F8F6] block">اختر الحجم:</label>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedSize('50 مل')}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                    selectedSize === '50 مل' ? 'gold-btn border-transparent' : 'bg-[#1A1A1E] border-stone-800 text-[#C5C5C0]'
                  }`}
                >
                  50 مل ({product.price50} {currency})
                </button>
                {product.price100 && (
                  <button
                    onClick={() => setSelectedSize('100 مل')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                      selectedSize === '100 مل' ? 'gold-btn border-transparent' : 'bg-[#1A1A1E] border-stone-800 text-[#C5C5C0]'
                    }`}
                  >
                    100 مل ({product.price100} {currency})
                  </button>
                )}
              </div>
            </div>

            {/* زر الشراء المباشر */}
            <button
              onClick={handleBuyNow}
              className="w-full gold-btn font-bold py-3 rounded-xl text-xs tracking-wide shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>اقتناء الآن - {currentPrice} {currency}</span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}