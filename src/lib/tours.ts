import { Tour } from '@/types/tour';
import fs from 'fs';
import path from 'path';

export async function getTour(slug: string, locale: string = 'en'): Promise<Tour | null> {
  try {
    const filePath = path.join(
      process.cwd(),
      'src',
      'content',
      'tours',
      locale,
      `${slug}.json`
    );

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const tour: Tour = JSON.parse(fileContents);

    return tour;
  } catch (error) {
    console.error(`Error loading tour ${slug}:`, error);
    return null;
  }
}

export async function getAllTours(locale: string = 'en'): Promise<Tour[]> {
  try {
    const toursDirectory = path.join(
      process.cwd(),
      'src',
      'content',
      'tours',
      locale
    );

    const filenames = fs.readdirSync(toursDirectory);

    const tours = filenames
      .filter((filename) => filename.endsWith('.json'))
      .map((filename) => {
        const filePath = path.join(toursDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents) as Tour;
      })
      .filter((tour) => tour.published);

    return tours;
  } catch (error) {
    console.error('Error loading tours:', error);
    return [];
  }
}

export function formatDuration(days: number): string {
  if (days === 1) return '1 Day';
  return `${days} Days`;
}
