import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/config';
import { translations } from '../data/translations';
import { Language } from '../types';

interface WhatsAppFloatProps {
  currentLang: Language;
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const prefilledText = encodeURIComponent("Bonjour Visado Service, je souhaite avoir des informations sur vos services.");
  const url = `https://wa.me/${siteConfig.whatsappRaw}?text=${prefilledText}`;

  return (
    <aside aria-label="Assistance WhatsApp instantanée" className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group">
      {/* Tooltip badge */}
      <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full luxury-glass border border-white/10 text-xs text-white/90 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
        <span className="font-medium">{t.whatsapp.floatingLabel}</span>
      </span>

      {/* Floating Action Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Visado Service sur WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-white/20"
      >
        <MessageCircle className="w-7 h-7" />
        {/* Subtle ping ripple */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
      </a>
    </aside>
  );
};
