// El método addEventListener() permite escuchar un evento específico y manejar ese evento cuando ocurre.
window.addEventListener('load', init, false);

function init(){
    var notaMateTxt = document.getElementById('notaMatematicaTxt');
    var notaEspanolTxt = document.getElementById('notaEspanolTxt');
    var notaSocialesTxt = document.getElementById('notaSocialesTxt');
    var notaCienciasTxt = document.getElementById('notaCienciasTxt');
    var resultadoPr = document.getElementById('resultadoPr');
    var calcularBtn = document.getElementById('calcularBtn');

    calcularBtn.onclick = function calcularBtnOnClick() {
        var notaMate = Number(notaMateTxt.value);
        var notaEspanol = Number(notaEspanolTxt.value);
        var notaSociales = Number(notaSocialesTxt.value);
        var notaCiencias = Number(notaCienciasTxt.value);
        var promedio = (notaCiencias + notaEspanol + notaSociales + notaMate) / 4;

        if (notaMate==""||notaEspanol==""||notaSociales==""||notaCiencias==""){
            alert("Por favor ingrese datos en todos los campos.");
            return false;
        } else{
            if (promedio>=70){
                resultadoPr.innerHTML = 'Aprobó el curso';
                document.getElementById('rf').value = promedio;
            } else{
                resultadoPr.innerHTML = 'Reprobó el curso';
                document.getElementById('rf').value = promedio;
            }
        }
    }
}

function limpiar(){
    document.getElementById('notaMatematicaTxt').value = "";
    document.getElementById('notaEspanolTxt').value = "";
    document.getElementById('notaSocialesTxt').value = "";
    document.getElementById('notaCienciasTxt').value = "";
    document.getElementById('rf').value = "";
    resultadoPr.innerHTML="";
}