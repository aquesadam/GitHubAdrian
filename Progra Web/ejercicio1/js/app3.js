'use strict'
window.onload = function inicializar() {

    console.log("Ejercicio #3");

    var pantalon=15000;
    var camisa=25000;
    var zapatos=30000;
    var impuesto=0.13;
    var total;

    total=(pantalon+camisa+zapatos)*impuesto;
    console.log("El precio total es: "+total);
}