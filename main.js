const body = document.querySelector('body');
<<<<<<< HEAD
const header = document.querySelector('header');
const header2 = document.querySelector('.nav2 header');
const botonCarrito = document.querySelector('.botonCarrito');
const botonCarrito1 = document.querySelector('.botonCarrito1');
=======
const botonCarrito = document.querySelector('.botonCarrito');
>>>>>>> 5eec35e26e787a2d3facb4f277e38d8b16e86114
const carrito = document.querySelector('.carrito');
const cierreCarrito = document.querySelector('.cierreCarrito');
const itemsCarrito = document.querySelector('.itemsCarrito');
let totalCarrito = document.querySelector('.totalCarrito');
let contador = document.querySelector('.contadorCarrito');
<<<<<<< HEAD
let contador1 = document.querySelector('.contadorCarrito1');
=======
>>>>>>> 5eec35e26e787a2d3facb4f277e38d8b16e86114
const realizarPedido = document.querySelector('.realizarPedido');
const formulario = document.querySelector('.formulario');
const cierreFormulario = document.querySelector('.cierreFormulario');
const inputAccesorioOculto = document.querySelector('.inputAccesorioOculto');
const inputMontoOculto = document.querySelector('.inputMontoOculto');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');
const envioFormu = document.querySelector('#envioFormu');
const mensajeEnvio = document.querySelector('.mensajeEnvio');
const flecha = document.querySelector('.flecha');
const titulo = document.querySelector('title').innerText;
<<<<<<< HEAD
const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu');
const desplegable = document.querySelector('.desplegable');
const cierreMenu = document.querySelector('.cierreMenu');

//Cambio header
window.addEventListener('scroll', ()=>{
  header.classList.toggle('negativo', window.scrollY>0);
  header2.classList.toggle('sombra', window.scrollY>0);
})

=======

>>>>>>> 5eec35e26e787a2d3facb4f277e38d8b16e86114
let total = 0;
let contadorCarrito = 0;

//Apertura menu

menu.addEventListener('click', ()=>{
  desplegable.classList.toggle('desplegableOpen')
})

//Cierre menu
cierreMenu.addEventListener('click', ()=>{
  desplegable.classList.toggle('desplegableOpen')
})

//Apertura carrito
function abrirCarrito() {
  carrito.classList.add('carrito1');
}

<<<<<<< HEAD
botonCarrito.addEventListener('click', () => {
  abrirCarrito();
})
botonCarrito1.addEventListener('click', () => {
  abrirCarrito();
})
=======
contador.addEventListener('click', () => {
  abrirCarrito();
})
botonCarrito.addEventListener('click', () => {
  abrirCarrito();
})
>>>>>>> 5eec35e26e787a2d3facb4f277e38d8b16e86114

//Cierre carrito
function cerrarCarrito() {
  carrito.classList.add('desaparecer');
  function borrar() {
    carrito.classList.remove('carrito1');
    carrito.classList.remove('desaparecer');
  }
  setTimeout(borrar, 400);
}

cierreCarrito.addEventListener('click', () => {
  cerrarCarrito();
})

//Apertura formulario
function abrirForm() {
  if (itemsCarrito.innerHTML == '') {
    alert('No hay items en el carrito')
  } else {
    formulario.classList.add('carrito1');
  }
}

realizarPedido.addEventListener('click', () => {
  abrirForm();
})

//Cierre formulario
function cierreForm() {
  formulario.classList.add('desaparecer');
  function borrar() {
    formulario.classList.remove('carrito1');
    formulario.classList.remove('desaparecer');
  }
  setTimeout(borrar, 400);
}

cierreFormulario.addEventListener('click', () => {
  cierreForm();
})

//Crear tarjetas dinamicamente

const contenedorTarjetas = document.querySelector('.main')

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
            <div class='valor'>
              <h3>Valor: $</h3>
              <h3>${producto.precio}</h3>
            </div>
            <button class='botonAgregar'>Agregar al carrito</button>
        `
    contenedorTarjetas.appendChild(nuevoArticulo);

    //Agregar elementos al carrito

    let productosCarrito = [];

    nuevoArticulo.addEventListener('click', e => {

      if (e.target.classList.contains('botonAgregar')) {
        const producto = e.target.parentElement;

        const infoProducto = {
          imagen: producto.querySelector('p').innerHTML,
          nombre: producto.querySelector('h2').textContent,
          precio: producto.querySelectorAll('h3')[1].textContent,
        }

        productosCarrito = [infoProducto];

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
            <img class='eliminarItems' src='./material/items/x.png'>
            `

            itemsCarrito.append(productoCarrito)

            total += parseInt(producto.precio);
            inputAccesorioOculto.value +=' +'+(producto.nombre)+'+ ';
            totalCarrito.innerText = '$' + total;
            inputMontoOculto.value = totalCarrito.innerText;
            contadorCarrito += 1;
            contador.innerText = contadorCarrito;
<<<<<<< HEAD
            contador1.innerText = contadorCarrito;
=======
>>>>>>> 5eec35e26e787a2d3facb4f277e38d8b16e86114

            //Eliminar items carrito
            productoCarrito.addEventListener('click', (e) => {
              if (e.target.classList.contains('eliminarItems')) {
                const elemento = e.target.parentElement;
                total -= parseInt(producto.precio);
                inputAccesorioOculto.value +=' -'+(producto.nombre)+'- ';
                totalCarrito.innerText = '$' + total;
                inputMontoOculto.value = totalCarrito.innerText;
                contadorCarrito -= 1;
                contador.innerText = contadorCarrito;
<<<<<<< HEAD
                contador1.innerText = contadorCarrito;
=======
>>>>>>> 5eec35e26e787a2d3facb4f277e38d8b16e86114
                elemento.remove();
              }
            })
          })
        }
        mostrarItemsCarrito('click')
      }
    })
  });

}

if (titulo == 'Accesorios Renault Alaskan') {
  crearArticulos(articulosAlaskan);
} else if (titulo == 'Accesorios Renault Duster') {
  crearArticulos(articulosDuster);
} else if (titulo == 'Accesorios Renault Logan') {
  crearArticulos(articulosSandero);
} else if (titulo == 'Accesorios Renault Sandero') {
  crearArticulos(articulosSandero);
} else if (titulo == 'Accesorios Renault Stepway') {
  crearArticulos(articulosStepway);
} else if (titulo == 'Accesorios Renault Oroch') {
  crearArticulos(articulosOroch);
} else if (titulo == 'Accesorios Renault Kangoo II') {
  crearArticulos(articulosKangoo);
<<<<<<< HEAD
}else if (titulo == 'Accesorios Peugeot 208') {
  crearArticulos(articulos208);
} else if (titulo == 'Accesorios Peugeot 3008') {
  crearArticulos(articulos3008);
} else if (titulo == 'Accesorios Peugeot 5008') {
  crearArticulos(articulos5008);
} else if (titulo == 'Accesorios Peugeot Partner') {
  crearArticulos(articulosPartner);
} else if (titulo == 'Accesorios Peugeot Expert') {
  crearArticulos(articulosExpert);
} else if (titulo == 'Accesorios Peugeot Boxer') {
  crearArticulos(articulosBoxer);
=======
>>>>>>> 5eec35e26e787a2d3facb4f277e38d8b16e86114
}

//Validacion formulario

let name = /^[a-zA-ZÀ-ÿ\s]{2,40}$/ // Letras y espacios, pueden llevar acentos.
let correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
let tel = /^\d{7,14}$/ // 7 a 14 numeros.

<<<<<<< HEAD
envioFormu.addEventListener('click', (e)=>{
=======
function validacion(e) {
>>>>>>> 5eec35e26e787a2d3facb4f277e38d8b16e86114
  if ((nombre.value == '') || (name.test(nombre.value) == false)) {
    nombre.classList.add('error');
    e.preventDefault()
    return;
  } else {
    nombre.classList.remove('error');
  }
  if ((apellido.value == '') || (name.test(apellido.value) == false)) {
    apellido.classList.add('error');
    e.preventDefault()
    return;
  } else {
    apellido.classList.remove('error');
  }
  if ((telefono.value == '') || (tel.test(telefono.value) == false)) {
    telefono.classList.add('error');
    e.preventDefault()
    return;
  } else {
    telefono.classList.remove('error');
  }
  if ((email.value == '') || (correo.test(email.value) == false)) {
    email.classList.add('error');
    e.preventDefault()
    return;
  } else {
    email.classList.remove('error');
  }
  mensajeEnvio.classList.add('mensajeEnvio1');
<<<<<<< HEAD
})
=======
}
>>>>>>> 5eec35e26e787a2d3facb4f277e38d8b16e86114
