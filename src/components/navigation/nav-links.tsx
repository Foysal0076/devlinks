'use client'
import { Eye, Link as LinkIcon, UserCircle } from '@phosphor-icons/react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { routes } from '@/shared/config/routes'
import { cn } from '@/shared/utils'

const NavLinks = () => {
  const currentPath = usePathname()
  const { status } = useSession()
  const { id } = useParams()

  const isLogged = status === 'authenticated'
  if (!isLogged) return null

  const previewLink = routes.previewProfile(id as unknown as string)

  const isOnLinksPage = currentPath === routes.links
  const isOnProfileDetailsPage = currentPath === routes.profileDetails

  return (
    <div className='flex items-center'>
      <Link
        href={routes.links}
        aria-label='Navigate to Links page'
        className={cn(
          'flex items-center gap-2 rounded-lg px-4 py-2.5 font-semibold transition-colors duration-300 md:px-6',
          {
            'bg-primary-50 text-primary-500 dark:bg-primary-200/10 dark:text-primary-50':
              isOnLinksPage,
          },
          {
            'hover:text-primary-500 dark:hover:text-primary-200':
              !isOnLinksPage,
          }
        )}>
        <LinkIcon size={20} weight='bold' />
        <span className='hidden text-inherit md:inline-block'>Links</span>
      </Link>

      <Link
        href={routes.profileDetails}
        aria-label='Navigate to Profile page'
        className={cn(
          'flex items-center gap-2 rounded-lg px-4 py-2.5 font-semibold transition-colors duration-300 md:px-6',
          {
            'bg-primary-50 text-primary-500 dark:bg-primary-200/10 dark:text-primary-50':
              isOnProfileDetailsPage,
          },
          {
            'hover:text-primary-500 dark:hover:text-primary-200':
              !isOnProfileDetailsPage,
          }
        )}>
        <UserCircle size={20} weight='bold' />
        <span className='hidden text-inherit md:inline-block'>Profile</span>
      </Link>

      <Link
        href={previewLink}
        aria-label='Navigate to Preview page'
        className='flex items-center gap-2 rounded-lg px-4 py-2.5 font-semibold transition-colors duration-300 hover:text-primary-500 dark:hover:text-primary-200 md:px-6'>
        <Eye size={20} weight='bold' />
        <span className='hidden text-inherit md:inline-block'>Preview</span>
      </Link>
    </div>
  )
}

export default NavLinks
