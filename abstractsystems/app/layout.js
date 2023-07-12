import './globals.css'
import Nav from '@components/nav'
import HeroSection from '@components/HeroSection'
import Head from 'next/head'
import Link from 'next/link'


export const metadata = {
  title: 'Abstract Systems',
  description: 'Abstract Systems',
  image: './images/logo.png',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Head>
          <title>Abstract Systems</title>
          
          <Link rel="preconnect" href="https://fonts.gstatic.com"/>
          <Link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
  
          <Link rel="icon" href="./images/logo.png" />
        </Head>
        <div className='flex flex-col '>
        <Nav/>
        <HeroSection/>
        {children}
        </div>
      </body>

    </html>
  )
}
