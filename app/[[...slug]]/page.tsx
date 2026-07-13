import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import NcpLaunch from '@/components/NcpLaunch';
import { screens } from '@/lib/screens';

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const key = (slug ?? []).join('/');
  const screen = screens[key];
  if (!screen) return {};
  return { title: screen.title, description: `${screen.title} - National Concrete Polishing`, alternates: { canonical: screen.path } };
}

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const screen = screens[(slug ?? []).join('/')];
  if (!screen) notFound();
  return <NcpLaunch screen={screen} />;
}
