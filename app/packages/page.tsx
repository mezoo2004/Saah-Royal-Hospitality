'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, Crown, Star } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Packages() {
  const packages = [
    {
      name: 'باقة الضيف',
      price: '1,998',
      features: [
        'قهوة عربية فاخرة',
        'تمور منتقاة',
        'خدمة ضيافة لمدة 4 ساعات',
        'طاقم عمل محترف',
      ]
    },
    {
      name: 'الباقة البرونزية',
      price: '3,188',
      features: [
        'قهوة وشاي فاخر',
        'تمور وحلويات',
        'خدمة ضيافة 5 ساعات',
        'طاقم عمل محترف',
        'ديكور بسيط',
      ]
    },
    {
      name: 'الباقة الفضية',
      price: '3,600',
      features: [
        'قهوة وشاي وعصائر',
        'تمور وحلويات فاخرة',
        'خدمة ضيافة 6 ساعات',
        'طاقم عمل محترف',
        'ديكور راقي',
        'بخور وعطور',
      ]
    },
    {
      name: 'الباقة التوثيقية',
      price: '4,779',
      features: [
        'كل مميزات الباقة الفضية',
        'تصوير فوتوغرافي احترافي',
        'تصوير فيديو',
        'مونتاج احترافي',
        'ألبوم رقمي',
      ]
    },
    {
      name: 'باقة الضيوف',
      price: '6,600',
      features: [
        'خدمة ضيافة كاملة',
        'قهوة وشاي وعصائر ومشروبات',
        'تمور وحلويات فاخرة',
        'ديكور فاخر',
        'طاقم كبير',
        'خدمة 8 ساعات',
        'بخور وعطور فاخرة',
      ]
    },
    {
      name: 'الباقة الذهبية',
      price: '7,000',
      features: [
        'جميع خدمات باقة الضيوف',
        'تصوير فوتوغرافي وفيديو',
        'تشريفات ملكية',
        'ديكور ذهبي فاخر',
        'جلسات ملكية',
        'خدمة VIP',
      ]
    },
    {
      name: 'الباقة الملكية',
      price: '9,000',
      featured: true,
      features: [
        'كل خدمات الباقة الذهبية',
        'تصوير سينمائي احترافي',
        'فريق تصميم وديكور كامل',
        'جلسات ملكية فاخرة',
        'خدمة ضيافة VIP كاملة',
        'تشريفات ملكية',
        'تنسيق كامل للحفل',
        'مفاجآت خاصة',
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      <section className="relative py-24 bg-gradient-to-br from-[#3B2414] to-[#2d1a0e] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm0 10L10 30l20 20 20-20-20-20z' fill='%23C9A646' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Crown className="w-20 h-20 text-[#C9A646] mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              باقاتنا الفاخرة
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              اختر الباقة المناسبة لمناسبتك من بين مجموعة متنوعة من الخدمات الراقية
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#FAF8F3] to-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  pkg.featured ? 'ring-4 ring-[#C9A646] transform lg:scale-110 lg:col-span-1 md:col-span-2 lg:col-start-2 lg:row-start-3' : ''
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#C9A646] to-[#D4AF37] text-white py-3 text-center font-bold flex items-center justify-center gap-2">
                    <Star className="w-5 h-5 fill-white" />
                    الباقة الأكثر طلباً
                    <Star className="w-5 h-5 fill-white" />
                  </div>
                )}

                <div className={`p-8 ${pkg.featured ? 'pt-20 bg-gradient-to-br from-[#C9A646]/10 to-[#D4AF37]/5' : 'pt-8'}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-[#3B2414] mb-4">{pkg.name}</h3>
                    <div className="mb-2">
                      <span className="text-6xl font-bold text-[#C9A646]">{pkg.price}</span>
                    </div>
                    <span className="text-gray-600 text-lg">ريال سعودي</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <Check className="w-6 h-6 text-[#C9A646]" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={`block text-center py-4 rounded-full font-bold transition-all duration-300 ${
                      pkg.featured
                        ? 'bg-gradient-to-r from-[#C9A646] to-[#D4AF37] text-white hover:shadow-2xl hover:shadow-[#C9A646]/50 transform hover:scale-105'
                        : 'bg-[#3B2414] text-white hover:bg-[#2d1a0e]'
                    }`}
                  >
                    احجز هذه الباقة
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 bg-white/80 backdrop-blur-sm p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#3B2414] mb-4">
              هل تحتاج إلى باقة مخصصة؟
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              نقدم باقات مخصصة تناسب احتياجاتك الخاصة. تواصل معنا لتصميم الباقة المثالية لمناسبتك
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#C9A646] to-[#D4AF37] text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-[#C9A646]/50 transition-all duration-300"
            >
              تواصل معنا الآن
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
