const statusPedido = () => {
    const status = Math.random() < 0.8; //Simulamos un 80% de éxito
    //console.log("Status:", status);
    return status;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (statusPedido()) {
            resolve("Pedido exitoso, pizza en camino!");
        } else {
            reject("Ocurrió un error. Por favor, inténtelo nuevamente.");
        }
    }, 500);
});

miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });