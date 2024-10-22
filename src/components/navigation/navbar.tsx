import Image from 'next/image'
import Link from 'next/link'

import NavbarAuthMenu from '@/components/auth/navbar-auth-menu'
import NavLinks from '@/components/navigation/nav-links'
import { routes } from '@/shared/config/routes'

export const Navbar = async () => {
  return (
    <header className='fixed top-0 z-40 flex h-[3.75rem] w-full items-center border-b border-surface-100/70 bg-neutral-0 backdrop-blur-3xl dark:bg-surface-100/70 md:sticky md:h-[4.5rem] md:w-auto md:rounded-xl lg:m-6'>
      <nav
        className='flex w-full max-w-full items-center justify-between px-4 md:px-8'
        aria-label='Main navigation'>
        <div className='min-h-8 min-w-8'>
          <Link
            href={routes.home}
            aria-label='Navigate to Home Page'
            className='h5 font-extrabold text-primary-400'>
            <div className='flex items-center justify-center gap-2'>
              <Image
                src='/assets/images/icons/devlinks-icon.svg'
                alt='Devlinks'
                width={40}
                height={40}
              />
              <h1 className='h4 hidden max-md:text-5xl md:block'>devlinks</h1>
            </div>
          </Link>
        </div>
        <NavLinks />
        <NavbarAuthMenu />
      </nav>
    </header>
  )
}
