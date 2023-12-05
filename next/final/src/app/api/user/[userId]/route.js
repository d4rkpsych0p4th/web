import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    //console.log(params)
    const {serachParams} = new URL(request.url)
    //Extraer queries después del ?
    //console.log(serachParams)
    //serachParams.get('nombre')
    //serachParams.get('apellido')
    const res = await fetch(`../user/${params.userId}`)
    const data = await res.json()

    return NextResponse.json({data})
}