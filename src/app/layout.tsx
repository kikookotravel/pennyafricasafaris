import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Penny Africa Safaris | Affordable Uganda Safari Tours',
  description: 'Experience Uganda\'s breathtaking wildlife and landscapes with expert local guidance. Affordable trips, extraordinary memories.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
