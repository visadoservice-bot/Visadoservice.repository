import React from 'react';
import { LucideIcon, Check } from 'lucide-react';
import { CompanyLogo } from './CompanyLogo';

export interface CardAction {
  label: string;
  onClick: () => void;
  variant?: 'solid' | 'outline';
}

export interface CardPartnerLogo {
  name: string;
  src: string;
  alt: string;
}

export interface CardProps {
  id?: string;
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  icon?: LucideIcon;
  colorHex?: string; // Hex color for 10% opacity tints e.g. '#1A73E8'
  colorClass?: string; // e.g. 'blue' | 'emerald' | 'rose' | 'purple' | 'amber'
  highlights?: string[];
  action?: CardAction;
  partnerLogos?: {
    type: 'airlines' | 'insurance';
    logos: CardPartnerLogo[];
  };
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  badge,
  icon: Icon,
  colorHex = '#1A73E8',
  colorClass = 'blue',
  highlights,
  action,
  partnerLogos,
  children,
  className = ''
}) => {
  // Harmonious, sober palette: elegant corporate navy / charcoal without rainbow colors
  const colors = {
    bgSolid: 'bg-[#002A79]',
    bgTint: 'bg-slate-50',
    textAccent: 'text-[#002A79]',
    borderHover: 'hover:border-slate-300 hover:shadow-slate-200/60',
    ringFocus: 'focus-visible:ring-[#002A79]'
  };

  return (
    <div
      className={`group relative h-full flex flex-col justify-between bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl ${colors.borderHover} hover:-translate-y-1.5 transition-all duration-250 ease-out overflow-hidden ${className}`}
    >
      <div>
        {/* En-tête de carte : sobre, épuré, fond crème/blanc délicat */}
        <div className="p-5 sm:p-6 bg-slate-50/60 flex items-center justify-between gap-3 border-b border-slate-100">
          {Icon && (
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 text-[#002A79] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-250">
              <Icon className="w-5 h-5" />
            </div>
          )}

          {subtitle && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-slate-200/80 text-slate-700 shadow-2xs ms-auto text-end">
              {subtitle}
            </span>
          )}

          {badge && !subtitle && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-slate-200/80 text-slate-700 shadow-2xs ms-auto text-end">
              {badge}
            </span>
          )}
        </div>

        {/* Corps de la carte */}
        <div className="p-5 sm:p-6 space-y-3 text-start">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#002A79] transition-colors duration-200">
            {title}
          </h3>

          {description && (
            <p className="text-xs sm:text-[14px] text-slate-600 leading-relaxed">
              {description}
            </p>
          )}

          {children}

          {/* Liste à puces avec coche Check dans un cercle teinté de 22px et ligne en pointillés au-dessus */}
          {highlights && highlights.length > 0 && (
            <div className="pt-4 border-t border-dashed border-slate-200 dark:border-slate-800 space-y-2.5">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <div className={`w-[22px] h-[22px] rounded-full ${colors.bgTint} ${colors.textAccent} flex items-center justify-center shrink-0`}>
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="leading-tight">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Pied de carte : Logos ou Bouton d'action */}
      <div className="p-5 sm:p-6 pt-0 mt-auto">
        {/* LOGOS DES COMPAGNIES (cartes billets d'avion et assurance) */}
        {partnerLogos && (
          <div className="pt-4 border-t border-dashed border-slate-200 dark:border-slate-800 w-full">
            {partnerLogos.type === 'airlines' ? (
              /* Billets d'avion : 3 colonnes sur ligne 1, Volotea & Vueling centrés sur ligne 2 */
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-3 items-center justify-items-center w-full">
                  {partnerLogos.logos.slice(0, 3).map((logo, lIdx) => (
                    <CompanyLogo
                      key={lIdx}
                      name={logo.name}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-6 object-contain"
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center gap-6 w-full">
                  {partnerLogos.logos.slice(3).map((logo, lIdx) => (
                    <CompanyLogo
                      key={lIdx}
                      name={logo.name}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-6 object-contain"
                    />
                  ))}
                </div>
              </div>
            ) : (
              /* Assurance : grille de 2 colonnes sur 2 lignes */
              <div className="grid grid-cols-2 gap-3 items-center justify-items-center w-full">
                {partnerLogos.logos.map((logo, lIdx) => (
                  <CompanyLogo
                    key={lIdx}
                    name={logo.name}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-6 object-contain"
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Bouton d'action sobre et élégant en bas de carte */}
        {action && (
          <button
            onClick={action.onClick}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-[#002A79] text-white font-bold text-xs shadow-xs hover:shadow-sm active:scale-[0.98] transition-all cursor-pointer text-center mt-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002A79]"
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  );
};
