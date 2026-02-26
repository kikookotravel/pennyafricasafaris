'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-umber text-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-bronze mb-4">
              Penny Africa Safaris
            </h3>
            <p className="text-cream-dark mb-4">
              {t('tagline')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/pennyafricasafaris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-bronze transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/penny.africa.safaris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-bronze transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/company/penny-africa-safaris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-bronze transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about`} className="text-cream-dark hover:text-bronze transition-colors">
                  {nav('about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/tours`} className="text-cream-dark hover:text-bronze transition-colors">
                  {nav('tours')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/destinations`} className="text-cream-dark hover:text-bronze transition-colors">
                  {nav('destinations')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-cream-dark hover:text-bronze transition-colors">
                  {nav('blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:hello@pennyafricasafaris.travel"
                  className="text-cream-dark hover:text-bronze transition-colors"
                >
                  hello@pennyafricasafaris.travel
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+256705555533"
                    className="block text-cream-dark hover:text-bronze transition-colors"
                  >
                    +256 705 555 533
                  </a>
                  <a
                    href="https://wa.me/256785698040"
                    className="block text-cream-dark hover:text-bronze transition-colors"
                  >
                    +256 785 698 040 (WhatsApp)
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-umber-light mt-8 pt-8 text-center text-cream-dark">
          <p className="mb-2">{t('copyright', { year: currentYear })}</p>
          <p className="text-sm">
            Site managed by{' '}
            <a
              href="https://passportcreative.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bronze hover:text-bronze-light transition-colors underline"
            >
              Passport Creative
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
