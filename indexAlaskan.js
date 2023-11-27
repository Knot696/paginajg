const contenedorTarjetas = document.querySelector('.main')
const cart = document.querySelector('.itemsCarrito')

function crearArticulos(productos) {
  productos.forEach(producto => {
    const nuevoArticulo = document.createElement('article');
    nuevoArticulo.innerHTML = `
            <img src=${producto.imagen}>
            <p hidden>${producto.imagen}</p>
            <h2>${producto.nombre}</h2>
            <ul>
                <li>${producto.descripcion1}</li>
                <li>${producto.descripcion2}</li>
                <li>${producto.descripcion3}</li>
            </ul>
            <h3>Valor: $</h3>
            <h3>${producto.precio}</h3>
            <button class='botonAgregar'>Agregar al carrito</button>
        `
    contenedorTarjetas.appendChild(nuevoArticulo);

    let productosCarrito = [];

    nuevoArticulo.addEventListener('click', e => {

      if (e.target.classList.contains('botonAgregar')) {
        const producto = e.target.parentElement;

        const infoProducto = {
          imagen: producto.querySelector('p').innerHTML,
          nombre: producto.querySelector('h2').textContent,
          precio: producto.querySelectorAll('h3')[1].textContent,
        }

        productosCarrito = [...productosCarrito, infoProducto];

        mostrarItemsCarrito()
      }

    })

    const mostrarItemsCarrito = () => {

      productosCarrito.forEach(producto => {
  
        const productoCarrito = document.createElement('div');
        productoCarrito.classList.add('items');
        productoCarrito.innerHTML = `
        <img class='imgArt' src='${producto.imagen}'>
        <div class='info'>
          <p>${producto.nombre}</p>
          <p>$${producto.precio}</p>
        </div>
        `

        cart.append(productoCarrito)
      })
    }
  });
}

crearArticulos(articulosAlaskan);