import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';

export async function POST(request) {
    const data = await request.json()
    try{
        const users = JSON.parse(readFileSync("data/merchant.txt"))
        writeFileSync("data/merchant.txt", JSON.stringify([...users, data]))
    } catch(e){  
        writeFileSync("data/merchant.txt", JSON.stringify([data]))
    }
    return NextResponse.json({message: "Guardando datos..."})
}


export async function GET() {
    try{
        const users = JSON.parse(readFileSync("data/merchant.txt"))
        console.log(users)
        return NextResponse.json({users})
    } catch(e){  
        return NextResponse.json({message: "COMERCIOS no existen...", status: 400})
    }
}

export async function DELETE(request) {
    const { email } = request.query || {};
  
    if (!email) {
      return NextResponse.json({
        message: 'Invalid request. Email parameter is missing.',
        status: 400,
      });
    }
  
    try {
      let users = JSON.parse(readFileSync('data/merchant.txt'));
      users = users.filter((user) => user.email !== email);
      writeFileSync('data/merchant.txt', JSON.stringify(users));
      return NextResponse.json({ message: 'Comerciante eliminado correctamente.' });
    } catch (e) {
      return NextResponse.json({ message: 'Error al eliminar el comerciante.', status: 500 });
    }
  }