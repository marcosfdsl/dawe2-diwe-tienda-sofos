document.addEventListener("DOMContentLoaded", function () {
    let elemento = document.querySelector('.sliding-background');
    var animatedElement = document.querySelector('.sliding-background');
    let resultado1 = elemento.clientHeight - window.innerHeight + 150;
    let resultado2 = elemento.clientHeight - window.innerHeight - 1900;
    animatedElement.style.setProperty('--valor1', `-${resultado1}px`);
    animatedElement.style.setProperty('--valor2', `-${resultado2}px`);

    const contenedorelementos = document.querySelector(".contenedorelementos");
    const elements = {
        "elementoc1": { test: testc1, id: "testc1" },
        "elementoc2": { test: testc2, id: "testc2" },
        "elementoc3": { test: testc3, id: "testc3" },
        "elementoc4": { test: testc4, id: "testc4" }
    };

    document.addEventListener("click", (event) => {
        if (event.target.closest("#elementoc1") || event.target.closest("#elementoc2") || event.target.closest("#elementoc3") || event.target.closest("#elementoc4")) {
            contenedorelementos.classList.add('disappeared');
        } else if (event.target !== testc1 && !testc1.contains(event.target) && event.target !== testc2 && !testc2.contains(event.target) && event.target !== testc3 && !testc3.contains(event.target) && event.target !== testc4 && !testc4.contains(event.target)) {
            contenedorelementos.classList.remove('disappeared');
        }

        for (const key in elements) {
            const element = elements[key];
            const targetElement = event.target.closest(`#${key}`);

            if (targetElement) {
                element.test.classList.add('moved');
            } else if (event.target !== element.test && !element.test.contains(event.target)) {
                element.test.classList.remove('moved');
            }
        }
    });

    // carousel

    const carouselInner = document.querySelector('.carousel-inner');
    let currentIndex = 0;

    function showImage(index) {
        const offset = -index * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % 2;
        showImage(currentIndex);
    }

    setInterval(nextImage, 5000); //cada 5s

// Restaurar el contador del carrito al cargar la página
var contadorCarrito = document.getElementById('contadorCarrito');
var storedCounter = localStorage.getItem('contadorCarrito');
var contadorActual = parseInt(storedCounter) || 0;
contadorCarrito.textContent = contadorActual;

// Función para agregar un elemento al carrito
function agregarAlCarrito(talla, producto) {
    var nuevoElemento = document.createElement('div');
    nuevoElemento.textContent = 'Añadido al carrito: ' + producto + ' ' + talla;

    // Obtener el div del carrito y agregar el nuevo elemento al inicio
    var carritoDiv = document.querySelector('#carrito');
    carritoDiv.insertBefore(nuevoElemento, carritoDiv.firstChild);

    // Obtener el contador del carrito y guardarlo en localStorage
    contadorActual++;
    contadorCarrito.textContent = contadorActual;
    localStorage.setItem('contadorCarrito', contadorActual);
}

// Evento para formularioCarrito
document.getElementById('formularioCarrito').addEventListener('submit', function (event) {
    event.preventDefault();
    var tallaSeleccionada = document.getElementById('talla').value;
    var productoSeleccionado = document.getElementById('producto').value;
    agregarAlCarrito(tallaSeleccionada, productoSeleccionado);
});

// Evento para formularioCarritoc2
document.getElementById('formularioCarritoc2').addEventListener('submit', function (event) {
    event.preventDefault();
    var tallaSeleccionada = document.getElementById('tallac2').value;
    var productoSeleccionado = document.getElementById('productoc2').value;
    agregarAlCarrito(tallaSeleccionada, productoSeleccionado);
});

// Evento para formularioCarritoc3
document.getElementById('formularioCarritoc3').addEventListener('submit', function (event) {
    event.preventDefault();
    var tallaSeleccionada = document.getElementById('tallac3').value;
    var productoSeleccionado = document.getElementById('productoc3').value;
    agregarAlCarrito(tallaSeleccionada, productoSeleccionado);
});

// Evento para formularioCarritoc4
document.getElementById('formularioCarritoc4').addEventListener('submit', function (event) {
    event.preventDefault();
    var tallaSeleccionada = document.getElementById('tallac4').value;
    var productoSeleccionado = document.getElementById('productoc4').value;
    agregarAlCarrito(tallaSeleccionada, productoSeleccionado);
});

});
