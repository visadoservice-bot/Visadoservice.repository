import React, { useState } from 'react';
import { siteConfig } from '../data/config';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer' | 'drawer';
}

/**
 * Logo officiel et identité de marque Visado Service
 * Utilise les couleurs officielles du logo :
 * - Bleu Nuit / Royal : #002A79 (VISADO)
 * - Bleu Ciel Azur / Cyan : #00A3E0 (SERVICE)
 */
export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'header' }) => {
  const [hasError, setHasError] = useState(false);

  // Responsive height for logo emblem
  const heightClass = variant === 'footer' 
    ? 'h-9 md:h-10' 
    : variant === 'drawer' 
    ? 'h-9' 
    : 'h-8 sm:h-9 md:h-10';

  const isDark = variant === 'footer';

  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 group ${className}`} dir="ltr">
      {/* Emblem / Image du logo officiel */}
      {!hasError && siteConfig.logoUrl ? (
        <div className={`rounded-lg p-0.5 sm:p-1 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 ${
          isDark 
            ? 'bg-white/10 border border-white/20' 
            : 'bg-white border border-[#E8EAED] shadow-2xs'
        }`}>
          <img
            src={siteConfig.logoUrl}
            alt={siteConfig.name}
            onError={() => setHasError(true)}
            className={`${heightClass} w-auto object-contain rounded`}
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-[#002A79] to-[#00A3E0] flex items-center justify-center text-white font-black text-base shadow-2xs shrink-0">
          V
        </div>
      )}

      {/* Nom de marque officiel avec les couleurs exactes du logo */}
      <div className="flex flex-col text-left leading-tight select-none">
        <div className="flex items-baseline gap-1 sm:gap-1.5">
          <span className={`font-black text-base sm:text-lg md:text-xl tracking-tight transition-colors ${
            isDark ? 'text-white' : 'text-[#002A79]'
          }`}>
            VISADO
          </span>
          <span className={`font-black text-base sm:text-lg md:text-xl tracking-tight ${
            isDark ? 'text-[#38B6FF]' : 'text-[#00A3E0]'
          }`}>
            SERVICE
          </span>
        </div>
        <span className={`text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.18em] sm:tracking-[0.22em] ${
          isDark ? 'text-[#9AA0A6]' : 'text-[#4A6B94]'
        }`}>
          Oran • Algérie
        </span>
      </div>
    </div>
  );
};

