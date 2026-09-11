import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldAlert } from 'lucide-react';
import { translations } from '../data/translations';
import { Language } from '../types';

interface FAQProps {
  currentLang: Language;
}

export const FAQ: React.FC<FAQProps> = ({ currentLang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = translations[currentLang];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 sm:py-36 bg-[#0B2545]/30 relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C7A76C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C7A76C] font-semibold">
              {t.faq.overline}
            </span>
            <span className="h-px w-8 bg-[#C7A76C]" />
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            {t.faq.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#E9ECEF]/80 font-light leading-relaxed max-w-xl mx-auto">
            {t.faq.subheading}
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const isGuaranteeQuestion = item.id === 'faq-6';

            return (
              <div
                key={item.id}
                className={`luxury-glass rounded-sm border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#C7A76C]/60 shadow-xl bg-[#0B2545]/60'
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    {isGuaranteeQuestion ? (
                      <ShieldAlert className="w-5 h-5 text-[#C7A76C] shrink-0" />
                    ) : (
                      <HelpCircle className="w-5 h-5 text-white/40 shrink-0" />
                    )}
                    <span className="font-serif-luxury text-lg sm:text-xl text-white font-normal leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border border-white/10 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#C7A76C] text-[#071A2F]' : 'text-white/60'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#E9ECEF]/85 font-light leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p className={`${isGuaranteeQuestion ? 'p-3 bg-white/5 border-l-2 border-[#C7A76C] text-white' : ''}`}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
