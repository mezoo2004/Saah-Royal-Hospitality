'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/XY6DfQamkjacN7E86?g_st=iw';
const GOOGLE_MAPS_EMBED_SRC =
  'https://www.google.com/maps?q=32.0848968%2C34.8589824&z=15&output=embed&hl=ar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    date: '',
    city: '',
    package: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cityLine = formData.city.trim()
      ? `المدينة: ${formData.city.trim()}\n`
      : '';
    const message = `مرحباً، أرغب في حجز باقة ضيافة
الاسم: ${formData.name}
رقم الجوال: ${formData.phone}
نوع المناسبة: ${formData.eventType}
التاريخ: ${formData.date}
${cityLine}الباقة: ${formData.package}
ملاحظات: ${formData.notes}`;

    window.open(
      `https://wa.me/966557410834?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      value: '+966 55 741 0834',
      link: 'tel:+966557410834'
    },
    {
      icon: MessageCircle,
      title: 'واتساب',
      value: 'تواصل معنا عبر الواتساب',
      link: 'https://wa.me/966557410834'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'deyafah@gmail.com',
      link: 'mailto:deyafah@gmail.com'
    },
    {
      icon: MapPin,
      title: 'الموقع',
      value: 'عرض الموقع على خرائط Google',
      link: GOOGLE_MAPS_LINK
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
            <MessageCircle className="w-20 h-20 text-[#C9A646] mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              تواصل معنا
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              نسعد بتواصلك معنا في أي وقت للإجابة على استفساراتك وحجز خدماتنا
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#FAF8F3] to-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#3B2414] mb-8">
                نموذج الحجز
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#3B2414] font-medium mb-2">
                    الاسم الكامل <span className="text-[#C9A646]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#C9A646] focus:outline-none transition-colors"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label className="block text-[#3B2414] font-medium mb-2">
                    رقم الجوال <span className="text-[#C9A646]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#C9A646] focus:outline-none transition-colors"
                    placeholder="05XXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-[#3B2414] font-medium mb-2">
                    نوع المناسبة <span className="text-[#C9A646]">*</span>
                  </label>
                  <select
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#C9A646] focus:outline-none transition-colors"
                  >
                    <option value="">اختر نوع المناسبة</option>
                    <option value="زواج">زواج</option>
                    <option value="خطوبة">خطوبة</option>
                    <option value="مناسبة عائلية">مناسبة عائلية</option>
                    <option value="فعالية رسمية">فعالية رسمية</option>
                    <option value="أخرى">أخرى</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#3B2414] font-medium mb-2">
                    تاريخ المناسبة <span className="text-[#C9A646]">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#C9A646] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#3B2414] font-medium mb-2">
                    المدينة
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#C9A646] focus:outline-none transition-colors"
                    placeholder="اكتب المدينة (مثال: الرياض، الدمام، جدة...)"
                  />
                </div>

                <div>
                  <label className="block text-[#3B2414] font-medium mb-2">
                    الباقة المطلوبة
                  </label>
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#C9A646] focus:outline-none transition-colors"
                  >
                    <option value="">اختر الباقة</option>
                    <option value="باقة الضيف">باقة الضيف - 1,998 ريال</option>
                    <option value="الباقة البرونزية">الباقة البرونزية - 3,188 ريال</option>
                    <option value="الباقة الفضية">الباقة الفضية - 3,600 ريال</option>
                    <option value="الباقة التوثيقية">الباقة التوثيقية - 4,779 ريال</option>
                    <option value="باقة الضيوف">باقة الضيوف - 6,600 ريال</option>
                    <option value="الباقة الذهبية">الباقة الذهبية - 7,000 ريال</option>
                    <option value="الباقة الملكية">الباقة الملكية - 9,000 ريال</option>
                    <option value="باقة الضيافة الفخامة">باقة الضيافة الفخامة - 11,500 ريال</option>
                    <option value="باقة مخصصة">باقة مخصصة</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#3B2414] font-medium mb-2">
                    ملاحظات إضافية
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#C9A646] focus:outline-none transition-colors resize-none"
                    placeholder="أي ملاحظات أو طلبات خاصة..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#C9A646] to-[#D4AF37] text-white py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-[#C9A646]/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  إرسال عبر واتساب
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl font-bold text-[#3B2414] mb-8">
                  معلومات التواصل
                </h2>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                    >
                      <div className="bg-gradient-to-br from-[#C9A646] to-[#D4AF37] w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#3B2414] mb-1 text-lg">{info.title}</h3>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#C9A646] to-[#D4AF37] p-8 rounded-2xl shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <Clock className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">ساعات العمل</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    السبت - الخميس: 9:00 صباحاً - 10:00 مساءً
                    <br />
                    الجمعة: 4:00 مساءً - 10:00 مساءً
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-[#3B2414] mb-4">
                  طرق الدفع المتاحة
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  نوفر عدة طرق للدفع لراحتكم:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#C9A646] rounded-full"></span>
                    التحويل البنكي
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#C9A646] rounded-full"></span>
                    الدفع نقداً
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#C9A646] rounded-full"></span>
                    الدفع الإلكتروني
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="mb-6 text-center text-3xl font-bold text-[#3B2414] md:text-4xl">
              موقعنا على الخريطة
            </h2>
            <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl shadow-xl">
              <iframe
                src={GOOGLE_MAPS_EMBED_SRC}
                title="موقع ضيافة سعة على خرائط Google"
                className="block w-full max-w-full border-0"
                style={{ border: 0 }}
                width="100%"
                height={450}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-4 text-center">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#3B2414] underline decoration-[#C9A646] decoration-2 underline-offset-4 transition-colors hover:text-[#C9A646]"
              >
                <MapPin className="h-5 w-5 shrink-0" aria-hidden />
                فتح الموقع في خرائط Google
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
