'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download } from 'lucide-react';
import { API_ENDPOINTS } from '@/lib/api';

export function EmailCapture() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const t = useTranslations('homepage.emailCapture');
  const common = useTranslations('common');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(API_ENDPOINTS.emailCapture, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setSuccess(true);
      setEmail('');
    } catch (err) {
      setError(common('error'));
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section className="py-16 bg-bronze text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Download className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">{t('successTitle')}</h2>
            <p className="text-lg">{t('successMessage')}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-bronze text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Download className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-lg mb-8 text-cream">{t('subtitle')}</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder={t('placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 text-gray-900"
            />
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="bg-white text-bronze hover:bg-cream"
            >
              {loading ? common('loading') : t('button')}
            </Button>
          </form>

          {error && (
            <p className="mt-4 text-red-200">{error}</p>
          )}

          <p className="mt-4 text-sm text-cream-dark">{t('privacy')}</p>
        </div>
      </div>
    </section>
  );
}
