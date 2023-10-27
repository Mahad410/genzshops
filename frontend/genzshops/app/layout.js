import Navbar from './components/navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import { AuthProvider } from '@/utils/context'
const poppins = Poppins({ weight:['400','700','900'], subsets: ['latin'] })

export const metadata = {
  title: 'Genz Shops | Shop on next level',
  description: 'Approved by GenZ',
}


export default function RootLayout({ children}) {
return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <AuthProvider>
        <Navbar />
        <main className={'min-h-screen sm:p-[0] md:p-[80px] pl-[0] pr-[0] bg-[--bg-intro] box-border'}>
              {children}
        </main>
          </AuthProvider>
        </body>
    </html>
  )
}
