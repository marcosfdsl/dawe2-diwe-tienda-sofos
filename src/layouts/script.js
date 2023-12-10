document.addEventListener("DOMContentLoaded", function () {
    let elemento = document.querySelector('.sliding-background');
    var animatedElement = document.querySelector('.sliding-background');
    let resultado = elemento.clientHeight - window.innerHeight - 1000;
    animatedElement.style.setProperty('--valor', `-${resultado}px`);
});