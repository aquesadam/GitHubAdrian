// Definición de variables
var i = 0;
var j = 0;
var arreglo = [];
var arregloCantidad = [];
var arregloArticulo = [];
var arregloPrecio = [];

// Esto captura los datos generales del cliente
var nombre = document.getElementById('nombreTxt').value;
var metodoPago = document.getElementById('metodoPago').value;
var fecha = document.getElementById('fechaCompra').value;

var resultadoPr = document.getElementById('resultadoPr');
idRow = 0

//Esta funcion agrega un row a la tabla
function guardar(){

    // Concatena datos de un artículo para el row y los agrega al arreglo que se imprime en la factura
    var cantidad = document.getElementById("cantidad").value;
    var articulo = document.getElementById("articulo").value;
    var precio = document.getElementById("precio").value;
    var precioCalc = precio*cantidad;

    arregloCantidad.push(cantidad);
    arregloArticulo.push(articulo);
    arregloPrecio.push(precioCalc);

    // Valida que datos capturados existan
    if (cantidad=="" || articulo=="" || precio=="") {
        alert('Atención: NO dejar campos vacíos.');
        return false;
    } 

    // Agrega un valor al arreglo que controla la cantidad de rows, luego captura y agrega los valores a la tabla.
    else {
        arreglo.push(i);
        var tabla = "<tr><td>"+cantidad+"<tr><td>"+articulo+"<tr><td>₡"+precioCalc;
        var añadir = document.createElement('tr');
        añadir.id = i
        añadir.innerHTML=tabla;
        document.getElementById("tabladatos").appendChild(añadir);
        i++;
    }
}

// Esta funcion limpia los datos ingresados en los inputs de artículos.
function limpiar(){
    document.getElementById('cantidad').value = "";
    document.getElementById('articulo').value = "";
    document.getElementById('precio').value = "";
}

// Esta borra artículos de la tabla removiendo el último row y los borra del array de factura.
function borrar(){
    idRow = (arreglo.length-1);
    ultimoRow = document.getElementById(idRow);
    arreglo.pop();
    arregloCantidad.pop();
    arregloArticulo.pop();
    arregloPrecio.pop();
    ultimoRow.remove();
    i--;
}

// Esta función calcula el total e imprime una factura.
function calcular(){

    //Corre la función limpia
    limpiar();

    // Captura los datos generales del cliente
    var nombre = document.getElementById('nombreTxt').value;
    var metodoPago = document.getElementById('metodoPago').value;
    var fecha = document.getElementById('fechaCompra').value;

    // Valida los datos generales del cliente
    if (nombre=="" || !Date.parse(fecha)) {
        alert('Atención: NO dejar campos vacíos.');
        return false;
    } 

    //Valida que existan artículos en la factura
    if (i==0) {
        alert('ERROR: La factura no contiene ningún artículo');
        return false;
    } 

    // Imprime la info general del cliente.
    var resultado = '<strong>FACTURA GENERADA</strong><br>';
    resultado = resultado + 'Nombre del cliente: '+nombre+' <strong>|</strong> ';
    resultado = resultado + 'Método de pago: '+metodoPago+' <strong>|</strong> ';
    resultado = resultado + 'Fecha de la compra: '+fecha+'<br><br>';

    resultadoPr.innerHTML=resultado;

    // Imprime la lista de artículos.
    var resCantidad = document.getElementById('resCantidad');
    var resArticulo = document.getElementById('resArticulo');
    var resPrecio = document.getElementById('resPrecio');

    var facturaCantidad='<strong>Cantidad<br></strong>';
    var facturaArticulo='<strong>Artículo<br></strong>';
    var facturaPrecio='<strong>Precio<br></strong>';

    // Suma del IVA al precio bruto
    k=0;
    arregloIVA = []
    while (k<arregloPrecio.length){
        arregloIVA[k]=(arregloPrecio[k] * 1.13);
        k++;
    }

    arregloIVA = arregloIVA.map(a => a.toFixed(0));

    while (j<arregloArticulo.length){
        facturaCantidad = facturaCantidad + arregloCantidad[j]+'<br>';
        facturaArticulo = facturaArticulo + arregloArticulo[j]+'<br>';
        facturaPrecio = facturaPrecio + '₡'+arregloIVA[j]+'<br>';
        j++;
    }

    resCantidad.innerHTML=facturaCantidad;
    resArticulo.innerHTML=facturaArticulo;
    resPrecio.innerHTML=facturaPrecio;

    // Cálculo de adicionales y subtotal
    var subtotal = arregloPrecio.reduce(function(a, b) {
        return a + b;
    });
    var subtotal = subtotal.toFixed(0);

    var iva = subtotal * 0.13;
    var servicio = subtotal * 0.10;
    var total = parseInt(subtotal) + parseInt(servicio) + parseInt(iva);

    var facturaFinal = "<strong>Subtotal: </strong>₡"+subtotal+'<br>';
    var facturaFinal = facturaFinal+"<strong>Total IVA (Incluido): </strong>₡"+iva+'<br>';
    var facturaFinal = facturaFinal+"<strong>Impuesto de Servicio: </strong>₡"+servicio+'<br><br>';
    var facturaFinal = facturaFinal+"<strong>TOTAL: </strong>₡"+total+"<br><br>";

    document.getElementById('facturaFinal').innerHTML=facturaFinal;
    document.getElementById("calcularBtn").disabled = true;
    document.getElementById("borrarBtn").disabled = true;
    document.getElementById("guardarBtn").disabled = true;
    document.getElementById("limpiarBtn").disabled = true;
    document.getElementById("refresh").style.display = "block";
}