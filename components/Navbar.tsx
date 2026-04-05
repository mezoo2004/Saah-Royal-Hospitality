'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/packages', label: 'الباقات' },
    { href: '/about', label: 'من نحن' },
    { href: '/contact', label: 'تواصل معنا' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#3B2414]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-2xl sm:text-3xl font-bold">
              <span className="text-[#C9A646]">ضيافة</span>{' '}
              <span className="text-white">سعة</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#C9A646] transition-colors duration-300 text-lg font-medium"
              >
                {link.label}
              </Link>
            ))}
            <SocialLinks
              className="gap-2 lg:gap-3"
              iconClassName="h-5 w-5 text-white"
              aria-label="حسابات التواصل الاجتماعي"
            />
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#C9A646] to-[#D4AF37] text-[#3B2414] px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-[#C9A646]/50 transition-all duration-300 flex items-center gap-2 shrink-0"
            >
              <Phone className="w-4 h-4" />
              احجز الآن
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#3B2414] border-t border-[#C9A646]/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white hover:text-[#C9A646] transition-colors duration-300 text-lg font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-gradient-to-r from-[#C9A646] to-[#D4AF37] text-[#3B2414] px-6 py-3 rounded-full font-bold text-center"
              >
                احجز الآن
              </Link>
              <div className="pt-4 border-t border-[#C9A646]/20">
                <p className="text-gray-400 text-sm mb-3">تابعنا</p>
                <SocialLinks iconClassName="h-6 w-6 text-white" aria-label="حسابات التواصل الاجتماعي" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
