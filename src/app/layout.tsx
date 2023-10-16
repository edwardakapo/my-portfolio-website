import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopSection from './components/TopSection'
import Footer from './components/footer'


export const metadata: Metadata = {
  title: 'Edward Akapo | Software Developer',
  description: 'Software designer specializing in Backend',
  icons: {
    icon: "./web-icon.png",
    apple: "./web-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="main-body">
        <TopSection />
        {children}
        <Footer />
      </body> 
    </html>
  )
}
