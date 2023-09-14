function Longitud() {
    longitud = prompt("Ingrese un numero de datos: ")
    const datos = []
    for (let i = 0; i < longitud; i++) {
        const dato = parseFloat(prompt(`Ingrese el dato #${i + 1}: `))
        if (isNaN(dato)) {
            alert("Por favor, ingrese un número válido.")
            return
        }
        datos.push(dato)
    }
    return datos
}

function calcularMedia(datos) {
    const sum = datos.reduce((acc, val) => acc + val, 0)
    return sum / datos.length
}

function calcularVarianza(datos, media) {
    const sumOfSquares = datos.reduce((acc, val) => acc + Math.pow(val - media, 2), 0)
    return sumOfSquares / datos.length
}

function calcularModa(datos) {
    const frecuencia = {}
    let moda = []
    let maxFrecuencia = 0

    datos.forEach((dato) => {
        if (frecuencia[dato]) {
            frecuencia[dato]++
        } else {
            frecuencia[dato] = 1
        }

        if (frecuencia[dato] > maxFrecuencia) {
            moda = [dato]
            maxFrecuencia = frecuencia[dato]
        } else if (frecuencia[dato] === maxFrecuencia) {
            moda.push(dato)
        }
    })

    return moda.join(", ")
}

function calcularMediana(datos) {
    const sortedData = datos.slice().sort((a, b) => a - b)
    const middle = Math.floor(sortedData.length / 2)

    if (sortedData.length % 2 === 0) {
        return (sortedData[middle - 1] + sortedData[middle]) / 2
    } else {
        return sortedData[middle]
    }
}

const datosIngresados = Longitud()

const media = calcularMedia(datosIngresados)
console.log("Media:", media)

const varianza = calcularVarianza(datosIngresados, media)
console.log("Varianza:", varianza)

const moda = calcularModa(datosIngresados)
console.log("Moda:", moda)

const mediana = calcularMediana(datosIngresados)
console.log("Mediana:", mediana)

