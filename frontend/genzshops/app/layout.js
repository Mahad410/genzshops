import Navbar from './components/navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import {Skranji} from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight:['400','700','900'], subsets: ['latin'] })

export const metadata = {
  title: 'Genz Shops | Shop on next level',
  description: 'Approved by GenZ',
}


export default function RootLayout({ children}) {
return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        <main className={'min-h-screen p-[80px] bg-[--bg-intro]'}>
              {children}
        </main>
        </body>
    </html>
  )
}
