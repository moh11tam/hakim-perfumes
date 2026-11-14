import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import CheckoutModal from './CheckoutModal';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, currency, onClearCart }) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isOpen) return null;

  const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end animate-fadeIn">
        <div className="w-full max-w-md bg-[#121214] border-l luxury-border flex flex-col h-full shadow-2xl p-6">
          
          {/* رأس السلة */}
          <div className="flex items-center justify-between pb-4 border-b border-stone-800">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="font-amiri text-lg font-bold text-[#F9F8F6]">حقيبة التسوق</h3>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-xl bg-[#1A1A1E] border luxury-border text-[#C5C5C0] hover:text-[#F9F8F6] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* محتوى السلة */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-20 text-[#C5C5C0] text-sm space-y-3">
                <ShoppingBag className="w-12 h-12 mx-auto opacity-30 text-[#D4AF37]" />
                <p>حقيبة التسوق الخاصة بك فارغة حالياً.</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.cartId} className="flex gap-4 items-center bg-[#1A1A1E] border luxury-border p-3.5 rounded-2xl">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl border border-stone-800" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-amiri font-bold text-sm text-[#F9F8F6] truncate">{item.name}</h4>
                    <span className="text-[11px] text-[#C5C5C0] block mb-1">الحجم: {item.size}</span>
                    <span className="text-xs font-bold text-[#D4AF37]">{item.price * item.quantity} {currency}</span>
                  </div>

                  {/* التحكم بالكمية */}
                  <div className="flex flex-col items-end gap-2">
                    <button 
                      onClick={() => onRemoveItem(item.cartId)}
                      className="text-stone-500 hover:text-red-400 transition cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2 bg-[#121214] border luxury-border rounded-lg px-2 py-1">
                      <button 
                        onClick={() => onUpdateQuantity(item.cartId, Math.max(1, item.quantity - 1))}
                        className="text-[#C5C5C0] hover:text-[#F9F8F6] cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-[#F9F8F6]">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)}
                        className="text-[#C5C5C0] hover:text-[#F9F8F6] cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* تذييل السلة والمجموع */}
          {cart.length > 0 && (
            <div className="pt-4 border-t border-stone-800 space-y-4">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-[#C5C5C0]">المجموع الكلي:</span>
                <span className="text-[#D4AF37] text-lg font-amiri">{totalAmount} {currency}</span>
              </div>
              
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full gold-btn font-bold py-3.5 rounded-xl text-sm tracking-wide shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>إتمام الطلب (التوصيل في تمنراست)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>

      {/* نافذة نموذج إدخال البيانات المكتملة */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        currency={currency}
        onClearCart={onClearCart}
      />
    </>
  );
}