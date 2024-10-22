const FavIcons = () => {
  return (
    <>
      <link
        rel='icon'
        type='image/png'
        href='/assets/favicons/favicon-48x48.png'
        sizes='48x48'
      />
      <link
        rel='icon'
        type='image/svg+xml'
        href='/assets/favicons/favicon.svg'
      />
      <link rel='shortcut icon' href='/assets/favicons/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/assets/favicons/apple-touch-icon.png'
      />
      <meta name='apple-mobile-web-app-title' content='devlinks' />
      <link rel='manifest' href='/assets/favicons/site.webmanifest' />
    </>
  )
}

export default FavIcons
