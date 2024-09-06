import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

import { Button } from '@/components/atoms/button'

export const Navbar = () => {
  return (
    <nav className='h-[50px] w-full border-b bg-card'>
      <div className='container flex h-full items-center justify-between px-2'>
        <Link href='/'>Kettad</Link>
        <Link href='https://github.com/karlthomaas/kettad' aria-label='GitHub repository'>
          <Button variant='ghost' aria-label='View GitHub repository'>
            <FaGithub stroke='black' size={25} />
            <span className='sr-only'>GitHub</span>
          </Button>
        </Link>
      </div>
    </nav>
  )
}
