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
      <body>
        <head>
          <link rel="icon" href="./images/logo.png" />
        </head>
        <div className='flex flex-col '>
        <Nav/>
        <HeroSection/>
        {children}
        </div>
      </body>

    </html>
  )
}
