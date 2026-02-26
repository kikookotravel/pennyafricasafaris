import type { Metadata } from 'next';
import Script from 'next/script';
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
      <body>
        {children}
        <Script src="https://plausible.io/js/pa-ldbxEvO_hwzX19O1rX-JC.js" strategy="afterInteractive" />
        <Script id="plausible-init" strategy="afterInteractive">{`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}</Script>
      </body>
    </html>
  );
}
