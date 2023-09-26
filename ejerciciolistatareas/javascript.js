const miInput = document.getElementById('miInput');
const agregarBoton = document.getElementById('agregar');
const lista = document.getElementById('lista');

agregarBoton.addEventListener('click', function() {
    const valorInput = miInput.value.trim();

    if (valorInput !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${valorInput}</span>
            <button class="completar">Completar</button>
            <button class="eliminar">Eliminar</button>
        `;
        lista.appendChild(listItem);
        miInput.value = '';
    }
});

lista.addEventListener('click', function(e) {
    const target = e.target;

    if (target.classList.contains('completar')) {
        const tarea = target.parentElement.querySelector('span');
        tarea.classList.toggle('completada');
    } else if (target.classList.contains('eliminar')) {
        const listItem = target.parentElement;
        lista.removeChild(listItem);
    }
});