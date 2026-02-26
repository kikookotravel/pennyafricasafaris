import Image from 'next/image';
import { Tour } from '@/types/tour';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, TrendingUp, Users } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

interface TourHeroProps {
  tour: Tour;
}

export function TourHero({ tour }: TourHeroProps) {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px]">
        <Image
          src={tour.images[0].url}
          alt={tour.images[0].alt}
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="max-w-4xl">
              <div className="inline-block bg-bronze px-4 py-1 rounded-full text-white text-sm font-semibold mb-4">
                {tour.category.charAt(0).toUpperCase() + tour.category.slice(1)} Safari
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
                {tour.title}
              </h1>
              <p className="text-xl text-cream mb-6">{tour.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between py-6 gap-6">
            {/* Quick Facts */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-bronze" />
                <div>
                  <div className="text-sm text-taupe">Duration</div>
                  <div className="font-semibold text-umber">{tour.duration} Days</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-bronze" />
                <div>
                  <div className="text-sm text-taupe">Group Size</div>
                  <div className="font-semibold text-umber">{tour.groupSize}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-bronze" />
                <div>
                  <div className="text-sm text-taupe">Difficulty</div>
                  <div className="font-semibold text-umber capitalize">{tour.difficulty}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-bronze" />
                <div>
                  <div className="text-sm text-taupe">Best Time</div>
                  <div className="font-semibold text-umber">Year-round</div>
                </div>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-taupe">From</div>
                <div className="text-3xl font-bold text-bronze">
                  {formatPrice(tour.pricing.from)}
                </div>
                <div className="text-xs text-taupe">per person</div>
              </div>
              <Button
                size="lg"
                className="bg-bronze hover:bg-bronze-dark text-white"
                asChild
              >
                <a href="#book-now">Book Now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
