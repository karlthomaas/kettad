'use client'

import Link from 'next/link'

import { buttonVariants } from '@/components/atoms/button'
import { Logo } from '@/components/atoms/logo'

export default function Home() {
  return (
    <div className='mt-10 flex flex-col items-center space-y-6'>
      <Logo
        className='size-[300px]'
        discRimClassname='fill-neutral-800'
        discClassname='fill-rose-700'
        tailClassname='fill-neutral-300 stroke-neutral-300'
      />
      <div className='text-center'>
        <h1 className='text-3xl font-semibold text-foreground'>Find your Disc</h1>
        <p className='text-foreground/70'>+1000 up to date discs in database</p>
      </div>
      <Link href='/search' className={buttonVariants({ variant: 'default' })}>
        Search discs
      </Link>
    </div>
  )
}
