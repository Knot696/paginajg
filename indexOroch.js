const contenedorTarjetas = document.querySelector('.main')

function crearArticulos(productos){
    productos.forEach(producto => {
        const nuevoArticulo = document.createElement('article');
        nuevoArticulo.innerHTML = `
            <img src=${producto.imagen}>
            <h3>${producto.nombre}</h3>
            <ul>
                <li>${producto.descripcion1}</li>
                <li>${producto.descripcion2}</li>
                <li>${producto.descripcion3}</li>
            </ul>
            <h3>Valor: $${producto.precio}</h3>
            <button id='botonAgregar'>Agregar al carrito</button>
        `
        contenedorTarjetas.appendChild(nuevoArticulo);
    });
}

crearArticulos(articulosOroch);