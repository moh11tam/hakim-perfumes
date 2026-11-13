export const CURRENCIES = {
  DZD: { symbol: 'د.ج', rate: 1 }
};

export const CATEGORIES = [
  { id: 'all', name: 'المجموعة الكاملة' },
  { id: 'oils', name: 'العطور الزيتية' },
  { id: 'cosmetics', name: 'مستحضرات التجميل' },
  { id: 'care', name: 'العناية الشخصية' }
];

export const PRODUCTS = [
  {
    id: 1,
    name: 'مسك حكيم الملكي',
    subtitle: 'Hakim Royal Musk Oil',
    category: 'oils',
    price50: 3500,
    price100: 6000,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=85',
    badge: 'الأكثر طلباً',
    story: 'زيت عطري نقي ومركز، مستخلص بعناية ليمنحك ثباتاً طويلاً ورائحة تنبض بالنقاء والصفاء.',
    notes: {
      top: 'المسك الأبيض الخالص، اللافندر الهادئ',
      heart: 'زهر البرتقال، الأخشاب الناعمة',
      base: 'العنبر الأبيض، الفانيليا الخفيفة'
    },
    description: 'عطر زيتي فاخر يرافق تفاصيل يومك بكل هدوء وأناقة.'
  },
  {
    id: 2,
    name: 'مجموعة العناية المخملية',
    subtitle: 'Velvet Care Collection',
    category: 'care',
    price50: 4800,
    price100: 8500,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=85',
    badge: 'إصدار خاص',
    story: 'تركيبة متكاملة للعناية الشخصية، مصممة من مرطبات طبيعية لتغذي بشرتك وتمنحها نعومة فائقة.',
    notes: {
      top: 'زيت اللوز النقي، زهور اللوتس',
      heart: 'خلاصة زبدة الشيا، العسل الطبيعي',
      base: 'المسك الخفيف، اللبان المرطب'
    },
    description: 'لمسة عناية يومية تمنح بشرتك إشراقة طبيعية ونعومة تدوم طويلاً.'
  },
  {
    id: 3,
    name: 'مستحضرات التجميل الملكية',
    subtitle: 'Royal Cosmetics Glow',
    category: 'cosmetics',
    price50: 4200,
    price100: 7500,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=85',
    badge: 'إصدار جديد',
    story: 'مجموعة تجميل راقية صُممت لتبرز جمالك الطبيعي وتمنحك حضوراً مميزاً ومشرقاً.',
    notes: {
      top: 'مستخلصات الفواكه الطبيعية، اللمعان الذهبي',
      heart: 'روائح الورود النادرة، البودرة المخملية',
      base: 'مثبتات طبيعية خفيفة على البشرة'
    },
    description: 'منتجات تجميل عالية الجودة تمنحك إطلالة متألقة تناسب كل المناسبات.'
  },
  {
    id: 4,
    name: 'خلاصة العود الفاخر',
    subtitle: 'Pure Oud Essence',
    category: 'oils',
    price50: 6500,
    price100: 12000,
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=85',
    badge: 'حصري',
    story: 'قطرات مركزة من أندر زيوت العود المعتق، تعبير حقيقي عن الفخامة والذوق الرفيع.',
    notes: {
      top: 'الزعفران الملكي، الهيل',
      heart: 'العود المعتق، الأخشاب الداكنة',
      base: 'العنبر الخالص، البخور'
    },
    description: 'عطر زيتي يترك بصمة لا تُنسى وحضوراً طاغياً بكل غرور هادئ.'
  }
];