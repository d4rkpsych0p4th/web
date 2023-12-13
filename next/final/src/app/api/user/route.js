import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';

export async function POST(request) {
    const data = await request.json()
    try{
        const user = JSON.parse(readFileSync("data/user.txt"))
        writeFileSync("data/user.txt", JSON.stringify([...user, data]))
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
    const data = await request.json();
    try {
      const user = JSON.parse(readFileSync("data/user.txt"));
      //console.log("merchants ANTES filter", merchant);
      const userFilter = user.filter((user) => user.email !== data.email);
      //console.log("USER Filtrados:", merchantFilter);
      writeFileSync("data/user.txt", JSON.stringify(userFilter));
      return NextResponse.json({ message: "user eliminado...", status: 200 });
    } catch (e) {
      console.error("Error deleting user:", e);
      return NextResponse.json({ message: "Error al eliminar el USER.", status: 500 });
    }
  }