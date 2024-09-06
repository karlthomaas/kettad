import type { Metadata } from 'next'

import { SearchPage } from '@/components/pages/search-page'

export interface DiscType {
  id: string
  name: string
  brand: string
  category: string
  speed: string
  glide: string
  turn: string
  fade: string
  stability: string
  link: string
  pic: string
  name_slug: string
  brand_slug: string
  category_slug: string
  stability_slug: string
  color: string
  background_color: string
}

export const metadata: Metadata = {
  title: 'Kettad | Search Discs',
  description:
    'Search and compare over 1000 disc golf discs. Find the perfect disc for your game with detailed stats and specifications.',
  keywords: 'disc golf, disc search, disc comparison, disc stats, disc database',
  openGraph: {
    title: 'Kettad | Search Discs',
    description:
      'Find and compare disc golf discs with our comprehensive search tool. Access detailed stats for over 1000 discs.',
    type: 'website',
    url: 'https://kettad.ee/search',
  },
}

export default async function Page() {
  const response = await fetch('https://discit-api.fly.dev/disc', {
    next: { revalidate: 3600 }, // Revalidate data every hour
  })
  const results: DiscType[] = await response.json()

  return <SearchPage results={results} key='search-page' />
}
