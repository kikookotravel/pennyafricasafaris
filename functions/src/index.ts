import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import type { Request, Response } from 'express';

admin.initializeApp();

const applyCors = (req: Request, res: Response) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return true;
  }

  return false;
};

export const emailCapture = functions.https.onRequest(async (req, res) => {
  if (applyCors(req, res)) return;

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      res.status(400).json({ error: 'Invalid email address' });
      return;
    }

    console.log('Email capture:', email);

    res.json({ success: true });
  } catch (error) {
    console.error('Email capture error:', error);
    res.status(500).json({ error: 'Failed to process request' });
  }
});

export const tourInquiry = functions.https.onRequest(async (req, res) => {
  if (applyCors(req, res)) return;

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, email, phone, travelers, date, message, tourId, tourTitle } =
      req.body;

    if (!name || !email || !travelers || !tourId) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    console.log('Tour inquiry received:', {
      name,
      email,
      phone,
      travelers,
      date,
      message,
      tourId,
      tourTitle,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Tour inquiry error:', error);
    res.status(500).json({ error: 'Failed to process request' });
  }
});
