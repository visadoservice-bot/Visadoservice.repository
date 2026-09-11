import React, { useState } from 'react';
import { siteConfig } from '../data/config';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer' | 'drawer';
}

/**
 * Emplacement réservé pour le logo officiel de Visado Service.
 * Le client peut remplacer /public/logo.png à tout moment ou modifier siteConfig.logoUrl.
 * En l'absence temporaire du fichier, un affichage typographique sobre et épuré prend le relais.
 */
export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'header' }) => {
  const [hasError, setHasError] = useState(false);

  // Height configurations
  const heightClass = variant === 'footer' ? 'h-12 md:h-14' : variant === 'drawer' ? 'h-11' : 'h-10 md:h-11';

  if (!hasError && siteConfig.logoUrl) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="bg-white/95 rounded-md p-1 sm:p-1.5 shadow-md flex items-center justify-center border border-white/20">
          <img
            src={siteConfig.logoUrl}
            alt={siteConfig.name}
            onError={() => setHasError(true)}
            className={`${heightClass} w-auto object-contain transition-transform duration-300 hover:scale-105`}
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="font-serif-luxury font-bold text-base md:text-lg tracking-[0.12em] text-white">
            VISADO SERVICE
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#C7A76C] font-medium">
            Oran • Algérie
          </span>
        </div>
      </div>
    );
  }

  // Graceful typographic placeholder when user hasn't uploaded /public/logo.png yet
  return (
    <div className={`flex flex-col items-start leading-none group cursor-pointer ${className}`}>
      <div className="flex items-center gap-2">
        <span className="font-serif-luxury text-xl md:text-2xl font-bold tracking-[0.18em] text-white">
          VISADO
        </span>
        <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#C7A76C] font-semibold border-l border-[#C7A76C]/40 pl-2">
          SERVICE
        </span>
      </div>
      <span className="text-[9px] uppercase tracking-[0.3em] text-[#E9ECEF]/50 mt-1">
        Agence Visa • Oran
      </span>
    </div>
  );
};
