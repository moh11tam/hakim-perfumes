import React, { useState } from 'react';
import { X, Trash2, CheckCircle2, ArrowRight, ShoppingBag } from 'lucide-react';
import { CURRENCIES } from '../data/products';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, currency, onClearCart }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });

  if (!isOpen) return null;
  const { symbol, rate } = CURRENCIES[currency];
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const finalTotal = Math.round(subtotal * rate);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-start animate-fadeIn">
      <div className="w-full max-w-md bg-[#1A1A1E] border-r luxury-border flex flex-col h-full shadow-2xl">
        
        {/* رأس السلة */}
        <div className="p-6 border-b luxury-border flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="font-amiri text-xl font-bold text-[#F9F8F6]">حقيبة التسوق الخاصة ({cart.length})</h2>
          </div>
          <button onClick={onClose} className="p-2 text-[#C5C5C0] hover:text-[#F9F8F6] cursor-pointer transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* محتوى السلة */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {orderPlaced ? (
            <div className="text-center py-20 space-y-5">
              <CheckCircle2 className="w-16 h-16 text-[#D4AF37] mx-auto animate-bounce" />
              <h3 className="font-amiri text-2xl font-bold text-[#F9F8F6]">تم اعتماد طلبكم الملكي بنجاح!</h3>
              <p className="text-[#C5C5C0] text-sm leading-relaxed max-w-xs mx-auto">
                شكراً لاختياركم Hakim Perfumes. سيتواصل معكم فريق خدمة العملاء الخاصة لتأكيد موعد التوصيل الفاخر.
              </p>
              <button 
                onClick={() => { setOrderPlaced(false); setIsCheckingOut(false); onClearCart(); onClose(); }} 
                className="gold-btn font-bold px-8 py-3.5 rounded-2xl cursor-pointer text-sm"
              >
                العودة للدار
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-24 text-[#C5C5C0] text-sm font-light">
              حقيبة التسوق الخاصة بك فارغة حالياً.
            </div>
          ) : isCheckingOut ? (
            <form onSubmit={(e) => { e.preventDefault(); setOrderPlaced(true); }} className="space-y-4">
              <button 
                type="button" 
                onClick={() => setIsCheckingOut(false)} 
                className="text-xs text-[#D4AF37] flex items-center gap-1 mb-2 cursor-pointer hover:underline"
              >
                <ArrowRight className="w-3.5 h-3.5" /> العودة لمحتويات الحقيبة
              </button>
              <h3 className="font-amiri text-lg font-bold text-[#F9F8F6]">معلومات التوصيل الفاخر</h3>
              
              <div className="space-y-1">
                <label className="text-xs text-[#C5C5C0]">الاسم الكريم</label>
                <input 
                  type="text" 
                  required 
                  placeholder="الاسم الثلاثي" 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})} 
                  className="w-full bg-[#121214] border luxury-border rounded-xl p-3 text-sm text-[#F9F8F6] focus:outline-none focus:border-[#D4AF37]" 
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-[#C5C5C0]">رقم الهاتف المحمول</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="05xxxxxxxx" 
                  value={formData.phone} 
                  onChange={e => setFormData({...formData, phone: e.target.value})} 
                  className="w-full bg-[#121214] border luxury-border rounded-xl p-3 text-sm text-[#F9F8F6] focus:outline-none focus:border-[#D4AF37]" 
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-[#C5C5C0]">عنوان الإقامة المفصل</label>
                <textarea 
                  required 
                  rows="3" 
                  placeholder="المدينة، الحي، الشارع، رقم القصر أو الفيلا..." 
                  value={formData.address} 
                  onChange={e => setFormData({...formData, address: e.target.value})} 
                  className="w-full bg-[#121214] border luxury-border rounded-xl p-3 text-sm text-[#F9F8F6] focus:outline-none focus:border-[#D4AF37]"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full gold-btn font-bold py-4 rounded-2xl cursor-pointer text-sm shadow-xl mt-4"
              >
                تأكيد الطلب الحصري (الدفع عند الاستلام)
              </button>
            </form>
          ) : (
            <div className="space-y-3">
              {cart.map(item => (
                <div key={item.cartId} className="bg-[#121214] border luxury-border rounded-2xl p-4 flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl border luxury-border" />
                  <div className="flex-1">
                    <h4 className="font-amiri font-bold text-sm text-[#F9F8F6]">{item.name}</h4>
                    <span className="text-xs gold-gradient-text font-bold mt-1 block">
                      {Math.round(item.price * rate * item.quantity)} {symbol}
                    </span>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(item.cartId)} 
                    className="text-[#C5C5C0] hover:text-red-400 cursor-pointer p-2 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* تذييل السلة والمجموع */}
        {!orderPlaced && cart.length > 0 && !isCheckingOut && (
          <div className="p-6 border-t luxury-border bg-[#121214] space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#C5C5C0]">المجموع النهائي</span>
              <span className="font-bold gold-gradient-text text-xl">{finalTotal} {symbol}</span>
            </div>
            <button 
              onClick={() => setIsCheckingOut(true)} 
              className="w-full gold-btn font-bold py-4 rounded-2xl cursor-pointer text-sm shadow-xl"
            >
              متابعة لإتمام الطلب الملكي
            </button>
          </div>
        )}

      </div>
    </div>
  );
}