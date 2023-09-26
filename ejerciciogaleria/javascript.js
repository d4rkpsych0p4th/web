const images = ['imagen1.jpg','imagen2.jpg','imagen3.jpg'];
let currentIndex = 0;

const imageContainer = document.querySelector('.image-container');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

function updateImage() {
    const currentImage = images[currentIndex];
    imageContainer.innerHTML = `<img src="${currentImage}" alt="Imagen ${currentIndex + 1}">`;
}


prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});
//document.getElementById("prevButton").onclick =prev;
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});
//document.getElementById("nextButton").onclick =next;
// Mostrar la primera imagen al cargar la página
updateImage();
