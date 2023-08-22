import Navbar from '@/components/Navbar';
import './globals.css'
import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import Footer from '@/components/Footer';
import { navLinks } from '@/constants';

const space_mono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Rohit Raj',
  description: 'Full Stack Developer Portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={space_mono.className}>
        <Navbar name='Rohit' links={navLinks} />
        <main className='relative'>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
