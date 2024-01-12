import { Orbitron } from 'next/font/google'
import '../styles/globals.css'

const font = Orbitron({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'Diogo Franco | Backend Enginner',
  description: 'My home page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>{children}</body>
    </html>
  )
}
