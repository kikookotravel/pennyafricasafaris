import Link from 'next/link';
import Image from 'next/image';
import { Tour } from '@/types/tour';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Clock, MapPin, TrendingUp, Users } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

interface TourCardProps {
  tour: Tour;
  view?: 'grid' | 'list';
}

export function TourCard({ tour, view = 'grid' }: TourCardProps) {
  if (view === 'list') {
    return (
      <Card className="overflow-hidden hover:shadow-xl transition-shadow">
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-80 h-56 md:h-auto flex-shrink-0">
            <Image
              src={tour.images[0].url}
              alt={tour.images[0].alt}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 right-4 bg-bronze text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
              {tour.category}
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <CardHeader>
              <h3 className="text-2xl font-semibold text-umber mb-2">{tour.title}</h3>
              <p className="text-taupe">{tour.tagline}</p>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-umber line-clamp-3 mb-4">{tour.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-bronze" />
                  <span>{tour.duration} Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-bronze" />
                  <span>{tour.groupSize}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-bronze" />
                  <span className="capitalize">{tour.difficulty}</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-bronze">
                  <span>From {formatPrice(tour.pricing.from)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="bg-bronze hover:bg-bronze-dark">
                <Link href={`/tours/${tour.slug}`}>View Details</Link>
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    );
  }

  // Grid view
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
      <div className="relative h-56">
        <Image
          src={tour.images[0].url}
          alt={tour.images[0].alt}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-bronze text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
          {tour.category}
        </div>
        {tour.featured && (
          <div className="absolute top-4 left-4 bg-umber text-cream px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
      </div>
      <CardHeader>
        <h3 className="text-xl font-semibold text-umber line-clamp-2">{tour.title}</h3>
        <p className="text-taupe text-sm line-clamp-2">{tour.tagline}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-bronze flex-shrink-0" />
            <span className="text-umber">{tour.duration} Days</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4 text-bronze flex-shrink-0" />
            <span className="text-umber capitalize">{tour.difficulty}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <div className="w-full flex items-center justify-between">
          <span className="text-sm text-taupe">From</span>
          <span className="text-2xl font-bold text-bronze">{formatPrice(tour.pricing.from)}</span>
        </div>
        <Button asChild className="w-full bg-bronze hover:bg-bronze-dark">
          <Link href={`/tours/${tour.slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
