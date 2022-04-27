function validadEdadBar(edad){
    if (edad >= 18){
        return true;
    } else if (edad <18){
        return false;
    }
}


const botonFinalizar = document.querySelector('#botonFinalizarFormularioUsuario');

botonFinalizar.onclick = function(){

    const $NOMBRE_USUARIO = document.querySelector('#nombreUsuario');
    const $EDAD_USUARIO = document.querySelector("#edadUsuario");
    const $ESPACIO_RESULTADO = document.querySelector("#resultadoTextoUsuario");

    let boolEdadUsuario = validadEdadBar($EDAD_USUARIO.value);
    let textoResultadoValidacion; 
    if(boolEdadUsuario){
        textoResultadoValidacion = "puede ingresar al bar"
    } else{
        textoResultadoValidacion = "no puede ingresar al bar"
    }
    $ESPACIO_RESULTADO.innerText = `Hola ${$NOMBRE_USUARIO.value}, tienes ${$EDAD_USUARIO.value} y ${textoResultadoValidacion}`;
   



}

