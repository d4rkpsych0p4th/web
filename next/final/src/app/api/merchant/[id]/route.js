import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    //console.log(params)
    const {serachParams} = new URL(request.url)
    //Extraer queries después del ?
    //console.log(serachParams)
    //serachParams.get('nombre')
    //serachParams.get('apellido')
    const res = await fetch(`http://localhost:3000/api/merchant/${params.id}`)
    const data = await res.json()

    return NextResponse.json({data})
}