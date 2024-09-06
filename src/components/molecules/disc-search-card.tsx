import Image from 'next/image'
import type { IconType } from 'react-icons'
import { GiArcheryTarget } from 'react-icons/gi'
import { PiPath } from 'react-icons/pi'
import { RiCrosshair2Fill } from 'react-icons/ri'

import type { DiscType } from '@/app/search/page'
import { cn } from '@/lib/utils'

const StatRow = ({ text, className, Icon }: { text: string; className?: string; Icon: IconType }) => (
  <div className={cn('flex', className)}>
    <Icon className='mr-2 text-3xl' /> {text}
  </div>
)

export const DiscSearchCard = ({ disc }: { disc: DiscType }) => (
  <div className='flex size-full flex-col items-center gap-8 border bg-card p-4 sm:rounded-xl md:h-[375px] md:flex-row md:justify-between md:gap-0'>
    <div className='flex w-full max-w-[400px] flex-col justify-center space-y-4 md:h-full'>
      <div className='mb-4'>
        <h1 className='mb-1 text-2xl font-medium'>{disc.name}</h1>
        <h2 className='text-lg'>{disc.brand}</h2>
      </div>
      <div className='flex flex-col gap-5 text-2xl'>
        <StatRow text={disc.category} Icon={GiArcheryTarget} />
        <StatRow text={disc.stability} Icon={PiPath} />
        <StatRow
          text={[disc.speed, disc.glide, disc.turn, disc.fade].join('|')}
          Icon={RiCrosshair2Fill}
          className='tracking-widest'
        />
      </div>
    </div>
    <Image src={disc.pic} alt={disc.name} width={400} height={300} />
  </div>
)
