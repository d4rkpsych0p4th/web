import Link from 'next/link'

export const metadata = {
    title: "admin",
  }

export default function adminLayout({ children }) {
    return (
        <html>
        <body>
        {children}
        </body>
    </html>
  
    )
}