import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import NcpAppShell from '@/components/NcpAppShell';
import { screenFromSlug } from '@/lib/screens';

export const dynamic = 'force-static';

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const screen = screenFromSlug(slug);
  if (!screen) return {};
  return {
    title: screen.title,
    description: screen.description,
    alternates: { canonical: screen.path },
    openGraph: {
      title: screen.title,
      description: screen.description,
      type: 'website',
      images: [{ url: screen.imageUrl, width: 941, height: 1672, alt: screen.description }],
    },
    twitter: { card: 'summary_large_image', title: screen.title, description: screen.description, images: [screen.imageUrl] },
  };
}

export default async function ApprovedScreenPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const screen = screenFromSlug(slug);
  if (!screen) notFound();
  return <NcpAppShell screen={screen} />;
}
