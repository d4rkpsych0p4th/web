import Link from 'next/link'

export const metadata = {
    title: "logged",
  }

export default function loggedLayout({ children }) {
    return (
      
        <div>
        {children}
        </div>
  
    )
}