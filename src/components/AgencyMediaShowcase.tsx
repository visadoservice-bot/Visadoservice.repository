import React, { useState } from 'react';
import { Play, Maximize2, ExternalLink, X, MapPin, Phone, MessageCircle } from 'lucide-react';
import { imagery } from '../data/imagery';
import { siteConfig } from '../data/config';
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
      id: "photo-1",
      title: currentLang === 'ar' ? "تأشيرة شنغن إسبانيا صادرة وجواز سفر" : "Visa Schengen Espagne Délivré & Passeport",
      category: "visas",
      location: "Visado Service • Oran",
      description: currentLang === 'ar' 
        ? "جواز سفر حقيقي بتأشيرة شنغن إسبانيا سارية مع بطاقة العمل الرسمية لوكالة Visado Service."
        : "Passeport avec vignette visa Schengen Espagne officielle et carte de visite Visado Service.",
      imageUrl: imagery.realAgency.schengenVisaPassport,
      tag: "Visa Délivré"
    },
    {
      id: "photo-2",
      title: currentLang === 'ar' ? "ملفات ومواعيد BLS إسبانيا الرسمية" : "Dossiers & Confirmations BLS Espagne",
      category: "visas",
      location: "Bureau de Consultation • Oran",
      description: currentLang === 'ar'
        ? "تأكيدات حجز المواعيد الرسمية لمركز BLS إسبانيا محققة وموثقة على مكتب الاستشارة."
        : "Confirmations officielles de rendez-vous BLS Spain vérifiées et classées.",
      imageUrl: imagery.realAgency.appointmentFiles,
      tag: "Rendez-vous BLS"
    },
    {
      id: "photo-3",
      title: currentLang === 'ar' ? "فضاء الاستقبال وخريطة العالم المضيئة" : "Espace d'Accueil & Planisphère Mural",
      category: "agency",
      location: "14 Rue Capitaine Hadri, Oran",
      description: currentLang === 'ar'
        ? "منظر داخلي للمكتب الرئيسي مع الجدار الأزرق وخريطة العالم المجهزة لاستقبالكم."
        : "Vue intérieure de l'agence principale à Oran avec planisphère mural et bureaux.",
      imageUrl: imagery.realAgency.agencyInterior,
      tag: "Locaux Réels"
    },
    {
      id: "photo-4",
      title: currentLang === 'ar' ? "الواجهة الخارجية وموقع الوكالة" : "Façade & Entrée de l'Agence",
      category: "agency",
      location: "14 Rue Capitaine Hadri, Oran",
      description: currentLang === 'ar'
        ? "واجهة الوكالة بواجهة حجرية مميزة وواجهات زجاجية تعرض كافة خدمات التأشيرة بوهران."
        : "Façade en pierre et enseigne vitrée pour accueillir nos voyageurs à Oran.",
      imageUrl: imagery.realAgency.storefrontOran,
      tag: "Adresse Oran"
    },
    {
      id: "photo-5",
      title: currentLang === 'ar' ? "ملصق حجز تذاكر الطيران الدولية" : "Affiche Billetterie & Vols Internationaux",
      category: "ticketing",
      location: "Air Algérie & Air France",
      description: currentLang === 'ar'
        ? "حجوزات طيران وتذاكر دولية لكافة الوجهات عبر خط الخدمة المباشر 0557 42 67 84."
        : "Billetterie officielle vers toutes les destinations avec Air Algérie & Air France.",
      imageUrl: imagery.realAgency.ticketingPoster,
      tag: "Billetterie"
    }
  ];

  return (
    <section id="media-gallery" className="py-16 sm:py-20 bg-white border-b border-[#DADCE0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs uppercase font-semibold tracking-wider text-[#1A73E8] bg-[#E8F0FE] px-3 py-1 rounded-full inline-block mb-3">
              {currentLang === 'ar' ? 'معرض الصور والفيديو' : 'Galerie Photos & Vidéos'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
              {currentLang === 'ar' ? 'وكالتنا وتجهيزاتها على أرض الواقع' : "L'Agence Visado Service en images réelles"}
            </h2>
            <p className="text-sm text-[#5F6368] mt-1">
              {currentLang === 'ar'
                ? 'توثيق حقيقي لمقرنا بوهران، ملفات المواعيد المنجزة، والخدمات الرسمية.'
                : 'Découvrez nos locaux à Oran, nos dossiers BLS et nos preuves de visas délivrés.'}
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F1F3F4] rounded-lg self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-[#1A73E8] shadow-xs'
                  : 'text-[#5F6368] hover:text-[#202124]'
              }`}
            >
              {currentLang === 'ar' ? 'الكل' : 'Tous les médias'}
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === 'videos'
                  ? 'bg-white text-[#1A73E8] shadow-xs'
                  : 'text-[#5F6368] hover:text-[#202124]'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{currentLang === 'ar' ? 'فيديوهات (3)' : 'Vidéos (3)'}</span>
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                activeTab === 'photos'
                  ? 'bg-white text-[#1A73E8] shadow-xs'
                  : 'text-[#5F6368] hover:text-[#202124]'
              }`}
            >
              {currentLang === 'ar' ? 'الصور (5)' : 'Photos (5)'}
            </button>
          </div>
        </div>

        {/* 1. Real Video Cards with DIRECT INLINE PLAYBACK - Responsive Snap-Carousel */}
        {(activeTab === 'all' || activeTab === 'videos') && (
          <div className="mb-12">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#70757A] mb-4">
              {currentLang === 'ar' ? 'مقاطع الفيديو الموثقة (تشغيل مباشر)' : 'Vidéos authentiques de nos locaux (Lecture directe)'}
            </h3>
            <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-5 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
              {videos.map((vid) => {
                const isPlaying = playingVideoId === vid.id;

                return (
                  <div
                    key={vid.id}
                    className="google-card overflow-hidden bg-white flex flex-col justify-between min-w-[285px] sm:min-w-[320px] md:min-w-0 snap-start"
                  >
                    <div className="relative aspect-video bg-[#111] overflow-hidden">
                      {isPlaying ? (
                        <div className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center">
                          {/* High-zoom YouTube iframe to cleanly fill container without any YouTube UI elements */}
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${vid.youtubeId}?autoplay=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&disablekb=1&loop=1&playlist=${vid.youtubeId}`}
                            title={vid.title}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220%] h-[250%] max-w-none border-0 select-none pointer-events-auto"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                          
                          {/* Clean minimal overlay badges */}
                          <button
                            onClick={() => setPlayingVideoId(null)}
                            className="absolute top-2.5 right-2.5 z-20 bg-black/85 hover:bg-black text-white text-[11px] font-medium px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 transition-all border border-white/10"
                            aria-label="Fermer la vidéo"
                          >
                            <span>✕</span>
                            <span>Fermer</span>
                          </button>
                          
                          <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
                            <span className="text-[10px] font-semibold bg-[#1A73E8] text-white px-2 py-0.5 rounded shadow-xs">
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
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                          <div className="absolute inset-0 bg-black/35 flex items-center justify-center group-hover:bg-black/25 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-[#1A73E8] group-hover:bg-[#1557b0] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                              <Play className="w-5 h-5 ml-0.5 fill-current" />
                            </div>
                          </div>
                          <span className="absolute top-2.5 left-2.5 text-[10px] font-semibold bg-black/70 text-white px-2 py-0.5 rounded shadow-xs">
                            {vid.tag}
                          </span>
                          <span className="absolute bottom-2.5 right-2.5 text-[10px] font-medium bg-black/80 text-white px-2 py-0.5 rounded flex items-center gap-1">
                            <Play className="w-2.5 h-2.5 fill-current" />
                            <span>Lire la vidéo</span>
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-[#202124] line-clamp-1 mb-1">
                          {vid.title}
                        </h4>
                        <p className="text-xs text-[#5F6368] line-clamp-2">
                          {vid.subtitle}
                        </p>
                      </div>

                      <div className="pt-3 mt-2 border-t border-[#F1F3F4] flex items-center justify-between">
                        {isPlaying ? (
                          <button
                            onClick={() => setPlayingVideoId(null)}
                            className="text-[11px] text-[#EA4335] hover:underline font-semibold flex items-center gap-1"
                          >
                            <span>Fermer le lecteur</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => setPlayingVideoId(vid.id)}
                            className="text-[11px] text-[#1A73E8] hover:underline font-semibold flex items-center gap-1"
                          >
                            <Play className="w-3 h-3 fill-current" />
                            <span>Lire la vidéo</span>
                          </button>
                        )}

                        <span className="text-[11px] text-[#70757A] font-medium flex items-center gap-1">
                          <span>Vidéo officielle</span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. Real Photo Cards - Responsive Snap-Carousel */}
        {(activeTab === 'all' || activeTab === 'photos') && (
          <div className="mb-12">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#70757A] mb-4">
              {currentLang === 'ar' ? 'الصور الفوتوغرافية الرسمية' : 'Photographies réelles des locaux et dossiers'}
            </h3>
            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-5 sm:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setActivePhoto(photo)}
                  className="google-card group cursor-pointer overflow-hidden bg-white min-w-[260px] sm:min-w-0 snap-start"
                >
                  <div className="relative h-48 bg-[#F1F3F4] overflow-hidden">
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-semibold bg-white/90 text-[#202124] px-2 py-0.5 rounded shadow-xs">
                        {photo.tag}
                      </span>
                    </div>
                    <div className="absolute top-2.5 right-2.5 p-1.5 rounded bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-[11px] text-[#1A73E8] font-medium flex items-center gap-1 mb-1">
                      <MapPin className="w-3 h-3" />
                      <span>{photo.location}</span>
                    </div>
                    <h4 className="text-sm font-bold text-[#202124] line-clamp-1 mb-1">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-[#5F6368] line-clamp-2">
                      {photo.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Billetterie Callout Banner */}
        <div className="google-card p-6 bg-[#F8F9FA] border-l-4 border-l-[#1A73E8]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A73E8]">
                {currentLang === 'ar' ? 'خدمة حجز التذاكر' : 'Service Billetterie & Vols'}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#202124]">
                {currentLang === 'ar'
                  ? 'حجوزات طيران مؤكدة لكافة الوجهات (Air Algérie & Air France)'
                  : 'Réservation de billets d\'avion vers le monde entier'}
              </h3>
              <p className="text-xs text-[#5F6368]">
                {currentLang === 'ar' ? (
                  <>
                    اتصلوا مباشرة بمسؤول الحجوزات على{' '}
                    <span dir="ltr" className="font-semibold text-[#202124] inline-block">
                      0557426784
                    </span>{' '}
                    للحصول على أفضل الأسعار والتأكيدات الفورية.
                  </>
                ) : (
                  <>
                    Ligne directe billetterie au{' '}
                    <span dir="ltr" className="font-semibold text-[#202124] inline-block">
                      0557426784
                    </span>{' '}
                    pour obtenir les meilleurs tarifs et confirmations immédiates.
                  </>
                )}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="btn-google-primary flex-1 sm:flex-initial text-center flex items-center justify-center gap-1.5 text-xs py-2 px-4"
              >
                <Phone className="w-3.5 h-3.5" />
                <span dir="ltr">{siteConfig.phone}</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Visado Service, je souhaite réserver un billet d'avion.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium text-xs py-2 px-4 rounded transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Photo Lightbox */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="p-3 border-b border-[#DADCE0] flex items-center justify-between bg-[#F8F9FA]">
              <span className="text-xs font-bold text-[#202124] line-clamp-1">{activePhoto.title}</span>
              <button
                onClick={() => setActivePhoto(null)}
                className="p-1.5 text-[#5F6368] hover:text-[#202124] hover:bg-[#E8EAED] rounded-full transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-[#1F2023] flex-1 flex items-center justify-center p-2 overflow-hidden min-h-[250px] max-h-[50vh] sm:max-h-[60vh]">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-4 bg-white border-t border-[#DADCE0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
              <div className="space-y-0.5">
                <p className="text-xs text-[#1A73E8] font-semibold">📍 {activePhoto.location}</p>
                <p className="text-xs text-[#5F6368] leading-relaxed">{activePhoto.description}</p>
              </div>
              <button
                onClick={() => setActivePhoto(null)}
                className="btn-google-primary text-xs py-2 px-5 self-stretch sm:self-auto text-center cursor-pointer"
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
