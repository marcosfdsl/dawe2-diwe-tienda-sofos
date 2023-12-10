document.addEventListener("DOMContentLoaded", function () {
    let elemento = document.querySelector('.sliding-background');
    var animatedElement = document.querySelector('.sliding-background');
    let resultado1 = elemento.clientHeight - window.innerHeight + 200;
    let resultado2 = elemento.clientHeight - window.innerHeight - 1800;
    animatedElement.style.setProperty('--valor1', `-${resultado1}px`);
    animatedElement.style.setProperty('--valor2', `-${resultado2}px`);
});