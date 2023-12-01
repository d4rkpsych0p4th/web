// En tu servidor local (server.js)
import { createServer } from 'http';
import { readFile, writeFile } from 'fs/promises';

const server = createServer(async (req, res) => {
  if (req.method === 'POST') {
    // Lógica para manejar las peticiones POST
    try {
      const data = await readFile('adminData.json', 'utf-8');
      const currentData = JSON.parse(data);
      const newData = JSON.parse(req.body);

      const updatedData = [...currentData, newData];
      await writeFile('adminData.json', JSON.stringify(updatedData, null, 2), 'utf-8');

      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(updatedData));
    } catch (error) {
      console.error(error);
      res.writeHead(500);
      res.end('Error al guardar los datos');
    }
  } else if (req.method === 'GET') {
    // Lógica para manejar las peticiones GET
    try {
      const data = await readFile('adminData.json', 'utf-8');
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    } catch (error) {
      console.error(error);
      res.writeHead(500);
      res.end('Error al leer los datos');
    }
  }
});

server.listen(3001, () => {
  console.log('Servidor escuchando en http://localhost:3001');
});
