import React, { useState } from 'react';
import { Play, Maximize2, ExternalLink, X, MapPin, Phone, MessageCircle } from 'lucide-react';
import { imagery } from '../data/imagery';
import { siteConfig } from '../data/config';
import { Reveal } from './ScrollReveal';
import { Language } from '../types';

interface AgencyMediaShowcaseProps {
  currentLang: Language;
  onOpenConsultation: () => void;
}

interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  subtitle: string;
  tag: string;
  thumbnail: string;
}

interface PhotoItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export const AgencyMediaShowcase: React.FC<AgencyMediaShowcaseProps> = ({
  currentLang,
  onOpenConsultation
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'videos' | 'photos'>('all');
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const videos: VideoItem[] = [
    {
      id: "video-1",
      youtubeId: "30VIItLvrUI",
      title: currentLang === 'ar' ? "جولة داخلية حقيقية في مكاتبنا بوهران" : "Visite Réelle des Locaux à Oran",
      subtitle: currentLang === 'ar' ? "فضاء استقبال عصري ومريح ومكاتب استشارة" : "Espaces de consultation modernes et accueil soigné",
      tag: "Locaux Oran",
      thumbnail: "https://img.youtube.com/vi/30VIItLvrUI/hqdefault.jpg"
    },
    {
      id: "video-2",
      youtubeId: "Q7CLYUX4Tew",
      title: currentLang === 'ar' ? "معالجة ملفات التأشيرة والخدمات الرسمية" : "Traitement des Dossiers & Prestations",
      subtitle: currentLang === 'ar' ? "مراجعة دقيقة لملفات التأشيرة وحجز المواعيد" : "Vérification rigoureuse et constitution des dossiers",
      tag: "Dossiers & Visas",
      thumbnail: "https://img.youtube.com/vi/Q7CLYUX4Tew/hqdefault.jpg"
    },
    {
      id: "video-3",
      youtubeId: "_94n5bV3q6g",
      title: currentLang === 'ar' ? "مرافقة وإرشادات شاملة للتأشيرات" : "Conseil & Accompagnement Visa",
      subtitle: currentLang === 'ar' ? "نصائح وإرشادات مخصصة لنجاح طلبات التأشيرة" : "Accompagnement individualisé selon votre profil",
      tag: "Conseil Visa",
      thumbnail: "https://img.youtube.com/vi/_94n5bV3q6g/hqdefault.jpg"
    }
  ];

  const photos: PhotoItem[] = [
    {
      id: "photo-exterieur",
      title: currentLang === 'ar' ? "الواجهة الخارجية الرسمية لوكالة Visado Service" : "Façade Extérieure Officielle de l'Agence",
      category: "agency",
      location: "14, Rue Hadri Mohamed, Oran",
      description: currentLang === 'ar' 
        ? "الواجهة الخارجية الحقيقية لوكالتنا بوهران مع لافتات التأشيرات والخدمات المعتمدة."
        : "Vue extérieure authentique de notre agence à Oran, 14 Rue Hadri Mohamed.",
      imageUrl: "/images/Exterieur.png",
      tag: currentLang === 'ar' ? "الواجهة الخارجية" : "Façade Extérieure"
    },
    {
      id: "photo-interieur",
      title: currentLang === 'ar' ? "الفضاء الداخلي ومكاتب الاستقبال والاستشارة" : "Intérieur & Bureaux d'Accueil Visado Service",
      category: "agency",
      location: "Visado Service • Oran",
      description: currentLang === 'ar'
        ? "المقر الداخلي المجهز لاستقبالكم ودراسة ملفاتكم بكل احترافية وراحة تامة."
        : "Espace intérieur moderne et chaleureux dédié à l'accueil des clients et à l'analyse des dossiers.",
      imageUrl: "/images/interieur.png",
      tag: currentLang === 'ar' ? "المقر من الداخل" : "Locaux Intérieurs"
    },
    {
      id: "photo-rdv",
      title: currentLang === 'ar' ? "خدمة حجز مواعيد BLS Spain الرسمية" : "Service & Confirmation Rendez-Vous BLS Espagne",
      category: "visas",
      location: "Centre BLS • Dossiers Vérifiés",
      description: currentLang === 'ar'
        ? "مرافقة وإتمام حجوزات المواعيد الرسمية لمركز BLS International إسبانيا والتحقق الشامل من الوثائق."
        : "Prise en charge officielle des rendez-vous BLS International Espagne et constitution conforme du dossier.",
      imageUrl: "/images/rdv.png",
      tag: currentLang === 'ar' ? "مواعيد BLS" : "RDV BLS Espagne"
    },
    {
      id: "photo-schengen",
      title: currentLang === 'ar' ? "تأشيرة شنغن إسبانيا صادرة وجواز سفر" : "Visa Schengen Espagne Délivré & Passeport",
      category: "visas",
      location: "Visado Service • Oran",
      description: currentLang === 'ar' 
        ? "جواز سفر حقيقي بتأشيرة شنغن إسبانيا سارية مع بطاقة العمل الرسمية لوكالة Visado Service."
        : "Passeport avec vignette visa Schengen Espagne officielle et carte de visite Visado Service.",
      imageUrl: imagery.realAgency.schengenVisaPassport,
      tag: currentLang === 'ar' ? "تأشيرة مقبولة" : "Visa Délivré"
    },
    {
      id: "photo-billetterie",
      title: currentLang === 'ar' ? "حجوزات وتذاكر الطيران الرسمية" : "Billetterie & Vols Internationaux",
      category: "ticketing",
      location: "Air Algérie & Compagnies Internationales",
      description: currentLang === 'ar'
        ? "إصدار تذاكر طيران وحجوزات فندقية مؤكدة لجميع الوجهات العالمية."
        : "Billetterie officielle vers toutes les destinations avec Air Algérie & compagnies mondiales.",
      imageUrl: imagery.realAgency.ticketingPoster,
      tag: currentLang === 'ar' ? "تذاكر طيران" : "Billetterie"
    }
  ];

  return (
    <section id="media-gallery" className="py-14 sm:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Tabs */}
        <Reveal direction="up" delay={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-blue-700 bg-blue-50 border border-blue-100/60 px-3.5 py-1 rounded-full inline-block mb-3 shadow-2xs">
                {currentLang === 'ar' ? 'معرض الصور والفيديو' : 'Galerie Photos & Vidéos'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {currentLang === 'ar' ? 'وكالتنا وتجهيزاتها على أرض الواقع' : "L'Agence Visado Service en images réelles"}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                {currentLang === 'ar'
                  ? 'توثيق حقيقي لمقرنا بوهران، ملفات المواعيد المنجزة، والخدمات الرسمية.'
                  : 'Découvrez nos locaux à Oran, nos dossiers BLS et nos preuves de visas délivrés.'}
              </p>
            </div>

            {/* Filter tabs */}
            <div className="flex items-center gap-1 sm:gap-1.5 p-1 bg-slate-100/80 border border-slate-200/70 rounded-xl self-start md:self-auto shadow-2xs overflow-x-auto max-w-full">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap active:scale-[0.98] ${
                  activeTab === 'all'
                    ? 'bg-white text-blue-700 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {currentLang === 'ar' ? 'الكل' : 'Tous'}
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-[0.98] ${
                  activeTab === 'videos'
                    ? 'bg-white text-blue-700 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{currentLang === 'ar' ? 'فيديوهات (3)' : 'Vidéos (3)'}</span>
              </button>
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap active:scale-[0.98] ${
                  activeTab === 'photos'
                    ? 'bg-white text-blue-700 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {currentLang === 'ar' ? 'الصور (5)' : 'Photos (5)'}
              </button>
            </div>
          </div>
        </Reveal>

        {/* 1. Real Video Cards with DIRECT INLINE PLAYBACK - Responsive Snap-Carousel */}
        {(activeTab === 'all' || activeTab === 'videos') && (
          <div className="mb-10 sm:mb-14">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>{currentLang === 'ar' ? 'مقاطع الفيديو الموثقة (تشغيل مباشر)' : 'Vidéos authentiques de nos locaux (Lecture directe)'}</span>
            </h3>
            <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
              {videos.map((vid, idx) => {
                const isPlaying = playingVideoId === vid.id;

                return (
                  <Reveal
                    key={vid.id}
                    delay={idx * 80}
                    direction="up"
                    className="flex flex-col h-full min-w-[260px] min-[380px]:min-w-[285px] sm:min-w-[320px] md:min-w-0 snap-start"
                  >
                    <div
                      className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden flex flex-col justify-between h-full shadow-2xs hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-200 hover:-translate-y-1.5 transition-all duration-300"
                    >
                      <div className="relative aspect-video bg-slate-900 overflow-hidden">
                        {isPlaying ? (
                          <div className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center">
                            <iframe
                              src={`https://www.youtube-nocookie.com/embed/${vid.youtubeId}?autoplay=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&disablekb=1&loop=1&playlist=${vid.youtubeId}`}
                              title={vid.title}
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220%] h-[250%] max-w-none border-0 select-none pointer-events-auto"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                            
                            <button
                              onClick={() => setPlayingVideoId(null)}
                              className="absolute top-3 right-3 z-20 bg-black/85 hover:bg-black text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-md flex items-center gap-1 transition-all border border-white/20 cursor-pointer active:scale-95"
                              aria-label="Fermer la vidéo"
                            >
                              <span>✕</span>
                              <span>Fermer</span>
                            </button>
                            
                            <div className="absolute top-3 left-3 z-20 pointer-events-none">
                              <span className="text-[11px] font-semibold bg-blue-600 text-white px-2.5 py-1 rounded-md shadow-xs">
                                {vid.tag}
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div
                            onClick={() => setPlayingVideoId(vid.id)}
                            className="w-full h-full relative group cursor-pointer"
                            role="button"
                            tabIndex={0}
                            aria-label={`Lire directement la vidéo : ${vid.title}`}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setPlayingVideoId(vid.id);
                              }
                            }}
                          >
                            <img
                              src={vid.thumbnail}
                              alt={vid.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-slate-900/35 flex items-center justify-center group-hover:bg-slate-900/25 transition-colors">
                              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-blue-600 group-hover:bg-blue-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5 fill-current" />
                              </div>
                            </div>
                            <span className="absolute top-2.5 left-2.5 text-[10px] sm:text-[11px] font-semibold bg-slate-900/80 text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md shadow-xs backdrop-blur-xs">
                              {vid.tag}
                            </span>
                            <span className="absolute bottom-2.5 right-2.5 text-[10px] sm:text-[11px] font-medium bg-slate-900/85 text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md flex items-center gap-1 backdrop-blur-xs">
                              <Play className="w-3 h-3 fill-current text-blue-400" />
                              <span>Lire</span>
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 line-clamp-1 mb-1 group-hover:text-blue-600 transition-colors">
                            {vid.title}
                          </h4>
                          <p className="text-xs sm:text-[13px] text-slate-600 line-clamp-2 leading-relaxed">
                            {vid.subtitle}
                          </p>
                        </div>

                        <div className="pt-3 sm:pt-4 mt-2 sm:mt-3 border-t border-slate-100 flex items-center justify-between">
                          {isPlaying ? (
                            <button
                              onClick={() => setPlayingVideoId(null)}
                              className="text-xs text-red-600 hover:text-red-700 font-semibold flex items-center gap-1 cursor-pointer active:scale-95"
                            >
                              <span>Fermer le lecteur</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => setPlayingVideoId(vid.id)}
                              className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 cursor-pointer group/link"
                            >
                              <Play className="w-3.5 h-3.5 fill-current group-hover/link:scale-110 transition-transform" />
                              <span>Lire la vidéo</span>
                            </button>
                          )}

                          <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium">
                            Vidéo officielle
                          </span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. Real Photo Cards - Responsive Snap-Carousel */}
        {(activeTab === 'all' || activeTab === 'photos') && (
          <div className="mb-10 sm:mb-14">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>{currentLang === 'ar' ? 'الصور الفوتوغرافية الرسمية' : 'Photographies réelles des locaux et dossiers'}</span>
            </h3>
            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 sm:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
              {photos.map((photo, pIdx) => (
                <Reveal
                  key={photo.id}
                  delay={pIdx * 65}
                  direction="up"
                  className="min-w-[240px] min-[380px]:min-w-[260px] sm:min-w-0 snap-start flex flex-col h-full"
                >
                  <div
                    onClick={() => setActivePhoto(photo)}
                    className="bg-white rounded-2xl border border-slate-200/80 group cursor-pointer overflow-hidden h-full shadow-2xs hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-200 hover:-translate-y-1.5 transition-all duration-300"
                  >
                    <div className="relative h-44 sm:h-52 bg-slate-100 overflow-hidden">
                      <img
                        src={photo.imageUrl}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-2.5 right-2.5 p-1.5 sm:p-2 rounded-xl bg-slate-900/60 backdrop-blur-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="text-xs text-blue-600 font-semibold flex items-center gap-1.5 mb-1">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{photo.location}</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 line-clamp-1 mb-1 group-hover:text-blue-600 transition-colors">
                        {photo.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-slate-600 line-clamp-2 leading-relaxed">
                        {photo.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Billetterie Callout Banner */}
        <Reveal direction="up" delay={100}>
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-5 sm:p-9 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/15 border border-blue-400/20 px-3 py-1 rounded-full inline-block">
                  {currentLang === 'ar' ? 'خدمة حجز التذاكر' : 'Service Billetterie & Vols'}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                  {currentLang === 'ar'
                    ? 'حجوزات طيران مؤكدة لكافة الوجهات (Air Algérie & Air France)'
                    : 'Réservation de billets d\'avion vers le monde entier'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentLang === 'ar' ? (
                    <>
                      اتصلوا مباشرة بمسؤول الحجوزات على{' '}
                      <span dir="ltr" className="font-bold text-white underline decoration-blue-400">
                        0557426784
                      </span>{' '}
                      للحصول على أفضل الأسعار والتأكيدات الفورية.
                    </>
                  ) : (
                    <>
                      Ligne directe billetterie au{' '}
                      <span dir="ltr" className="font-bold text-white underline decoration-blue-400">
                        0557426784
                      </span>{' '}
                      pour obtenir les meilleurs tarifs et confirmations immédiates.
                    </>
                  )}
                </p>
              </div>
              <div className="flex flex-col min-[380px]:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex-1 sm:flex-initial text-center flex items-center justify-center gap-2 text-xs font-semibold py-3 px-4 sm:px-5 bg-white text-slate-900 hover:bg-slate-100 rounded-xl transition-all shadow-sm active:scale-[0.98]"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span dir="ltr">{siteConfig.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Visado Service, je souhaite réserver un billet d'avion.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs py-3 px-4 sm:px-5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

      </div>

      {/* Photo Lightbox */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh] border border-slate-200">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <span className="text-sm font-bold text-slate-900 line-clamp-1">{activePhoto.title}</span>
              <button
                onClick={() => setActivePhoto(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-slate-950 flex-1 flex items-center justify-center p-4 overflow-hidden min-h-[280px] max-h-[55vh] sm:max-h-[62vh]">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>
            <div className="p-5 bg-white border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
              <div className="space-y-1">
                <p className="text-xs text-blue-600 font-bold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activePhoto.location}</span>
                </p>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">{activePhoto.description}</p>
              </div>
              <button
                onClick={() => setActivePhoto(null)}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl self-stretch sm:self-auto text-center cursor-pointer transition-all"
              >
                {currentLang === 'ar' ? 'إغلاق' : 'Fermer'}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
