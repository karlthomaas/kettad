'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/atoms/button'

export const BackButton = () => {
  const router = useRouter()

  return (
    <Button className='w-full' onClick={() => router.back()} aria-label='Go back to previous page'>
      <ArrowLeft className='mr-2' size={16} />
      Back
    </Button>
  )
}
