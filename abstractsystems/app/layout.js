import './globals.css'
import Nav from '@components/nav'
import HeroSection from '@components/HeroSection'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <head>
          <title>Abstract Systems</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
  
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
