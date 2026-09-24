import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles,
  Calendar,
  Layers,
  Camera,
  Star
} from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig, WHATSAPP_CONSULTANT_MESSAGE } from '../data/config';
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

  const isArabic = currentLang === 'ar';

  // Listen to scroll to adjust navbar transparency & compact height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open & listen for Escape key
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { 
      label: isArabic ? 'الرئيسية' : 'Accueil', 
      href: "#hero" 
    },
    { 
      label: isArabic ? 'الخدمات' : 'Services', 
      href: "#services" 
    },
    { 
      label: isArabic ? 'الوكالة والثقة' : 'Confiance & Agence', 
      href: "#trust" 
    },
    { 
      label: isArabic ? 'الصور والفيديوهات' : 'Photos & Vidéos', 
      href: "#media-gallery" 
    },
    { 
      label: isArabic ? 'آراء العملاء' : 'Avis Clients', 
      href: "#testimonials" 
    },
    { 
      label: isArabic ? 'تواصل معنا' : 'Contact', 
      href: "#contact" 
    },
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
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-xs sm:shadow-sm' 
          : 'bg-white/80 backdrop-blur-md border-b border-slate-200/50'
      }`}
    >
      {/* Micro Status Banner (Discreet & Premium) */}
      <div className={`transition-all duration-300 overflow-hidden bg-slate-50/90 border-b border-slate-100 text-xs text-slate-500 px-3.5 sm:px-6 ${
        isScrolled ? 'h-0 py-0 opacity-0 border-none' : 'py-1 sm:py-1.5 opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-[11px] sm:text-xs">
          {/* Agency physical badge */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="font-semibold text-slate-800 truncate">
              {isArabic 
                ? 'مقرنا مفتوح بوهران • 14، شارع حضري محمد' 
                : 'Agence ouverte à Oran • 14, Rue Hadri Mohamed'}
            </span>
            <a
              href={siteConfig.googleMapsShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-[11px] text-blue-700 font-semibold hover:underline shrink-0"
            >
              <MapPin className="w-3 h-3 text-red-500" />
              <span>{isArabic ? 'خرائط Google (4.9/5)' : 'Google Maps (4.9/5)'}</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-70" />
            </a>
          </div>

          {/* Direct Phone & Language Selector */}
          <div className="flex items-center gap-3 shrink-0">
            <a 
              href={`tel:${siteConfig.phoneRaw}`} 
              className="hidden md:flex items-center gap-1.5 text-slate-700 hover:text-blue-600 font-bold transition-colors"
            >
              <Phone className="w-3 h-3 text-blue-600" />
              <span dir="ltr">{siteConfig.phone}</span>
            </a>

            {/* Language Switcher desktop */}
            <div className="flex items-center gap-0.5 p-0.5 rounded-lg bg-slate-200/70 border border-slate-200">
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                  currentLang === 'fr' 
                    ? 'bg-white text-blue-700 shadow-2xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Passer en Français"
              >
                FR
              </button>
              <button
                onClick={() => onLanguageChange('ar')}
                className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                  currentLang === 'ar' 
                    ? 'bg-white text-blue-700 shadow-2xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="التحويل إلى العربية"
              >
                عربي
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                  currentLang === 'en' 
                    ? 'bg-white text-blue-700 shadow-2xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'py-2.5 sm:py-3' : 'py-3 sm:py-4'
      }`}>
        
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')} 
          className="flex items-center gap-2 transition-transform active:scale-95 shrink-0"
          aria-label="Visado Service Oran"
        >
          <Logo variant="header" />
        </a>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 rounded-full text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/70 transition-all active:scale-95"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Desktop CTAs: Phone, WhatsApp & Primary Action */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 hover:text-emerald-700 bg-emerald-50/60 hover:bg-emerald-100/70 border border-emerald-200/70 rounded-full transition-all active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-current" />
            <span>WhatsApp</span>
          </a>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-full transition-all shadow-2xs active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            <span>{isArabic ? 'اتصال مباشر' : 'Appeler'}</span>
          </a>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-full shadow-xs hover:shadow-md hover:shadow-blue-600/20 active:scale-95 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isArabic ? 'طلب استشارة / موعد' : 'Prendre rendez-vous'}</span>
          </button>
        </div>

        {/* Mobile Header Controls: Quick Language + Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          {/* Quick mobile language pill */}
          <button
            onClick={() => onLanguageChange(currentLang === 'ar' ? 'fr' : 'ar')}
            className="px-2.5 py-1 text-xs font-bold rounded-lg border border-slate-200 bg-slate-50 text-slate-700 active:scale-95 transition-all"
          >
            {currentLang === 'ar' ? 'FR' : 'عربي'}
          </button>

          {/* Hamburger button with clean tap target */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100/90 hover:bg-slate-200/80 border border-slate-200 text-slate-800 active:scale-95 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-label={isMobileMenuOpen ? (isArabic ? "إغلاق القائمة" : "Fermer le menu") : (isArabic ? "فتح القائمة" : "Ouvrir le menu")}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-drawer"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MODERN SLIDE-DOWN LUXURY MOBILE DRAWER                                   */}
      {/* ========================================================================= */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu-drawer"
          role="dialog"
          aria-modal="true"
          aria-label={isArabic ? 'قائمة التصفح' : 'Menu de navigation'}
          className="fixed inset-0 z-50 md:hidden flex flex-col justify-start"
        >
          
          {/* Backdrop with soft blur */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity animate-fadeIn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer sheet container */}
          <div className="relative z-10 bg-white w-full max-h-[92vh] overflow-y-auto flex flex-col justify-between shadow-2xl border-b border-slate-200 rounded-b-3xl animate-modal-pop">
            
            {/* Drawer Header: Logo + Languages + Close */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <Logo variant="drawer" />

              <div className="flex items-center gap-2">
                {/* Languages in drawer */}
                <div className="flex items-center gap-0.5 p-0.5 rounded-lg bg-slate-200/70 border border-slate-200" role="group" aria-label="Langues">
                  <button
                    type="button"
                    onClick={() => onLanguageChange('fr')}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      currentLang === 'fr' ? 'bg-white text-blue-700 shadow-2xs' : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    FR
                  </button>
                  <button
                    type="button"
                    onClick={() => onLanguageChange('ar')}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      currentLang === 'ar' ? 'bg-white text-blue-700 shadow-2xs' : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    عربي
                  </button>
                  <button
                    type="button"
                    onClick={() => onLanguageChange('en')}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      currentLang === 'en' ? 'bg-white text-blue-700 shadow-2xs' : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    EN
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-slate-200/60 hover:bg-slate-300 text-slate-700 flex items-center justify-center active:scale-95 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  aria-label={isArabic ? "إغلاق القائمة" : "Fermer le menu"}
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Navigation Links with large touch targets */}
            <nav className="p-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold text-slate-800 hover:text-blue-600 hover:bg-blue-50/70 active:bg-blue-100 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 rtl:rotate-180" />
                </a>
              ))}
            </nav>

            {/* Agency Physical Location Pin inside Drawer */}
            <div className="px-4 pb-2">
              <a
                href={siteConfig.googleMapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50/50 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-red-500 shadow-2xs shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-start">
                    <p className="text-xs font-bold text-slate-900">
                      {isArabic ? '14، شارع حضري محمد، وهران' : '14, Rue Hadri Mohamed, Oran'}
                    </p>
                    <p className="text-[11px] text-slate-500 flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400 fill-current" />
                      <span>{isArabic ? '4.9/5 على خرائط Google' : 'Note 4.9/5 sur Google Maps'}</span>
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </a>
            </div>

            {/* Bottom Actions & Conversion CTAs */}
            <div className="p-4 border-t border-slate-100 space-y-2.5 bg-slate-50/70">
              
              {/* WhatsApp + Direct Call */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold shadow-2xs active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 text-xs font-bold shadow-2xs active:scale-95 transition-all"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>{isArabic ? 'اتصال مباشر' : 'Appeler'}</span>
                </a>
              </div>

              {/* Primary Consultation Action */}
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/25 active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isArabic ? 'طلب استشارة وموعد رسمي' : 'Prendre un rendez-vous à l\'agence'}</span>
              </button>
            </div>

          </div>

        </div>
      )}

    </header>
  );
};
