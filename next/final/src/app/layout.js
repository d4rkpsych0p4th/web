import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gourmet Explorer',
  description: 'App developed by Alvaro',
}

export default function RootLayout({ children }) {
  return (
    
    <html>
      <head><link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css" rel="stylesheet" /></head>
      <body>
      {children}
      <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
      </body>
  </html>

     
  )
}