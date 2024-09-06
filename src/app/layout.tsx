import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Navbar } from '@/components/molecules/navbar'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kettad | Lookup Disc Stats',
  description:
    'Look up and compare disc golf disc stats. Find the perfect disc for your game with our comprehensive database of over 1000 discs.',
  keywords: 'kettad, disc golf, disc stats, disc lookup, disc comparison, disc database',
  openGraph: {
    title: 'Kettad | Lookup Disc Stats',
    description:
      'Look up and compare disc golf disc stats. Find the perfect disc for your game with our comprehensive database.',
    type: 'website',
    url: 'https://kettad.ee',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='index, follow' />
      </head>
      <body className={poppins.className}>
        <Navbar />
        <main className='container my-3'>{children}</main>
      </body>
    </html>
  )
}
