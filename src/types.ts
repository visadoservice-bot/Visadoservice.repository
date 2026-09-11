export type Language = 'fr' | 'ar' | 'en';

export interface SiteConfig {
  name: string;
  tagline: string;
  agencyCity: string;
  address: string;
  postalCode: string;
  phone: string;
  phoneRaw: string;
  phoneSecondary?: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  tiktokHandle: string;
  tiktokUrl: string;
  facebookName: string;
  facebookUrl: string;
  logoUrl: string;
  serviceZone: string;
  googleMapsEmbedUrl: string;
  googleMapsShareUrl: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  ctaText: string;
  ctaAction?: string;
}

export interface DestinationItem {
  id: string;
  number: string;
  name: string;
  city: string;
  country: string;
  tag: string;
  description: string;
  imageUrl: string;
  typicalDocuments: string[];
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface WhyUsPillar {
  title: string;
  description: string;
  iconName: string;
}

export interface TrustPillar {
  title: string;
  description: string;
  detail: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  destination: string;
  year: string;
  quote: string;
  visaType: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  destination: string;
  visaType: string;
  message: string;
}
