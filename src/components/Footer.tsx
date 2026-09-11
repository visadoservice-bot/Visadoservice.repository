import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, ExternalLink, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '../data/config';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: currentLang === 'ar' ? 'الرئيسية' : 'Accueil', href: "#hero" },
    { label: currentLang === 'ar' ? 'الخدمات' : 'Nos Services', href: "#services" },
    { label: currentLang === 'ar' ? 'لماذا تختارنا' : 'Pourquoi nous choisir', href: "#why-us" },
    { label: currentLang === 'ar' ? 'الصور والفيديو' : 'Galerie Photos & Vidéos', href: "#media-gallery" },
    { label: currentLang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ', href: "#faq" },
    { label: currentLang === 'ar' ? 'اتصل بنا' : 'Contact & Devis', href: "#contact" },
  ];

  return (
    <footer className="bg-[#202124] text-[#BDC1C6] border-t border-[#3C4043] pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#3C4043]">
          
          {/* Col 1: Brand & Address */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-[#1A73E8] text-white flex items-center justify-center font-bold text-sm">
                V
              </div>
              <span className="font-bold text-white text-base tracking-tight">Visado Service</span>
            </div>
            <p className="text-xs text-[#9AA0A6] leading-relaxed">
              {currentLang === 'ar'
                ? 'وكالة متخصصة في مرافقة وتجهيز ملفات التأشيرة، حجز المواعيد والرحلات الجوية بوهران.'
                : 'Accompagnement administratif visa, prise de rendez-vous officiels et billetterie à Oran.'}
            </p>
            <div className="text-xs text-[#9AA0A6] flex items-start gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#8AB4F8] shrink-0 mt-0.5" />
              <span>14 Rue Capitaine Hadri Mohamed, Oran 31000, Algérie</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {currentLang === 'ar' ? 'روابط سريعة' : 'Navigation'}
            </h4>
            <ul className="space-y-1.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#8AB4F8] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {currentLang === 'ar' ? 'الاتصال والمواعيد' : 'Contact & Horaires'}
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="hover:text-[#8AB4F8] transition-colors flex items-center gap-2 text-white font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#8AB4F8] shrink-0" />
                <span>{siteConfig.phone}</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#81C995] transition-colors flex items-center gap-2 text-[#81C995]"
              >
                <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp: {siteConfig.whatsapp}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-[#8AB4F8] transition-colors flex items-center gap-2 break-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#8AB4F8] shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
              <div className="flex items-center gap-2 text-[#9AA0A6] pt-1">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Sam - Jeu : 09h00 - 17h00</span>
              </div>
            </div>
          </div>

          {/* Col 4: Socials & Back to Top */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {currentLang === 'ar' ? 'تابعونا' : 'Réseaux sociaux'}
            </h4>
            <div className="flex flex-col space-y-1.5 text-xs">
              <a
                href={siteConfig.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>TikTok @visadoservice</span>
                <ExternalLink className="w-3 h-3 text-[#8AB4F8]" />
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3 text-[#8AB4F8]" />
              </a>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>Facebook</span>
                <ExternalLink className="w-3 h-3 text-[#8AB4F8]" />
              </a>
            </div>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="text-xs text-[#8AB4F8] hover:underline flex items-center gap-1"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>{currentLang === 'ar' ? 'العودة للأعلى' : 'Haut de page'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#9AA0A6] gap-2">
          <div>
            © {new Date().getFullYear()} Visado Service Oran. Tous droits réservés.
          </div>
          <div>
            Établissement privé d'assistance et de conseil aux démarches de visas.
          </div>
        </div>

      </div>
    </footer>
  );
};
