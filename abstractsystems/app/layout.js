import './globals.css'
import Nav from '@components/nav'
import HeroSection from '@components/HeroSection'



export const metadata = {
  title: 'Abstract Systems',
  description: 'Abstract Systems is a software development company based in the United States. We specialize in building web applications, mobile applications, and APIs.',
  image: './images/logo.png',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abstract.systems" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@abstractsystems" />
        <meta name="twitter:creator" content="@abstractsystems" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />

        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className='flex flex-col '>
        <div className='flex flex-col items-center justify-center w-full h-screen bg-slate-500'>
          <Nav />
          <HeroSection />
        </div>

        {children}
      </body>

    </html>
  )
}
