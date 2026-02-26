import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'East Africa Safari Destinations | Uganda, Rwanda & Tanzania | Penny Africa Safaris',
  description:
    'Explore East Africa\'s premier safari destinations. Gorilla trekking in Uganda & Rwanda, wildlife safaris in Tanzania. Expert local guidance for unforgettable adventures.',
  openGraph: {
    title: 'East Africa Safari Destinations',
    description: 'Discover Uganda, Rwanda, and Tanzania with Penny Africa Safaris',
    images: ['/images/tours/wildlife-safari.jpg'],
  },
};

const destinations = [
  {
    id: 'uganda',
    name: 'Uganda',
    slug: 'uganda',
    tagline: 'The Pearl of Africa',
    description:
      'Home to half the world\'s mountain gorillas, Uganda offers unparalleled primate encounters, diverse wildlife, and stunning landscapes from misty mountains to sprawling savannahs.',
    highlights: [
      'Mountain gorilla trekking in Bwindi',
      'Chimpanzee tracking in Kibale Forest',
      'Big Five in Queen Elizabeth & Murchison Falls',
      'Tree-climbing lions',
      'Source of the Nile River',
    ],
    image: '/images/tours/gorilla-hero.jpg',
    featured: true,
  },
  {
    id: 'rwanda',
    name: 'Rwanda',
    slug: 'rwanda',
    tagline: 'Land of a Thousand Hills',
    description:
      'Rwanda combines world-class gorilla trekking with pristine national parks, vibrant culture, and Africa\'s cleanest capital. Experience luxury and adventure in this remarkable East African gem.',
    highlights: [
      'Gorilla trekking in Volcanoes National Park',
      'Golden monkey tracking',
      'Nyungwe Forest chimpanzees',
      'Lake Kivu relaxation',
      'Kigali city tours',
    ],
    image: '/images/tours/gorilla-family.jpg',
    featured: false,
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    slug: 'tanzania',
    tagline: 'Home of the Serengeti',
    description:
      'Witness the Great Migration, climb Africa\'s highest peak, and explore pristine beaches. Tanzania offers the complete African safari experience from savannah to sea.',
    highlights: [
      'Great Migration in Serengeti',
      'Ngorongoro Crater wildlife',
      'Mount Kilimanjaro climbing',
      'Zanzibar beaches',
      'Big Five safaris',
    ],
    image: '/images/tours/elephant-hero.jpg',
    featured: false,
  },
];

export default function DestinationsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-umber text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Explore East Africa&apos;s Premier Safari Destinations
            </h1>
            <p className="text-xl text-cream mb-8">
              From gorilla trekking in misty mountains to witnessing the Great Migration across
              endless plains, East Africa offers the world&apos;s most extraordinary wildlife experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-umber mb-4">Where Will You Adventure?</h2>
              <p className="text-lg text-taupe max-w-2xl mx-auto">
                Each destination offers unique experiences. Choose your adventure or combine
                multiple countries for the ultimate East African safari.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <Card
                  key={destination.id}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-64">
                    <Image
                      src={destination.image}
                      alt={`${destination.name} safari destination`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {destination.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-bronze text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-5 w-5 text-bronze" />
                      <h3 className="text-2xl font-bold text-umber">{destination.name}</h3>
                    </div>
                    <p className="text-bronze font-semibold mb-3">{destination.tagline}</p>
                    <p className="text-taupe mb-4">{destination.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-umber mb-2">Highlights:</h4>
                      <ul className="space-y-1">
                        {destination.highlights.slice(0, 3).map((highlight, index) => (
                          <li key={index} className="text-sm text-taupe flex items-start">
                            <span className="text-bronze mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-bronze hover:bg-bronze-dark text-white"
                    >
                      <Link href={`/destinations/${destination.slug}`}>
                        Explore {destination.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Multiple Destinations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-umber mb-8 text-center">
              Multi-Country Safari Adventures
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-umber mb-3">
                    Uganda & Rwanda Combo
                  </h3>
                  <p className="text-taupe mb-4">
                    Compare gorilla trekking experiences in both countries. Visit Bwindi and
                    Volcanoes National Park, explore Lake Kivu, and experience two unique cultures.
                  </p>
                  <Link
                    href="/tours"
                    className="text-bronze font-semibold hover:underline inline-flex items-center"
                  >
                    View Tours
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-umber mb-3">
                    Uganda & Tanzania Adventure
                  </h3>
                  <p className="text-taupe mb-4">
                    Combine Uganda&apos;s primate experiences with Tanzania&apos;s Serengeti plains.
                    Gorillas, chimps, and the Great Migration in one epic journey.
                  </p>
                  <Link
                    href="/contact"
                    className="text-bronze font-semibold hover:underline inline-flex items-center"
                  >
                    Custom Itinerary
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bronze text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Plan Your East African Adventure?
            </h2>
            <p className="text-xl text-cream mb-8">
              Let&apos;s create your perfect itinerary across one or multiple destinations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-bronze hover:bg-cream text-lg"
              >
                <Link href="/tours">Browse All Tours</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-bronze text-lg"
              >
                <Link href="/contact">Contact Ivan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
