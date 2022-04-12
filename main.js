// Practica de funciones


function calculateAnnualSalary(monthlySalary){

let monthsInYear = 12;
let annualSalary = monthsInYear * monthlySalary;
return annualSalary;

}

function calculateWeeklySalary(monthlySalary){
let weeksInMonth = 4;
let weeklySalary = monthlySalary / weeksInMonth;
return weeklySalary;
}

function calculateSallaryPerHour(monthlySalary){
let hoursInMonth = 730;
let sallaryPerHour = monthlySalary / hoursInMonth;
return sallaryPerHour;
}

let monthlySalary = Number(prompt("What your monthly salary?"));
console.log("your sallary per hour is:", calculateSallaryPerHour(monthlySalary) );
console.log("your sallary in a week is:", calculateWeeklySalary(monthlySalary) );
console.log("your sallary in a year is:", calculateAnnualSalary(monthlySalary) );



// Un poco de testeo de hoisting



 
function testHoisting(){
    if(true){
        if(true){
            var variableTest = 5;
            console.log(variableTest);
        }
        console.log(variableTest);
    }
    console.log(variableTest);
}

testHoisting();





// Calculadora basica



 
function suma(numero1, numero2){
    return numero1 + numero2;
}

function resta(numero1, numero2){
    return numero1 - numero2
}



operador = prompt("suma o resta")
let num1 = 5;
let num2 = 3;
let resultado;
if(operador === "suma"){
    resultado = suma(num1,num2);
    console.log(resultado);
} else if(operador === "resta"){
    resultado = resta(num1,num2);
    console.log(resultado);
} else{
    console.log("No se encontro la operacion que desea realziar");
}



// Practica de template strings, cuando usamos un ${} estamos haciendo interpolacion



 
let nombreUsuario = "Pepe";

console.log(`Hola ${nombreUsuario} ustedes esta siendo saludado mediante templates strings y aqui va un numero random ${7*12} uwu`);

console.log(`${123 || false}`);

// Tarea entrada bar



function pedirDNI(){
    const RESPUESTA_POSITIVA = "si";
    const RESPUESTA_NEGATIVA = "no";
    let respuestaUsuarioDNI = (prompt("Tenes DNI?") || "").toLowerCase();

    if(respuestaUsuarioDNI === RESPUESTA_POSITIVA){
        console.log("Tiene DNI");
        return true;

    } else if(respuestaUsuarioDNI == RESPUESTA_NEGATIVA){
        console.log("No tiene DNI");
        return false;

    } else{
        console.log("Respuesta no valida");
        return pedirDNI();
    }
}

function pedirEdad(){

    const EDAD_PERMITIDA = 18;
    let respuestaUsuarioEdad = (Number(prompt("Ingresa tu edad")) || NaN) 
    if (respuestaUsuarioEdad >= EDAD_PERMITIDA){

        console.log("Usuario es mayor de edad");
        return true;

    } else if (respuestaUsuarioEdad < EDAD_PERMITIDA){

        console.log("Usuario es menor de edad");
        return false;

    } else {

        console.log("Respuesta no validada");
        return pedirEdad();

    }

}

let usuarioDNI = pedirDNI();

if(usuarioDNI){
    
    let usuarioEdad = pedirEdad();
    
    if (usuarioEdad){

        console.log("Bienvenido al bar");

    } else{

        console.log("Usted es menor de edad, no puede ingresar!")

    }

}



// Practica FizzBuzz


function fizzBuzz(numero){
    if(numero % 3 === 0 && numero % 5 === 0){
        return "FizzBuzz";
    } else if(numero % 3 === 0){
        return "Fizz";
    } else if(numero % 5 === 0){
        return "Buzz";
    } else{
        return numero;
    }
}


let numeroDeIteraciones = Number(prompt("Cuantas iteraciones desea realizar?"));

for (let index = 1; index < numeroDeIteraciones; index++) {
    console.log(fizzBuzz(index));
}


// Finalizadas las praticas 1







