import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'InstaEdu - Social Learning for Kids',
  description: 'An Instagram-style social learning platform for children, offering a safe and engaging space for educational content discovery and interaction through short videos, images, and moderated comments.',
  generator: 'v0.app',
  keywords: ['education', 'kids learning', 'social learning', 'safe platform', 'educational videos', 'parental controls'],
  openGraph: {
    title: 'InstaEdu - Social Learning for Kids',
    description: 'A safe, engaging platform for kids to learn through short videos, images, and moderated comments.',
    url: 'https://utopia-ai-prod-1.web.app/projects/wdGXSFyiZMQ4rGJGUejm',
    type: 'website',
    images: [{
      url: 'https://source.unsplash.com/1200x630/?kids,learning,education',
      width: 1200,
      height: 630,
      alt: 'InstaEdu - Social Learning Platform for Kids'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InstaEdu - Social Learning for Kids',
    description: 'A safe, engaging platform for kids to learn through short videos, images, and moderated comments.',
    images: ['https://source.unsplash.com/1200x630/?kids,learning,education']
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
