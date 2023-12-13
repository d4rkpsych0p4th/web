import { NextResponse } from "next/server";
import { readFileSync } from 'fs';


export async function GET(request, { params }) {
  try {
    const users = JSON.parse(readFileSync("data/user.txt"));
    const user = users.find((user) => user.id === params.id);

    if (!user) {
      return NextResponse.json({ message: "api:USER not found", status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error("api:Error fetching USER:", error);
    return NextResponse.json({ message: "api:Error fetching USER", status: 500 });
  }
}