import React, { useState } from 'react';
import { Phone, MessageCircle, Globe, Menu, X, MapPin, ExternalLink } from 'lucide-react';
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
    { label: currentLang === 'ar' ? 'آراء العملاء' : currentLang === 'en' ? 'Reviews' : 'Avis Clients', href: "#testimonials" },
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
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs transition-all">
      {/* Top micro bar for quick business status */}
      <div className="bg-slate-50/90 border-b border-slate-100 text-xs text-slate-500 py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            <span className="font-semibold text-slate-800 text-[11px] sm:text-xs truncate">
              {currentLang === 'ar' 
                ? 'مكتبنا مفتوح بوهران' 
                : currentLang === 'en' 
                ? 'Agency open in Oran' 
                : 'Ouvert à Oran (14 Rue Hadri)'}
            </span>
            <a
              href={siteConfig.googleMapsShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-[380px]:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors shrink-0"
              title="Ouvrir sur Google Maps"
            >
              <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-500 shrink-0" />
              <span>{currentLang === 'ar' ? 'خرائط جوجل' : 'Maps'}</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-70" />
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <a href={`tel:${siteConfig.phoneRaw}`} className="hidden md:flex hover:text-blue-600 font-semibold items-center gap-1.5 transition-colors text-slate-700">
              <Phone className="w-3 h-3 text-blue-600" />
              <span dir="ltr">{siteConfig.phone}</span>
            </a>
            {/* Language Switcher */}
            <div className="flex items-center gap-1 border-s border-slate-200 ps-2 sm:ps-3">
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer ${currentLang === 'fr' ? 'bg-blue-600 text-white shadow-2xs' : 'text-slate-500 hover:text-slate-800'}`}
              >
                FR
              </button>
              <button
                onClick={() => onLanguageChange('ar')}
                className={`px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer ${currentLang === 'ar' ? 'bg-blue-600 text-white shadow-2xs' : 'text-slate-500 hover:text-slate-800'}`}
              >
                عربي
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer ${currentLang === 'en' ? 'bg-blue-600 text-white shadow-2xs' : 'text-slate-500 hover:text-slate-800'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2 transition-transform active:scale-95 shrink-0">
          <Logo variant="header" />
        </a>

        {/* Center Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Direct Call & Request Quote Button */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl transition-all shadow-2xs"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            <span>{currentLang === 'ar' ? 'اتصال مباشر' : currentLang === 'en' ? 'Call Now' : 'Appeler'}</span>
          </a>
          <button
            onClick={onOpenConsultation}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs hover:shadow-md hover:shadow-blue-600/20 active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>{currentLang === 'ar' ? 'طلب موعد / تسعيرة' : currentLang === 'en' ? 'Get a Quote' : 'Demander un devis'}</span>
          </button>
        </div>

        {/* Mobile Menu Button - min 44x44px touch target */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-11 h-11 flex items-center justify-center text-slate-700 hover:bg-slate-100 active:bg-slate-200 rounded-xl transition-all cursor-pointer"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu de navigation"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Premium Full-Screen Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden animate-fadeIn flex flex-col">
          {/* Backdrop Blur overlay */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Drawer content panel */}
          <div className="relative z-10 bg-white w-full max-h-[92vh] overflow-y-auto flex flex-col justify-between shadow-2xl border-b border-slate-200 rounded-b-2xl">
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
              <Logo variant="drawer" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 rounded-xl hover:bg-slate-200/60 active:scale-95 transition-all cursor-pointer"
                aria-label="Fermer le menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-4 py-3.5 text-sm sm:text-base font-bold text-slate-800 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl active:bg-blue-100 transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-slate-400 text-base rtl:rotate-180">→</span>
                </a>
              ))}
            </nav>

            {/* Bottom Actions inside drawer */}
            <div className="p-4 border-t border-slate-100 space-y-3 bg-slate-50/50">
              {/* Direct Maps */}
              <a
                href={siteConfig.googleMapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors border border-blue-200/60"
              >
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span dir="ltr" className="truncate">14, Rue Capitaine Hadri, Oran (Google Maps)</span>
                <ExternalLink className="w-3 h-3 opacity-70 shrink-0" />
              </a>
              
              {/* Buttons: Call & WhatsApp & Quote */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-bold text-slate-800 bg-white active:bg-slate-100 border border-slate-200 rounded-xl transition-all shadow-2xs"
                >
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{currentLang === 'ar' ? 'اتصال مباشر' : 'Appeler'}</span>
                </a>
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] rounded-xl transition-all shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md shadow-blue-600/25 transition-all cursor-pointer"
              >
                <span>{currentLang === 'ar' ? 'طلب موعد / تسعيرة مجانية' : 'Demander un devis / RDV'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
