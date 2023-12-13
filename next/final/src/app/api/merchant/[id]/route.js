import { NextResponse } from "next/server";
import { readFileSync } from 'fs';


export async function GET(request, { params }) {
  try {
    const users = JSON.parse(readFileSync("data/merchant.txt"));
    const user = users.find((merchant) => merchant.id === params.id);

    if (!user) {
      return NextResponse.json({ message: "Merchant not found", status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error fetching merchant:", error);
    return NextResponse.json({ message: "Error fetching merchant", status: 500 });
  }
}