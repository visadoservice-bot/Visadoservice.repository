import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { siteConfig, WHATSAPP_CONSULTANT_MESSAGE } from '../data/config';
import { Language } from '../types';

interface MobileBottomBarProps {
  currentLang: Language;
  onOpenConsultation: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  currentLang,
  onOpenConsultation
}) => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(WHATSAPP_CONSULTANT_MESSAGE)}`;

  return (
    <div
      aria-label="Barre d'actions rapides mobile"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(15,23,42,0.08)] px-2.5 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 items-center">
        
        {/* 1. WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 active:bg-[#25D366]/25 text-[#128C7E] font-bold transition-all active:scale-95 group border border-[#25D366]/25"
          aria-label="WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 text-[#25D366] fill-current" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#25D366] ring-2 ring-white" />
          </div>
          <span className="text-[11px] font-bold mt-1 text-slate-800 leading-tight">
            WhatsApp
          </span>
        </a>

        {/* 2. Direct Call Button */}
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200/70 active:bg-slate-200 text-slate-800 font-bold transition-all active:scale-95 group border border-slate-200/80"
          aria-label="Appeler directement"
        >
          <Phone className="w-5 h-5 text-blue-600" />
          <span className="text-[11px] font-bold mt-1 text-slate-800 leading-tight">
            {currentLang === 'ar' ? 'اتصال مباشر' : 'Appeler'}
          </span>
        </a>

        {/* 3. Book Appointment / Request Quote */}
        <button
          type="button"
          onClick={onOpenConsultation}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold transition-all active:scale-95 shadow-sm shadow-blue-600/30 cursor-pointer"
          aria-label="Demander un rendez-vous ou devis"
        >
          <Calendar className="w-5 h-5 text-white" />
          <span className="text-[11px] font-bold mt-1 text-white leading-tight">
            {currentLang === 'ar' ? 'حجز موعد' : 'Prendre RDV'}
          </span>
        </button>

      </div>
    </div>
  );
};
