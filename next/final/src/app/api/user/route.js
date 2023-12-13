import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';

export async function POST(request) {
    const data = await request.json()
    try{
        const users = JSON.parse(readFileSync("data/user.txt"))
        writeFileSync("data/user.txt", JSON.stringify([...users, data]))
    } catch(e){  
        writeFileSync("data/user.txt", JSON.stringify([data]))
    }
    return NextResponse.json({message: "Guardando datos..."})
}


export async function GET() {
    try {
      const user = JSON.parse(readFileSync("data/user.txt"));
      //console.log(user);
      return NextResponse.json({ user });
    } catch (e) {
      // Return an empty array when the file doesn't exist
      return NextResponse.json({ user: [], message: "USUARIOS no existen...", status: 400 });
    }
  }

  export async function DELETE(request) {
    const { id } = request.params;
    try {
      const users = JSON.parse(readFileSync('data/user.txt', 'utf-8') || '[]');
      const updatedUsers = users.filter((user) => user.id !== id);
      writeFileSync('data/user.txt', JSON.stringify(updatedUsers, null, 2), 'utf-8');
      return NextResponse.json({ message: 'Usuario eliminado correctamente.', status: 200 });
    } catch (error) {
      console.error('Error deleting user:', error);
      return NextResponse.json({ message: 'Error al eliminar el usuario.', status: 500 });
    }
  }