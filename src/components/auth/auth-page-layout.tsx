import Image from 'next/image'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/services/auth.service'
import { routes } from '@/shared/config/routes'

type Props = {
  children: React.ReactNode
}

const AuthPageLayout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions)
  if (session && session.accessToken) {
    return redirect(routes.home)
  }

  return (
    <div className='container flex min-h-[85vh] max-w-7xl flex-col items-center justify-center gap-8'>
      <div className='flex items-center justify-center gap-4'>
        <Image
          src='/assets/images/icons/devlinks-icon.svg'
          alt='Devlinks'
          width={50}
          height={50}
        />
        <h1 className='h2 max-md:text-5xl'>devlinks</h1>
      </div>
      {children}
    </div>
  )
}

export default AuthPageLayout
