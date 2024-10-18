import '@/styles/globals.css'

import { Inter, Rubik } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import { AuthProvider } from '@/components/auth/auth-provider'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navigation'
import NextThemeProvider from '@/components/next-theme-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
})

export const metadata = {
  title: 'devlinks',
  description:
    'Link sharing platform for developers. Share your favorite links and discover new ones.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${inter.variable} ${rubik.variable}`}>
      <link
        rel='icon'
        type='image/ico'
        sizes='32x32'
        href='/assets/favicons/favicon.ico'
      />
      <body>
        <AuthProvider>
          <NextThemeProvider>
            <div className='flex min-h-screen flex-col justify-between bg-neutral-10 pt-[3.75rem] dark:bg-surface-50 md:pt-0'>
              <div>
                <Navbar />
                <main>{children}</main>
              </div>
              <Footer />
            </div>
            <Toaster position='bottom-center' reverseOrder={false} />
          </NextThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
