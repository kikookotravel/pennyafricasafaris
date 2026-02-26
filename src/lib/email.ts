import { Resend } from 'resend';

const FROM_EMAIL = 'Penny Africa Safaris <hello@pennyafricasafaris.travel>';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'hello@pennyafricasafaris.travel';
const CC_EMAIL = 'alex@passportcreative.co';

// ─── Tour Inquiry ─────────────────────────────────────────────────────────────

export interface TourInquiryData {
  name: string;
  email: string;
  phone?: string;
  travelers: string;
  date?: string;
  message?: string;
  tourId: string;
  tourTitle: string;
}

export async function sendTourInquiryEmails(data: TourInquiryData) {
  const { name, email, phone, travelers, date, message, tourTitle } = data;

  await Promise.all([
    // Admin notification
    getResend().emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      cc: CC_EMAIL,
      replyTo: email,
      subject: `New Tour Inquiry — ${tourTitle}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #3d2b1f;">
          <div style="background: #CD7F32; padding: 24px 32px;">
            <h1 style="margin: 0; color: #fff; font-size: 22px; font-weight: bold;">New Tour Inquiry</h1>
            <p style="margin: 4px 0 0; color: #f5f0e8; font-size: 15px;">${tourTitle}</p>
          </div>
          <div style="padding: 32px; background: #fff; border: 1px solid #e8e0d5;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #8B6914; font-weight: bold; width: 140px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #8B6914; font-weight: bold;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #CD7F32;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 8px 0; color: #8B6914; font-weight: bold;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #CD7F32;">${phone}</a></td></tr>` : ''}
              <tr><td style="padding: 8px 0; color: #8B6914; font-weight: bold;">Travellers</td><td style="padding: 8px 0;">${travelers}</td></tr>
              ${date ? `<tr><td style="padding: 8px 0; color: #8B6914; font-weight: bold;">Preferred Date</td><td style="padding: 8px 0;">${date}</td></tr>` : ''}
              <tr><td style="padding: 8px 0; color: #8B6914; font-weight: bold;">Tour</td><td style="padding: 8px 0;">${tourTitle}</td></tr>
            </table>
            ${message ? `
            <div style="margin-top: 24px; padding: 16px; background: #faf8f5; border-left: 3px solid #CD7F32; border-radius: 2px;">
              <p style="margin: 0 0 8px; color: #8B6914; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
              <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
            </div>` : ''}
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e8e0d5;">
              <a href="mailto:${email}?subject=Re: Your enquiry about ${encodeURIComponent(tourTitle)}" style="display: inline-block; background: #CD7F32; color: #fff; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: bold;">Reply to ${name}</a>
            </div>
          </div>
          <p style="padding: 16px 32px; margin: 0; font-size: 12px; color: #9b8b7a; background: #faf8f5;">Penny Africa Safaris · Entebbe, Uganda</p>
        </div>
      `,
    }),

    // Customer confirmation
    getResend().emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `We've received your enquiry — ${tourTitle}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #3d2b1f;">
          <div style="background: #CD7F32; padding: 24px 32px;">
            <h1 style="margin: 0; color: #fff; font-size: 22px; font-weight: bold;">Penny Africa Safaris</h1>
            <p style="margin: 4px 0 0; color: #f5f0e8; font-size: 14px;">The Pearl of Africa, Delivered Personally</p>
          </div>
          <div style="padding: 32px; background: #fff; border: 1px solid #e8e0d5;">
            <p style="font-size: 18px; margin: 0 0 16px;">Dear ${name},</p>
            <p style="line-height: 1.7; margin: 0 0 16px;">Thank you for your enquiry about our <strong>${tourTitle}</strong>. We've received your message and will be in touch within 24 hours — usually much sooner.</p>
            <p style="line-height: 1.7; margin: 0 0 24px;">In the meantime, if you have an urgent question or would prefer to chat directly, Ivan is available on WhatsApp:</p>
            <div style="text-align: center; margin: 0 0 24px;">
              <a href="https://wa.me/256785698040" style="display: inline-block; background: #25D366; color: #fff; padding: 12px 28px; border-radius: 4px; text-decoration: none; font-weight: bold; font-size: 15px;">Chat on WhatsApp</a>
            </div>
            <div style="padding: 20px; background: #faf8f5; border-radius: 4px; margin: 0 0 24px;">
              <p style="margin: 0 0 8px; font-weight: bold; color: #8B6914;">Your enquiry summary:</p>
              <p style="margin: 0; line-height: 1.8; font-size: 14px;">
                <strong>Tour:</strong> ${tourTitle}<br>
                <strong>Travellers:</strong> ${travelers}<br>
                ${date ? `<strong>Preferred dates:</strong> ${date}<br>` : ''}
                ${message ? `<strong>Your message:</strong> ${message.replace(/\n/g, '<br>')}` : ''}
              </p>
            </div>
            <p style="line-height: 1.7; margin: 0; color: #6b5744;">We look forward to helping you plan an unforgettable African adventure.</p>
            <p style="margin: 16px 0 0;">Warm regards,<br><strong>Ivan & the Penny Africa Safaris team</strong></p>
          </div>
          <div style="padding: 16px 32px; background: #faf8f5; border-top: 1px solid #e8e0d5;">
            <p style="margin: 0; font-size: 12px; color: #9b8b7a;">Penny Africa Safaris · Entebbe, Uganda · <a href="mailto:hello@pennyafricasafaris.travel" style="color: #CD7F32;">hello@pennyafricasafaris.travel</a></p>
          </div>
        </div>
      `,
    }),
  ]);
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  tourInterest?: string;
  message: string;
}

export async function sendContactFormEmails(data: ContactFormData) {
  const { name, email, phone, tourInterest, message } = data;

  await Promise.all([
    // Admin notification
    getResend().emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      cc: CC_EMAIL,
      replyTo: email,
      subject: `New Contact Message — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #3d2b1f;">
          <div style="background: #CD7F32; padding: 24px 32px;">
            <h1 style="margin: 0; color: #fff; font-size: 22px; font-weight: bold;">New Contact Message</h1>
          </div>
          <div style="padding: 32px; background: #fff; border: 1px solid #e8e0d5;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #8B6914; font-weight: bold; width: 140px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #8B6914; font-weight: bold;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #CD7F32;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 8px 0; color: #8B6914; font-weight: bold;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #CD7F32;">${phone}</a></td></tr>` : ''}
              ${tourInterest ? `<tr><td style="padding: 8px 0; color: #8B6914; font-weight: bold;">Tour Interest</td><td style="padding: 8px 0;">${tourInterest}</td></tr>` : ''}
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #faf8f5; border-left: 3px solid #CD7F32;">
              <p style="margin: 0 0 8px; color: #8B6914; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
              <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e8e0d5;">
              <a href="mailto:${email}" style="display: inline-block; background: #CD7F32; color: #fff; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: bold;">Reply to ${name}</a>
            </div>
          </div>
          <p style="padding: 16px 32px; margin: 0; font-size: 12px; color: #9b8b7a; background: #faf8f5;">Penny Africa Safaris · Entebbe, Uganda</p>
        </div>
      `,
    }),

    // Customer confirmation
    getResend().emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `Thanks for getting in touch — Penny Africa Safaris`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #3d2b1f;">
          <div style="background: #CD7F32; padding: 24px 32px;">
            <h1 style="margin: 0; color: #fff; font-size: 22px; font-weight: bold;">Penny Africa Safaris</h1>
            <p style="margin: 4px 0 0; color: #f5f0e8; font-size: 14px;">The Pearl of Africa, Delivered Personally</p>
          </div>
          <div style="padding: 32px; background: #fff; border: 1px solid #e8e0d5;">
            <p style="font-size: 18px; margin: 0 0 16px;">Dear ${name},</p>
            <p style="line-height: 1.7; margin: 0 0 16px;">Thank you for reaching out to Penny Africa Safaris. We've received your message and will get back to you within 24 hours.</p>
            <p style="line-height: 1.7; margin: 0 0 24px;">For a faster response, feel free to WhatsApp Ivan directly:</p>
            <div style="text-align: center; margin: 0 0 24px;">
              <a href="https://wa.me/256785698040" style="display: inline-block; background: #25D366; color: #fff; padding: 12px 28px; border-radius: 4px; text-decoration: none; font-weight: bold; font-size: 15px;">Chat on WhatsApp</a>
            </div>
            <p style="line-height: 1.7; margin: 0; color: #6b5744;">We look forward to helping you discover the Pearl of Africa.</p>
            <p style="margin: 16px 0 0;">Warm regards,<br><strong>Ivan & the Penny Africa Safaris team</strong></p>
          </div>
          <div style="padding: 16px 32px; background: #faf8f5; border-top: 1px solid #e8e0d5;">
            <p style="margin: 0; font-size: 12px; color: #9b8b7a;">Penny Africa Safaris · Entebbe, Uganda · <a href="mailto:hello@pennyafricasafaris.travel" style="color: #CD7F32;">hello@pennyafricasafaris.travel</a></p>
          </div>
        </div>
      `,
    }),
  ]);
}

// ─── Email Capture (Newsletter / Lead Magnet) ─────────────────────────────────

export async function sendEmailCaptureEmails(email: string) {
  await Promise.all([
    // Admin notification
    getResend().emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      cc: CC_EMAIL,
      subject: `New Email Subscriber — ${email}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #3d2b1f;">
          <div style="background: #CD7F32; padding: 24px 32px;">
            <h1 style="margin: 0; color: #fff; font-size: 20px;">New Subscriber</h1>
          </div>
          <div style="padding: 24px 32px; background: #fff; border: 1px solid #e8e0d5;">
            <p style="margin: 0;"><strong>${email}</strong> has subscribed for updates.</p>
          </div>
        </div>
      `,
    }),

    // Welcome email to subscriber
    getResend().emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `Welcome to Penny Africa Safaris`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #3d2b1f;">
          <div style="background: #CD7F32; padding: 24px 32px;">
            <h1 style="margin: 0; color: #fff; font-size: 22px; font-weight: bold;">Penny Africa Safaris</h1>
            <p style="margin: 4px 0 0; color: #f5f0e8; font-size: 14px;">The Pearl of Africa, Delivered Personally</p>
          </div>
          <div style="padding: 32px; background: #fff; border: 1px solid #e8e0d5;">
            <p style="font-size: 18px; margin: 0 0 16px;">Welcome!</p>
            <p style="line-height: 1.7; margin: 0 0 16px;">Thank you for subscribing to Penny Africa Safaris. You'll be the first to hear about new itineraries, travel tips, and special offers from Uganda and East Africa.</p>
            <p style="line-height: 1.7; margin: 0 0 24px;">Ready to start planning? Browse our safaris or reach out to Ivan directly:</p>
            <div style="text-align: center; margin: 0 0 16px;">
              <a href="https://pennyafricasafaris.travel/tours" style="display: inline-block; background: #CD7F32; color: #fff; padding: 12px 28px; border-radius: 4px; text-decoration: none; font-weight: bold; font-size: 15px; margin-right: 8px;">View Our Tours</a>
              <a href="https://wa.me/256785698040" style="display: inline-block; background: #25D366; color: #fff; padding: 12px 28px; border-radius: 4px; text-decoration: none; font-weight: bold; font-size: 15px;">WhatsApp Ivan</a>
            </div>
            <p style="margin: 24px 0 0; color: #6b5744; line-height: 1.7;">We look forward to welcoming you to the Pearl of Africa.</p>
            <p style="margin: 16px 0 0;">Warm regards,<br><strong>Ivan & the Penny Africa Safaris team</strong></p>
          </div>
          <div style="padding: 16px 32px; background: #faf8f5; border-top: 1px solid #e8e0d5;">
            <p style="margin: 0; font-size: 12px; color: #9b8b7a;">Penny Africa Safaris · Entebbe, Uganda · <a href="mailto:hello@pennyafricasafaris.travel" style="color: #CD7F32;">hello@pennyafricasafaris.travel</a></p>
          </div>
        </div>
      `,
    }),
  ]);
}
