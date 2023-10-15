/*//push(): agrega uno o mas elementos al final del array
let numero = [1,2,3]
numero.push(4,5)
console.log(numero)

//pop(): elimina y devuelve el ultimo elemento del array
let frutas = ['manzana','banana','uva']
let ultimaf = frutas.pop()
console.log(frutas)
console.log(ultimaf)

//unshift(): agrega uno o mas elementos al principio del array
let colores = ["verde","amarillo"]
colores.unshift("azul","blanco")
console.log(colores)

//shift(): elimina y devuelve el primer elemento del array
let paises = ["El Salvador","Mexico","Peru"]
let primerP = paises.shift()
console.log(paises)
console.log(primerP)
    
//concat(): combina uno o mas arrays para crear uno nuevo
let arr1 = [1,2]
let arr2 = [3,4]
let combinarArray =  arr1.concat(arr2)
console.log(combinarArray)

//splice(): cambia el contenido de un array eliminando, reemplzando o agregando elementos
let frutas2 = ["banana","naranja","kiwi","pera","manzana"]
let removerfrutas = frutas2.splice(2,1,"uva")
console.log(frutas2)
console.log(removerfrutas)

//foreach(): ejecua una funcion para cada elemento de; array
let number= [1,2,3]
number.forEach(function (number) {
    console.log(number * 2)
})

///ejercicio 2
const products = [
    {name: 'Camisa', precio: 20},
    {name: 'Jeans', precio: 25},
    {name: 'Zapatos', precio: 80},
    {name: 'Sombrero', precio: 10},
]

let precioTotal = 0
 products.forEach(function(producto){
    precioTotal += producto.precio
 })

 console.log('Precio total a pagar: $'+precioTotal)

 //map(): crea un nuevo array aplicando una funcion a cada elemento del array original
 let numbers1 = [1,2,3]
let nuevoAreglo = numbers1.map( function( number) {
    return number * 2
})
console.log(nuevoAreglo)

//ejercicio 2
//convertir grados f a c
const Gcelsius = [0,15,30,5,10]
const Gfarenheith = Gcelsius.map( function( celcius) {
    //formula = f = (c * 9/5) +32
    return (celcius * 9/5) +32
})
console.log('Grados celsius: ' + Gcelsius)
console.log('Grados farenheith: ' + Gfarenheith)

//filter(): crea un nuevo array con todos los elementos que pasan una prueba (funcion proporcionada)
//ejercicio 
const nums = [1,2,3,4,5]
const nums2 = nums.filter( function(number) {
    return number > 5
})
console.log(nums2)

//ejercicio 2
const personas = [
    {nombre: 'Yancy',edad: 24},
    {nombre: 'Jose',edad: 17},
    {nombre: 'Luciana',edad: 30},
    {nombre: 'Kevin',edad: 15},
    {nombre: 'Plutarca',edad: 20}
]

const adultos = personas.filter(function(person){
    return person.edad > 18
})

console.log(adultos)

//reduce(): aplica una funcion a un acumulador y a cada elemento de un areglo( de izquierda a derecha) para reducirlo a un solo valor
let num = [1,2,3,4]
let sum = num.reduce(function(acumulador,valor){
    return acumulador + valor
})
console.log(sum)

//every(): comprueba si todos los elementos de un arry cumplen una condicion dada y devuelve true or false
let mayorCero = num.every(function(number){
    return number > 0
})
console.log(mayorCero)

//sort(): ordena los elementos de un areglo en orden alfabetico( sin crear un nuevo areglo)
let nombres = ['margarita','alberto','santiago']
nombres.sort();
console.log(nombres)*/

//ejercicios de tarea
let tareas = ['Hacer la compra', 'Lavar la ropa', 'Pasear al perro'];
tareas.push('Estudiar JavaScript');
let ultimaTarea = tareas.pop();
console.log(tareas);
console.log('Tarea eliminada: ' + ultimaTarea);

//ejercicio 2
console.log("------------------------------")
let nombres = ['juan', 'ana', 'luis'];

// Crear un nuevo array con los nombres en mayúsculas utilizando una función tradicional
let nombresMayusculas = nombres.map(function(nombre) {
  return nombre.toUpperCase();
});
console.log(nombresMayusculas);


//ejercicio 3
console.log("------------------------------")
let palabras = ['manzana', 'banana', 'pera', 'sandía', 'uva'];
// Filtrar palabras que contienen la letra "a"
let palabrasConA = palabras.filter(function(palabra) {
  return palabra.includes('m');
});
console.log(palabrasConA);

//ejercicio 4
console.log("------------------------------")
let rango = [10, 3, 8, 25, 1, 30];
let numeroMasGrande = rango.reduce((maximo, numero) => {
  if (numero > maximo) {
    return numero;
  } else {
    return maximo;
  }
}, rango[0]);

console.log('El número más grande es: ' + numeroMasGrande);


