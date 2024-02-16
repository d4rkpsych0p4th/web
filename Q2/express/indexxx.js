const express = require('express');
const app = express();

//router declaration
/*
const routerProgramacion= express.Router();
app.use('/api/cursos/programacion',routerProgramacion);

routerProgramacion.get('/',(req, res) => {
    res.send(JSON.stringify(infoCursos.programacion))
   } );

   routerProgramacion.get('/:lenguaje',(req, res) => {
    const lenguaje = req.params.lenguaje;

    const data= infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

    if(data.length === 0){
        return res.status(404).send('no se encontro'+ lenguaje);
    }
    //ordenar con el if para PARAMETRO ORDENAR
    
    res.send(JSON.stringify(data));
   } );


routerProgramacion.get('/:lenguaje',(req,res) => {
    const lenguaje = req.params.lenguaje;

    const data= infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

    if(data.length === 0){
        return res.status(404).send('no se encontro'+ lenguaje);
    }
    res.send(JSON.stringify(data));

 })

*/

//simulamos una base de datos cone learchiovo de cursos.js anterior
const {infoCursos} = require('./datos/cursos.js');

const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion); //El Router irá expandiendo esta base inicial

//const routerMatematicas = express.Router();
const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);



//loading proces.env
require('dotenv').config();
/*
//routing
app.get('/api', (req, res) => {
    res.send('hello world');
})
//routing a cursos.js
app.get('/api/cursos/', (req, res) => {
    console.log(infoCursos);
    res.send(JSON.stringify(infoCursos));
})

//routing a cursos.js programacion
app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion));
})

//routing a cursos.js matematicas
app.get('/api/cursos/matematicas', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
})


//routing wildcard del lenguaje
app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;

    const data= infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

    if(data.length === 0){
        return res.status(404).send('no se encontro'+ lenguaje);
    }
    //ordenar con el if para PARAMETRO ORDENAR
    if(req.query.ordenar == 'vistas'){
        //orden des, si lo queremos asc, seria (a.vistas, b,vistas)
        res.send(JSON.stringify(data.sort((a,b) => a.vistas - b.vistas)));
    }
    res.send(JSON.stringify(data));
})

//routing wildcard de matematicas y tema
app.get('/api/cursos/matematicas/:tema', (req, res) => {
    const tema = req.params.tema;

    const data= infoCursos.matematicas.filter(curso => curso.tema === tema);

    if(data.length === 0){
        return res.status(404).send('no se encontro'+ tema);
    }
    res.send(JSON.stringify(data));
})


//routing wildcard del lenguaje
app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel=req.params.nivel;

    const data= infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if(data.length === 0){
        return res.status(404).send('no se encontro'+ lenguaje);
    }
    res.send(JSON.stringify(data));
})

//router
*/



//Listening port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('server listening on port')
});