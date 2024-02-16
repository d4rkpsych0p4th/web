const http = require('http');

const servidor = http.createServer((req, res) => {
     //Lógica del proceso leyendo req
     const miURL= new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');
     console.log(miURL.searchParams.get('ordenar'));
     res.end("HOLA MUNDO"); //Permite enviar la respuesta al cliente cuando termina el proceso
    });

    const port = 3000;servidor.listen(port, () => { 
        //Puerto y qué queremos hacer al inicializarse
        console.log("Servidor escuchando en localhost puerto" , port);
    });