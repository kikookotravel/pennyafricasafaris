'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Send, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourInterest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', tourInterest: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-umber text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('heroTitle')}</h1>
            <p className="text-xl text-cream">
              {t('heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-umber mb-6">{t('formTitle')}</h2>

                    {submitStatus === 'success' && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                        <p className="text-green-800 font-semibold">{t('successTitle')}</p>
                        <p className="text-green-700 text-sm mt-1">
                          {t('successMessage')}
                        </p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-red-800 font-semibold">Oops! Something went wrong.</p>
                        <p className="text-red-700 text-sm mt-1">
                          {t('errorMessage')}
                        </p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-umber mb-2">
                          {t('name')} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-bronze focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-umber mb-2">
                          {t('email')} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-bronze focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-umber mb-2">
                          {t('phone')} (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-bronze focus:border-transparent"
                          placeholder="+1 234 567 8900"
                        />
                      </div>

                      {/* Tour Interest */}
                      <div>
                        <label htmlFor="tourInterest" className="block text-sm font-semibold text-umber mb-2">
                          {t('tourInterest')}
                        </label>
                        <select
                          id="tourInterest"
                          name="tourInterest"
                          value={formData.tourInterest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-bronze focus:border-transparent"
                        >
                          <option value="">Select a tour type...</option>
                          <option value="gorilla-trekking">Gorilla Trekking</option>
                          <option value="primate-safari">Primate Safari</option>
                          <option value="wildlife-safari">Wildlife Safari</option>
                          <option value="cultural-tour">Cultural Tour</option>
                          <option value="adventure-safari">Adventure Safari</option>
                          <option value="custom-tour">Custom Tour</option>
                          <option value="general-inquiry">General Inquiry</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-umber mb-2">
                          {t('message')} *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-bronze focus:border-transparent resize-none"
                          placeholder="Tell us about your travel plans, dates, group size, or any questions you have..."
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-bronze hover:bg-bronze-dark text-white py-6 text-lg font-semibold"
                      >
                        {isSubmitting ? (
                          <>{t('sending')}</>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            {t('submit')}
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information Sidebar */}
              <div className="space-y-6">
                {/* Direct Contact */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-umber mb-4">Contact Information</h3>

                    <div className="space-y-4">
                      {/* Email */}
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-bronze mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-umber">Email</p>
                          <a
                            href="mailto:hello@pennyafricasafaris.travel"
                            className="text-taupe hover:text-bronze transition-colors"
                          >
                            hello@pennyafricasafaris.travel
                          </a>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-bronze mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-umber">Phone</p>
                          <a
                            href="tel:+256705555533"
                            className="text-taupe hover:text-bronze transition-colors"
                          >
                            +256 705 555 533
                          </a>
                          <br />
                          <a
                            href="https://wa.me/256785698040"
                            className="text-taupe hover:text-bronze transition-colors"
                          >
                            +256 785 698 040 (WhatsApp)
                          </a>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-bronze mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-umber">Location</p>
                          <p className="text-taupe">
                            P.O Box 702981, 8leftlane<br />
                            Entebbe, Uganda
                          </p>
                        </div>
                      </div>

                      {/* Office Hours */}
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-bronze mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-umber">Response Time</p>
                          <p className="text-taupe">
                            Within 24 hours<br />
                            (Usually faster!)
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp CTA */}
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-umber mb-3">Prefer WhatsApp?</h3>
                    <p className="text-taupe mb-4">
                      Get instant responses to your questions. Chat with Ivan directly!
                    </p>
                    <a
                      href="https://wa.me/256785698040"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-semibold text-center transition-colors"
                    >
                      <Phone className="inline mr-2 h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-umber mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://facebook.com/pennyafricasafaris"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center hover:bg-bronze hover:text-white transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a
                        href="https://instagram.com/penny.africa.safaris"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center hover:bg-bronze hover:text-white transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href="https://linkedin.com/company/penny-africa-safaris"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center hover:bg-bronze hover:text-white transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-umber mb-8 text-center">Find Us in Entebbe</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19034888474!2d32.37997841640625!3d0.3475759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f0b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kampala, Uganda location map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-umber mb-8 text-center">Common Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-umber mb-2">
                    How quickly will I get a response?
                  </h3>
                  <p className="text-taupe">
                    We typically respond within 24 hours, but most inquiries get answered much faster. For urgent matters, WhatsApp us directly for an immediate response.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-umber mb-2">
                    Can I customize my safari itinerary?
                  </h3>
                  <p className="text-taupe">
                    Absolutely! While we offer pre-designed tours, we specialize in creating custom itineraries tailored to your interests, budget, and travel dates. Just let us know what you're looking for!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-umber mb-2">
                    What information should I include in my inquiry?
                  </h3>
                  <p className="text-taupe">
                    Please share your preferred travel dates, group size, interests (gorilla trekking, wildlife, culture, etc.), and budget range. The more details you provide, the better we can tailor our recommendations!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-umber mb-2">
                    Do you offer group discounts?
                  </h3>
                  <p className="text-taupe">
                    Yes! Our per-person rates decrease with larger groups. Contact us with your group size for a customized quote.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
