import './globals.css'
import HeroSection from '@components/HeroSection'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '@components/Footer'
import ContactForm from '@components/ContactForm'
import Navbar from '@components/Navbar'
import AboutSection from '@components/AboutSection'
import ServiceLayout from '@components/ServiceLayout'
import Projectlayout from '@components/Projectlayout'


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
        <Navbar/>
        <HeroSection/>
        <ServiceLayout/>
        <Projectlayout/>
        <AboutSection/>
        {children}
        <ContactForm/>
        </div>
        <Footer/>
      </body>

    </html>
  )
}
