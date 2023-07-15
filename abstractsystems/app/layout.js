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
  description: 'Abstract Systems- Software Solution',
  Image: './images/favicon.ico',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Head>
          <title>Abstract Systems</title>
          <link rel="shortcut icon" href="../public/images/favicon.ico" type="image/x-icon" />
        </Head>
        <div>
      <Navbar />
      <div id="heroSection">
        <HeroSection />
      </div>
      <div id="serviceSection">
        <ServiceLayout />
      </div>
      <div id="projectsSection">
        <Projectlayout />
      </div>
      <div id="aboutSection">
        <AboutSection />
      </div>
      {/* Other components and content */}
      <div id="contactSection">
        <ContactForm />
      </div>
    </div>
        <Footer/>
      </body>

    </html>
  )
}
