/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

$botonAgregar = document.querySelector("#boton-agregar");
$botonQuitar = document.querySelector("#boton-quitar");
$botonCalcular = document.querySelector("#boton-calcular");

function agregarIntegrante(){

    $displaySueldos = document.querySelector("#display-sueldos");

    $nuevoElementoLista = document.createElement("ul");
    $nuevoElementoLista.className = "integrante-familiar";

    $nuevoLabel = document.createElement("label");
    $nuevoLabel.innerText = "Salario anual: ";

    $nuevoInputSalario = document.createElement("input");
    $nuevoInputSalario.type = "number";
    $nuevoInputSalario.className = "salario-familiar"

    $nuevoElementoLista.appendChild($nuevoLabel);
    $nuevoElementoLista.appendChild($nuevoInputSalario);
    $displaySueldos.appendChild($nuevoElementoLista);


}

function quitarIntegrante(){

    $salariosFamiliares = document.querySelectorAll(".integrante-familiar");
    $salariosFamiliares[$salariosFamiliares.length - 1].remove();

}

function calcularMayorSalario(){

    $inputResultado = document.querySelector("#mayor-salario-anual");
    $sueldos = document.querySelectorAll(".salario-familiar");
    let max = 0;

    $sueldos.forEach(element => {
        if (Number(element.value) > max){
            max = Number(element.value);
        }
    });

    $inputResultado.value = max;

}

function calcularMenorSalario(){

    $inputResultado = document.querySelector("#menor-salario-anual");
    $sueldos = document.querySelectorAll(".salario-familiar");
    let min = Number($sueldos[0].value);

    $sueldos.forEach(element => {
        if(Number(element.value) < min){
            min = Number(element.value);
        }
    });

    $inputResultado.value = min;

}

function calcularSalarioAnualPromedio(){

    $inputResultado = document.querySelector("#promedio-salario-anual");
    $sueldos = document.querySelectorAll(".salario-familiar");
    let suldosAnualesAcumulados = 0;
    let CantidadSueldosNoNulos = 0;

    $sueldos.forEach(element => {
        if(element.value){
            suldosAnualesAcumulados = suldosAnualesAcumulados + Number(element.value);
            CantidadSueldosNoNulos ++;
        }
    });

    let sueldoAnualPromedio = suldosAnualesAcumulados/CantidadSueldosNoNulos;
    $inputResultado.value = sueldoAnualPromedio;
}
function calcularSalarioMensualPromedio(){


    $inputResultado = document.querySelector("#promedio-salario-mensual");
    $sueldos = document.querySelectorAll(".salario-familiar");
    let sueldosMensualesAcumulados = 0;
    let CantidadSueldosNoNulos = 0;
    const MESES_EN_UN_ANIO = 12;
    

    $sueldos.forEach(element => {
        if (element.value){
            sueldosMensualesAcumulados = sueldosMensualesAcumulados + Number(element.value/MESES_EN_UN_ANIO);
            CantidadSueldosNoNulos ++;
        }
    });

    let sueldoMensualPromedio = sueldosMensualesAcumulados/CantidadSueldosNoNulos;
    $inputResultado.value = sueldoMensualPromedio;

    
}


function calcularSalarios(){
    calcularMayorSalario();
    calcularMenorSalario();
    calcularSalarioAnualPromedio();
    calcularSalarioMensualPromedio();
}



$botonAgregar.onclick = function(){
    agregarIntegrante();
}

$botonQuitar.onclick = function(){
    quitarIntegrante();
}

$botonCalcular.onclick = function(){
    calcularSalarios();
}