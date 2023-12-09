document.addEventListener("DOMContentLoaded", function () {
    let elemento = document.querySelector('.sliding-background');
    if (elemento) {
        var animatedElement = document.querySelector('.sliding-background');
        let resultado = elemento.clientHeight - window.innerHeight;
        animatedElement.style.setProperty('--valor', `-${resultado}px`);
    } else {
        console.error('Elemento no encontrado con la clase "sliding-background"');
    }
});