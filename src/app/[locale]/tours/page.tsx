import { getAllTours } from '@/lib/tours';
import { ToursPageClient } from './page-new';

export default async function ToursPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const tours = await getAllTours(locale);

  return <ToursPageClient tours={tours} />;
}
