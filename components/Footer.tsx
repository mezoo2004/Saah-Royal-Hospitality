import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-[#3B2414] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm0 10L10 30l20 20 20-20-20-20z' fill='%23C9A646' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="text-[#C9A646]">ضيافة</span>{' '}
              <span className="text-white">سعة</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              نقدم تجربة ضيافة سعودية راقية بتفاصيل فاخرة وخدمة احترافية تليق بمناسباتكم الخاصة
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#C9A646] mb-4">روابط سريعة</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-[#C9A646] transition-colors">
                الرئيسية
              </Link>
              <Link href="/packages" className="block text-gray-300 hover:text-[#C9A646] transition-colors">
                الباقات
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-[#C9A646] transition-colors">
                من نحن
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-[#C9A646] transition-colors">
                تواصل معنا
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#C9A646] mb-4">تواصل معنا</h3>
            <div className="space-y-3">
              <a href="tel:+966557410834" className="flex items-center gap-3 text-gray-300 hover:text-[#C9A646] transition-colors">
                <Phone className="w-5 h-5" />
                <span dir="ltr">+966 55 741 0834</span>
              </a>
              <a href="mailto:deyafah@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-[#C9A646] transition-colors">
                <Mail className="w-5 h-5" />
                deyafah@gmail.com
              </a>
              <a
                href="https://maps.app.goo.gl/XY6DfQamkjacN7E86?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#C9A646] transition-colors"
              >
                <MapPin className="w-5 h-5 shrink-0" />
                الموقع على خرائط Google
              </a>
              <div className="pt-2">
                <p className="mb-2 text-sm text-gray-400">تابعنا</p>
                <SocialLinks iconClassName="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#C9A646]/20 pt-8 text-center text-gray-400">
          <p>© 2024 ضيافة سعة. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}
