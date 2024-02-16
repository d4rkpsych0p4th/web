const express = require('express');

const { programacion } = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router();

//sin esta linea no funciona el http     
routerProgramacion.use(express.json());

routerProgramacion.get('/', (req, res) => { 
    res.json(programacion); 
});

//GET

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const data = programacion.filter(curso => curso.lenguaje === lenguaje);

    if (data.length === 0) {
        return res.status(404).send("No se encontró el curso " + lenguaje);
    }


    if (req.query.ordenar === 'vistas') {
        console.log("ordenando");
        res.send(JSON.stringify(data.sort((a, b) => b.vistas - a.vistas))); //Orden DESC, si lo queremos ASC, sería (a.vistas, b.vistas)
    } else {
        res.send(JSON.stringify(data));
    }
});


routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const data = programacion.filter(curso =>
        curso.lenguaje === lenguaje && curso.nivel === nivel);

    if (data.length === 0) {
        
        return res.status(204).end();
    }
    res.send(JSON.stringify(data));
});

//POST

routerProgramacion.post('/', (req, res) => {
    const cursoNuevo = req.body;
    console.log(cursoNuevo);
    programacion.push(cursoNuevo);
    res.send(JSON.stringify(programacion));
});


// PUT

routerProgramacion.put('/:id', (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);
  
    if (indice >= 0) {
        programacion[indice] = cursoActualizado;
    } 
    res.send(JSON.stringify(programacion));
});

// PATCH 
routerProgramacion.patch('/:id', (req, res) => {
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        const cursoAModificar = programacion[indice];
        Object.assign(cursoAModificar, infoActualizada);
    }
    res.send(JSON.stringify(programacion));
});

// DELETE
routerProgramacion.delete('/:id', (req, res) => {
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        programacion.splice(indice, 1);
    } else {
        res.status(404);
    }
    res.send(JSON.stringify(programacion));
});

module.exports = routerProgramacion;