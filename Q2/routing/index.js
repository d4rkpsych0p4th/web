const http = require('http');
const cursos = require('./cursos');

const servidor = http.createServer((req, res) => {
     //Lógica del proceso leyendo req
        switch(req.method){
            case 'GET':
            return manejarSolucionesGet(req,res);

            case 'POST':
            return manejarSolucionesPost(req,res);

            case 'PUT':
            return manejarSolucionesPut(req,res);

            case 'DELETE':
            return manejarSolucionesDelete(req,res);   
            default: 
        }
     res.end("Routing testing "); //Permite enviar la respuesta al cliente cuando termina el proceso
    });

    // FUNCION GET
    function  manejarSolucionesGet(req, res) {
        const path = req.url;
        if(path === '/' ){
            return res.end("Bienvenidos a mi primer server");
                    }
           
            else if(path === '/cursos'){
             return res.end(JSON.stringify(cursos.infoCursos));}
           
             else if (path === '/cursos/programacion'){
            return res.end(JSON.stringify(cursos.infoCursos.programacion));
        }else {res.statusCode=404;
                    return res.end("NO EXISTE EL RESCURSO") ;}
    }
    // FUNCION POST
    function manejarSolucionesPost(req, res) {
        const path = req.url;
        //res.statusCode = 200;
        if (path === '/cursos/programacion') {
            let body = '';
            
            req.on('data', (content) => { // El evento 'data' ya viene predefinido, y se emite cuando llegan los datos
                body += content.toString();
            }) 
    
            req.on('end', () => { // El evento 'end' ya viene predefinido y se emite cuando se termina de recibir la información
                console.log(typeof body, body);
                body = JSON.parse(body); // Desde un JSON de tipo string a un JSON de tipo objeto de JS.
                console.log(typeof body, body.titulo); 
                return res.end('El servidor recibió una solicitud POST para ' + path);
            })     
        } else {
            res.statusCode = 404;
            return res.end("No existe el curso indicado " + path)
        }
    }
                    



    const port = 3000;servidor.listen(port, () => { 
        //Puerto y qué queremos hacer al inicializarse
        console.log("Servidor escuchando en localhost puerto" , port);
    });