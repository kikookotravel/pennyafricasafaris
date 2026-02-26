'use client';

import { useTranslations } from 'next-intl';
import { Award, DollarSign, Heart, MapPin, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    key: 'localExpertise',
  },
  {
    icon: DollarSign,
    key: 'budgetFriendly',
  },
  {
    icon: Award,
    key: 'certified',
  },
  {
    icon: Heart,
    key: 'personalized',
  },
  {
    icon: Shield,
    key: 'safety',
  },
  {
    icon: Users,
    key: 'smallGroups',
  },
];

export function WhyChooseUs() {
  const t = useTranslations('homepage.whyChooseUs');

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-umber mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-taupe max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.key}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-bronze" />
                </div>
                <h3 className="text-xl font-semibold text-umber mb-2">
                  {t(`${feature.key}.title`)}
                </h3>
                <p className="text-taupe">{t(`${feature.key}.description`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
