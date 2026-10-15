import { assetPath } from '@/lib/assets';
import type { Metadata } from 'next';
import './globals.css';
import './immersive.css';
export const metadata: Metadata = {
 metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
 title: 'Preeyam Shah | Software Engineering & AI/ML',
 description: 'CS & Data Science at Rutgers University–New Brunswick. Explore Preeyam Shah’s work in software engineering, AI, machine learning, and data.',
 openGraph: { title: 'Preeyam Shah', description: 'A little curiosity. A deeper dive. Software Engineering & AI/ML.', images: [{ url: assetPath('/social-preview.png'), width: 1200, height: 630 }] },
 twitter: { card: 'summary_large_image', title: 'Preeyam Shah', images: [assetPath('/social-preview.png')] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body>{children}</body></html>;
}
