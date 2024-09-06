import type { Metadata } from 'next'

import type { DiscType } from '@/app/search/page'
import { BackButton } from '@/components/molecules/back-button'
import { DiscSearchCard } from '@/components/molecules/disc-search-card'

const fetchDiscs = async () => {
  const response = await fetch('https://discit-api.fly.dev/disc', { cache: 'force-cache' })
  const data: DiscType[] = await response.json()
  return data
}

export async function generateStaticParams() {
  const data: DiscType[] = await fetchDiscs()

  return data.map((disc) => ({
    params: {
      slug: disc.name_slug,
    },
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params
  const data: DiscType[] = await fetchDiscs()
  const disc = data.find((d) => d.name_slug === slug)

  if (!disc) {
    return {
      title: 'Disc Not Found',
      description: 'The requested disc could not be found.',
    }
  }

  return {
    title: `${disc.name} by ${disc.brand} | Disc Golf Disc Details`,
    description: `Explore the ${disc.name} disc by ${disc.brand}. Speed: ${disc.speed}, Glide: ${disc.glide}, Turn: ${disc.turn}, Fade: ${disc.fade}. Perfect for ${disc.category.toLowerCase()} shots.`,
    keywords: `${disc.name}, ${disc.brand}, disc golf, ${disc.category}, ${disc.stability}`,
    openGraph: {
      title: `${disc.name} by ${disc.brand} | Disc Golf Disc Details`,
      description: `Explore the ${disc.name} disc by ${disc.brand}. Speed: ${disc.speed}, Glide: ${disc.glide}, Turn: ${disc.turn}, Fade: ${disc.fade}. Perfect for ${disc.category.toLowerCase()} shots.`,
      type: 'website',
      url: `https://kettad.ee/search/${disc.name_slug}`,
    },
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params

  const data: DiscType[] = await fetchDiscs()
  const disc = data.find((d) => d.name_slug === slug)

  if (!disc) {
    return <div className='text-center text-xl'>Disc not found :(</div>
  }

  return (
    <div className='flex flex-col space-y-5'>
      <DiscSearchCard disc={disc} />
      <div className='w-full px-2'>
        <BackButton />
      </div>
    </div>
  )
}
