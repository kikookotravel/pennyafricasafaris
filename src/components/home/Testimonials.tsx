'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Wesley and Shenjuan',
    country: '',
    text: 'testimonial1',
    rating: 5,
  },
  {
    id: 2,
    name: 'Nathalie J',
    country: '',
    text: 'testimonial2',
    rating: 5,
  },
  {
    id: 3,
    name: 'Snfritz',
    country: '',
    text: 'testimonial3',
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations('homepage.testimonials');

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-umber mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-taupe">{t('subtitle')}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-bronze/20">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-4">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-bronze fill-bronze" />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl text-center text-umber mb-6">
                "{t(current.text)}"
              </blockquote>

              <div className="text-center">
                <p className="font-semibold text-umber">{current.name}</p>
                <p className="text-taupe">{current.country}</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-bronze w-8'
                      : 'bg-taupe/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
