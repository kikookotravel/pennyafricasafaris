'use client';

import { useState } from 'react';
import { Tour } from '@/types/tour';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Calendar, Mail, Phone, User, Users } from 'lucide-react';
import { API_ENDPOINTS } from '@/lib/api';

interface TourBookingCTAProps {
  tour: Tour;
}

export function TourBookingCTA({ tour }: TourBookingCTAProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '',
    date: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(API_ENDPOINTS.tourInquiry, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tourId: tour.id,
          tourTitle: tour.title,
        }),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        travelers: '',
        date: '',
        message: '',
      });
    } catch (error) {
      alert('Failed to send inquiry. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section id="book-now" className="py-16 bg-bronze text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-bronze"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-3">Inquiry Sent!</h3>
            <p className="text-lg text-cream mb-6">
              Thank you for your interest in the {tour.title}. Ivan will get back to you within
              24 hours with a detailed quote and answer any questions you have.
            </p>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-bronze"
              onClick={() => setSuccess(false)}
            >
              Send Another Inquiry
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book-now" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-umber mb-3">Ready to Book This Safari?</h2>
            <p className="text-lg text-taupe">
              Send us your details and we'll get back to you with a personalized quote within 24
              hours
            </p>
          </div>

          <Card className="border-2 border-bronze/20">
            <CardHeader className="bg-cream/30">
              <h3 className="text-xl font-semibold text-umber">Tour Inquiry Form</h3>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                      <User className="h-4 w-4 text-bronze" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                      <Mail className="h-4 w-4 text-bronze" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                      <Phone className="h-4 w-4 text-bronze" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  <div>
                    <Label htmlFor="travelers" className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-bronze" />
                      Number of Travelers *
                    </Label>
                    <Input
                      id="travelers"
                      type="number"
                      required
                      min="1"
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      placeholder="2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="date" className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-bronze" />
                      Preferred Travel Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2 block">
                    Additional Questions or Requests
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about any special requirements, dietary restrictions, or questions you have..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-bronze hover:bg-bronze-dark text-white text-lg"
                >
                  {loading ? 'Sending...' : 'Send Inquiry'}
                </Button>

                <p className="text-sm text-taupe text-center">
                  We'll respond within 24 hours. You can also reach us on WhatsApp at{' '}
                  <a href="https://wa.me/256785698040" className="text-bronze hover:underline">
                    +256 785 698040
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
