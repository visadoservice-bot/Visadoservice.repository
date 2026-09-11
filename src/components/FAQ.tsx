import React, { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';
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
    <section id="faq" className="py-16 sm:py-20 bg-[#F8F9FA] border-b border-[#DADCE0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#1A73E8] bg-[#E8F0FE] px-3 py-1 rounded-full inline-block mb-3">
            {currentLang === 'ar' ? 'الأسئلة الشائعة' : 'Questions fréquentes'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
            {currentLang === 'ar' ? 'كل ما تحتاج معرفته عن خدماتنا' : 'Réponses claires à vos questions'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5F6368]">
            {currentLang === 'ar'
              ? 'إجابات شفافة ومفصلة حول ملفات التأشيرة والمواعيد والتكاليف.'
              : 'Informations transparentes sur les démarches, délais et prise en charge de votre dossier.'}
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className="google-card overflow-hidden bg-white transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-hidden cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#1A73E8] shrink-0" />
                    <span className="text-sm sm:text-base font-semibold text-[#202124] leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center bg-[#F1F3F4] text-[#5F6368] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#E8F0FE] text-[#1A73E8]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#5F6368] leading-relaxed border-t border-[#F1F3F4]">
                    <p>{item.answer}</p>
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
