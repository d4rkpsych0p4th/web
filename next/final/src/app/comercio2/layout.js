import Link from 'next/link'

export const metadata = {
    title: "usuario",
  }

export default function usuarioLayout({ children }) {
    return (
        
        <div>
        {children}
        </div>
  
    )
}