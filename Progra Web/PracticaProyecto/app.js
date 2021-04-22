window.addEventListener('load', init, false);

function init(){
    // Creación de tabla
    var tabla = document.createElement('table');
    document.body.appendChild(tabla);

    // variables DOM - Id
    var proveedoresSlt = document.getElementById('proveedoresSlt');
    var cantMangosTxt = document.getElementById('cantMangosTxt');
    var registrarBtn = document.getElementById('registrarBtn');
    var pagoBtn = document.getElementById('pagoBtn');
    var totalMangosBtn = document.getElementById('totalMangosBtn');
    var mayorProductorBtn = document.getElementById('mayorProductorBtn');
    var resultadoPr = document.getElementById('resultadoPr');

    // Matriz y arreglos
    var datos = [[],[],[],[],[],[]];
    // Carga la funcion registrarProveedores
    // 6 posiciones que se guardan en la matriz
    registrarProveedores(1, 'Juan', 'Bolaños', 'Regular', 0, 0);
    registrarProveedores(2, 'Pedro', 'Ureña', 'VIP', 0, 0);
    registrarProveedores(3, 'Diego', 'Jimenez', 'Regular', 0, 0);
    registrarProveedores(4, 'Matías', 'Rodríguez', 'Regular', 0, 0);
    registrarProveedores(5, 'Jorge', 'Ureña', 'VIP', 0, 0);
    registrarProveedores(6, 'Carlos', 'Obando', 'Regular', 0, 0);
    registrarProveedores(7, 'Marco', 'Ureña', 'VIP', 0, 0);
    registrarProveedores(8, 'Jesús', 'Trejos', 'Regular', 0, 0);
    registrarProveedores(9, 'Mario', 'Ureña', 'VIP', 0, 0);
    registrarProveedores(10, 'Patricia', 'Ortiz', 'Regular', 0, 0);
    // Carga la función que va a agregar los datos de la matriz a la tabla
    tablaProveedores();

    // Declaración de la matriz
    // Parámetros que guarda cada dato de la matriz (6 datos)
    function registrarProveedores (id, nombre, apellido, tipo, cantidad, total){
        // Se agrega el dato a la matriz iniciando con id y finalizando con total
        datos[0].push(id);
        datos[1].push(nombre);
        datos[2].push(apellido);
        datos[3].push(tipo);
        datos[4].push(cantidad);
        datos[5].push(total);
    }

    function ingresarMangos(){
        var mangosSumar = Number(cantMangosTxt.value);
        // variable select que tiene los proveedores para iniciar el select desde posición 0
        id = Number(proveedoresSlt.value -1);
        // variable que asigna la cantidad y lo asocia a la cantidad
        var cantMangos = Number(datos[4][id]);
        // formula sumatoria
        cantMangos = cantMangos + Number(mangosSumar);
        // añade la cantidad de mangos al id
        datos[4][id] = cantMangos;
    }

    //crea la tabla de datos
    function tablaProveedores(){
        //eliminar tabla
        tabla.innerHTML = '';
        // applicar css
        tabla.className = 'formatos1';
        tabla.className = 'table';

        //encabezado
        var tr = document.createElement('tr');
        tabla.appendChild(tr);

        //celdas dentro del encabezado
        var th = document.createElement('th');
        th.innerHTML = 'Identificador';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Nombre';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Apellido';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Tipo';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Total Mangos';
        tr.appendChild(th);

        // Ciclo que recorre todo el arreglo para mostrar los valores en la tabla
        for (var y =0; y < datos[0].length; y++){
            var tr = document.createElement('tr');
            tabla.appendChild(tr);

            td = document.createElement('td');
            td.innerHTML = datos[0][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[1][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[2][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[3][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[4][y];
            tr.appendChild(td);

        }
    }

    // funcion total de mangos
    function totalMangosRecolectados(){
        var total = 0;
        resultadoPr.innerHTML = '';
        // recorre la matriz en posición 4
        for (var y = 0; y < datos[4].length; y++){
            // formula que suma los mangos por la cnatidad
            total = total+Number(datos[4][y]);
        }
        resultadoPr.innerHTML = '<h5>La cantidad total vendida es de: </h5>' +total;
    }

    // function del que mas vendio mangos
    function mayorProveedor(){
        resultadoPr.innerHTML = '';
        // asigna la cantidad de mangos correspondiente al id[posicion 0]
        var maxProveedor = datos[4][0];
        var posicionMayor = 0;
        // recorrido que controla la cantidad mas vendida
        for (var y = 0; y < datos[4].length; y++){
            // permite evaluar para que asigne la persona que mas vendio. campo cantidad
            if (maxProveedor < datos[4][y]){
                maxProveedor = datos[4][y];
            }
        }
        // el método indexOf() devuelve el indice dentro del objeto string
        // busca el macimo provedoor dentro de la matriz
        posicionMayor = datos[4].indexOf(maxProveedor);
        resultadoPr.innerHTML = "<h5>El mayor productor de mangos es: </h5>" +datos[1][posicionMayor] + " " + datos[2][posicionMayor];
    }

    // pago de proveedores
    function pagoProveedores() {
        // declara la variable con un precio por mango de 550
        var precioMango = 550;
        // añade un extra si el proveedor o vendedor es VIP
        var extraVip = 5;
        resultadoPr.innerHTML = '';
        // variable select que tiene los proveedores. para iniciar el select desde posicion 0
        id = Number(proveedoresSlt.value -1);
        // inicializa el total en 0
        var total = 0;
        // formula que indica el prceio por el mango * la cantidad y el id para saber el vendedor
        var pagoNeto = precioMango * Number(datos[4][id]);
        if (datos[3][id] == 'VIP'){
            total = pagoNeto + (pagoNeto / 100) * extraVip;
        } else {
            total = pagoNeto;
        }
        // asigna el total al proveedor
        datos[5][id] = total;
        // imprime
        resultadoPr.innerHTML = '<h5>El monto a pagar a </h5>' +datos[1][id] + ' ' + datos[2][id] + '<h5>es de: </h5>' + total;
    }

    // carga de funciones
    registrarBtn.onclick = function registrarBtnOnClick(){
        ingresarMangos();
        tablaProveedores();
    }
    pagoBtn.onclick = function pagoBtn(){
        pagoProveedores();
    }
    mayorProductorBtn.onclick = function mayorProductorBtnOnclick(){
        mayorProveedor();
    }
    totalMangosBtn.onclick = function totalMangosBtnOnClick(){
        totalMangosRecolectados();
    }
}