import { notFound } from 'next/navigation';
import { getTour, getAllTours } from '@/lib/tours';
import { TourHero } from '@/components/tour/TourHero';
import { TourHighlights } from '@/components/tour/TourHighlights';
import { TourItinerary } from '@/components/tour/TourItinerary';
import { TourGallery } from '@/components/tour/TourGallery';
import { TourPricing } from '@/components/tour/TourPricing';
import { TourBookingCTA } from '@/components/tour/TourBookingCTA';
import { TourFAQ } from '@/components/tour/TourFAQ';
import type { Metadata } from 'next';

interface TourPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const tours = await getAllTours('en');
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
  const tour = await getTour(params.slug, params.locale);

  if (!tour) {
    return {
      title: 'Tour Not Found',
    };
  }

  return {
    title: tour.seo.metaTitle,
    description: tour.seo.metaDescription,
    keywords: tour.seo.keywords.join(', '),
    openGraph: {
      title: tour.title,
      description: tour.description,
      images: [tour.images[0].url],
      type: 'website',
    },
  };
}

export default async function TourPage({ params }: TourPageProps) {
  const tour = await getTour(params.slug, params.locale);

  if (!tour) {
    notFound();
  }

  return (
    <main>
      <TourHero tour={tour} />

      {/* Overview Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-umber mb-4">About This Safari</h2>
            <p className="text-lg text-umber leading-relaxed">{tour.description}</p>
          </div>
        </div>
      </section>

      <TourHighlights tour={tour} />
      <TourItinerary tour={tour} />
      <TourGallery tour={tour} />
      <TourPricing tour={tour} />
      <TourBookingCTA tour={tour} />
      <TourFAQ tour={tour} />

      {/* Final CTA */}
      <section className="py-16 bg-bronze text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for the Adventure of a Lifetime?
            </h2>
            <p className="text-xl text-cream mb-8">
              Join us for an unforgettable {tour.duration}-day journey through Uganda's wilderness
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#book-now"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-bronze rounded-lg font-semibold hover:bg-cream transition-colors"
              >
                Book This Safari
              </a>
              <a
                href="https://wa.me/256785698040"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-bronze transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
