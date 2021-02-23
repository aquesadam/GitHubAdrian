//Es una directiva que activa la ejecución de código en el modo estricto ECMAScript .
'use strict'

//Lanzar varias funciones de Javascript al cargar un documento
window.onload = function inicializar() {
    //Nombre que se escribe en la consola de Google
    console.log("Ejercicio #1");

    //Declarar Variables
    var valor1;
    var valor2;
    var resultado;

    //Incializar variables
    valor1=400;
    valor2=100;

    resultado=(valor1+valor2);
        console.log('La suma de los valores es:' + resultado);
}