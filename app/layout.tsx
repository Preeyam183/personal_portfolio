import type { Metadata } from 'next';
import './globals.css';
import './immersive.css';

const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL || 'https://preeyam183.github.io';
const sitePath = process.env.NEXT_PUBLIC_BASE_PATH || '/personal_portfolio';
const siteUrl = new URL(`${sitePath}/`, siteOrigin);
const title = 'Preeyam Shah | Software Engineering & AI/ML';
const description = 'CS & Data Science at Rutgers University–New Brunswick. Explore Preeyam Shah’s work in software engineering, AI, machine learning, and data.';
// A versioned URL helps sharing services fetch the new hero image.
const preview = {
 url: new URL('hero-social-v2.png', siteUrl).href,
 width: 1200,
 height: 630,
 type: 'image/png',
 alt: 'Preeyam Shah’s portfolio hero: yellow lettering, blue underwater scenery, and floating jellyfish.',
};
export const metadata: Metadata = {
 metadataBase: siteUrl,
 title,
 description,
 alternates: { canonical: siteUrl.href },
 openGraph: {
  type: 'website',
  url: siteUrl.href,
  siteName: 'Preeyam Shah',
  locale: 'en_US',
  title,
  description,
  images: [preview],
 },
 twitter: { card: 'summary_large_image', title, description, images: [preview] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body>{children}</body></html>;
}
