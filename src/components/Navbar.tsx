import React, { useState } from 'react';
import { Phone, MessageCircle, Globe, Menu, X } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  const navLinks = [
    { label: currentLang === 'ar' ? 'الرئيسية' : currentLang === 'en' ? 'Home' : 'Accueil', href: "#hero" },
    { label: currentLang === 'ar' ? 'الخدمات' : currentLang === 'en' ? 'Services' : 'Services', href: "#services" },
    { label: currentLang === 'ar' ? 'لماذا نحن' : currentLang === 'en' ? 'Why Us' : 'Pourquoi nous choisir', href: "#why-us" },
    { label: currentLang === 'ar' ? 'الصور والفيديوهات' : currentLang === 'en' ? 'Gallery' : 'Photos & Vidéos', href: "#media-gallery" },
    { label: currentLang === 'ar' ? 'اتصل بنا' : currentLang === 'en' ? 'Contact' : 'Contact & Horaires', href: "#contact" },
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
    <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-[#DADCE0] shadow-xs">
      {/* Top micro bar for quick business status */}
      <div className="bg-[#F8F9FA] border-b border-[#E8EAED] text-xs text-[#5F6368] py-1.5 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#1E8E3E]"></span>
            <span className="font-medium text-[#3C4043]">
              {currentLang === 'ar' ? 'مكتب الاستقبال مفتوح في وهران' : currentLang === 'en' ? 'Agency open in Oran' : 'Agence ouverte à Oran (14 Rue Capitaine Hadri)'}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-[#1A73E8] font-medium flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#1A73E8]" />
              <span>{siteConfig.phone}</span>
            </a>
            {/* Simple Language Switcher */}
            <div className="flex items-center gap-1.5 border-l border-[#DADCE0] pl-3">
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-semibold ${currentLang === 'fr' ? 'bg-[#1A73E8] text-white' : 'text-[#5F6368] hover:text-[#202124]'}`}
              >
                FR
              </button>
              <button
                onClick={() => onLanguageChange('ar')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-semibold ${currentLang === 'ar' ? 'bg-[#1A73E8] text-white' : 'text-[#5F6368] hover:text-[#202124]'}`}
              >
                عربي
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-semibold ${currentLang === 'en' ? 'bg-[#1A73E8] text-white' : 'text-[#5F6368] hover:text-[#202124]'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2.5">
          <Logo variant="header" />
        </a>

        {/* Center Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 text-sm font-medium text-[#3C4043] hover:text-[#1A73E8] hover:bg-[#F1F3F4] rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Direct Call & Request Quote Button */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#1A73E8] border border-[#DADCE0] hover:bg-[#F8F9FA] rounded-md transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{currentLang === 'ar' ? 'اتصال مباشر' : currentLang === 'en' ? 'Call Now' : 'Appeler'}</span>
          </a>
          <button
            onClick={onOpenConsultation}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#1A73E8] hover:bg-[#1557B0] rounded-md shadow-xs transition-colors"
          >
            <span>{currentLang === 'ar' ? 'طلب موعد / تسعيرة' : currentLang === 'en' ? 'Get a Quote' : 'Demander un devis'}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#5F6368] hover:text-[#202124] rounded-md hover:bg-[#F1F3F4]"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#DADCE0] bg-white px-4 py-3 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3 py-2 text-sm font-medium text-[#3C4043] hover:text-[#1A73E8] hover:bg-[#F8F9FA] rounded"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#E8EAED] grid grid-cols-2 gap-2">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-[#1A73E8] border border-[#DADCE0] rounded-md"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{siteConfig.phone}</span>
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-white bg-[#1A73E8] rounded-md"
            >
              <span>{currentLang === 'ar' ? 'طلب تسعيرة' : 'Demander un devis'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
