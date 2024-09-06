import Link from 'next/link'

import type { DiscType } from '@/app/search/page'
import { DiscSilhouette } from '@/components/atoms/disc'
import { cn } from '@/lib/utils'

export const DiscListCard = ({ disc, oddLast }: { disc: DiscType; oddLast: boolean }) => {
  return (
    <li>
      <Link
        href={`/search/${disc.name_slug}`}
        className={cn('flex h-[300px] w-full flex-col items-center justify-between border bg-card py-4 sm:rounded-xl', {
          'md:col-span-2': oddLast,
        })}
      >
        <div className='flex flex-col gap-1 text-center'>
          <h1 className='text-xl font-medium'>{disc.name}</h1>
          <h2>{disc.brand}</h2>
        </div>
        <DiscSilhouette name={disc.name} className='size-40' />
        <div className='tracking-[4px]'>{[disc.speed, disc.glide, disc.turn, disc.fade].join('|')}</div>
      </Link>
    </li>
  )
}
