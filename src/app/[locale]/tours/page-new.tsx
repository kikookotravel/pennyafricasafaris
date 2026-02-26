'use client';

import { useState, useMemo } from 'react';
import { Tour } from '@/types/tour';
import { TourFilters, TourFilterOptions } from '@/components/tour/TourFilters';
import { TourCard } from '@/components/tour/TourCard';
import { Button } from '@/components/ui/button';
import { Grid3x3, List } from 'lucide-react';

interface ToursPageClientProps {
  tours: Tour[];
}

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'duration-asc' | 'duration-desc';

export function ToursPageClient({ tours }: ToursPageClientProps) {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [filters, setFilters] = useState<TourFilterOptions>({
    search: '',
    categories: [],
    durations: [],
    difficulties: [],
    priceRange: [0, 10000],
  });

  // Filter tours
  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch =
          tour.title.toLowerCase().includes(searchLower) ||
          tour.description.toLowerCase().includes(searchLower) ||
          tour.tagline.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.categories.length > 0) {
        if (!filters.categories.includes(tour.category)) return false;
      }

      // Duration filter
      if (filters.durations.length > 0) {
        const matchesDuration = filters.durations.some((range) => {
          if (range === '1-3') return tour.duration >= 1 && tour.duration <= 3;
          if (range === '4-7') return tour.duration >= 4 && tour.duration <= 7;
          if (range === '8-14') return tour.duration >= 8 && tour.duration <= 14;
          if (range === '14+') return tour.duration >= 14;
          return false;
        });
        if (!matchesDuration) return false;
      }

      // Difficulty filter
      if (filters.difficulties.length > 0) {
        if (!filters.difficulties.includes(tour.difficulty)) return false;
      }

      // Price filter
      if (tour.pricing.from < filters.priceRange[0] || tour.pricing.from > filters.priceRange[1]) {
        return false;
      }

      return true;
    });
  }, [tours, filters]);

  // Sort tours
  const sortedTours = useMemo(() => {
    const sorted = [...filteredTours];

    switch (sortBy) {
      case 'featured':
        return sorted.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
      case 'price-asc':
        return sorted.sort((a, b) => a.pricing.from - b.pricing.from);
      case 'price-desc':
        return sorted.sort((a, b) => b.pricing.from - a.pricing.from);
      case 'duration-asc':
        return sorted.sort((a, b) => a.duration - b.duration);
      case 'duration-desc':
        return sorted.sort((a, b) => b.duration - a.duration);
      default:
        return sorted;
    }
  }, [filteredTours, sortBy]);

  const clearFilters = () => {
    setFilters({
      search: '',
      categories: [],
      durations: [],
      difficulties: [],
      priceRange: [0, 10000],
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-umber">Our Safari Tours</h1>
          <p className="text-lg text-taupe max-w-2xl mx-auto">
            Explore Uganda's incredible wildlife and landscapes with our expertly crafted safaris
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <TourFilters
              filters={filters}
              onFilterChange={setFilters}
              onClearFilters={clearFilters}
              resultCount={sortedTours.length}
              totalCount={tours.length}
            />
          </aside>

          {/* Tours Grid/List */}
          <main className="flex-1">
            {/* Sort and View Options */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <label htmlFor="sort" className="text-sm font-medium text-umber">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-bronze focus:border-bronze"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="duration-asc">Duration: Shortest First</option>
                  <option value="duration-desc">Duration: Longest First</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={view === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setView('grid')}
                  className={view === 'grid' ? 'bg-bronze' : ''}
                >
                  <Grid3x3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={view === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setView('list')}
                  className={view === 'list' ? 'bg-bronze' : ''}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Tours Display */}
            {sortedTours.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-taupe mb-4">No tours match your filters</p>
                <Button
                  onClick={clearFilters}
                  variant="outline"
                  className="border-bronze text-bronze hover:bg-bronze hover:text-white"
                >
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div
                className={
                  view === 'grid'
                    ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'flex flex-col gap-6'
                }
              >
                {sortedTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} view={view} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
