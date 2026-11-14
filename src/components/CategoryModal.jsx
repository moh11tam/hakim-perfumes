import React from 'react';
import { X, ShoppingBag } from 'lucide-react';

export default function CategoryModal({ isOpen, onClose, category, products, currency, onAddToCart }) {
  if (!isOpen || !category) return null;

  // تصفية المنتجات حسب التصنيف المختار
  const categoryProducts = products.filter(p => p.category === category.id);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#141417] border luxury-border w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl relative">
        
        {/* رأس النافذة المنبثقة */}
        <div className="p-6 border-b border-stone-800 flex items-center justify-between bg-[#1A1A1E]">
          <div>
            <span className="text-[10px] text-[#D4AF37] tracking-widest uppercase block">تشكيلة مختارة</span>
            <h3 className="font-amiri text-2xl font-bold text-[#F9F8F6]">{category.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-[#121214] border luxury-border text-[#C5C5C0] hover:text-[#F9F8F6] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* محتوى وسلع القسم */}
        <div className="p-6 overflow-y-auto flex-1">
          {categoryProducts.length === 0 ? (
            <div className="text-center py-16 text-[#C5C5C0] text-sm">
              قريباً سيتم إضافة تشكيلات مميزة لهذا القسم.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {categoryProducts.map(product => (
                <div key={product.id} className="bg-[#1A1A1E] border luxury-border rounded-2xl p-4 flex flex-col justify-between group">
                  <div className="aspect-square rounded-xl overflow-hidden bg-[#121214] mb-3 relative">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    {product.badge && (
                      <span className="absolute top-2 right-2 bg-[#D4AF37] text-black text-[9px] font-bold px-2 py-0.5 rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-1 mb-4">
                    <span className="text-[10px] text-[#D4AF37]">{product.subtitle}</span>
                    <h4 className="font-amiri text-base font-bold text-[#F9F8F6] line-clamp-1">{product.name}</h4>
                    <span className="font-amiri text-sm font-bold text-[#D4AF37] block">
                      {product.price50} {currency}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      onAddToCart(product, 'طاقم هدية', product.price50);
                      onClose();
                    }}
                    className="w-full gold-btn py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>طلب الهدية الآن</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* تذييل النافذة */}
        <div className="p-4 border-t border-stone-800 text-center bg-[#1A1A1E]">
          <p className="text-[11px] text-[#C5C5C0]">تغليف هدايا راقٍ ومناسب لكافة المناسبات • توصيل سريع في تمنراست</p>
        </div>

      </div>
    </div>
  );
}