import type { Metadata } from 'next'
import { Inter ,  VT323} from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

const vt323 = VT323({weight:'400',style:'normal',subsets:['latin']});

export const metadata: Metadata = {
  title: 'M Reza Muktasib',
  description: 'Portofolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${vt323.className} text-white bg-[#161618]`}>{children}</body>
    </html>
  )
}
