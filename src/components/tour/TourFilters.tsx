'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, SlidersHorizontal, X } from 'lucide-react';

export interface TourFilterOptions {
  search: string;
  categories: string[];
  durations: string[];
  difficulties: string[];
  priceRange: [number, number];
}

interface TourFiltersProps {
  filters: TourFilterOptions;
  onFilterChange: (filters: TourFilterOptions) => void;
  onClearFilters: () => void;
  resultCount: number;
  totalCount: number;
}

const categories = [
  { value: 'primates', label: 'Primates' },
  { value: 'wildlife', label: 'Wildlife' },
  { value: 'cultural', label: 'Cultural' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'camping', label: 'Camping' },
];

const durations = [
  { value: '1-3', label: '1-3 Days' },
  { value: '4-7', label: '4-7 Days' },
  { value: '8-14', label: '8-14 Days' },
  { value: '14+', label: '14+ Days' },
];

const difficulties = [
  { value: 'easy', label: 'Easy' },
  { value: 'moderate', label: 'Moderate' },
  { value: 'challenging', label: 'Challenging' },
];

export function TourFilters({
  filters,
  onFilterChange,
  onClearFilters,
  resultCount,
  totalCount,
}: TourFiltersProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleCategory = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    onFilterChange({ ...filters, categories: newCategories });
  };

  const toggleDuration = (duration: string) => {
    const newDurations = filters.durations.includes(duration)
      ? filters.durations.filter((d) => d !== duration)
      : [...filters.durations, duration];
    onFilterChange({ ...filters, durations: newDurations });
  };

  const toggleDifficulty = (difficulty: string) => {
    const newDifficulties = filters.difficulties.includes(difficulty)
      ? filters.difficulties.filter((d) => d !== difficulty)
      : [...filters.difficulties, difficulty];
    onFilterChange({ ...filters, difficulties: newDifficulties });
  };

  const hasActiveFilters =
    filters.search ||
    filters.categories.length > 0 ||
    filters.durations.length > 0 ||
    filters.difficulties.length > 0;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <Label htmlFor="search" className="mb-2 block font-semibold">
          Search Tours
        </Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-taupe" />
          <Input
            id="search"
            placeholder="Search by name or destination..."
            value={filters.search}
            onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
            className="pl-10"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <Label className="mb-3 block font-semibold">Safari Type</Label>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category.value}
              className="flex items-center gap-2 cursor-pointer hover:text-bronze"
            >
              <input
                type="checkbox"
                checked={filters.categories.includes(category.value)}
                onChange={() => toggleCategory(category.value)}
                className="rounded border-gray-300 text-bronze focus:ring-bronze"
              />
              <span>{category.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Duration Filter */}
      <div>
        <Label className="mb-3 block font-semibold">Duration</Label>
        <div className="space-y-2">
          {durations.map((duration) => (
            <label
              key={duration.value}
              className="flex items-center gap-2 cursor-pointer hover:text-bronze"
            >
              <input
                type="checkbox"
                checked={filters.durations.includes(duration.value)}
                onChange={() => toggleDuration(duration.value)}
                className="rounded border-gray-300 text-bronze focus:ring-bronze"
              />
              <span>{duration.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Difficulty Filter */}
      <div>
        <Label className="mb-3 block font-semibold">Difficulty</Label>
        <div className="space-y-2">
          {difficulties.map((difficulty) => (
            <label
              key={difficulty.value}
              className="flex items-center gap-2 cursor-pointer hover:text-bronze"
            >
              <input
                type="checkbox"
                checked={filters.difficulties.includes(difficulty.value)}
                onChange={() => toggleDifficulty(difficulty.value)}
                className="rounded border-gray-300 text-bronze focus:ring-bronze"
              />
              <span className="capitalize">{difficulty.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <Label className="mb-3 block font-semibold">Price Range (USD)</Label>
        <div className="space-y-3">
          <div className="flex gap-3">
            <Input
              type="number"
              placeholder="Min"
              value={filters.priceRange[0] || ''}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  priceRange: [parseInt(e.target.value) || 0, filters.priceRange[1]],
                })
              }
            />
            <Input
              type="number"
              placeholder="Max"
              value={filters.priceRange[1] || ''}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  priceRange: [filters.priceRange[0], parseInt(e.target.value) || 10000],
                })
              }
            />
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          onClick={onClearFilters}
          className="w-full border-bronze text-bronze hover:bg-bronze hover:text-white"
        >
          <X className="h-4 w-4 mr-2" />
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <>
      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-taupe">
          Showing <span className="font-semibold text-umber">{resultCount}</span> of{' '}
          <span className="font-semibold text-umber">{totalCount}</span> tours
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Desktop Filters */}
      <Card className="hidden lg:block">
        <CardHeader>
          <CardTitle className="text-lg">Filter Tours</CardTitle>
        </CardHeader>
        <CardContent>
          <FilterContent />
        </CardContent>
      </Card>

      {/* Mobile Filters */}
      {mobileFiltersOpen && (
        <Card className="lg:hidden mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Filter Tours</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <FilterContent />
          </CardContent>
        </Card>
      )}
    </>
  );
}
