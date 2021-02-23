//Es una directiva que activa la ejecución de código en el modo estricto ECMAScript .
'use strict'

//Lanzar varias funciones de Javascript al cargar un documento
window.onload = function inicializar() {
    //Nombre que se escribe en la consola de Google
    console.log("Ejercicio #1");

    //Declarar Variables
    var carlos=30;
    var yelca=24;
    var pedro=40; 
    var jose=24;
    var julio=20;
    var promedio;
    var cantidad=5;

    promedio=(carlos+yelca+pedro+jose+julio)/cantidad;
        console.log('La edad promedio es:' + promedio);
}