'use client';

import { motion } from 'framer-motion';
import { Heart, Target, Award, Users, Sparkles } from 'lucide-react';

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

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'الشغف بالتميز',
      description: 'نعمل بشغف لتقديم أفضل تجربة ضيافة في كل مناسبة'
    },
    {
      icon: Target,
      title: 'الدقة في التفاصيل',
      description: 'نهتم بأدق التفاصيل لضمان تجربة لا تُنسى'
    },
    {
      icon: Award,
      title: 'الجودة العالية',
      description: 'نستخدم أجود المنتجات والمواد لتقديم خدمة فاخرة'
    },
    {
      icon: Users,
      title: 'الاحترافية',
      description: 'فريق محترف ومدرب على أعلى مستوى من الخدمة'
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
            <Sparkles className="w-20 h-20 text-[#C9A646] mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              من نحن
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              رحلتنا في تقديم أفضل خدمات الضيافة السعودية الفاخرة
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#3B2414] mb-6">
                قصة <span className="text-[#C9A646]">ضيافة سعة</span>
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  بدأت رحلتنا من حب عميق للتراث السعودي الأصيل والرغبة في تقديم تجربة ضيافة استثنائية تجمع بين الأصالة والفخامة.
                </p>
                <p>
                  نؤمن بأن كل مناسبة تستحق أن تكون مميزة، ولذلك نسعى جاهدين لتقديم خدمات ضيافة راقية تليق بمناسباتكم الخاصة، سواء كانت أفراح، مناسبات عائلية، أو فعاليات رسمية.
                </p>
                <p>
                  مع فريق محترف من أصحاب الخبرة والشغف، نحرص على تقديم أفضل جودة من القهوة العربية، الشاي، الحلويات، والتمور، مع الاهتمام بكل التفاصيل التي تجعل تجربتكم لا تُنسى.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#C9A646] to-[#D4AF37] p-8 rounded-3xl shadow-2xl">
                <div className="bg-white rounded-2xl p-8">
                  <h3 className="text-3xl font-bold text-[#3B2414] mb-4">رؤيتنا</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    أن نكون الخيار الأول في تقديم خدمات الضيافة الفاخرة في المملكة، ونشر ثقافة الضيافة السعودية الأصيلة مع لمسة عصرية راقية.
                  </p>

                  <h3 className="text-3xl font-bold text-[#3B2414] mb-4">رسالتنا</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    تقديم تجربة ضيافة استثنائية تجمع بين الأصالة والفخامة، مع الاهتمام بكل تفصيلة لضمان رضا عملائنا وإسعادهم في كل مناسبة.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
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
              قيمنا
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
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="bg-gradient-to-br from-[#C9A646] to-[#D4AF37] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#3B2414] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
              نسعد بخدمتكم
            </h2>
            <p className="text-xl text-[#3B2414]/80 mb-8">
              دعنا نكون جزءاً من مناسبتك الخاصة ونجعلها تجربة لا تُنسى
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#3B2414] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#2d1a0e] transition-all duration-300 shadow-2xl"
            >
              احجز الآن
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
