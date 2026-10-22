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
  const [activeSection, setActiveSection] = useState<string>('hero');

  const isArabic = currentLang === 'ar';

  // Listen to scroll to adjust navbar transparency & compact height
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section for mobile menu highlighting
      const sections = ['hero', 'services', 'trust', 'media-gallery', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
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
      id: 'hero',
      label: isArabic ? 'الرئيسية' : 'Accueil', 
      href: "#hero",
      icon: Sparkles,
      badge: isArabic ? 'الوكالة' : 'Visado',
    },
    { 
      id: 'services',
      label: isArabic ? 'الخدمات والتأشيرات' : 'Services & Visas', 
      href: "#services",
      icon: Layers,
      badge: isArabic ? 'شنغن وكندا' : 'Schengen & Canada',
    },
    { 
      id: 'trust',
      label: isArabic ? 'الضمانات والاعتماد' : 'Confiance & Agence', 
      href: "#trust",
      icon: ShieldCheck,
      badge: isArabic ? 'معتمدة' : 'Agrée',
    },
    { 
      id: 'media-gallery',
      label: isArabic ? 'معرض الصور والفيديو' : 'Photos & Vidéos', 
      href: "#media-gallery",
      icon: Camera,
      badge: isArabic ? 'المقر' : 'Bureaux Oran',
    },
    { 
      id: 'testimonials',
      label: isArabic ? 'آراء وانطباعات الزبائن' : 'Avis Clients', 
      href: "#testimonials",
      icon: Star,
      badge: isArabic ? '4.9/5 ⭐' : '4.9/5 ⭐',
    },
    { 
      id: 'contact',
      label: isArabic ? 'التواصل والموقع' : 'Contact & Accès', 
      href: "#contact",
      icon: MapPin,
      badge: isArabic ? 'وهران' : 'Oran',
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
    <>
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
                  type="button"
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
                  type="button"
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
                  type="button"
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
              <span>{isArabic ? 'تحدث مع مستشار' : 'Parler à un conseiller'}</span>
            </button>
          </div>

          {/* Mobile Header Controls: Quick Language + Menu Button */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            {/* Quick mobile language pill */}
            <button
              type="button"
              onClick={() => onLanguageChange(currentLang === 'ar' ? 'fr' : 'ar')}
              className="px-2.5 py-1.5 min-h-[38px] text-xs font-bold rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 active:scale-95 transition-all cursor-pointer shrink-0 select-none touch-manipulation"
              aria-label={currentLang === 'ar' ? "Passer en Français" : "التحويل إلى العربية"}
            >
              {currentLang === 'ar' ? 'FR' : 'عربي'}
            </button>

            {/* Hamburger button with clean tap target & robust mobile sizing */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-2xl border transition-all duration-300 cursor-pointer select-none touch-manipulation shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-90 ${
                isMobileMenuOpen
                  ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-100/90 hover:bg-slate-200/80 active:bg-slate-200 border-slate-200/80 text-slate-800 shadow-2xs'
              }`}
              aria-label={isMobileMenuOpen ? (isArabic ? "إغلاق القائمة" : "Fermer le menu") : (isArabic ? "فتح القائمة" : "Ouvrir le menu")}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-drawer"
            >
              <div className={`relative w-5 h-5 flex items-center justify-center transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90 scale-105' : 'rotate-0 scale-100'}`}>
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-white stroke-[2.5]" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-800 stroke-[2.2]" aria-hidden="true" />
                )}
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* MODERN SLIDE-DOWN LUXURY MOBILE DRAWER                                   */}
      {/* Placed outside <header> so fixed inset-0 is not trapped by backdrop-blur */}
      {/* ========================================================================= */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu-drawer"
          role="dialog"
          aria-modal="true"
          aria-label={isArabic ? 'قائمة التصفح' : 'Menu de navigation'}
          className="fixed inset-0 z-[100] md:hidden flex flex-col justify-start"
        >
          {/* Backdrop with soft blur */}
          <div 
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity animate-fadeIn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Sheet Container */}
          <div className="relative z-10 bg-white/98 backdrop-blur-2xl w-full max-h-[92vh] max-h-[92dvh] flex flex-col justify-between shadow-2xl border-b border-slate-200/90 rounded-b-[2rem] overflow-hidden animate-slide-down-sheet">
            
            {/* Top Drag/Pull Indicator Handle */}
            <div className="w-full pt-2.5 pb-1 flex justify-center bg-slate-50/90 border-b border-slate-100 shrink-0">
              <div className="w-12 h-1.5 rounded-full bg-slate-300/80" />
            </div>

            {/* Drawer Scrollable Content Body with Hidden Scrollbar */}
            <div className="overflow-y-auto mobile-menu-scroll flex-1 px-4 py-3 space-y-4">
              
              {/* Sheet Header: Logo + Minimalist Elegant Close Button */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100/90">
                <Logo variant="drawer" />

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-slate-100/80 hover:bg-slate-200/70 active:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200/80 flex items-center justify-center active:scale-90 transition-all duration-200 cursor-pointer select-none touch-manipulation shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 shadow-2xs"
                  aria-label={isArabic ? "إغلاق القائمة" : "Fermer le menu"}
                >
                  <X className="w-5 h-5 stroke-[2.2]" aria-hidden="true" />
                </button>
              </div>

              {/* Navigation Links with Icons, Active Highlight & Badges */}
              <nav className="space-y-1.5" aria-label="Mobile Navigation">
                {navLinks.map((link) => {
                  const IconComponent = link.icon;
                  const isActive = activeSection === link.id;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`group flex items-center justify-between p-3 rounded-2xl text-sm font-bold transition-all duration-200 active:scale-[0.98] ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                          : 'text-slate-800 bg-slate-50/80 hover:bg-blue-50/80 hover:text-blue-700 border border-slate-200/60'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive 
                            ? 'bg-white/20 text-white' 
                            : 'bg-white border border-slate-200 text-blue-600 shadow-2xs group-hover:border-blue-300'
                        }`}>
                          <IconComponent className="w-4.5 h-4.5 stroke-[2.2]" />
                        </div>
                        <span className="truncate">{link.label}</span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-slate-200/70 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700'
                        }`}>
                          {link.badge}
                        </span>
                        <ChevronRight className={`w-4 h-4 transition-transform ${
                          isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-600'
                        } rtl:rotate-180`} />
                      </div>
                    </a>
                  );
                })}
              </nav>

              {/* Physical Agency Location Pin inside Drawer */}
              <div className="pt-1">
                <a
                  href={siteConfig.googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white border border-slate-700/80 shadow-sm hover:border-blue-400 transition-all active:scale-[0.98]"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-red-400 shrink-0">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <div className="text-start">
                      <p className="text-xs font-bold text-white">
                        {isArabic ? '14، شارع حضري محمد، وهران' : '14, Rue Hadri Mohamed, Oran'}
                      </p>
                      <p className="text-[11px] text-slate-300 flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-400 fill-current" />
                        <span>{isArabic ? 'تقييم 4.9/5 على خرائط Google' : 'Note 4.9/5 sur Google Maps'}</span>
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-300 shrink-0" />
                </a>
              </div>

              {/* Bottom Quick Action Grid */}
              <div className="pt-1 space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold shadow-xs active:scale-95 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 text-xs font-bold active:scale-95 transition-all"
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
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold shadow-md shadow-blue-600/25 active:scale-98 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300 fill-current" />
                  <span>{isArabic ? 'تحدث مع مستشار الوكالة' : 'Parler à un conseiller'}</span>
                </button>
              </div>

            </div>

            {/* Micro Footer Badge inside Drawer */}
            <div className="py-2.5 px-4 bg-slate-100/80 border-t border-slate-200/80 text-center text-[11px] text-slate-500 font-medium shrink-0 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isArabic ? 'وكالة معتمدة ومسجلة بوهران' : 'Agence agréée & enregistrée à Oran'}</span>
            </div>

          </div>

        </div>
      )}
    </>
  );
};
