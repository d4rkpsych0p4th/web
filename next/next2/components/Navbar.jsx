import Link from 'next/link'
//Después de CSS
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar py-5">
            <Link href="/">
                <h1 className="text-3xl font-bold">MI EMPRESA MOLA MAS QUE LA TUYA</h1>
            </Link>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/user">USERS</Link>
                </li>
                <li>
                    <Link href="/api/users">API</Link>
                </li>
            </ul>
        </nav>
    )
}