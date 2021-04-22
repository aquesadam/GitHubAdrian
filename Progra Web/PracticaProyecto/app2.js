window.addEventListener('load', init, false);

function init() {
	//Creacion de tabla (id = tabla)
	var tabla = document.createElement('table');
	document.body.appendChild(tabla);

	/*variables DOM - ID */
	var proveedoresSlt = document.getElementById('proveedoresSlt');
	var cantMangosTxt = document.getElementById('cantMangosTxt');
	var registrarBtn = document.getElementById('registrarBtn');
	var pagoBtn = document.getElementById('pagoBtn');
	var totalMangosBtn = document.getElementById('totalMangosBtn');
	var mayorProductorBtn = document.getElementById('mayorProductorBtn');
	var resultadoPr = document.getElementById('resultadoPr');

	/*matriz (llaves fusia) arreglo (sin llaves fusia)*/
	var datos = [[], [], [], [], [], []];
	/*carga la funcion registrarProveedores*/
	/*6 posiciones que se guardan en la matriz */ 
	registrarProveedores(1, 'Juan', 'Bolaños', 'Regular', 0, 0);
	registrarProveedores(2, 'Pedro', 'Ureña', 'VIP', 0, 0);
	registrarProveedores(3, 'Diego', 'Jimenez', 'Regular', 0, 0);
	registrarProveedores(4, 'Matias', 'Rodriguez', 'Regular', 0, 0);
	registrarProveedores(5, 'Jorge', 'Ureña', 'VIP', 0, 0);
	registrarProveedores(6, 'Carlos', 'Obando', 'Regular', 0, 0);
	registrarProveedores(7, 'Marco', 'Ureña', 'VIP', 0, 0);
	registrarProveedores(8, 'Jasus', 'Trejos', 'Regular', 0, 0);
	registrarProveedores(9, 'Mario', 'Ureña', 'VIP', 0, 0);
	registrarProveedores(10, 'Patricia', 'Ortiz', 'Regular', 0, 0);
	//carga la funcion que va agregar los datos de la matriz en una tabla
	tablaProveedores();

	/*declaracion de la matriz*/
	//parametros que guarda cada datos de la matriz (6 datos)
	function registrarProveedores(id, nombre, apellido, tipo, cantidad, total) {
		//se agrega el dato a la matriz iniciando con id y finalizando con total
		datos[0].push(id);
		datos[1].push(nombre);
		datos[2].push(apellido);
		datos[3].push(tipo);
		datos[4].push(cantidad);
		datos[5].push(total);
	}

	function ingresarMangos() {
		var mangosSumar = Number(cantMangosTxt.value);
		//variable select que tiene los proveedores. para iniciar el select desde posicion 0
		id = Number(proveedoresSlt.value - 1);
		//variable que asigna la cantidad y lo asocia o guarda la cantidad
		var cantMangos = Number(datos[4][id]);
		//formula sumatoria 
		cantMangos = cantMangos +  Number(mangosSumar);
		//añade la cantidad de mangos al id(variable)
		datos[4][id] = cantMangos;
	}


	//crea la tabla de datos
	function tablaProveedores() {
		//Eliminar tabla
		tabla.innerHTML = '';
		/*aplicar clases CSS*/
		tabla.className="formatos1";
		tabla.className="table";     

		//Encabezado de la tabla
		var tr = document.createElement('tr');
		tabla.appendChild(tr);

		//Celdas dentro del encabezado
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



		  //ciclo que recorra todo el ciclo para mostrar los valores a la tabla
		  //y significa que hace el recorrido en y dentro de la matriz (x=horizontal y=vertical)
		for (var y = 0; y < datos[0].length; y++) {
   
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

	/*funcion total de mangos*/ 
	function totalMangosRecolectados() {
		var total = 0;
		resultadoPr.innerHTML = '';
		//recorrido en la matriz posicion 4
		for (var y = 0; y < datos[4].length; y++) {
			//formula (suma  los mangos por la cantidad)
			total = total + Number(datos[4][y]);
		}
		resultadoPr.innerHTML = '<h5>La cantidad total vendida es de: </h5>' + total;
	}
	
	/*funcion del que mas vendio mangos*/ 
	function mayorProveedor() {
		resultadoPr.innerHTML = '';
		//asigna la cantidad de mangos correspondiente al id[posicion 0]
		var maxProveedor = datos[4][0];
		var posicionMayor = 0;
		//recorrido que controla la cantidad + vendida
		for (var y = 0; y < datos[4].length; y++) {
			//permite evaluar para que asigne la persona que mas vendio. campo cantidad
			if (maxProveedor < datos[4][y]) {
				maxProveedor = datos[4][y];
			}
		}
		//El método indexOf() devuelve el índice, dentro del objeto String 
		//busca el maximo proveedor dentro de la matriz
		posicionMayor = datos[4].indexOf(maxProveedor);
		resultadoPr.innerHTML = '<h5>El mayor productor de mangos es:</h5> ' + datos[1][posicionMayor] + "    " + datos[2][posicionMayor];
	}



/*pago de proveedores*/ 
	function pagoProveedores() {
		// Declara variable con un precio por mango de 550
		var precioMango = 550;
		// Añade un extra si el proveedor o vendedor es "VIP" puede verlo en los datos quemados
		var extraVip = 5;
		resultadoPr.innerHTML = ' ';
		//variable select que tiene los proveedores. para iniciar el select desde posicion 0
		id = Number(proveedoresSlt.value - 1);
		// Inicializa el total en 0
		var total = 0;
		var pagoNeto;
		// formula que indica el precio por el mango (550) * la posicion 4 que es la cantidad de mangos y el id es para saber a cual persona se refiere
		pagoNeto = precioMango * Number(datos[4][id]);
		// Condicion que hace que si el proveedor es vip haga lo siguiente
		if (datos[3][id] === 'VIP') {
			//Formula que hace el pagoNeto de la formula anterior + (PagoNeto / 100) * extraVip que es el 5
			total = pagoNeto + (pagoNeto / 100) * extraVip;
		} else {
			//Y si no es vip salgase y haga el pago normal
			total = pagoNeto;
		}
		// asigna el total al proveedor mediante el id
		datos[5][id] = total;
		// Imprime resuoltado
		resultadoPr.innerHTML = '<h5>El monto a pagar a: </h5> ' + datos[1][id] + ' ' + datos[2][id] + ' ' + total;
	}



/*carga de funciones*/
	registrarBtn.onclick = function registrarBtnOnClick() {
		ingresarMangos();
		tablaProveedores();
	}
	pagoBtn.onclick = function pagoBtn() {
		pagoProveedores();
	}
	mayorProductorBtn.onclick = function mayorProductorBtnOnclick() {
		mayorProveedor();
	}
	totalMangosBtn.onclick = function totalMangosBtnOnclick() {
		totalMangosRecolectados();
	}

}