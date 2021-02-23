//funcion guardar datos

function guardar(){
    var nombre = document.getElementById('nombreTxt').value;
    var apellidos = document.getElementById('apellidosTxt').value;
    var monto = Number(document.getElementById('montoTxt').value);

    if (nombre=="" || apellidos=="" || monto=="") {
        alert('Atención: NO dejar campos vacíos.');
        return false;
    }

    //tr señala la fila de la tabla
    //td señala las celdas de la tabla

    var tabla = "<tr><td>"+nombre+"<tr><td>"+apellidos+"<tr><td>"+monto;
    var añadir = document.createElement('tr');
    añadir.innerHTML=tabla;
    document.getElementById("tabladatos").appendChild(añadir);
}

function limpiar(){
    document.getElementById('nombreTxt').value = "";
    document.getElementById('apellidosTxt').value = "";
    document.getElementById('montoTxt').value = "";
}