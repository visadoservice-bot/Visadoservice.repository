import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ExternalLink, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '../data/config';
import { translations } from '../data/translations';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.europe, href: "#europe" },
    { label: t.nav.canada, href: "#canada" },
    { label: t.nav.approach, href: "#approach" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-[#051322] border-t border-white/10 text-white pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Brand & Purpose */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="footer" />
            <p className="text-sm text-[#E9ECEF]/75 font-light leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C7A76C] font-mono">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>14 Rue Capitaine Hadri Mohamed, Oran, Algérie</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C7A76C] font-semibold">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#E9ECEF]/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact coordinates */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C7A76C] font-semibold">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3 text-sm font-light text-[#E9ECEF]/80">
              <li>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hover:text-[#C7A76C] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C7A76C] shrink-0" />
                  <span className="font-mono">{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span className="font-mono">{siteConfig.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#C7A76C] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#C7A76C] shrink-0" />
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Networks & Scroll to top */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C7A76C] font-semibold">
              Réseaux
            </h4>
            <div className="flex flex-col space-y-2 text-sm text-[#E9ECEF]/75">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3 text-[#C7A76C]" />
              </a>
              <a
                href={siteConfig.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>TikTok</span>
                <ExternalLink className="w-3 h-3 text-[#C7A76C]" />
              </a>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>Facebook</span>
                <ExternalLink className="w-3 h-3 text-[#C7A76C]" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors flex items-center gap-1.5"
              >
                <span>WhatsApp</span>
                <ExternalLink className="w-3 h-3 text-[#25D366]" />
              </a>
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="p-2 rounded-sm border border-white/10 hover:border-[#C7A76C] text-white/70 hover:text-white transition-colors flex items-center gap-2 text-xs uppercase tracking-wider"
                aria-label="Retour en haut"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#C7A76C]" />
                <span>Haut de page</span>
              </button>
            </div>
          </div>

        </div>

        {/* Mandatory Regulatory Statement & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#E9ECEF]/60">
          <p className="max-w-2xl leading-relaxed text-center md:text-left font-light">
            {t.footer.legalNotice}
          </p>
          <div className="text-center md:text-right shrink-0">
            <span>{t.footer.copyright}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
