const libros = ["Libro 1", "Libro 2", "Libro 3", "Libro 4", "Libro 5"];
const resultadoDiv = document.querySelector("#resultado");

function mostrarLibros() {
    let lista = "Lista de libros disponibles:<br>";
    for (let i = 0; i < libros.length; i++) {
        lista += `${i + 1}. ${libros[i]}<br>`;
    }
    resultadoDiv.innerHTML = lista;
}

function prestarLibro() {
    mostrarLibros();
    const opcion = parseInt(prompt("Ingrese el número del libro que desea prestar:"));

    if (opcion >= 1 && opcion <= libros.length) {
        const libroPrestado = libros.splice(opcion - 1, 1);
        resultadoDiv.textContent = `Has prestado el libro: ${libroPrestado}`;
    } else {
        resultadoDiv.textContent = "Opción inválida. No se pudo prestar el libro.";
    }
}

function agregarDevolverLibro() {
    const opcion = prompt("Seleccione una opción:\n a. Agregar libro\n b. Devolver libro");

    if (opcion === "a") {
        const nuevoLibro = prompt("Ingrese el nombre del libro a agregar:");
        if (nuevoLibro) {
            libros.push(nuevoLibro);
            resultadoDiv.textContent = `Has agregado el libro: ${nuevoLibro}`;
        }
    } else if (opcion === "b") {
        mostrarLibros();
        const libroDevuelto = prompt("Ingrese el número del libro que desea devolver:");

        if (libroDevuelto >= 1 && libroDevuelto <= libros.length) {
            resultadoDiv.textContent = `Has devuelto el libro: ${libros[libroDevuelto - 1]}`;
            libros.splice(libroDevuelto - 1, 0, libros[libroDevuelto - 1]);
        } else {
            resultadoDiv.textContent = "Opción inválida. No se pudo devolver el libro.";
        }
    }
}

function verificarLibro() {
    const libroBuscado = prompt("Ingrese el nombre del libro a buscar:");
    if (libros.includes(libroBuscado)) {
        resultadoDiv.textContent = "Sí, ese libro está en la lista.";
    } else {
        resultadoDiv.textContent = "No, ese libro no está en la lista.";
    }
}

const btnVerLibros = document.querySelector("#btnVerLibros");
btnVerLibros.addEventListener("click", mostrarLibros);

const btnPrestarLibro = document.querySelector("#btnPrestarLibro");
btnPrestarLibro.addEventListener("click", prestarLibro);

const btnAgregarDevolver = document.querySelector("#btnAgregarDevolver");
btnAgregarDevolver.addEventListener("click", agregarDevolverLibro);

const btnVerificarLibro = document.querySelector("#btnVerificarLibro");
btnVerificarLibro.addEventListener("click", verificarLibro);
