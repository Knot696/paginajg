const contenedorTarjetas = document.querySelector('.main')

function crearArticulos(productos) {
  productos.forEach(producto => {
    const nuevoArticulo = document.createElement('article');
    nuevoArticulo.innerHTML = `
            <img src=${producto.imagen}>
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

    let productosCarrito=[];

    nuevoArticulo.addEventListener('click',e =>{
      
      if(e.target.classList.contains('botonAgregar')){
        const producto = e.target.parentElement

        const infoProducto={
          cantidad:1,
          nombre: producto.querySelector('h2').textContent,
          valor: producto.querySelectorAll('h3')[1].textContent,
        }

        productosCarrito= [...productosCarrito, infoProducto]

        
        
      }
      console.log(productosCarrito)
    })
    
    /* nuevoArticulo.getElementsByTagName('button')[0].addEventListener('click', () => agregarAlCarrito(producto)) */
  });
}

crearArticulos(articulosAlaskan);