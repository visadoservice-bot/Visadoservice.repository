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
  // Map standard color aliases to Tailwind color presets for background tiles & buttons
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'rose':
      case 'red':
        return {
          bgSolid: 'bg-[#D93025]',
          bgTint: 'bg-[#D93025]/10',
          textAccent: 'text-[#D93025]',
          borderHover: 'hover:border-[#D93025]/40',
          ringFocus: 'focus-visible:ring-[#D93025]'
        };
      case 'emerald':
      case 'green':
        return {
          bgSolid: 'bg-[#059669]',
          bgTint: 'bg-[#059669]/10',
          textAccent: 'text-[#059669]',
          borderHover: 'hover:border-[#059669]/40',
          ringFocus: 'focus-visible:ring-[#059669]'
        };
      case 'purple':
        return {
          bgSolid: 'bg-[#7C3AED]',
          bgTint: 'bg-[#7C3AED]/10',
          textAccent: 'text-[#7C3AED]',
          borderHover: 'hover:border-[#7C3AED]/40',
          ringFocus: 'focus-visible:ring-[#7C3AED]'
        };
      case 'amber':
        return {
          bgSolid: 'bg-[#D97706]',
          bgTint: 'bg-[#D97706]/10',
          textAccent: 'text-[#D97706]',
          borderHover: 'hover:border-[#D97706]/40',
          ringFocus: 'focus-visible:ring-[#D97706]'
        };
      case 'blue':
      default:
        return {
          bgSolid: 'bg-[#1A73E8]',
          bgTint: 'bg-[#1A73E8]/10',
          textAccent: 'text-[#1A73E8]',
          borderHover: 'hover:border-[#1A73E8]/40',
          ringFocus: 'focus-visible:ring-[#1A73E8]'
        };
    }
  };

  const colors = getColorClasses(colorClass);

  return (
    <div
      className={`group relative h-full flex flex-col justify-between bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-xl ${colors.borderHover} hover:-translate-y-1.5 transition-all duration-250 ease-out overflow-hidden ${className}`}
    >
      <div>
        {/* En-tête de carte : bande à fond teinté contenant l'icône dans une tuile pleine de 54px et le sous-titre */}
        <div className={`p-5 sm:p-6 ${colors.bgTint} flex items-center justify-between gap-3 border-b border-slate-100/60 dark:border-slate-800/60`}>
          {Icon && (
            <div className={`w-[54px] h-[54px] rounded-2xl ${colors.bgSolid} text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-250`}>
              <Icon className="w-6 h-6" />
            </div>
          )}

          {subtitle && (
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${colors.bgSolid} text-white shadow-2xs ms-auto text-end`}>
              {subtitle}
            </span>
          )}

          {badge && !subtitle && (
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${colors.bgSolid} text-white shadow-2xs ms-auto text-end`}>
              {badge}
            </span>
          )}
        </div>

        {/* Corps de la carte */}
        <div className="p-5 sm:p-6 space-y-3 text-start">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-[#1A73E8] dark:group-hover:text-blue-400 transition-colors duration-200">
            {title}
          </h3>

          {description && (
            <p className="text-[14.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
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

        {/* Bouton d'action plein et pleine largeur en bas de chaque carte, rounded-2xl */}
        {action && (
          <button
            onClick={action.onClick}
            className={`w-full py-3 px-4 rounded-2xl ${colors.bgSolid} text-white font-bold text-sm shadow-md hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer text-center mt-3 focus-visible:outline-none focus-visible:ring-2 ${colors.ringFocus}`}
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  );
};
