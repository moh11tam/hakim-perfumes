import React, { useState } from 'react';
import { X, Send, MapPin, Phone, User, ShoppingBag, CheckCircle2 } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose, selectedProduct, currency }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: ''
  });

  if (!isOpen || !selectedProduct) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // تنسيق رسالة الطلب المباشر للواتساب
    let message = `*طلب شراء جديد من متجر Hakim Perfumes* 🌟\n\n`;
    message += `🛍️ *المنتج المختار:* ${selectedProduct.name}\n`;
    message += `📦 *الحجم / السعة:* ${selectedProduct.selectedSize}\n`;
    message += `💰 *السعر:* ${selectedProduct.selectedPrice} ${currency}\n\n`;
    message += `👤 *الاسم الكلي:* ${formData.fullName}\n`;
    message += `📞 *رقم الهاتف:* ${formData.phone}\n`;
    message += `📍 *عنوان الإقامة (تمنراست):* ${formData.address}\n\n`;
    message += `🚚 *ملاحظة:* التوصيل داخل ولاية تمنراست وأحياؤها.\n`;

    // ترميز الرسالة ورابط الواتساب لرقمك (0698249897)
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/213698249897?text=${encodedMessage}`;

    // فتح الواتساب بالرسالة الجاهزة
    window.open(whatsappUrl, '_blank');

    // إغلاق النافذة
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#121214] border luxury-border w-full max-w-lg rounded-3xl p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[95vh]">
        
        {/* زر الإغلاق */}
        <button 
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-xl bg-[#1A1A1E] border luxury-border text-[#C5C5C0] hover:text-[#F9F8F6] cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6 space-y-2">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mx-auto border luxury-border">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <h3 className="font-amiri text-2xl font-bold text-[#F9F8F6]">تأكيد طلب المنتج</h3>
          <p className="text-xs text-[#C5C5C0]">أدخل معلوماتك أدناه لإرسال الطلب مباشرة عبر الواتساب</p>
        </div>

        {/* بطاقة مصغرة تعرض تفاصيل المنتج الذي اختاره الزبون */}
        <div className="flex items-center gap-4 bg-[#1A1A1E] border luxury-border p-4 rounded-2xl mb-6">
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.name} 
            className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl border border-stone-800 shrink-0" 
          />
          <div className="flex-1 min-w-0">
            <span className="text-[10px] text-[#D4AF37] font-semibold tracking-wider uppercase block">{selectedProduct.subtitle}</span>
            <h4 className="font-amiri font-bold text-base text-[#F9F8F6] truncate">{selectedProduct.name}</h4>
            <div className="flex items-center gap-3 mt-1 text-xs text-[#C5C5C0]">
              <span>الحجم: <strong className="text-[#F9F8F6]">{selectedProduct.selectedSize}</strong></span>
              <span>•</span>
              <span className="text-[#D4AF37] font-bold text-sm">{selectedProduct.selectedPrice} {currency}</span>
            </div>
          </div>
        </div>

        {/* نموذج إدخال بيانات الزبون */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-xs font-bold text-[#F9F8F6] mb-1.5">الاسم الكلي</label>
            <div className="relative">
              <User className="w-4 h-4 text-[#C5C5C0] absolute right-3.5 top-3.5" />
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="الاسم واللقب..."
                className="w-full bg-[#1A1A1E] border luxury-border rounded-xl py-3 pr-10 pl-4 text-sm text-[#F9F8F6] placeholder-[#C5C5C0]/50 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#F9F8F6] mb-1.5">رقم الهاتف</label>
            <div className="relative">
              <Phone className="w-4 h-4 text-[#C5C5C0] absolute right-3.5 top-3.5" />
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="06xxxxxxxx"
                className="w-full bg-[#1A1A1E] border luxury-border rounded-xl py-3 pr-10 pl-4 text-sm text-[#F9F8F6] placeholder-[#C5C5C0]/50 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#F9F8F6] mb-1.5">عنوان الإقامة (داخل ولاية تمنراست)</label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-[#C5C5C0] absolute right-3.5 top-3.5" />
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="اسم الحي / الشارع / المعلم القريب..."
                className="w-full bg-[#1A1A1E] border luxury-border rounded-xl py-3 pr-10 pl-4 text-sm text-[#F9F8F6] placeholder-[#C5C5C0]/50 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          {/* زر إرسال الطلب للواتساب */}
          <button
            type="submit"
            className="w-full gold-btn font-bold py-3.5 rounded-xl text-sm tracking-wide shadow-lg flex items-center justify-center gap-2 mt-6 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>إرسال الطلب عبر الواتساب (تمنراست)</span>
          </button>

        </form>

      </div>
    </div>
  );
}