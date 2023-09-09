import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

export const metadata: Metadata = {
  title: 'Nagayoshi Yusuke',
  description: 'Portfolio site by Nagayoshi Yusuke',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}
) {


  return (
    <html lang="ja">
      <body className={`${inter.className} bg-gradient-to-r from-cyan-500 to-blue-500 text-white`}>
          <Header />
          <div className='
            mt-40
            xl:mx-36 xl:mt-48 
          '>
            {children}
          </div>
          <Footer />
      </body>
    </html>
  )
}
