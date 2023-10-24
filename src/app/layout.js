import "./globals.scss"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Producent foli i opakowań foliowych | Plast-Fol Silno ',
  description: 'Poznaj naszą ofertę. Folie i Worki Foliowe na Miarę Twoich Potrzeb. PPHU Plast-Fol Artur i Mariusz Rzeźnik',
  keywords: ["PLAST-FOL", "Plast-Fol", "plast-fol", "plastfol", "recykling", "folia", "worki foliowe"],
  creator: "Dariusz Rzeźnik",

  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
