import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'National Concrete Polishing | NCP',
    template: '%s | NCP',
  },
  description: 'Premium commercial and industrial floor systems — polished concrete, epoxy coatings, and decorative finishes by National Concrete Polishing.',
  keywords: [
    'polished concrete', 'epoxy flooring', 'commercial flooring',
    'industrial flooring', 'concrete polishing', 'NCP', 'National Concrete Polishing',
    'floor systems', 'metallic epoxy', 'quartz flooring',
  ],
  authors: [{ name: 'National Concrete Polishing' }],
  creator: 'National Concrete Polishing',
  publisher: 'National Concrete Polishing',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://nationalconcretepolishing.com'),
  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/icons/favicon.ico',
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'National Concrete Polishing | NCP',
    description: 'Premium commercial and industrial floor systems.',
    siteName: 'National Concrete Polishing',
    images: [
      {
        url: '/brand/og-image.png',
        width: 1200,
        height: 630,
        alt: 'National Concrete Polishing — NCP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'National Concrete Polishing | NCP',
    description: 'Premium commercial and industrial floor systems.',
    images: ['/brand/twitter-card.png'],
  },
  manifest: '/site.webmanifest',
  themeColor: '#C09030',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}
