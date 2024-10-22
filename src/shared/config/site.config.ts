import { Metadata } from 'next'
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'

export const siteConfig = {
  title: 'devlinks',
  description:
    'Link sharing platform for developers. Share your favorite links and discover new ones.',
}

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    metadataBase: new URL(process.env.SITE_URL!),
    alternates: {
      canonical: '/',
    },
    title: title ? `${title} - devlinks` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - devlinks` : siteConfig.title,
      description,
      url: process.env.SITE_URL!,
      siteName: 'devlinks',
      images: {
        url: '/assets/images/og-devlinks.png',
        width: 1200,
        height: 630,
      },
      locale: 'en_US',
      type: 'website',
    },
  }
}
