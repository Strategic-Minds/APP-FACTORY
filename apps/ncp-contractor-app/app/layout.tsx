import './globals.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://ncp-contractor-app.vercel.app'),
  title: { default: 'National Concrete Polishing Contractor App', template: '%s | NCP' },
  description: 'Premium contractor presentation app for National Concrete Polishing.',
  applicationName: 'NCP Contractor App',
  manifest: '/manifest.webmanifest',
  icons: { icon: '/favicon.ico' },
  appleWebApp: { capable: true, statusBarStyle: 'black-translucent', title: 'NCP' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: '#C9A227',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
