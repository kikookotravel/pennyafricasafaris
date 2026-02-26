const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');

export const API_ENDPOINTS = {
  emailCapture: `${API_BASE_URL}/api/email-capture`,
  tourInquiry: `${API_BASE_URL}/api/tour-inquiry`,
};
