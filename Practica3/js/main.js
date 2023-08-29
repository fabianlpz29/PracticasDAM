// Referencias a los elementos del formulario y la tabla
const btnAgregar = document.querySelector('#btn-agregar');
const btnEditar = document.querySelector('#btn-editar');
const btnEliminar = document.querySelector('#btn-eliminar');
const btnActualizar = document.querySelector('#btn-actualizar');

const idPersona = document.querySelector("#id-persona");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const genero = document.querySelector("#genero");
const fecha = document.querySelector("#fecha");
const filas = document.querySelector("#filas-personas");

// Objeto para almacenar los datos de las personas
const personas = {
    data: [],
    nextId: 0,
    add: function(persona) {
        this.nextId++;
        persona.id = this.nextId;
        this.data.push(persona);
    }
};

// Variable para rastrear la persona en edición
let personaEditando = null;

// Función para llenar el formulario con los datos de una persona al hacer clic en "Editar"
function getDataEdit(id) {
    personaEditando = personas.data.find(persona => persona.id === id);
    
    idPersona.value = personaEditando.id;
    nombre.value = personaEditando.nombre;
    apellido.value = personaEditando.apellido;
    genero.value = personaEditando.genero;
    fecha.value = personaEditando.fecha;

    btnEditar.removeAttribute('disabled');
    btnAgregar.setAttribute('disabled', true);
}

// Evento para el botón "Agregar"
btnAgregar.addEventListener('click', function() {
    if (nombre.value === '' || apellido.value === '') {
        return;
    }

    const persona = {
        nombre: nombre.value,
        apellido: apellido.value,
        genero: genero.value,
        fecha: fecha.value
    };

    personas.add(persona);

    mostrarPersonas();
    limpiarFormulario();
});

// Evento para el botón "Editar"
btnEditar.addEventListener('click', function() {
    if (!personaEditando) {
        return;
    }

    personaEditando.nombre = nombre.value;
    personaEditando.apellido = apellido.value;
    personaEditando.genero = genero.value;
    personaEditando.fecha = fecha.value;

    personaEditando = null; // Limpiar la persona en edición
    btnEditar.setAttribute('disabled', true);
    btnAgregar.removeAttribute('disabled');

    mostrarPersonas();
    limpiarFormulario();
});

// Evento para el botón "Eliminar"
btnEliminar.addEventListener('click', function() {
    if (!personaEditando) {
        return;
    }

    const index = personas.data.findIndex(persona => persona.id === personaEditando.id);
    if (index !== -1) {
        personas.data.splice(index, 1);
        mostrarPersonas();
        limpiarFormulario();
    }
});

// Función para mostrar personas en la tabla
function mostrarPersonas() {
    filas.innerHTML = '';
    personas.data.forEach(persona => {
        filas.innerHTML += `
            <tr>
                <td>${persona.id}</td>
                <td>${persona.nombre}</td>
                <td>${persona.apellido}</td>
                <td>${persona.genero}</td>
                <td>${persona.fecha}</td>
                <td>
                    <button class="btn btn-primary" onclick="getDataEdit(${persona.id})">Editar</button>
                    <button class="btn btn-danger" onclick="eliminarPersona(${persona.id})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

// Función para eliminar una persona de la lista
function eliminarPersona(id) {
    const index = personas.data.findIndex(persona => persona.id === id);
    if (index !== -1) {
        personas.data.splice(index, 1);
        mostrarPersonas();
        limpiarFormulario();
    }
}

// Función para limpiar los campos del formulario
function limpiarFormulario() {
    idPersona.value = '';
    nombre.value = '';
    apellido.value = '';
    genero.value = '';
    fecha.value = '';
}
