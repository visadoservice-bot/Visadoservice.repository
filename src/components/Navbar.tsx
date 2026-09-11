import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Globe, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig, WHATSAPP_CONSULTANT_MESSAGE } from '../data/config';
import { translations } from '../data/translations';
import { Language } from '../types';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenConsultation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.europe, href: "#europe" },
    { label: t.nav.canada, href: "#canada" },
    { label: t.nav.approach, href: "#approach" },
    { label: t.nav.whyUs, href: "#why-us" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(WHATSAPP_CONSULTANT_MESSAGE)}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'luxury-glass py-3.5 shadow-2xl shadow-black/40 border-b border-white/10'
          : 'bg-gradient-to-b from-[#071A2F]/90 via-[#071A2F]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="focus:outline-none focus:ring-1 focus:ring-[#C7A76C]/50 rounded-sm">
          <Logo variant="header" />
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 text-[13.5px] font-medium tracking-wide text-[#E9ECEF]/80 hover:text-white transition-colors duration-200 relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#C7A76C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>

        {/* Right: Language switch & Primary CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs uppercase tracking-wider text-[#E9ECEF]/80 hover:text-white border border-white/10 rounded-full hover:border-[#C7A76C]/40 transition-all"
              aria-label="Sélectionner la langue"
            >
              <Globe className="w-3.5 h-3.5 text-[#C7A76C]" />
              <span className="font-semibold">{currentLang.toUpperCase()}</span>
              <ChevronDown className="w-3 h-3 text-white/50" />
            </button>

            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 luxury-glass-card rounded-lg shadow-xl py-1.5 border border-white/10 z-50 text-xs">
                <button
                  onClick={() => { onLanguageChange('fr'); setIsLangDropdownOpen(false); }}
                  className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-white/10 transition-colors ${currentLang === 'fr' ? 'text-[#C7A76C] font-bold' : 'text-white'}`}
                >
                  <span>Français</span>
                  <span className="text-[10px] text-white/40">FR</span>
                </button>
                <button
                  onClick={() => { onLanguageChange('ar'); setIsLangDropdownOpen(false); }}
                  className={`w-full text-right px-3 py-2 flex items-center justify-between font-arabic hover:bg-white/10 transition-colors ${currentLang === 'ar' ? 'text-[#C7A76C] font-bold' : 'text-white'}`}
                >
                  <span className="text-[10px] text-white/40">AR</span>
                  <span>العربية</span>
                </button>
                <button
                  onClick={() => { onLanguageChange('en'); setIsLangDropdownOpen(false); }}
                  className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-white/10 transition-colors ${currentLang === 'en' ? 'text-[#C7A76C] font-bold' : 'text-white'}`}
                >
                  <span>English</span>
                  <span className="text-[10px] text-white/40">EN</span>
                </button>
              </div>
            )}
          </div>

          {/* Phone quick link */}
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="hidden xl:flex items-center gap-2 text-xs text-[#E9ECEF]/70 hover:text-[#C7A76C] transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#C7A76C] shrink-0" />
            <span className="font-mono tracking-wider whitespace-nowrap select-all">{siteConfig.phone}</span>
          </a>

          {/* Primary CTA Button */}
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 bg-[#C7A76C] hover:bg-[#b89658] text-[#071A2F] text-xs uppercase tracking-[0.14em] font-bold rounded-sm shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {t.nav.speakToAdvisor}
          </button>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Quick WhatsApp icon for mobile */}
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter sur WhatsApp"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Mobile Language Pill Toggle */}
          <div className="flex items-center bg-white/10 rounded-full p-0.5 text-[11px] font-semibold">
            <button
              onClick={() => onLanguageChange('fr')}
              className={`px-2 py-1 rounded-full transition-all ${currentLang === 'fr' ? 'bg-[#C7A76C] text-[#071A2F]' : 'text-white/70'}`}
            >
              FR
            </button>
            <button
              onClick={() => onLanguageChange('ar')}
              className={`px-2 py-1 rounded-full transition-all font-arabic ${currentLang === 'ar' ? 'bg-[#C7A76C] text-[#071A2F]' : 'text-white/70'}`}
            >
              ع
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 rounded-full transition-all ${currentLang === 'en' ? 'bg-[#C7A76C] text-[#071A2F]' : 'text-white/70'}`}
            >
              EN
            </button>
          </div>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? t.nav.close : t.nav.menu}
            className="p-2 text-white/90 hover:text-[#C7A76C] rounded-md transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden luxury-glass border-b border-white/10 px-6 py-6 animate-fadeIn transition-all">
          <div className="flex flex-col space-y-3 pb-6 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-medium text-white/90 hover:text-[#C7A76C] transition-colors py-1 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-white/30">→</span>
              </a>
            ))}
          </div>

          <div className="pt-5 space-y-4">
            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenConsultation(); }}
              className="w-full py-3.5 bg-[#C7A76C] text-[#071A2F] text-center font-bold text-xs uppercase tracking-widest rounded-sm shadow-md"
            >
              {t.nav.speakToAdvisor}
            </button>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-center gap-2 text-sm text-white/80 hover:text-[#C7A76C] py-2 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#C7A76C] shrink-0" />
              <span className="font-mono whitespace-nowrap">{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
