const contentFilas = document.querySelector('#filas-content')
const templateFilas = document.querySelector('#filas-template')
const fragment = document.createDocumentFragment()
const detallePrecios = document.querySelector('#detalle-precios')

const productos = [
    {
        id:1,
        name: 'Coca cola',
        price: 2.00,
        quantity: 10
    },
    {
        id: 2,
        name: 'Pepsi',
        price: 1.90,
        quantity: 20
    }
]

function filasTabla(){
    contentFilas.textContent = ''

    productos.forEach(item => {
        const clone = templateFilas.content.cloneNode(true)
        clone.querySelector('.id').textContent = item.id
        clone.querySelector('.name').textContent = item.name
        clone.querySelector('.price').textContent = `$${item.price}`
        clone.querySelector('.quantity').textContent = item.quantity
        fragment.appendChild(clone)
    })

    // Calcular el total de los precios
    const total = productos.reduce((acumulado, producto) => {
        return acumulado + (producto.price * producto.quantity)
    }, 0)

    // Agregar el total al detalle de precios
    detallePrecios.querySelector('.price-total').textContent = `$${total}`

    contentFilas.appendChild(fragment)
}

filasTabla()

const formAgregarProducto = document.querySelector('#agregar-producto')
formAgregarProducto.addEventListener('submit', event => {
    event.preventDefault()

    // Obtener los datos del formulario
    const id = event.target.querySelector('input[name="id"]').value
    const name = event.target.querySelector('input[name="name"]').value
    const price = event.target.querySelector('input[name="price"]').value
    const quantity = event.target.querySelector('input[name="quantity"]').value

    // Agregar el nuevo producto a la lista
    const producto = {
        id,
        name,
        price,
        quantity
    }
    productos.push(producto)

    // Actualizar la tabla
    filasTabla()
})

const filas = document.querySelectorAll('tr')

filas.forEach(fila => {
    fila.querySelector('button').addEventListener('click', event => {
        // Obtener el índice de la fila
        const index = filas.indexOf(fila)

        // Eliminar la fila de la lista
        productos.splice(index, 1)

        // Actualizar la tabla
        filasTabla()
    })
})
