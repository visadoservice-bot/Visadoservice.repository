import React from 'react';
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
    <aside
      aria-label="Assistance WhatsApp instantanée"
      className="hidden md:flex fixed bottom-6 end-6 z-50 items-center gap-2.5 group pointer-events-auto select-none"
    >
      {/* Tooltip badge (high-contrast pill for all backgrounds) */}
      <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111827] text-white text-xs font-medium shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-x-1 group-hover:translate-x-0 rtl:-translate-x-1 rtl:group-hover:translate-x-0">
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
        <span className="whitespace-nowrap">{t.whatsapp.floatingLabel}</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Visado Service sur WhatsApp"
        className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:shadow-2xl hover:shadow-[#25D366]/60 transition-all duration-300 transform hover:scale-105 active:scale-95 ring-4 ring-white/95"
      >
        {/* Authentic Official WhatsApp Vector Icon */}
        <svg
          className="w-7 h-7 sm:w-7.5 sm:h-7.5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M12.031 2C6.51 2 2.016 6.47 2.016 11.969c0 1.953.563 3.774 1.547 5.32L2 22l4.89-1.531a9.907 9.907 0 0 0 5.141 1.406c5.521 0 10.016-4.47 10.016-9.906C22.047 6.47 17.552 2 12.031 2zm0 18.062a8.046 8.046 0 0 1-4.203-1.172l-.3-.18-3.094.969.984-2.984-.188-.313a8.077 8.077 0 0 1-1.281-4.383c0-4.477 3.656-8.125 8.082-8.125 4.426 0 8.082 3.648 8.082 8.125 0 4.477-3.656 8.063-8.082 8.063zm4.43-6.047c-.242-.125-1.437-.711-1.664-.797-.227-.086-.391-.125-.555.125-.164.242-.641.797-.789.961-.148.164-.297.188-.539.063-.242-.125-1.023-.375-1.953-1.203-.719-.641-1.203-1.438-1.344-1.68-.14-.242-.016-.375.109-.492.109-.109.242-.281.367-.422.125-.14.164-.242.242-.406.078-.164.039-.313-.02-.438-.059-.125-.555-1.336-.758-1.836-.203-.484-.406-.422-.555-.43-.14-.008-.305-.008-.47-.008-.164 0-.437.063-.664.313-.227.25-.867.844-.867 2.063s.89 2.406 1.015 2.57c.125.164 1.75 2.672 4.235 3.75.594.258 1.055.414 1.414.531.594.188 1.14.164 1.562.102.477-.07 1.438-.586 1.641-1.156.203-.57.203-1.055.14-1.156-.062-.102-.226-.164-.468-.289z" />
        </svg>

        {/* Live Active Online status indicator badge */}
        <span className="absolute top-0 end-0 w-3.5 h-3.5 bg-[#25D366] border-2 border-white rounded-full shadow-xs" />
        <span className="absolute top-0 end-0 w-3.5 h-3.5 bg-[#25D366] rounded-full animate-ping opacity-60 pointer-events-none" />
      </a>
    </aside>
  );
};

