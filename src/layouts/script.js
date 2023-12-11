document.addEventListener("DOMContentLoaded", function () {
    let elemento = document.querySelector('.sliding-background');
    var animatedElement = document.querySelector('.sliding-background');
    let resultado1 = elemento.clientHeight - window.innerHeight + 150;
    let resultado2 = elemento.clientHeight - window.innerHeight - 1900;
    animatedElement.style.setProperty('--valor1', `-${resultado1}px`);
    animatedElement.style.setProperty('--valor2', `-${resultado2}px`);

    const boton = document.querySelector(".elemento");
    const test = document.querySelector("#test");
    const contenedorelementos = document.querySelector(".contenedorelementos");

    document.addEventListener("click", (event) => {
        if (event.target.closest(".elemento")) {
            test.classList.add('moved');
            contenedorelementos.classList.add('disappeared');
        } else if (event.target !== test && !test.contains(event.target)) {
            test.classList.remove('moved');
            contenedorelementos.classList.remove('disappeared');
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

    // carrito

    document.getElementById('formularioCarrito').addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener el valor seleccionado del campo de la talla
        var tallaSeleccionada = document.getElementById('talla').value;

        // Crear un elemento div para mostrar la talla en el carrito
        var nuevoElemento = document.createElement('div');

        nuevoElemento.textContent = 'Añadido al carrito: Camiseta ' + tallaSeleccionada;

        // Obtener el div del carrito y agregar el nuevo elemento
        var carritoDiv = document.querySelector('#carrito');
        carritoDiv.innerHTML = ''; // Limpiar el contenido anterior
        carritoDiv.appendChild(nuevoElemento);
    });

});