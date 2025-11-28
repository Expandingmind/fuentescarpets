import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fuentes Carpet Installation Corp | Carpet & Flooring Installation in Miami, FL',
  description: 'Family-owned flooring contractor in Miami, FL specializing in carpet, hardwood, and laminate installation. 25+ years experience, licensed & insured, 7-day availability, free estimates. Se habla Español.',
  keywords: 'carpet installation Miami, flooring Miami, hardwood flooring, laminate installation, South Florida flooring contractor',
  openGraph: {
    title: 'Fuentes Carpet Installation Corp | Carpet & Flooring Installation in Miami, FL',
    description: 'Professional flooring installation services in Miami and South Florida',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

