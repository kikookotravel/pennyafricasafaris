import { Tour } from '@/types/tour';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check, X } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

interface TourPricingProps {
  tour: Tour;
}

export function TourPricing({ tour }: TourPricingProps) {
  return (
    <section className="py-16 bg-cream/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-umber mb-8 text-center">
            Pricing & What's Included
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Pricing Card */}
            {tour.pricing.groupPricing && (
              <Card className="border-2 border-bronze">
                <CardHeader className="bg-bronze text-white">
                  <h3 className="text-2xl font-bold">Group Pricing</h3>
                  <p className="text-cream text-sm">Price per person (USD)</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-umber">Solo Traveler</span>
                      <span className="font-bold text-bronze">
                        {formatPrice(tour.pricing.groupPricing.solo)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-umber">2 People</span>
                      <span className="font-bold text-bronze">
                        {formatPrice(tour.pricing.groupPricing.twoPersons)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-umber">3-4 People</span>
                      <span className="font-bold text-bronze">
                        {formatPrice(tour.pricing.groupPricing.threeFour)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-bronze">
                      <span className="text-umber font-semibold">5+ People</span>
                      <span className="font-bold text-2xl text-bronze">
                        {formatPrice(tour.pricing.groupPricing.fivePlus)}
                      </span>
                    </div>
                  </div>
                  {tour.pricing.note && (
                    <p className="text-sm text-taupe mt-4 italic">{tour.pricing.note}</p>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Inclusions */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <h3 className="text-xl font-bold text-umber">What's Included</h3>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {tour.inclusions.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-umber text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Exclusions */}
          <Card>
            <CardHeader>
              <h3 className="text-xl font-bold text-umber">Not Included</h3>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-3">
                {tour.exclusions.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-taupe text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
