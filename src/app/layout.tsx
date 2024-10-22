import '@/styles/globals.css'

import { Inter, Rubik } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import { AuthProvider } from '@/components/auth/auth-provider'
import NextThemeProvider from '@/components/next-theme-provider'
import { ReduxProvider } from '@/redux/redux-provider'

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
            <ReduxProvider>
              <>{children}</>
              <Toaster position='top-center' reverseOrder={false} />
            </ReduxProvider>
          </NextThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
