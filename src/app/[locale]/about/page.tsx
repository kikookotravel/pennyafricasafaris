'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Heart, Shield, Users, MapPin, Star } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');
  const locale = useLocale();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/ivan-with-travelers.jpg"
            alt="Ivan with happy travelers"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-cream">
              {t('heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Ivan's Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-umber mb-6">{t('meetIvanTitle')}</h2>
                <p className="text-lg text-umber mb-4">
                  {t('ivanBio1')}
                </p>
                <p className="text-umber mb-4">
                  {t('ivanBio2')}
                </p>
                <p className="text-umber mb-4">
                  {t('ivanBio3')}
                </p>
                <p className="text-umber mb-4">
                  {t('ivanBio4')}
                </p>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/about/ivan-portrait.jpg"
                  alt="Ivan Akampurira, Safari Guide"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-umber mb-12 text-center">{t('whyTravelTitle')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-bronze" />
                  </div>
                  <h3 className="text-xl font-semibold text-umber mb-3">{t('reason1Title')}</h3>
                  <p className="text-taupe">
                    {t('reason1Desc')}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-bronze" />
                  </div>
                  <h3 className="text-xl font-semibold text-umber mb-3">{t('reason2Title')}</h3>
                  <p className="text-taupe">
                    {t('reason2Desc')}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-bronze" />
                  </div>
                  <h3 className="text-xl font-semibold text-umber mb-3">{t('reason3Title')}</h3>
                  <p className="text-taupe">
                    {t('reason3Desc')}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-bronze" />
                  </div>
                  <h3 className="text-xl font-semibold text-umber mb-3">{t('reason4Title')}</h3>
                  <p className="text-taupe">
                    {t('reason4Desc')}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-bronze" />
                  </div>
                  <h3 className="text-xl font-semibold text-umber mb-3">{t('reason5Title')}</h3>
                  <p className="text-taupe">
                    {t('reason5Desc')}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-bronze" />
                  </div>
                  <h3 className="text-xl font-semibold text-umber mb-3">{t('reason6Title')}</h3>
                  <p className="text-taupe">
                    {t('reason6Desc')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery with Travelers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-umber mb-4 text-center">
              {t('galleryTitle')}
            </h2>
            <p className="text-lg text-taupe text-center mb-12 max-w-2xl mx-auto">
              {t('gallerySubtitle')}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/about/ivan-with-travelers.jpg"
                  alt="Ivan celebrating with travelers"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/about/ivan-briefing.jpg"
                  alt="Ivan briefing travelers before trek"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/about/happy-travelers.jpg"
                  alt="Happy travelers on safari"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden md:col-span-2">
                <Image
                  src="/images/about/ivan-guide.jpg"
                  alt="Ivan as safari guide"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/tours/gorilla-hero.jpg"
                  alt="Gorilla encounter"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-umber text-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('missionTitle')}</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-bronze mb-3">
                  {t('mission1Title')}
                </h3>
                <p className="text-cream-dark">
                  {t('mission1Desc')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-bronze mb-3">
                  {t('mission2Title')}
                </h3>
                <p className="text-cream-dark">
                  {t('mission2Desc')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-bronze mb-3">
                  {t('mission3Title')}
                </h3>
                <p className="text-cream-dark">
                  {t('mission3Desc')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-bronze mb-3">
                  {t('mission4Title')}
                </h3>
                <p className="text-cream-dark">
                  {t('mission4Desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Trust */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-umber mb-8">{t('credentialsTitle')}</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow">
                <Award className="h-12 w-12 text-bronze mx-auto mb-4" />
                <h3 className="font-semibold text-umber mb-2">{t('credential1')}</h3>
                <p className="text-taupe text-sm">{t('credential1Desc')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <Shield className="h-12 w-12 text-bronze mx-auto mb-4" />
                <h3 className="font-semibold text-umber mb-2">{t('credential2')}</h3>
                <p className="text-taupe text-sm">{t('credential2Desc')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <Users className="h-12 w-12 text-bronze mx-auto mb-4" />
                <h3 className="font-semibold text-umber mb-2">{t('credential3')}</h3>
                <p className="text-taupe text-sm">{t('credential3Desc')}</p>
              </div>
            </div>
            <p className="text-umber mb-6">
              {t('reviewText')}{' '}
              <a
                href="https://www.tripadvisor.com/Attraction_Review-g298044-d27461260-Reviews-Penny_Africa_Safaris-Entebbe_Central_Region.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bronze hover:underline font-semibold"
              >
                {t('reviewLink')}
              </a>
              {' '}{t('reviewText2')}
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-bronze text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('ctaTitle')}
            </h2>
            <p className="text-xl text-cream mb-8">
              {t('ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-bronze hover:bg-cream text-lg"
              >
                <Link href={`/${locale}/tours`}>{t('ctaButton1')}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-bronze text-lg"
              >
                <Link href={`/${locale}/contact`}>{t('ctaButton2')}</Link>
              </Button>
            </div>
            <p className="mt-6 text-cream">
              {t('whatsappText')}{' '}
              <a
                href="https://wa.me/256785698040"
                className="text-white hover:underline font-semibold"
              >
                +256 785 698040
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
