import React, { useState } from 'react';
import { Award, Briefcase, Users, MapPin, Clock, Play, ExternalLink, Video, CheckCircle2 } from 'lucide-react';
import { imagery } from '../data/imagery';
import { translations } from '../data/translations';
import { Language } from '../types';

interface WhyUsProps {
  currentLang: Language;
}

export const WhyUs: React.FC<WhyUsProps> = ({ currentLang }) => {
  const [selectedVideoKey, setSelectedVideoKey] = useState<'officeTour' | 'servicesOverview' | 'clientGuidance'>('officeTour');
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const t = translations[currentLang];

  const videos = {
    officeTour: {
      id: "30VIItLvrUI",
      title: currentLang === 'ar' ? "فيديو جولة المكاتب بوهران" : currentLang === 'en' ? "Oran Agency Office Walkthrough" : "Visite Réelle des Locaux d'Oran",
      tag: "Visite Bureaux",
      url: "https://www.youtube.com/shorts/30VIItLvrUI",
      embed: "https://www.youtube.com/embed/30VIItLvrUI?autoplay=1&rel=0&enablejsapi=1",
      thumb: "https://img.youtube.com/vi/30VIItLvrUI/hqdefault.jpg"
    },
    servicesOverview: {
      id: "Q7CLYUX4Tew",
      title: currentLang === 'ar' ? "فيديو تقديم الخدمات ومعالجة الملفات" : currentLang === 'en' ? "Visa File Processing & Services" : "Traitement des Dossiers & Prestations",
      tag: "Dossiers & Prestations",
      url: "https://www.youtube.com/shorts/Q7CLYUX4Tew",
      embed: "https://www.youtube.com/embed/Q7CLYUX4Tew?autoplay=1&rel=0&enablejsapi=1",
      thumb: "https://img.youtube.com/vi/Q7CLYUX4Tew/hqdefault.jpg"
    },
    clientGuidance: {
      id: "_94n5bV3q6g",
      title: currentLang === 'ar' ? "فيديو مرافقة واستشارات التأشيرة" : currentLang === 'en' ? "Visa Guidance & Advice" : "Conseil & Accompagnement Visa",
      tag: "Conseils & Visas",
      url: "https://www.youtube.com/shorts/_94n5bV3q6g",
      embed: "https://www.youtube.com/embed/_94n5bV3q6g?autoplay=1&rel=0&enablejsapi=1",
      thumb: "https://img.youtube.com/vi/_94n5bV3q6g/hqdefault.jpg"
    }
  };

  const activeVideo = videos[selectedVideoKey];

  const pillarIcons = [
    <Award key="0" className="w-5 h-5 text-[#C7A76C]" />,
    <Briefcase key="1" className="w-5 h-5 text-[#C7A76C]" />,
    <Users key="2" className="w-5 h-5 text-[#C7A76C]" />,
    <MapPin key="3" className="w-5 h-5 text-[#C7A76C]" />,
    <Clock key="4" className="w-5 h-5 text-[#C7A76C]" />
  ];

  return (
    <section id="why-us" className="py-28 sm:py-36 bg-[#071A2F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Real YouTube Video Embed & Verified Office Showcase */}
          <div className="lg:col-span-6 relative">
            
            {/* Video Selector Tabs */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedVideoKey('officeTour');
                  setIsPlayingVideo(true);
                }}
                className={`py-2 px-2 sm:px-3 text-[11px] sm:text-xs uppercase tracking-wider font-semibold rounded-sm transition-all flex items-center justify-center gap-1 text-center ${
                  selectedVideoKey === 'officeTour'
                    ? 'bg-[#C7A76C] text-[#071A2F] shadow-md'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
              >
                <Video className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span className="truncate">1. Locaux</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedVideoKey('servicesOverview');
                  setIsPlayingVideo(true);
                }}
                className={`py-2 px-2 sm:px-3 text-[11px] sm:text-xs uppercase tracking-wider font-semibold rounded-sm transition-all flex items-center justify-center gap-1 text-center ${
                  selectedVideoKey === 'servicesOverview'
                    ? 'bg-[#C7A76C] text-[#071A2F] shadow-md'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
              >
                <Video className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span className="truncate">2. Dossiers</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedVideoKey('clientGuidance');
                  setIsPlayingVideo(true);
                }}
                className={`py-2 px-2 sm:px-3 text-[11px] sm:text-xs uppercase tracking-wider font-semibold rounded-sm transition-all flex items-center justify-center gap-1 text-center ${
                  selectedVideoKey === 'clientGuidance'
                    ? 'bg-[#C7A76C] text-[#071A2F] shadow-md'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
              >
                <Video className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span className="truncate">3. Visas</span>
              </button>
            </div>

            <div className="relative overflow-hidden rounded-sm border-2 border-[#C7A76C]/40 shadow-2xl bg-black">
              
              {isPlayingVideo ? (
                <div className="w-full h-[480px] sm:h-[520px] bg-black relative">
                  <iframe
                    key={activeVideo.id}
                    src={activeVideo.embed}
                    title={activeVideo.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <div className="absolute top-2 right-2 z-10 flex gap-2">
                    <a
                      href={activeVideo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-red-600 hover:bg-red-700 text-white text-[11px] font-semibold rounded-sm shadow-md flex items-center gap-1"
                    >
                      <span>YouTube</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="relative h-[480px] sm:h-[520px] w-full group cursor-pointer" onClick={() => setIsPlayingVideo(true)}>
                  <img
                    src={activeVideo.thumb}
                    alt={activeVideo.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F] via-[#071A2F]/30 to-black/40" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1.5 rounded-sm bg-red-600 text-white text-[10px] uppercase tracking-wider font-bold shadow-lg flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      {activeVideo.tag} • Vidéo Réelle
                    </span>
                    <a
                      href={activeVideo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-2.5 py-1 rounded-sm luxury-glass text-[11px] text-white/90 hover:text-white flex items-center gap-1 border border-white/20"
                    >
                      <span>YouTube</span>
                      <ExternalLink className="w-3 h-3 text-[#C7A76C]" />
                    </a>
                  </div>

                  {/* Play Button Trigger */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      aria-label="Lancer la vidéo réelle"
                      className="w-20 h-20 rounded-full bg-[#C7A76C] text-[#071A2F] flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white"
                    >
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </button>
                  </div>

                  {/* Floating Stat/Location Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 luxury-glass-card p-5 rounded-sm border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <Video className="w-3.5 h-3.5 text-[#C7A76C]" />
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#C7A76C] font-bold block">
                        {activeVideo.title}
                      </span>
                    </div>
                    <p className="text-sm font-serif-luxury text-white">
                      14 Rue Capitaine Hadri Mohamed, Oran, Algérie
                    </p>
                    <p className="text-xs text-[#E9ECEF]/75 mt-1">
                      Cliquez pour lancer la vidéo authentique ou visionner sur YouTube.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: Editorial Pillars */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#C7A76C]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#C7A76C] font-semibold">
                  {t.whyUs.overline}
                </span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
                {t.whyUs.heading}
              </h2>
              <p className="text-base text-[#E9ECEF]/80 font-light leading-relaxed">
                {t.whyUs.subheading}
              </p>
            </div>

            {/* Structured Pillars */}
            <div className="space-y-6">
              {t.whyUs.pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-sm border border-white/5 hover:border-[#C7A76C]/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-sm bg-white/5 group-hover:bg-[#C7A76C]/20 transition-colors shrink-0">
                    {pillarIcons[index % pillarIcons.length]}
                  </div>
                  <div>
                    <h3 className="font-serif-luxury text-lg text-white font-medium mb-1 tracking-wide">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E9ECEF]/75 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
