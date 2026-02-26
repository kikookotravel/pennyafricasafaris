export type TourCategory = 'primates' | 'wildlife' | 'cultural' | 'adventure' | 'camping';
export type TourDifficulty = 'easy' | 'moderate' | 'challenging';

export interface TourImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface TourItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  accommodation: string;
  meals: string[];
  highlights?: string[];
}

export interface TourPricing {
  from: number;
  currency: 'USD';
  note?: string;
  groupPricing?: {
    solo: number;
    twoPersons: number;
    threeFour: number;
    fivePlus: number;
  };
}

export interface TourSEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: TourCategory;
  duration: number; // in days
  difficulty: TourDifficulty;
  groupSize: string;
  bestTime: string;

  // Content
  description: string;
  highlights: string[];
  itinerary: TourItineraryDay[];

  // Pricing
  pricing: TourPricing;
  inclusions: string[];
  exclusions: string[];

  // Media
  images: TourImage[];
  featured: boolean;
  published: boolean;

  // SEO
  seo: TourSEO;

  // Optional
  faqs?: {
    question: string;
    answer: string;
  }[];
  relatedTours?: string[];
}
