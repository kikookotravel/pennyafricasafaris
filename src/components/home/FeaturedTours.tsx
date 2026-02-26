'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Clock, DollarSign } from 'lucide-react';

// Placeholder data - will be replaced with actual tour data
const featuredTours = [
  {
    id: 1,
    slug: '4-day-gorilla-trekking',
    title: '4-Day Gorilla Trekking Uganda',
    image: '/images/tours/gorilla-trek.jpg',
    duration: 4,
    price: 1200,
    category: 'Primates',
  },
  {
    id: 2,
    slug: '9-day-budget-primate-safari',
    title: '9-Day Budget Primate Safari',
    image: '/images/tours/primate-safari.jpg',
    duration: 9,
    price: 2400,
    category: 'Primates',
  },
  {
    id: 3,
    slug: '12-day-spectacular-uganda',
    title: '12-Day Spectacular Uganda Safari',
    image: '/images/tours/wildlife-safari.jpg',
    duration: 12,
    price: 3200,
    category: 'Wildlife',
  },
];

export function FeaturedTours() {
  const t = useTranslations('homepage.featuredTours');
  const common = useTranslations('common');
  const locale = useLocale();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-umber mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-taupe max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-bronze text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {tour.category}
                </div>
              </div>
              <CardHeader>
                <h3 className="text-xl font-semibold text-umber">{tour.title}</h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-taupe">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{tour.duration} Days</span>
                  </div>
                  <div className="flex items-center font-semibold text-bronze">
                    <DollarSign className="h-4 w-4" />
                    <span>{tour.price}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-bronze hover:bg-bronze-dark">
                  <Link href={`/${locale}/tours/${tour.slug}`}>{common('learnMore')}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-bronze text-bronze hover:bg-bronze hover:text-white"
          >
            <Link href={`/${locale}/tours`}>{common('viewAll')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
