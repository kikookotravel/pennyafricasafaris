'use client';

import { useState } from 'react';
import { Tour } from '@/types/tour';
import { ChevronDown, MapPin, Utensils, Home, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TourItineraryProps {
  tour: Tour;
}

export function TourItinerary({ tour }: TourItineraryProps) {
  const [expandedDay, setExpandedDay] = useState<number>(1);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-umber mb-3">Day-by-Day Itinerary</h2>
          <p className="text-taupe mb-8">Click each day to see detailed information</p>

          <div className="space-y-4">
            {tour.itinerary.map((day) => (
              <div
                key={day.day}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Day Header */}
                <button
                  onClick={() => setExpandedDay(expandedDay === day.day ? 0 : day.day)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-cream/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-bronze rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{day.day}</span>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-umber text-lg">{day.title}</div>
                      <div className="text-sm text-taupe">
                        {day.activities.length} activities
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      'h-6 w-6 text-bronze transition-transform',
                      expandedDay === day.day && 'rotate-180'
                    )}
                  />
                </button>

                {/* Day Content */}
                {expandedDay === day.day && (
                  <div className="px-6 py-6 bg-cream/20 border-t border-gray-200">
                    {/* Description */}
                    <p className="text-umber mb-6 leading-relaxed">{day.description}</p>

                    {/* Highlights */}
                    {day.highlights && day.highlights.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-umber mb-3 flex items-center gap-2">
                          <Star className="h-5 w-5 text-bronze" />
                          Day Highlights
                        </h4>
                        <ul className="space-y-2">
                          {day.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-bronze mt-1">•</span>
                              <span className="text-umber">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Activities */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-umber mb-3 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-bronze" />
                        Activities
                      </h4>
                      <ul className="space-y-2">
                        {day.activities.map((activity, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-bronze mt-1">✓</span>
                            <span className="text-umber">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Info */}
                    <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <Home className="h-5 w-5 text-bronze" />
                        <div>
                          <div className="text-xs text-taupe">Accommodation</div>
                          <div className="font-medium text-umber">{day.accommodation}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Utensils className="h-5 w-5 text-bronze" />
                        <div>
                          <div className="text-xs text-taupe">Meals</div>
                          <div className="font-medium text-umber">{day.meals.join(', ')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
