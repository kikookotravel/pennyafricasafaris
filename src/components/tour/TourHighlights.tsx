import { Tour } from '@/types/tour';
import { Check } from 'lucide-react';

interface TourHighlightsProps {
  tour: Tour;
}

export function TourHighlights({ tour }: TourHighlightsProps) {
  return (
    <section className="py-12 bg-cream/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-umber mb-6">Tour Highlights</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tour.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-bronze rounded-full flex items-center justify-center mt-0.5">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-umber">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
