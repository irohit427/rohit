import Navbar from '@/components/Navbar';
import './globals.css'
import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import Footer from '@/components/Footer';
import { navLinks } from '@/constants';
import { ThemeProvider } from '@/providers/themeProvider';
import { cn } from '@/lib/utils';

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
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <Navbar name='Rohit' links={navLinks} />
          <main className='relative mx-auto'>{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}
