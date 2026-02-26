import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Calendar,
  Thermometer,
  DollarSign,
  Clock,
  Plane,
  Shield,
  Mountain,
  Eye,
  Camera,
  Heart,
  TrendingDown,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getAllDestinations, getDestination } from '@/lib/destinations';
import type { Metadata } from 'next';

interface DestinationPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const destinations = await getAllDestinations();
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const destination = await getDestination(params.slug);

  if (!destination) {
    return { title: 'Destination Not Found' };
  }

  return {
    title: `${destination.name} Safari Guide | ${destination.tagline} | Penny Africa Safaris`,
    description: destination.description,
    openGraph: {
      title: `${destination.name} Safaris`,
      description: destination.description,
      images: [destination.heroImage],
    },
  };
}

// Budget tips data
const budgetTips: Record<string, string[]> = {
  uganda: [
    'Book gorilla permits directly through Uganda Wildlife Authority - save up to 50% compared to Rwanda',
    'Travel during shoulder season (March-May) for lower accommodation rates',
    'Use public transportation or shared safari vehicles to cut transport costs',
    'Stay in budget lodges and guesthouses near parks - comfortable and affordable',
    'Join group tours to share costs with other travelers',
    'Pack your own snacks and water to save on roadside purchases',
  ],
  rwanda: [
    'Consider Uganda for gorilla trekking if budget is tight - permits are $700 vs $1,500',
    'Book accommodations outside Volcanoes NP and drive in daily',
    'Visit during low season (March-May, November) for better rates',
    'Combine golden monkey tracking with gorilla trekking in one trip',
    'Use public buses between cities to save on transport',
    'Stay in Musanze town for budget-friendly accommodation options',
  ],
  tanzania: [
    'Visit during green season (March-May) for 30-50% lower prices',
    'Choose northern circuit over remote parks to reduce flight costs',
    'Camp instead of lodges - still great experience at fraction of the cost',
    'Join group safaris departing from Arusha',
    'Skip hot air balloons and walking safaris to save $300-500 per person',
    'Fly to Kilimanjaro Airport instead of Dar es Salaam for northern parks',
  ],
};

// Hidden gems data
const hiddenGems: Record<
  string,
  { title: string; description: string; icon: typeof Mountain }[]
> = {
  uganda: [
    {
      title: 'Shoebill Tracking in Mabamba Swamp',
      description:
        'See the prehistoric shoebill stork in papyrus swamps. 90% success rate and costs just $50.',
      icon: Eye,
    },
    {
      title: 'Batwa Cultural Experience',
      description:
        'Meet the indigenous Batwa people near Bwindi. Learn about their forest life and traditions.',
      icon: Heart,
    },
    {
      title: 'Sipi Falls Coffee Tour',
      description:
        'Hike to stunning waterfalls and learn about arabica coffee farming from local communities.',
      icon: Mountain,
    },
  ],
  rwanda: [
    {
      title: 'Twin Lakes Kayaking',
      description:
        'Paddle Lake Burera and Ruhondo with stunning volcano views. Peaceful and affordable.',
      icon: Camera,
    },
    {
      title: 'Musanze Caves',
      description:
        'Explore ancient lava tube caves used historically as shelter. Fascinating geology and history.',
      icon: Mountain,
    },
    {
      title: 'Iby\'wacu Cultural Village',
      description:
        'Experience traditional Rwandan life, dance, and archery. Support local communities.',
      icon: Heart,
    },
  ],
  tanzania: [
    {
      title: 'Empakaai Crater Hike',
      description:
        'Lesser-known crater near Ngorongoro with flamingo-filled lake. Few tourists, incredible views.',
      icon: Mountain,
    },
    {
      title: 'Chemka Hot Springs',
      description:
        'Crystal-clear natural springs perfect for swimming. Hidden oasis near Moshi.',
      icon: Camera,
    },
    {
      title: 'Maasai Boma Visits',
      description:
        'Visit authentic Maasai villages away from tourist circuits. Learn about nomadic lifestyle.',
      icon: Heart,
    },
  ],
};

export default async function DestinationPage({ params }: DestinationPageProps) {
  const destination = await getDestination(params.slug);

  if (!destination) {
    notFound();
  }

  const tips = budgetTips[destination.slug] || [];
  const gems = hiddenGems[destination.slug] || [];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={destination.heroImage}
            alt={`${destination.name} safari destination`}
            fill
            priority
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {destination.name} Safaris
            </h1>
            <p className="text-2xl text-bronze font-semibold mb-4">{destination.tagline}</p>
            <p className="text-xl text-cream">{destination.description}</p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-bronze mx-auto mb-3" />
                  <h3 className="font-semibold text-umber mb-2">Best Time</h3>
                  <p className="text-sm text-taupe">{destination.bestTime}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Thermometer className="h-8 w-8 text-bronze mx-auto mb-3" />
                  <h3 className="font-semibold text-umber mb-2">Climate</h3>
                  <p className="text-sm text-taupe">
                    {destination.slug === 'uganda' && 'Tropical, 20-27°C'}
                    {destination.slug === 'rwanda' && 'Temperate, 15-27°C'}
                    {destination.slug === 'tanzania' && 'Varied, 15-30°C'}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-bronze mx-auto mb-3" />
                  <h3 className="font-semibold text-umber mb-2">Visa</h3>
                  <p className="text-sm text-taupe">{destination.visaInfo.split('.')[0]}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Plane className="h-8 w-8 text-bronze mx-auto mb-3" />
                  <h3 className="font-semibold text-umber mb-2">Airport</h3>
                  <p className="text-sm text-taupe">
                    {destination.slug === 'uganda' && 'Entebbe (EBB)'}
                    {destination.slug === 'rwanda' && 'Kigali (KGL)'}
                    {destination.slug === 'tanzania' && 'Kilimanjaro (JRO)'}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Top Safari Experiences */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-umber mb-4 text-center">
              Top Safari Experiences
            </h2>
            <p className="text-center text-taupe mb-12 max-w-2xl mx-auto">
              Must-do activities that make {destination.name} a world-class safari destination
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {destination.highlights.map((highlight, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                      <Eye className="h-6 w-6 text-bronze" />
                    </div>
                    <p className="text-umber font-semibold">{highlight}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* National Parks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-umber mb-4 text-center">
              National Parks & Reserves
            </h2>
            <p className="text-center text-taupe mb-12 max-w-2xl mx-auto">
              Explore {destination.name}&apos;s premier protected areas for wildlife viewing
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {destination.nationalParks.map((park, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="h-6 w-6 text-bronze flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-umber mb-2">{park.name}</h3>
                        <p className="text-taupe mb-4">{park.description}</p>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-umber mb-2">Highlights:</h4>
                      <ul className="space-y-1">
                        {park.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-taupe flex items-start">
                            <span className="text-bronze mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Gems */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-umber mb-4 text-center">
              Our Favorite Hidden Experiences
            </h2>
            <p className="text-center text-taupe mb-12 max-w-2xl mx-auto">
              Off-the-beaten-path adventures that most tourists miss
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {gems.map((gem, index) => {
                const IconComponent = gem.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-bronze" />
                      </div>
                      <h3 className="text-lg font-bold text-umber mb-3">{gem.title}</h3>
                      <p className="text-taupe">{gem.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Budget Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bronze/10 rounded-full mb-4">
                <TrendingDown className="h-8 w-8 text-bronze" />
              </div>
              <h2 className="text-3xl font-bold text-umber mb-4">
                Budget Safari Tips for {destination.name}
              </h2>
              <p className="text-taupe max-w-2xl mx-auto">
                Insider tips to experience {destination.name}&apos;s incredible wildlife without
                breaking the bank
              </p>
            </div>

            <Card className="bg-cream border-bronze/20">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-bronze rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-umber flex-1 pt-1">{tip}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bronze text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Explore {destination.name}?
            </h2>
            <p className="text-xl text-cream mb-8">
              Let Ivan create your perfect {destination.name} safari itinerary
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-bronze hover:bg-cream text-lg">
                <Link href="/tours">
                  View {destination.name} Tours
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-bronze text-lg"
              >
                <Link href="/contact">Request Custom Itinerary</Link>
              </Button>
            </div>
            <p className="mt-6 text-cream">
              WhatsApp Ivan directly:{' '}
              <a
                href="https://wa.me/256785698040"
                className="text-white hover:underline font-semibold"
              >
                +256 785 698040
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
