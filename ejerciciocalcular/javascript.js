const radios = document.querySelectorAll('input[type="radio"]');
const base = document.getElementById('base');
const altura = document.getElementById('altura');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');
const borrar = document.getElementById('borrar');

calcular.addEventListener('click', function() {
    let selectedForma;
    radios.forEach(function(radio) {
        if (radio.checked) {
            selectedForma = radio.value;
        }
    });

    const baseValue = parseFloat(base.value);
    const alturaValue = parseFloat(altura.value);

    if (isNaN(baseValue) || isNaN(alturaValue)) {
        resultado.value = 'Por favor, ingresa valores válidos.';
    } else {
        if (selectedForma === 'triangulo') {
            const areaTriangulo = (baseValue * alturaValue) / 2;
            resultado.value = ` ${areaTriangulo}`;
        } else if (selectedForma === 'rectangulo') {
            const areaRectangulo = baseValue * alturaValue;
            resultado.value = ` ${areaRectangulo}`;
        }
    }
});

borrar.addEventListener('click', function() {
    radios.forEach(function(radio) {
        radio.checked = false;
    });
    base.value = '';
    altura.value = '';
    resultado.value = '';
});

