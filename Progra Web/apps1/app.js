window.addEventListener('load', inicio, false);

function inicio(){
    // variable que representa el elemento tabla
    var maderaTabla = document.createElement('table');
    document.body.appendChild(maderaTabla);

    //declaracion de variables y asignación en campos del formulario
    var anchoTxt = document.getElementById('anchoTxt');
    var gruesoTxt = document.getElementById('gruesoTxt');
    var varasTxt = document.getElementById('varasTxt');
    var registrarBtn = document.getElementById('registrarBtn');
    var resultadoPr = document.getElementById('resultadoPr');
    var precioPulgadaTxt = document.getElementById('precioPulgadaTxt');
    var totalBtn = document.getElementById('totalBtn');

    // arreglo de tipo matriz para almacenar datos. Tiene doble corchete.
    var datos = [[],[],[],[],[]];

    //botón registrar
    registrarBtn.onclick = function registrarBtnOnclick(){
        var ancho = Number(anchoTxt.value);
        var grueso = Number(gruesoTxt.value);
        var varas = Number(varasTxt.value);
        var precioP = Number(precioPulgadaTxt.value);

        //limpia los campos al mismo tiempo que registra
        anchoTxt.value = "";
        gruesoTxt.value = "";
        varasTxt.value = "";
        precioPulgadaTxt.value = "";

        //carga la funcion registrarDatos
        registrarDatos(ancho,grueso,varas,precioP);

        //carga la función mostrarTabla
        mostrarTabla();
        console.log(ancho,grueso,varas,precioP);
    }

    //agregar los datos en cada celda del arreglo, usando indices del 0 al 3
    function registrarDatos(ancho,grueso,varas,precioP) {
        datos[0].push(ancho);
        datos[1].push(grueso);
        datos[2].push(varas);
        datos[3].push(precioP);
    }

    //mostrar la tabla de datos
    function mostrarTabla() {
        //valor del rubro varas
        var varas = 0.25;

        //eliminar tabla
        maderaTabla.innerHTML = "";

        //encabezado de la tabla
        var tr = document.createElement("tr");
        maderaTabla.appendChild(tr);
        maderaTabla.className = "formatos1";

        //centra la tabla
        maderaTabla.className = "table";

        //th es el elemento encabezado, tr es la fila
        var th = document.createElement("th");
        th.innerHTML = "Ancho";
        th.className= "centrado";
        tr.appendChild(th);

        th = document.createElement("th");
        th.innerHTML = "Grueso";
        tr.appendChild(th);

        th = document.createElement("th");
        th.innerHTML = "Varas";
        tr.appendChild(th);

        th = document.createElement("th");
        th.innerHTML = "Precio";
        tr.appendChild(th);

        th = document.createElement("th");
        th.innerHTML = "Total";
        tr.appendChild(th);

        //ciclo que recorre todo el arreglo para mostrar la tabla
        for (var y = 0; y < datos[0].length; y++) {
            var tr = document.createElement("tr");
            maderaTabla.appendChild(tr);

            //agrega el dato a la posición respectiva del arreglo
            var td = document.createElement("td");
            td.innerHTML = datos[0][y];
            tr.appendChild(td);

            var td = document.createElement("td");
            td.innerHTML = datos[1][y];
            tr.appendChild(td);

            var td = document.createElement("td");
            td.innerHTML = datos[2][y];
            tr.appendChild(td);

            var td = document.createElement("td");
            td.innerHTML = datos[3][y];
            tr.appendChild(td);

            //formula de resultado
            var td = document.createElement("td");
            var total = datos[0][y] * datos[1][y] * (datos[2][y] * varas) * datos[3][y];
            td.innerHTML = total;
            tr.appendChild(td);
        }

        //Agregar la pos4 a la matriz usando la variable total, en la tabla y matriz agrega el dato
        datos[4].push(total);
    }

    //boton total
    totalBtn.onclick = function totalBtnOnclick() {
        parrafoResultado();
    }
    function parrafoResultado(){
        var total = 0;
        for (var y = 0; y < datos[4].length; y++) {
            total = total + datos[4][y];
            resultadoPr.innerHTML = "El resultado es: "+ total;
        }
    }
}