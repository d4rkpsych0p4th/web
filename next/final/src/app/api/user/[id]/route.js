import { NextResponse } from "next/server";
import { readFileSync } from 'fs';


export async function GET(request, { params }) {
  try {
    const users = JSON.parse(readFileSync("data/user.txt"));
    const user = users.find((user) => user.id === params.id);

    if (!user) {
      return NextResponse.json({ message: "user not found", status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ message: "Error fetching user", status: 500 });
  }
}