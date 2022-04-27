/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonGrupoFamiliar = document.querySelector("#boton-grupo-familiar");
const $botonCalcularGrupoFamiliar = document.querySelector("#calcular");
const $botonResetearGrupoFamiliar = document.querySelector("#resetear");

function crearNuevoElementoLista(textoLabel,valorClase,nodoPadre){

    $nuevoLi = document.createElement("li");
    $nuevoLi.className = valorClase;


    $nuevoLabel = document.createElement("label");
    $nuevoLabel.innerText = textoLabel;

    $nuevoInput = document.createElement("input");
    $nuevoInput.style.disable;

    $nuevoLi.appendChild($nuevoLabel);
    $nuevoLi.appendChild($nuevoInput);
    nodoPadre.appendChild($nuevoLi);

}


function limpiarNodoPorClase(clase){
    let filtroDocument = `.${clase}`
    const $nodoParaLimpear = document.querySelectorAll(filtroDocument);

    $nodoParaLimpear.forEach(element => {
        element.remove();
    }); 
}


$botonGrupoFamiliar.onclick = function(){


    

    const $cantidadGrupoFamiliar = document.querySelector("#cantidad-grupo-familiar");
    let numeroGrupoFamliar = Number($cantidadGrupoFamiliar.value);

    const $displayFamiliar = document.querySelector("#display-familiar");

    limpiarNodoPorClase("miembro-familiar");



    
    

    for (let index = 0; index < numeroGrupoFamliar; index++) {
        crearNuevoElementoLista(`Familiar numero ${index+1}`,"miembro-familiar",$displayFamiliar);
    }

    $botonCalcularGrupoFamiliar.style.display = "";
    $botonResetearGrupoFamiliar.style.display = "";
}


$botonCalcularGrupoFamiliar.onclick= function(){

    const $nodosFamiliares = document.querySelectorAll(".miembro-familiar input");
    const $displayFamiliarResultados = document.querySelector("#display-familiar-resultados");
    

    let valorMaximo = 0;
    let valorMinimo = 200;
    let valorAcumulado = 0;

    $nodosFamiliares.forEach(element => {
        if (Number(element.value) > valorMaximo){
            valorMaximo = Number(element.value);
        }
        if(Number(element.value) < valorMinimo){
            valorMinimo = Number(element.value);
        }
        valorAcumulado = valorAcumulado + Number(element.value);
    });

    document.querySelector("#mayor-edad").value = valorMaximo;
    document.querySelector("#menor-edad").value = valorMinimo;
    document.querySelector("#edad-promedio").value = valorAcumulado/$nodosFamiliares.length;

    $displayFamiliarResultados.style.display = "";
    

}

$botonResetearGrupoFamiliar.onclick = function(){

    const $displayFamiliarResultados = document.querySelector("#display-familiar-resultados");

    
    $displayFamiliarResultados.style.display = "none";
    $botonResetearGrupoFamiliar.style.display = "none";
    $botonCalcularGrupoFamiliar.style.display = "none";

    limpiarNodoPorClase("miembro-familiar");



}

