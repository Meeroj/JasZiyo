'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { siteData } from '@/data/siteData';
import { Phone, Menu, X, Volume2 } from 'lucide-react';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  const navLinks = siteData.navigation.map((link) => ({
    ...link,
    label: t(link.label),
  }));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-800/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-[#ccff00] flex items-center justify-center text-black font-black group-hover:scale-105 transition-transform">
            <Volume2 className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
              {siteData.company.name}
            </span>
            <span className="text-[10px] tracking-widest text-neutral-400 font-medium uppercase -mt-1">
              {siteData.company.tagline[locale as 'uz' | 'ru' | 'en']}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-wider uppercase font-bold text-neutral-300 hover:text-[#ccff00] transition-colors flex items-center gap-1.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: Language + Contact CTA */}
        <div className="hidden sm:flex items-center gap-5">
          {/* Language Selector */}
          <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-full p-1 text-xs font-bold">
            {siteData.locales.map((loc) => (
              <button
                key={loc.code}
                onClick={() => handleLanguageChange(loc.code)}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                  locale === loc.code
                    ? 'bg-[#ccff00] text-black font-extrabold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {loc.name}
              </button>
            ))}
          </div>

          {/* Call CTA */}
          <a
            href={`tel:${siteData.company.phone}`}
            className="flex items-center gap-2 text-xs font-bold text-white hover:text-[#ccff00] transition-colors bg-neutral-900 border border-neutral-800 hover:border-[#ccff00]/40 px-3.5 py-2 rounded-full"
          >
            <Phone className="w-3.5 h-3.5 text-[#ccff00]" />
            <span>{siteData.company.phone}</span>
          </a>

          {/* Order Pill Button */}
          <a
            href="#contacts"
            className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.25)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] hover:scale-105 active:scale-95"
          >
            {t('orderBtn')}
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-200 hover:text-[#ccff00]"
            aria-label={t(mobileMenuOpen ? 'closeMenu' : 'menuToggle')}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0a0a0a] border-b border-neutral-800 px-6 py-6 flex flex-col gap-5 animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-extrabold text-white hover:text-[#ccff00] transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
            <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-full p-1 text-xs font-bold">
              {siteData.locales.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => {
                    handleLanguageChange(loc.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1 rounded-full ${
                    locale === loc.code
                      ? 'bg-[#ccff00] text-black font-extrabold'
                      : 'text-neutral-400'
                  }`}
                >
                  {loc.name}
                </button>
              ))}
            </div>
            <a
              href="#contacts"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#ccff00] text-black font-extrabold text-xs uppercase px-4 py-2 rounded-full"
            >
              {t('orderBtn')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
