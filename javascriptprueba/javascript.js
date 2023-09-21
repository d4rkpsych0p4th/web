
let options = +prompt("intrdoduce un tipo de operacion:  \n 1.multiplicacion \n 2.Mayor \n Encabezado");


function multiplica(){
    let a = +prompt("dame numero 1");
    let b = +prompt("dame numero2");
    let resultado = a * b;
    alert(resultado);
}
function mayor(){
    let a = +prompt("dame numero 1");
    let b = +prompt("dame numero2");
    if (a => b)
        alert("el numero A es mayoro igual");
    else
        alert("el numero A es menor o igual");
}

switch (options) {
    case (1):
        multiplica();
        break;
    case (2):
        mayor();
        break;
    default: alert("im sorry papa");
    break;
}
