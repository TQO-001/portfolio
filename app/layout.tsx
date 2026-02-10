import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// We add 'display: swap' and 'preload: false' to prevent the Turbopack build error
const outfit = Outfit({ 
  subsets: ["latin"],
  display: 'swap',
  preload: false 
});

export const metadata: Metadata = {
  // Added your name first for better "Thulani Langa" search ranking
  title: 'Thulani Langa | IT Engineer & Full-Stack Developer',
  description: 'Official portfolio of Thulani Langa, an IT Engineer and Software Developer specializing in Next.js, React, and Cloud Solutions in KZN, South Africa.',
  keywords: ['Thulani Langa', 'Software Developer South Africa', 'IT Engineer KZN', 'Next.js Developer', 'Laughtale'],
  authors: [{ name: 'Thulani Langa' }],
  metadataBase: new URL('https://laughtale.co.za'), // Important for SEO image paths
  openGraph: {
    title: 'Thulani Langa | IT Engineer',
    description: 'Building high-performance web applications and IT infrastructure.',
    url: 'https://laughtale.co.za',
    siteName: 'Thulani Langa Portfolio',
    images: [
      {
        url: '/og-image.png', 
        width: 1200,
        height: 630,
        alt: 'Thulani Langa Portfolio'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thulani Langa | IT Engineer',
    description: 'IT Engineer & Full-Stack Developer Portfolio',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} bg-[#050505] antialiased`}>
        {children}
      </body>
    </html>
  );
}