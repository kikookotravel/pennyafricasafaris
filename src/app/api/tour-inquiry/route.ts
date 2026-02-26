import { NextRequest, NextResponse } from 'next/server';
import { sendTourInquiryEmails } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, travelers, date, message, tourId, tourTitle, website } = body;

    // Honeypot: silently discard bot submissions
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !travelers || !tourId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await sendTourInquiryEmails({ name, email, phone, travelers, date, message, tourId, tourTitle });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Tour inquiry error:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry' },
      { status: 500 }
    );
  }
}
