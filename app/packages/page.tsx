'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, Crown } from 'lucide-react';

type PackageCard = {
  name: string;
  price: string;
  featured?: boolean;
  features: string[];
  description?: string;
  coverageIntro?: string;
  coverageLines?: string[];
  ctaLabel?: string;
};

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
  const packages: PackageCard[] = [
    {
      name: 'باقة الضيف',
      price: '999',
      features: [
        'مقــهويــــــــــــــــــــــــــــــــن 2 ',
        'مقـــــــــــــــــــــــــــــــــــــــادع 5 ',
        '4 انــــــــــــــــــــــواع شـــاهي ',
        ' القهــــــوة السعــــــوديــة',
        'محمــــــل تمـــــر صغـــير 1',
        'حــلاء صغيـــــــــــــــــــــــر 6',
        'بخــــــــــــــــــــــــــــــــــــــــــــور 1',
      ]
    },
    {
      name: 'الباقة البرونزية',
      price: '1594',
      features: [
        'مقــهويــــــــــــــــــــــــــــــــن 3',
        'القهــــــوة السعــــــوديــة',
        '4 انــــــــــــــــــــــواع شـــاهي',
        'مقـــــــــــــــــــــــــــــــــــــــادع 8',
        'محمــــــل تمـــــر صغـــير 1',
        'مقــــــــــــــــــــــــادع 2 دور 2',
        'حــــــــــــلا كبـــــــــــــــــــــــــير 4',
        'حــلاء صغيـــــــــــــــــــــــر 8',
        'بخــــــــــــــــــــــــــــــــــــــــــــور 1',
        'فرشـــــــــــــات ملكيــــــــــــة',
      ]
    },
    {
      name: 'الباقة الفضية',
      price: '1800',
      features: [
        'مقــهويــــــــــــــــــــــــــــن 4',
        'القهــــــوة السعــــوديــة',
        '4 انــــــــــــــــــــــواع شـــاهي',
        'مقـــــــــــــــــــــــــــــــــــــــادع 10',
        'محمــــــل تمـــــر صغـــير 1',
        'مقـــــــــــــــــــــــــــــــــــــــادع 2 دور 3',
        'حــــــــــــلا كبـــــــــــــــــــــــــير 5',
        'حــلاء صغيـــــــــــــــــــــــر 10',
        'بخــــــــــــــــــــــــــــــــــــــــــــور 2',
        'فرشـــــــــــــات ملكيــــــــــــة',
      ]
    },
    {
      name: 'الباقة التوثيقية',
      price: '1990',
      features: [
        'مقــهويــــــــــــــــــــــــــــن 6',
        'القهــــــوة السعــــوديــة',
        '5 انــــــــــــــــــــــواع شـــاهي',
        'مقـــــــــــــــــــــــــــــــــــــــادع 15',
        'تمريــــــــــــة حائليــــــــــــة 2',
        'محمــــــل تمـــــر صغـــير 1',
        'حــــــــــــلا كبـــــــــــــــــــــــــير 8',
        'حــلاء صغيـــــــــــــــــــــــر 15',
        'بخــــــــــــــــــــــــــــــــــــــــــــور 2',
        'فرشة تشريفات الخزامة',
        'فرشــــــــــــات ملكيــــــــــــة',
      ]
    },
    {
      name: 'باقة الضيوف',
      price: '3300',
      features: [
        'مقــهويــــــــــــــــــــــــــــن 8',
        'القهــــــوة السعــــوديــة',
        '5 انــــــــــــــــــــــواع شـــاهي',
        'مقـــــــــــــــــــــــــــــــــــــــادع 20',
        'تمريــــــــــــة حائليــــــــــــة 3',
        'محمــــــل تمـــــر صغـــير 1',
        'مقـــــــــــــــــــــــــــــــــــــــادع 2 دور 5',
        'حــــــــــــلا كبـــــــــــــــــــــــــير 10',
        'حلاء صغيـــــــــــــــــــــــر 2',
        'بخــــــــــــــــــــــــــــــــــــــــــور 3',
        'فرشة تشريفات الخـــزامة',
        'فرشــــــــــــات ملكيــــــــــــــة',
      ]
    },
    {
      name: 'الباقة الذهبية',
      price: '3500',
      features: [
        'مقداع تمر 30 حبــه على 30 طاولات القص',
        'حلا مشــــكل 20 صحـــــن منــو على الخدمــة',
        '5 انــواع تمــر دورين مشكل على مركز الخدمة',
        '6 انــــــــــــــــــــــواع شـــاهي',
        'قهــــــــــــــوة السعــــــــــــوديــة مفــــــــــــتوح',
        'الشاي جميــــــــــــع الأنــــــــــــواع مفــــــــــتوح',
        'فرشــــــــــــــــــــــات ملكي عدد 4 كبيــــــــــــــــــــر',
        'فرشــــــــات تشريــــــــفات الخزامـة 25 متــــــــر',
        'علم ضيــــــــــــــــــــــــــــــافة سعــــــــــــــــــــــــــــه',
        'علم السعــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــوديــة',
        'حواجــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــز 4',
        'شاشة ترحيــــــــــــــــب خاصة بالخدمــــــــــــــــة',
        'بنــــــــــــر ستانــــــــــــديو خاص بالخدمــــــــــــة',
        'مبــــــــاخر زيــنــــة خاصة بالخدمــــــة كبــــــار 2',
        'عدد الموظفين الخدمة 3 على مركز الخدمة',
        'مرشــــات عطــور و دهــن عود ملكي فاخــر',
        'مقــــــــاس الخدمــــــــة 5 متــــــــر مضــــــــئ',

      ]
    },
    {
      name: 'الباقة الملكية',
      price: '4500',
      featured: true,
      features: [
        'مقــهويـــــــــــــــــــــــــــــــن 10',
        'القهــــــوة السعــــــوديــة',
        '6 انــــــــــــــــــــــواع شـــاهي',
        'مقـــــــــــــــــــــــــــــــــــــــادع 25',
        'تمريــــــــــــة حائليــــــــــــة 4',
        'محمــــــل تمـــــر صغـــير 2',
        'مقـــــــــــــــــــــــــــــــــــــــادع 2 دور 5',
        'حــــــــــــلا كبـــــــــــــــــــــــــير 12',
        'حــلاء صغيـــــــــــــــــــــــر 25',
        'بخــــــــــــــــــــــــــــــــــــــــــــور 4',
        'فرشة تشريفات الخـــزامة',
        'فرشــــــــــــات ملكيــــــــــــــة',
      ]
    },
    {
      name: 'باقة الضيافة الفخامة',
      price: '11,500',
      description: 'الخدمات تشمل الضيافة',
      features: [
        'باقة الضيافة الضيوف: 7,500',
        'الباقة الضيافة الملكية: 9,500',
        'الباقة الضيافة الفخامة: 11,500',
      ],
      coverageIntro: 'تشمل المدن التالية:',
      coverageLines: [
        'رفحاء - روضة الهباس - النعيرية - الرفيعة',
        'قرية العليا - مليجة - الخفجي - الأرطاوية',
        'المجمعة - الزلفي - الصرار - الرفاع - إلهابه',
      ],
      ctaLabel: 'وش حاب تختار؟',
    },
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
                  index === 0 ? 'mt-[6px] ' : ''
                }${index === 3 ? 'h-[1048px] ' : ''}${
                  pkg.featured
                    ? 'ring-4 ring-[#C9A646] transform lg:scale-110 lg:col-span-1 md:col-span-2 z-10'
                    : ''
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#C9A646] to-[#D4AF37] text-white py-3 text-center font-bold flex items-center justify-center gap-2">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-[#3B2414]/45 flex items-center justify-center ring-2 ring-white/30">
                      <img
                        src="/logo-white.png"
                        alt="Saah Logo"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    الباقة الأكثر طلباً
                    <div className="h-10 w-10 shrink-0 rounded-full bg-[#3B2414]/45 flex items-center justify-center ring-2 ring-white/30">
                      <img
                        src="/logo-white.png"
                        alt="Saah Logo"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                )}

                <div
                  className={`${
                    index === 4
                      ? 'px-8 pb-8 pt-0 h-[1048px]'
                      : `p-8 ${pkg.featured ? 'pt-20 bg-gradient-to-br from-[#C9A646]/10 to-[#D4AF37]/5' : 'pt-8'}`
                  } ${index === 0 ? 'h-[1037px]' : ''} ${index === 3 ? 'h-[779px] w-[387px]' : ''}`}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-[#3B2414] mb-4">{pkg.name}</h3>
                    <div className="mb-2">
                      <span className="text-6xl font-bold text-[#C9A646]">{pkg.price}</span>
                    </div>
                    <span className="text-gray-600 text-lg">ريال سعودي</span>
                  </div>

                  {pkg.description ? (
                    <p className="text-center text-gray-700 leading-relaxed mb-8">{pkg.description}</p>
                  ) : null}

                  <div className={`space-y-4 mb-8${index === 5 ? ' h-[730px]' : ''}`}>
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <Check className="w-6 h-6 text-[#C9A646]" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {pkg.coverageIntro && pkg.coverageLines?.length ? (
                    <div className="mb-8 pt-6 border-t border-[#C9A646]/25">
                      <p className="text-sm font-semibold text-[#3B2414] mb-3">{pkg.coverageIntro}</p>
                      <div className="space-y-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {pkg.coverageLines.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <Link
                    href="/contact"
                    className={`block text-center py-4 rounded-full font-bold transition-all duration-300 ${
                      index === 4 ? 'mt-[309px] mb-[309px] ' : ''
                    }${
                      pkg.featured
                        ? 'bg-gradient-to-r from-[#C9A646] to-[#D4AF37] text-white hover:shadow-2xl hover:shadow-[#C9A646]/50 transform hover:scale-105'
                        : 'bg-[#3B2414] text-white hover:bg-[#2d1a0e]'
                    }`}
                  >
                    {pkg.ctaLabel ?? 'احجز هذه الباقة'}
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
