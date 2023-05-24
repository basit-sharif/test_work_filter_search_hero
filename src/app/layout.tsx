import Navbar from '@/components/views/Navbar'
import './globals.css'
import { Maven_Pro } from 'next/font/google'
import Wrapper from '@/components/shared/Wrapper'

const inter = Maven_Pro({
  subsets: ['latin'],
  weight: ["400", "500", "600"]
})

export const metadata = {
  title: 'House Booking',
  description: 'Book your house right now in low price',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
