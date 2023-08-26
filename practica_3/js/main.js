/*const personas = {
    nombre: "juan",
    apellid: "ventura",
    caminar: function(){
        return 'Estoy caminando'
    }
}

console.log(personas.nombre)
console.log(personas.caminar())

personas.hablar = function(palabras){
    return `Estoy diciendo ${palabras}`
}

console.log(personas.hablar("Hoy toca parcial de RRHH"))

let propiedad = "edad"
let edad = 30*/

const btnAgregar = document.querySelector("#btn-agregar")
const btnEditar = document.querySelector("#btn-editar")

//referenciado los campos del formulario
nombre = document.querySelector("#nombre")
apellido = document.querySelector("#apellido")
genero = document.querySelector("#genero")
fecha = document.querySelector("#fecha")

//desabilitar el boton de editar
btnEditar.setAttribute('disabled',true)
const personas = {
    data: [],
    nextId:0,
    add: function(persona){
        this.nextId++
        persona.id = this.nextId
        this.data.push(persona)
    }
}

btnAgregar.addEventListener('click', function(){
    if (nombre.value === '' || apellido.value === ''){
        return
    }
    const persona = {
        nombre: nombre.value,
        apellido: apellido.value,
        genero: genero.value,
        fecha: fecha.value
    }
    personas.add(persona)
    console.log(personas.data)
})