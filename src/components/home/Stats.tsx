'use client';

import { useTranslations } from 'next-intl';

const stats = [
  { key: 'experience', value: '7+' },
  { key: 'tours', value: '100+' },
  { key: 'travelers', value: '500+' },
  { key: 'satisfaction', value: '98%' },
];

export function Stats() {
  const t = useTranslations('homepage.stats');

  return (
    <section className="py-16 bg-umber text-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-bronze mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-cream-dark">
                {t(stat.key)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
