
const express = require('express');
const app = express();

//Simulamos una base de datos con el archivo de cursos.js anterior.
const { infoCursos } = require('./datos/cursos.js');

//Cargamos el fichero process.env
require('dotenv').config();

const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

//const routerMatematicas = express.Router();
const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);



/* 2 Routing */
app.get('/', (req, res) => {
  res.send('Bienvenido a la clase de Express')
});

app.get('/api/cursos', (req, res) => {
  //res.send(infoCursos); // envía el objeto
  res.send(JSON.stringify(infoCursos)); // envía texto
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Servidor iniciado en el puerto', port);
});