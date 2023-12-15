/*jslint browser:true */
document.addEventListener("DOMContentLoaded", function () {

    // Obtengo el contador del carrito y establezco su valor desde el almacenamiento local
    var contadorCarrito = document.getElementById("contadorCarrito");
    var storedCounter = localStorage.getItem("contadorCarrito");
    contadorCarrito.textContent = storedCounter || (0).toString();

    // Configuro el desplazamiento de fondo para un efecto visual
    let elemento = document.querySelector('.sliding-background');
    var animatedElement = document.querySelector('.sliding-background');
    let resultado1 = elemento.clientHeight - window.innerHeight + 150;
    let resultado2 = elemento.clientHeight - window.innerHeight - 1900;
    animatedElement.style.setProperty('--valor1', `-${resultado1}px`);
    animatedElement.style.setProperty('--valor2', `-${resultado2}px`);

    // Manejo eventos de clic en elementos y oculto/muestro elementos correspondientes
    document.addEventListener("click", (event) => {
        const elements = {
            "elementoc1": { test: testc1, id: "testc1" },
            "elementoc2": { test: testc2, id: "testc2" },
            "elementoc3": { test: testc3, id: "testc3" },
            "elementoc4": { test: testc4, id: "testc4" }
        };

        // Si hago clic en uno de los elementos, lo hago desaparecer
        // Si hago clic en cualquier otro lugar, muestro los elementos nuevamente
        // También limpio los carritos de compras en cada caso

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

    // Carrusel de imágenes que cambia cada 5 segundos
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

    setInterval(nextImage, 5000);

    // Restauro el contador del carrito al cargar la página
    var contadorCarrito = document.getElementById('contadorCarrito');
    var storedCounter = localStorage.getItem('contadorCarrito');
    var contadorActual = parseInt(storedCounter) || 0;
    contadorCarrito.textContent = contadorActual;

    // Función para agregar un elemento al carrito
    function agregarAlCarrito(talla, producto) {
        document.getElementById("carrito").innerHTML = "";
        document.getElementById("carritoc2").innerHTML = "";
        document.getElementById("carritoc3").innerHTML = "";
        document.getElementById("carritoc4").innerHTML = "";

        // Creo nuevos elementos y los añado al inicio del carrito
        var nuevoElemento = document.createElement('div');
        var nuevoElementoc2 = document.createElement('div');
        var nuevoElementoc3 = document.createElement('div');
        var nuevoElementoc4 = document.createElement('div');

        // Les asigno contenido
        nuevoElemento.textContent = 'Añadido al carrito: ' + producto + ' ' + talla;
        nuevoElementoc2.textContent = 'Añadido al carrito: ' + producto + ' ' + talla;
        nuevoElementoc3.textContent = 'Añadido al carrito: ' + producto + ' ' + talla;
        nuevoElementoc4.textContent = 'Añadido al carrito: ' + producto + ' ' + talla;

        // Obtengo el div del carrito y agrego los nuevos elementos al inicio
        var carritoDiv = document.querySelector('#carrito');
        carritoDiv.insertBefore(nuevoElemento, carritoDiv.firstChild);

        var carritoDivc2 = document.querySelector('#carritoc2');
        carritoDivc2.insertBefore(nuevoElementoc2, carritoDivc2.firstChild);

        var carritoDivc3 = document.querySelector('#carritoc3');
        carritoDivc3.insertBefore(nuevoElementoc3, carritoDivc3.firstChild);

        var carritoDivc4 = document.querySelector('#carritoc4');
        carritoDivc4.insertBefore(nuevoElementoc4, carritoDivc4.firstChild);

        // Obtengo el contador del carrito y lo guardo en localStorage
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

    // TIENDA

    var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    document
        .getElementById("formularioCarrito")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            var tallaSeleccionadaElement = document.getElementById("talla");
            var productoSeleccionadoElement =
                document.getElementById("producto");
            var precioElement = document.getElementById("precio");

            if (tallaSeleccionadaElement instanceof HTMLSelectElement) {
                var tallaSeleccionada = tallaSeleccionadaElement.value;
                var productoSeleccionado = productoSeleccionadoElement.value;
                var precio = precioElement.value;
            }

            // Agregar la talla al carrito
            carrito.push(precio);
            carrito.push(productoSeleccionado);
            carrito.push(tallaSeleccionada);

            // Guardar el carrito actualizado en localStorage
            localStorage.setItem("carrito", JSON.stringify(carrito));
        });

    document
        .getElementById("formularioCarritoc2")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            var tallaSeleccionadaElement = document.getElementById("tallac2");
            var productoSeleccionadoElement =
                document.getElementById("productoc2");
            var precioElement = document.getElementById("precioc2");

            if (tallaSeleccionadaElement instanceof HTMLSelectElement) {
                var tallaSeleccionada = tallaSeleccionadaElement.value;
                var productoSeleccionado = productoSeleccionadoElement.value;
                var precio = precioElement.value;
            }

            // Agregar la talla al carrito
            carrito.push(precio);
            carrito.push(productoSeleccionado);
            carrito.push(tallaSeleccionada);

            // Guardar el carrito actualizado en localStorage
            localStorage.setItem("carrito", JSON.stringify(carrito));
        });

    document
        .getElementById("formularioCarritoc3")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            var tallaSeleccionadaElement = document.getElementById("tallac3");
            var productoSeleccionadoElement =
                document.getElementById("productoc3");
            var precioElement = document.getElementById("precioc3");

            if (tallaSeleccionadaElement instanceof HTMLSelectElement) {
                var tallaSeleccionada = tallaSeleccionadaElement.value;
                var productoSeleccionado = productoSeleccionadoElement.value;
                var precio = precioElement.value;
            }

            // Agregar la talla al carrito
            carrito.push(precio);
            carrito.push(productoSeleccionado);
            carrito.push(tallaSeleccionada);

            // Guardar el carrito actualizado en localStorage
            localStorage.setItem("carrito", JSON.stringify(carrito));
        });

    document
        .getElementById("formularioCarritoc4")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            var tallaSeleccionadaElement = document.getElementById("tallac4");
            var productoSeleccionadoElement =
                document.getElementById("productoc4");
            var precioElement = document.getElementById("precioc4");

            if (tallaSeleccionadaElement instanceof HTMLSelectElement) {
                var tallaSeleccionada = tallaSeleccionadaElement.value;
                var productoSeleccionado = productoSeleccionadoElement.value;
                var precio = precioElement.value;
            }

            // Agregar la talla al carrito
            carrito.push(precio);
            carrito.push(productoSeleccionado);
            carrito.push(tallaSeleccionada);

            // Guardar el carrito actualizado en localStorage
            localStorage.setItem("carrito", JSON.stringify(carrito));
        });
});