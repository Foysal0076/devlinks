'use client'

import { SignOut as SignOutIcon } from '@phosphor-icons/react'
import {Sun } from '@phosphor-icons/react'
import { signOut, useSession } from 'next-auth/react'
import { useTheme } from 'next-themes'

import { ToggleDarkIcon } from '@/components/icons'
import ThemeSwitcher from '@/components/theme-switcher'
import Avatar from '@/components/ui/avatar'
import { apiRoutes } from '@/shared/config/api-routes'
import { routes } from '@/shared/config/routes'
import { cn } from '@/shared/utils'

const NavbarAuthMenu = () => {
  const { theme, setTheme } = useTheme()
  const { data: session, status } = useSession()

  const isLogged = status === 'authenticated'
  const user = session?.user

  if (!isLogged) return <ThemeSwitcher />

  const handleLogout = async () => {
    try {
      await fetch(apiRoutes.auth.logout, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      signOut({ callbackUrl: '/login' })
    } catch (error) {
      console.log(error)
      signOut({ callbackUrl: '/' })
    }
  }

  const toggleThemeToDark = () => {
    setTheme('dark')
  }

  const toggleThemeToLight = () => {
    setTheme('light')
  }

  return (
    <>
      {isLogged ? (
        <div className='group relative'>
          <div
            role='button'
            tabIndex={0}
            className='flex cursor-pointer items-center gap-2'>
            <Avatar
              className='h-10 w-10'
              name={user?.name ?? ''}
              url={user?.image ?? ''}
            />
          </div>
          <menu
            aria-label='User menu'
            className='md:pd-5 absolute right-0 top-full z-10 hidden rounded-md border border-surface-200 bg-surface-0 py-1 shadow-sm group-hover:block dark:bg-surface-100'>
            <ul className='flex w-36 flex-col gap-1 py-1'>
              <li
                role='button'
                tabIndex={0}
                onClick={toggleThemeToLight}
                className={cn(
                  'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-surface-100 dark:hover:bg-surface-200',
                  {
                    'text-primary-400': theme === 'light',
                  }
                )}>
                <Sun weight='fill' size={20} />{' '}
                <span className='select-none text-inherit'>Light</span>
              </li>
              <li
                role='button'
                tabIndex={0}
                onClick={toggleThemeToDark}
                className={cn(
                  'flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-surface-100 dark:hover:bg-surface-200',
                  {
                    'text-primary-400': theme === 'dark',
                  }
                )}>
                <ToggleDarkIcon />
                <span className='select-none text-inherit'>Dark</span>
              </li>
              <li
                role='button'
                tabIndex={0}
                onClick={handleLogout}
                className='flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-surface-100 dark:hover:bg-surface-200'>
                <SignOutIcon weight='fill' size={20} />{' '}
                <span className='select-none'>Logout</span>
              </li>
            </ul>
          </menu>
        </div>
      ) : (
        <a href={routes.login} className='text-neutral-900'>
          Login
        </a>
      )}
    </>
  )
}

export default NavbarAuthMenu