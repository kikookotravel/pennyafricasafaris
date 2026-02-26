'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Tour } from '@/types/tour';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TourGalleryProps {
  tour: Tour;
}

export function TourGallery({ tour }: TourGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % tour.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + tour.images.length) % tour.images.length);
  };

  return (
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-umber mb-6 text-center">Photo Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {tour.images.slice(0, 8).map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="relative aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity group"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    View
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-white hover:bg-white/20"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div className="max-w-6xl max-h-[90vh] relative px-12">
            <Image
              src={tour.images[currentImage].url}
              alt={tour.images[currentImage].alt}
              width={1200}
              height={800}
              className="object-contain max-h-[80vh]"
            />
            {tour.images[currentImage].caption && (
              <p className="text-white text-center mt-4">
                {tour.images[currentImage].caption}
              </p>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-white hover:bg-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
            {currentImage + 1} / {tour.images.length}
          </div>
        </div>
      )}
    </>
  );
}
