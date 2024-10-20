import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { Navbar } from '@/components/navigation'
import { authOptions } from '@/services/auth.service'
import { routes } from '@/shared/config/routes'

type Props = {
  children: React.ReactNode
}
const AuthLayout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions)
  if (!session || !session.accessToken) {
    return redirect(routes.login)
  }

  return (
    <div className='flex min-h-screen flex-col justify-between bg-neutral-10 pt-[3.75rem] dark:bg-surface-50 md:pt-0'>
      <Navbar />
      <main className='grow'>{children}</main>
    </div>
  )
}

export default AuthLayout
