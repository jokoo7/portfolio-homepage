import { Geist, Geist_Mono, Playfair } from 'next/font/google'
import localFont from 'next/font/local'

export const segoe = localFont({
  src: [
    {
      path: './Segoe UI.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Segoe UI Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Segoe UI Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Segoe UI Bold Italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-segoe-ui',
})

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const playfair = Playfair({
  variable: '--font-playfair',
  subsets: ['latin'],
})
