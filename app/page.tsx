'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Coffee,
  Flower2,
  Cake,
  Crown,
  Users,
  Camera,
  Check,
  Star,
  Phone,
  MessageCircle
} from 'lucide-react';

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

export default function Home() {
  const services = [
    { icon: Coffee, title: 'قهوة عربية', description: 'قهوة عربية أصيلة بنكهة فاخرة' },
    { icon: Flower2, title: 'شاي فاخر', description: 'تشكيلة راقية من أجود أنواع الشاي' },
    { icon: Cake, title: 'حلويات وتمور', description: 'حلويات فاخرة وتمور منتقاة' },
    { icon: Crown, title: 'ضيافة ملكية', description: 'خدمة ضيافة بمستوى ملكي راقي' },
    { icon: Users, title: 'تشريفات وتجهيز', description: 'طاقم احترافي للتشريفات' },
    { icon: Camera, title: 'تصوير ومونتاج', description: 'توثيق احترافي لمناسبتك' }
  ];

  const packages = [
    { name: 'باقة الضيف', price: '1,998', features: ['قهوة وشاي', 'تمور فاخرة', 'خدمة 4 ساعات'] },
    { name: 'الباقة الفضية', price: '3,600', features: ['قهوة وشاي وحلويات', 'ديكور بسيط', 'خدمة 6 ساعات'] },
    { name: 'الباقة الملكية', price: '9,000', features: ['جميع الخدمات', 'تصوير فوتوغرافي', 'ديكور فاخر', 'خدمة كاملة'], featured: true }
  ];

  const whyUs = [
    { title: 'جودة عالية', description: 'نستخدم أجود المواد والمنتجات' },
    { title: 'طاقم محترف', description: 'فريق مدرب على أعلى مستوى' },
    { title: 'تجهيز فاخر', description: 'ديكورات وتجهيزات راقية' },
    { title: 'دقة في التفاصيل', description: 'اهتمام بأدق التفاصيل' }
  ];

  const testimonials = [
    { name: 'عبدالله المطيري', text: 'خدمة راقية جداً وطاقم محترف. شكراً لكم على جعل مناسبتنا مميزة', rating: 5 },
    { name: 'فاطمة العتيبي', text: 'ضيافة فاخرة بكل معنى الكلمة، الضيوف أعجبوا جداً', rating: 5 },
    { name: 'محمد السعيد', text: 'تجربة رائعة من البداية للنهاية، أنصح بهم بشدة', rating: 5 }
  ];

  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3B2414] via-[#4a2f1a] to-[#2d1a0e]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm0 10L10 30l20 20 20-20-20-20z' fill='%23C9A646' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block h-[201px] w-[200px] py-0 leading-[88px] tracking-[9px]"
            >
              <Image
                src="/logo.png"
                alt="Saah Logo"
                width={200}
                height={201}
                className="mx-auto mt-[-82px] mb-[-82px] h-[201px] w-[200px] object-contain p-0"
              />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mt-[-91px] mb-[17px] leading-tight">
              ضيافة فاخرة
              <br />
              <span className="text-[#C9A646]">تليق بمناسبتك</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              نقدم تجربة ضيافة راقية بتفاصيل فاخرة وخدمة احترافية
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#C9A646] to-[#D4AF37] text-[#3B2414] px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-[#C9A646]/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                احجز الآن
              </Link>
              <Link
                href="/packages"
                className="bg-transparent border-2 border-[#C9A646] text-[#C9A646] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#C9A646] hover:text-[#3B2414] transition-all duration-300"
              >
                استعرض الباقات
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#3B2414] mb-4">
              خدماتنا الفاخرة
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-gradient-to-r from-[#C9A646] to-[#D4AF37] mx-auto" />
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-gradient-to-br from-[#FAF8F3] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#C9A646]/10 hover:border-[#C9A646]/30"
              >
                <div className="bg-gradient-to-br from-[#C9A646] to-[#D4AF37] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3B2414] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#FAF8F3] to-[#F5F1E8] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm0 10L10 30l20 20 20-20-20-20z' fill='%23C9A646' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#3B2414] mb-4">
              باقاتنا المميزة
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-gradient-to-r from-[#C9A646] to-[#D4AF37] mx-auto" />
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  pkg.featured ? 'ring-4 ring-[#C9A646] transform md:scale-105' : ''
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#C9A646] to-[#D4AF37] text-white px-4 py-1 rounded-full text-sm font-bold">
                    الأكثر طلباً
                  </div>
                )}

                <div className={`p-8 ${pkg.featured ? 'bg-gradient-to-br from-[#C9A646]/10 to-[#D4AF37]/5' : ''}`}>
                  <h3 className="text-2xl font-bold text-[#3B2414] mb-2">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-[#C9A646]">{pkg.price}</span>
                    <span className="text-gray-600 mr-2">ريال</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <Check className="w-5 h-5 text-[#C9A646] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-full font-bold transition-all duration-300 ${
                      pkg.featured
                        ? 'bg-gradient-to-r from-[#C9A646] to-[#D4AF37] text-white hover:shadow-lg'
                        : 'bg-[#3B2414] text-white hover:bg-[#2d1a0e]'
                    }`}
                  >
                    احجز الآن
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/packages"
              className="inline-block bg-[#3B2414] text-white px-8 py-4 rounded-full font-bold hover:bg-[#2d1a0e] transition-all duration-300"
            >
              عرض جميع الباقات
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#3B2414] mb-4">
              لماذا نحن؟
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-gradient-to-r from-[#C9A646] to-[#D4AF37] mx-auto" />
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-[#C9A646] to-[#D4AF37] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/logo-white.png"
                    alt="Saah Logo"
                    width={500}
                    height={500}
                    className="w-[285px] h-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#3B2414] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#3B2414] to-[#2d1a0e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm0 10L10 30l20 20 20-20-20-20z' fill='%23C9A646' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
              آراء عملائنا
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-gradient-to-r from-[#C9A646] to-[#D4AF37] mx-auto" />
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-[#C9A646]/20"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C9A646] text-[#C9A646]" />
                  ))}
                </div>
                <p className="text-white mb-6 leading-relaxed">{testimonial.text}</p>
                <p className="text-[#C9A646] font-bold">{testimonial.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#C9A646] to-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#3B2414] mb-6">
              هل أنت مستعد لتجربة ضيافة استثنائية؟
            </h2>
            <p className="text-xl text-[#3B2414]/80 mb-8">
              احجز الآن عبر الواتساب أو زورنا في موقعنا
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/966557410834"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#1ea952] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                واتساب
              </a>
              <a
                href="tel:+966557410834"
                className="bg-[#3B2414] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#2d1a0e] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                اتصل بنا
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
