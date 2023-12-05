import Link from 'next/link'

export const metadata = {
    title: "comerciante",
  }

export default function comercianteLayout({ children }) {
    return (
        <html>
            <head><link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css" rel="stylesheet" /></head>

        <body>
        
        {children}
        <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
        
        <script src="https://unpkg.com/react@18/umd/react.development.js" crossOrigin="true"></script>
         <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossOrigin="true"></script>
         <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        </body>
    </html>
  
    )
}