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
        //console.log(users)
        return NextResponse.json({users})
    } catch(e){  
        return NextResponse.json({message: "COMERCIOS no existen...", status: 400})
    }
}
export async function DELETE(request) {
  const data = await request.json();
  try {
    const merchant = JSON.parse(readFileSync("data/merchant.txt"));
    //console.log("merchants ANTES filter", merchant);
    const merchantFilter = merchant.filter((merchant) => merchant.email !== data.email);
    console.log("MERCHANT Filtrados:", merchantFilter);
    writeFileSync("data/merchant.txt", JSON.stringify(merchantFilter));
    return NextResponse.json({ message: "MERCHANT eliminado...", status: 200 });
  } catch (e) {
    console.error("Error deleting merchant:", e);
    return NextResponse.json({ message: "Error al eliminar el MERCHANT.", status: 500 });
  }
}


// export async function PUT(request) {
//   const data = await request.json();
//   try {
//     const merchants = JSON.parse(readFileSync("data/merchant.txt"));
//     // Encuentra y actualiza el comercio con el ID correspondiente
//     const updatedMerchants = merchants.map((merchant) =>
//       merchant.id === data.id ? { ...merchant, ...data } : merchant
//     );
//     writeFileSync("data/merchant.txt", JSON.stringify(updatedMerchants));
//     return NextResponse.json({ message: "Actualización exitosa", status: 200 });
//   } catch (e) {
//     console.error("Error updating merchant:", e);
//     return NextResponse.json({ message: "Error al actualizar el comercio.", status: 500 });
//   }
// }
