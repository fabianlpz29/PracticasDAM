//comentario de linea

/*
comentario de bloque
 */

/*var variable = 4
console.log(variable)

var variable = 5 
console.log(variable)

let otra_variable = 10
const pi = 3.1416*/

let numero1 = 1
let numero2 = '1'

if(numero1 == numero2){
    console.log("son iguales")
}else{
    console.log("no son iguales")
}

//let info = prompt("Ingresa algo")
//alert(info)

/*function funcion1(){
    alert("ESTO ES UINA FUNCION")
}

funcion1*/

//document.write("Hola")
/*document.getElementById("parrafo1").innerHTML = "<b>Esto es una parrafo</b>"

const myparrafo = document.getElementById("parrafo1")

myparrafo.innerHTML = "Mi parrafo 2"

const otroparrafo = document.querySelector("#parrafo2")
otroparrafo.innerHTML = "este es el otro parrafo"*/

//Array.miMetodo = "prueba"

/*et miArray = []
const objeto = {}*/


//Ejercicio 1
/*let nombre = prompt("Ingrese su nombre")
let edad = prompt("Ingresa tu edad")

if(edad >= 18){
    document.writeln(`!!!Bienvenido!!! ${nombre} eres mayor de edad(${edad})`)
}else{
    document.writeln(`eres menor de edad(${edad})`)
}*/

//Ejercicio 2
/*let anio_de_nacimiento = prompt("Ingrese su edad: ")
let anio_actual = new Date().getFullYear()
let edad = anio_actual - parseInt(anio_de_nacimiento)

alert(`Tu edad es: ${edad}`)*/

//Ejercicio 3
var numeroSecreto = Math.floor(Math.random() * 10) + 1; 
console.log(numeroSecreto)

while (true) {
    let numeroUsuario = parseInt(prompt("Adivina el número secreto (entre 1 y 10):"));

    if (numeroUsuario === numeroSecreto) {
        alert("Felicidades acertastes el numero")
        break; 
    } else {

    }
}


