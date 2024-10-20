import Link from 'next/link'
import { getServerSession } from 'next-auth'

import ShareLinkButton from '@/components/profile/public-profile/share-link-button'
import Button from '@/components/ui/button'
import { authOptions } from '@/services/auth.service'
import { routes } from '@/shared/config/routes'

const ProfileAuthHeader = async () => {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    return null
  }
  return (
    <header className='flex items-center justify-between rounded-xl bg-neutral-0 p-4 dark:bg-surface-100'>
      <Link href={routes.links}>
        <Button variant='secondary' className='max-sm:text-sm'>
          Back to Editor
        </Button>
      </Link>
      <ShareLinkButton />
    </header>
  )
}

export default ProfileAuthHeader
