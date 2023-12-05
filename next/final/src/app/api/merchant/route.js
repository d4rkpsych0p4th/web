import {NextResponse} from 'next/server'
import { readFileSync, writeFileSync} from 'fs';

console.log(process.env.TOKEN)

export async function GET() {
    //Extract params
    //Query database
    //Communicate with other service (paypal, etc)
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return NextResponse.json({data})
}

export async function POST(request) {
    const data = await request.json()
    //const {nombre, apellido} = await request.json()
    //console.log(nombre, apellido)
    
    try{ // Read user.txt from disk and concatenate with data from request
       const users = JSON.parse(readFileSync("user.txt"))
       writeFileSync("user.txt", JSON.stringify([...users, data]))
    } catch(e){ // If user.txt file does not exist
        writeFileSync("user.txt", JSON.stringify([data]))
    }
}

export function PUT() {
    return NextResponse.json({
        message: "Actualizando datos"
    })
}

export function DELETE() {
    return NextResponse.json({
        message: "Eliminando datos"
    })
}