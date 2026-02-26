import { Hero } from '@/components/home/Hero';
import { Stats } from '@/components/home/Stats';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { FeaturedTours } from '@/components/home/FeaturedTours';
import { Testimonials } from '@/components/home/Testimonials';
import { EmailCapture } from '@/components/home/EmailCapture';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Penny Africa Safaris | Affordable Uganda Safari Tours & Gorilla Trekking',
  description:
    'Experience Uganda\'s breathtaking wildlife with expert local guide Ivan Akampurira. Budget-friendly gorilla trekking, primate safaris, and wildlife tours. Affordable trips, extraordinary memories.',
  keywords: [
    'Uganda safari',
    'gorilla trekking Uganda',
    'budget safari Uganda',
    'Bwindi gorilla trekking',
    'Uganda tours',
    'affordable safari',
    'Uganda wildlife',
    'Penny Africa Safaris',
    'Ivan Akampurira',
  ],
  openGraph: {
    title: 'Penny Africa Safaris | Affordable Uganda Safari Tours',
    description:
      'Experience Uganda\'s breathtaking wildlife with expert local guidance. Affordable trips, extraordinary memories.',
    url: 'https://pennyafricasafaris.travel',
    siteName: 'Penny Africa Safaris',
    images: [
      {
        url: '/images/hero-gorilla.jpg',
        width: 1200,
        height: 630,
        alt: 'Mountain Gorilla in Uganda - Penny Africa Safaris',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Penny Africa Safaris | Affordable Uganda Safari Tours',
    description:
      'Experience Uganda\'s breathtaking wildlife with expert local guidance. Affordable trips, extraordinary memories.',
    images: ['/images/hero-gorilla.jpg'],
  },
  alternates: {
    canonical: 'https://pennyafricasafaris.travel/en',
    languages: {
      en: 'https://pennyafricasafaris.travel/en',
      de: 'https://pennyafricasafaris.travel/de',
    },
  },
};

export default function HomePage() {
  // Structured data for Organization and Local Business
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Penny Africa Safaris',
    description: 'Affordable Uganda safari tours and gorilla trekking experiences',
    url: 'https://pennyafricasafaris.travel',
    logo: 'https://pennyafricasafaris.travel/images/logo.png',
    image: 'https://pennyafricasafaris.travel/images/hero-gorilla.jpg',
    telephone: '+256705555533',
    email: 'hello@pennyafricasafaris.travel',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'P.O Box 702981, 8leftlane',
      addressLocality: 'Entebbe',
      addressCountry: 'UG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 0.3476,
      longitude: 32.5825,
    },
    priceRange: '$$$',
    sameAs: [
      'https://www.facebook.com/pennyafricasafaris',
      'https://www.instagram.com/penny.africa.safaris',
      'https://www.tripadvisor.com/Attraction_Review-g298044-d27461260-Reviews-Penny_Africa_Safaris-Entebbe_Central_Region.html',
    ],
    founder: {
      '@type': 'Person',
      name: 'Ivan Akampurira',
      jobTitle: 'Safari Guide & Founder',
      description: 'Certified safari guide with 7+ years of experience',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main>
        <Hero />
        <Stats />
        <WhyChooseUs />
        <FeaturedTours />
        <Testimonials />
        <EmailCapture />
      </main>
    </>
  );
}
