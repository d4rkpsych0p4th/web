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
      const users = JSON.parse(readFileSync("data/user.txt"));
      console.log(users);
      return NextResponse.json({ users });
    } catch (e) {
      // Return an empty array when the file doesn't exist
      return NextResponse.json({ users: [], message: "USUARIOS no existen...", status: 400 });
    }
  }