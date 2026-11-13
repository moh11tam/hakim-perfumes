import React, { useState } from 'react';
import { ShoppingBag, Search, Sparkles, Menu, X, Home, Package, Sparkle, Users, ShieldCheck, PhoneCall } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, searchQuery, setSearchQuery }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'الرئيسية', icon: Home, href: '#' },
    { name: 'منتجاتنا', icon: Package, href: '#collection' },
    { name: 'خدماتنا', icon: Sparkle, href: '#' },
    { name: 'من نحن', icon: Users, href: '#' },
    { name: 'لماذا نحن؟', icon: ShieldCheck, href: '#' },
    { name: 'تواصل معنا', icon: PhoneCall, href: '#' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#121214]/95 backdrop-blur-md border-b luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 sm:h-24 flex items-center justify-between gap-3">
          
          {/* زر الهمبرغر للشاشات الصغيرة + الشعار */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2.5 rounded-xl bg-[#1A1A1E] border luxury-border text-[#F9F8F6] hover:text-[#D4AF37] transition cursor-pointer"
              aria-label="فتح القائمة"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#AA7C11] to-[#D4AF37] flex items-center justify-center text-[#121214] shadow-lg shadow-[#D4AF37]/10">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h1 className="font-amiri text-xl sm:text-2xl font-bold tracking-widest gold-gradient-text">HAKIM</h1>
                <span className="text-[8px] sm:text-[9px] tracking-[0.25em] sm:tracking-[0.35em] text-[#C5C5C0] uppercase block">
                  LUXURY PERFUMERY
                </span>
              </div>
            </div>
          </div>

          {/* شريط البحث للشاشات المتوسطة والكبيرة */}
          <div className="hidden md:flex flex-1 max-w-md relative mx-4">
            <Search className="w-4 h-4 text-[#C5C5C0] absolute right-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن عطرك الخاص..."
              className="w-full bg-[#1A1A1E] border luxury-border rounded-full py-2.5 pr-11 pl-5 text-sm text-[#F9F8F6] placeholder-[#C5C5C0]/60 focus:outline-none focus:border-[#D4AF37] transition"
            />
          </div>

          {/* زر حقيبة التسوق فقط */}
          <div className="flex items-center">
            <button
              onClick={onOpenCart}
              className="relative p-2.5 sm:p-3 rounded-full bg-[#1A1A1E] border luxury-border hover:border-[#D4AF37] text-[#F9F8F6] hover:text-[#D4AF37] transition cursor-pointer"
              aria-label="حقيبة التسوق"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -left-1.5 bg-[#D4AF37] text-[#121214] text-[10px] sm:text-xs font-bold w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* القائمة الجانبية (Drawer Menu) للهواتف */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-start animate-fadeIn">
          <div className="w-full max-w-xs bg-[#121214] border-r luxury-border flex flex-col h-full shadow-2xl p-5 space-y-6 overflow-y-auto">
            
            {/* رأس القائمة الجانبية */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#AA7C11] to-[#D4AF37] flex items-center justify-center text-[#121214]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="font-amiri text-lg font-bold gold-gradient-text">HAKIM</h2>
                  <span className="text-[8px] tracking-[0.2em] text-[#C5C5C0] uppercase">PERFUMERY</span>
                </div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-[#1A1A1E] border luxury-border text-[#C5C5C0] hover:text-[#F9F8F6] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* شريط البحث داخل القائمة */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#C5C5C0] absolute right-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث..."
                className="w-full bg-[#1A1A1E] border luxury-border rounded-xl py-2.5 pr-10 pl-4 text-sm text-[#F9F8F6] placeholder-[#C5C5C0]/60 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* روابط التصفح */}
            <nav className="flex-1 space-y-2">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3.5 px-4 py-3 rounded-xl bg-[#1A1A1E]/50 border border-stone-800/60 hover:border-[#D4AF37]/40 text-[#F9F8F6] hover:text-[#D4AF37] transition group"
                  >
                    <div className="p-2 rounded-lg bg-[#121214] text-[#D4AF37] border border-stone-800 group-hover:border-[#D4AF37]/30">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* تذييل القائمة الجانبية */}
            <div className="pt-4 border-t border-stone-800 text-center text-[10px] text-[#C5C5C0]">
              جميع الحقوق محفوظة © ٢٠٢٦ Hakim Perfumes
            </div>

          </div>
        </div>
      )}
    </>
  );
}