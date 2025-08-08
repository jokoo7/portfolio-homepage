import { Geist_Mono, Source_Sans_3 } from 'next/font/google'

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const sourceSans3 = Source_Sans_3({
  variable: '--font-source-sans-3',
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
})
