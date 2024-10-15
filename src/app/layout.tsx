import '@/styles/globals.css'

import { Inter, Rubik } from 'next/font/google'

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
        <NextThemeProvider>
          <div className='flex min-h-screen flex-col justify-between bg-surface-50 pt-[3.75rem] md:pt-[4.5rem]'>
            <div>
              <Navbar />
              <main>{children}</main>
            </div>
            <Footer />
          </div>
        </NextThemeProvider>
      </body>
    </html>
  )
}
