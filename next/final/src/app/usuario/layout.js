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
        </body>
    </html>
  
    )
}