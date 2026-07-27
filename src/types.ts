export type Language = 'en' | 'hi' | 'bn';

export interface LifeMilestone {
  titleEn: string;
  titleHi: string;
  textEn: string;
  textHi: string;
}

export interface StructuredBioSection {
  id: string;
  titleEn: string;
  titleHi: string;
  contentEn: string;
  contentHi: string;
}

export interface GuruParamparaItem {
  id: string;
  name: string;
  sanskritName?: string;
  title: string;
  titleHindi?: string;
  period: string;
  image: string;
  bio: string;
  bioHindi?: string;
  keyTeachings: string[];
  keyTeachingsHindi?: string[];
  quote: string;
  quoteHindi?: string;
  quotesHindiList?: string[];
  lifeMilestones?: LifeMilestone[];
  order: number;
  // Structured Comprehensive Biography Sections
  introductionEn?: string;
  introductionHi?: string;
  earlyLifeEn?: string;
  earlyLifeHi?: string;
  spiritualJourneyEn?: string;
  spiritualJourneyHi?: string;
  lineageRoleEn?: string;
  lineageRoleHi?: string;
  contributionEn?: string;
  contributionHi?: string;
  legacyEn?: string;
  legacyHi?: string;
  conclusionEn?: string;
  conclusionHi?: string;
  // SEO Metadata
  seoMetaTitle?: string;
  seoMetaDescription?: string;
  urlSlug?: string;
  imageAltText?: string;
  shortBio?: string;
  // Full Document Uncompressed Content
  structuredSections?: StructuredBioSection[];
  lilasList?: { titleEn: string; titleHi: string; textEn: string; textHi: string }[];
}

export interface AshramBranch {
  id: string;
  name: string;
  branchName?: string;
  state: string;
  location: string;
  address?: string;
  phone?: string;
  email?: string;
  description: string;
  about?: string;
  surroundings?: string;
  image: string;
  images?: string[];
  isHeadquarters?: boolean;
  googleMapsUrl?: string;
  activities?: string[];
  coordinates: { lat: number; lng: number };
}

export interface TeachingItem {
  id: string;
  title: string;
  hindiTitle?: string;
  bengaliTitle?: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  benefits: string[];
  practiceOverview: string;
}

export interface EventItem {
  id: string;
  title: string;
  startDate: string;
  endDate?: string;
  time: string;
  location: string;
  branchId: string;
  description: string;
  category: 'Festival' | 'Satsang' | 'Kriya Camp' | 'Bhagwat Katha' | 'Special Event';
  isUpcoming: boolean;
  speaker: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
}

export interface BookPublication {
  id: string;
  title: string;
  author: string;
  language: string;
  pages: number;
  description: string;
  coverImage: string;
  priceINR?: number;
  pdfSampleUrl?: string;
}

export interface YouTubeVideo {
  id: string;
  youtubeId: string;
  title: string;
  category: 'Kriya Yoga' | 'Bhagavad Gita' | 'Bhagwat Katha' | 'Guru Vandana' | 'Ashram Life';
  duration: string;
  speaker: string;
  views: string;
  date: string;
  thumbnail: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Ashram & Temple' | 'Guru Parampara' | 'Festivals' | 'Meditation Camps' | 'Gadrasini Pahar' | 'Seva Activities' | 'Branch Ashrams';
  url: string;
  caption: string;
}

export interface DevoteeTestimonial {
  id: string;
  name: string;
  location: string;
  associationYears: number;
  quote: string;
  fullStory: string;
  roleOrProfession?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Kriya Yoga' | 'Ashram Visit' | 'Bhagwat Katha' | 'Donations' | 'General';
}

export interface NavPage {
  id: string;
  label: string;
  path: string;
}
