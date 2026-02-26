import { NextRequest, NextResponse } from 'next/server';
import { sendContactFormEmails } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, tourInterest, message, website } = body;

    // Honeypot: bots fill this hidden field, humans don't
    if (website) {
      return NextResponse.json({ success: true }); // silently discard
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await sendContactFormEmails({ name, email, phone, tourInterest, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
