let products = [
    { nombre: "PC-Gaming", marca: "Asus", precio: 1200 },
    { nombre: "Tablet", marca: "Samsung", precio: 300 },
    { nombre: "Cámara-Reflex", marca: "Canon", precio: 650 }
];

// 2. Crea una función getProducts() que devuelva una Promesa con esos productos
function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 3000);
    });
}

// 3. Llama a getProducts() con .then() para obtener los productos
getProducts().then((result) => {
    console.log("Productos obtenidos con .then():", result);
});

// 4. Llama a getProducts() con await dentro de una función async para obtener los productos
async function fetchProducts() {
    try {
        const result = await getProducts();
        console.log("Productos obtenidos con await:", result);
    } catch (error) {
        console.error("Error al obtener los productos:", error);
    }
}

fetchProducts();
