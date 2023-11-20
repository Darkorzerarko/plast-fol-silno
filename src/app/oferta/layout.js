
export const metadata = {
    title: 'Oferta | Plast-Fol',
    description: 'Oferta produkcyjna PPHU Plast-Fol Artur i Mariusz Rzeźnik',
    keywords: ["PLAST-FOL", "Plast-Fol", "plast-fol", "plastfol", "recykling", "folia", "worki foliowe", "rękaw", "półrękaw", "taśma"],
    creator: "Dariusz Rzeźnik",
    
  }
  export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 2,
  }
  
  export default function RootLayout({ children }) {
    return (
      <>
        {children}
      </>
    )
  }
  