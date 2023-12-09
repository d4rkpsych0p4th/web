import { NextResponse } from 'next/server';
import { readFileSync, writeFileSync } from 'fs';

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