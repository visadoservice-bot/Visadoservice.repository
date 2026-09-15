import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '../data/config';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const navLinks = [
    { label: currentLang === 'ar' ? 'الرئيسية' : 'Accueil', href: "#hero" },
    { label: currentLang === 'ar' ? 'الخدمات' : 'Nos Services', href: "#services" },
    { label: currentLang === 'ar' ? 'لماذا تختارنا' : 'Pourquoi nous choisir', href: "#why-us" },
    { label: currentLang === 'ar' ? 'الصور والفيديو' : 'Galerie Photos & Vidéos', href: "#media-gallery" },
    { label: currentLang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ', href: "#faq" },
    { label: currentLang === 'ar' ? 'اتصل بنا' : 'Contact & Devis', href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#08152E] via-[#0A1A3A] to-[#050D1C] text-[#9FB3C8] border-t border-[#00A3E0]/30 pt-9 pb-6 relative overflow-hidden">
      {/* Subtle brand glow in background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00A3E0]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#002A79]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10 pb-8 border-b border-white/10">
          
          {/* Col 1: Brand & Address */}
          <div className="space-y-3.5 md:col-span-1">
            <Logo variant="footer" />
            <p className="text-xs text-[#8DA6C6] leading-relaxed">
              {currentLang === 'ar'
                ? 'وكالة متخصصة في مرافقة وتجهيز ملفات التأشيرة، حجز المواعيد الرسمية والرحلات الجوية بوهران.'
                : 'Agence spécialisée dans l\'accompagnement et la constitution de dossiers visa, rendez-vous officiels et billetterie à Oran.'}
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-[#C5D7EC]">
              <MapPin className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
              <span dir="ltr" className="font-medium">14, Rue Capitaine Hadri Mohamed, Oran</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
              {currentLang === 'ar' ? 'روابط سريعة' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#9FB3C8] hover:text-[#00A3E0] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Direct Lines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
              {currentLang === 'ar' ? 'الاتصال المباشر' : 'Lignes Directes'}
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="group flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.03] hover:bg-[#00A3E0]/15 border border-white/[0.06] hover:border-[#00A3E0]/40 transition-all text-white font-medium"
              >
                <div className="w-7 h-7 rounded-md bg-[#00A3E0]/20 text-[#00A3E0] flex items-center justify-center shrink-0 group-hover:bg-[#00A3E0] group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[10px] text-[#8DA6C6] uppercase font-semibold tracking-wider">
                    {currentLang === 'ar' ? 'الهاتف' : 'Téléphone'}
                  </span>
                  <span dir="ltr" className="text-sm font-bold text-white group-hover:text-[#00A3E0] transition-colors">
                    {siteConfig.phone}
                  </span>
                </div>
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.03] hover:bg-[#25D366]/15 border border-white/[0.06] hover:border-[#25D366]/40 transition-all text-[#4ADE80] font-medium"
              >
                <div className="w-7 h-7 rounded-md bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[10px] text-[#8DA6C6] uppercase font-semibold tracking-wider">
                    WhatsApp
                  </span>
                  <span dir="ltr" className="text-sm font-bold text-[#4ADE80] group-hover:text-[#86EFAC] transition-colors">
                    {siteConfig.whatsapp}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-xs text-[#9FB3C8] hover:text-[#00A3E0] transition-colors pt-1 break-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Col 4: Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
              {currentLang === 'ar' ? 'شبكات التواصل' : 'Réseaux Sociaux'}
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <a
                href={siteConfig.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-[#00A3E0]/40 text-white transition-all"
              >
                <span className="font-medium text-xs">TikTok @visadoservice</span>
                <span className="text-[11px] text-[#00A3E0] font-bold">@</span>
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-[#00A3E0]/40 text-white transition-all"
              >
                <span className="font-medium text-xs">Instagram @visadoservice</span>
                <span className="text-[11px] text-[#00A3E0] font-bold">IG</span>
              </a>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-[#00A3E0]/40 text-white transition-all"
              >
                <span className="font-medium text-xs">Facebook Visado Service</span>
                <span className="text-[11px] text-[#00A3E0] font-bold">FB</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A93B0] gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00A3E0]" />
            <span>© {new Date().getFullYear()} Visado Service Oran. Tous droits réservés.</span>
          </div>
          <div className="text-center sm:text-right text-[#7A93B0]">
            {currentLang === 'ar' 
              ? 'مكتب استشارات ومرافقة في ملفات التأشيرة وحجز تذاكر الطيران بوهران.'
              : 'Établissement d\'assistance, préparation de dossiers de visa et billetterie à Oran.'}
          </div>
        </div>

      </div>
    </footer>
  );
};

