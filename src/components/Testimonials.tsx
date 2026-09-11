import React from 'react';
import { Quote } from 'lucide-react';
import { translations } from '../data/translations';
import { Language } from '../types';

interface TestimonialsProps {
  currentLang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="py-28 sm:py-36 bg-[#071A2F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C7A76C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C7A76C] font-semibold">
              {t.testimonials.overline}
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            {t.testimonials.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#E9ECEF]/80 font-light leading-relaxed">
            {t.testimonials.subheading}
          </p>
        </div>

        {/* 3 Testimonial slots prepared for real client reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item) => (
            <div
              key={item.id}
              className="luxury-glass p-8 rounded-sm border border-white/10 hover:border-[#C7A76C]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#C7A76C]/40 mb-6" />
                <p className="font-serif-luxury text-base sm:text-lg text-white/95 italic leading-relaxed mb-6 font-light">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-wide">
                      {item.clientName}
                    </h4>
                    <p className="text-xs text-[#C7A76C] mt-0.5 font-medium">
                      {item.destination}
                    </p>
                  </div>
                  <span className="text-[11px] text-white/40 uppercase tracking-wider">
                    {item.visaType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
