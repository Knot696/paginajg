let botonJaulaNegra = document.querySelector('.botonJaulaNegra');
let botonJaulaCromada = document.querySelector('.botonJaulaCromada');
let botonLona = document.querySelector('.botonLona');
let botonCobertor = document.querySelector('.botonCobertor');
let botonDeflectores = document.querySelector('.botonDeflectores');
let botonFenders = document.querySelector('.botonFenders');
let botonProteccion = document.querySelector('.botonProteccion');
let botonTuercas = document.querySelector('.botonTuercas');
let botonPolarizados = document.querySelector('.botonPolarizados');
let botonSensores = document.querySelector('.botonSensores');
let botonTalampayaInox = document.querySelector('.botonTalampayaInox');
let botonTalampayaNegra = document.querySelector('.botonTalampayaNegra');
let botonEngancheHyper = document.querySelector('.botonEngancheHyper');
let botonEngancheReforzado = document.querySelector('.botonEngancheReforzado');
let botonEngancheComun = document.querySelector('.botonEngancheComun');
let botonJaulaCañoDobleInox = document.querySelector('.botonJaulaCañoDobleInox');
let botonJaulaCañoDobleNegra = document.querySelector('.botonJaulaCañoDobleNegra');
let botonJaulaCañoSimpleInox = document.querySelector('.botonJaulaCañoSimpleInox');
let botonJaulaCañoSimpleNegra = document.querySelector('.botonJaulaCañoSimpleNegra');
let botonJaulaTrabajo = document.querySelector('.botonJaulaTrabajo');
let estribosSimilOriginal = document.querySelector('.estribosSimilOriginal');
let botonEstriboOval = document.querySelector('.botonEstriboOval');
let botonCabezales = document.querySelector('.botonCabezales');
let botonTapa = document.querySelector('.botonTapa');
let botonKit = document.querySelector('.botonKit');
let body = document.querySelector('body');
let botonCarrito = document.querySelector('.botonCarrito');
let carrito = document.querySelector('.carrito');
let cierreCarrito = document.querySelector('.cierreCarrito');
let itemsCarrito = document.querySelector('.itemsCarrito');
let totalCarrito = document.querySelector('.total');
let precioJaulaNegra = document.querySelector('.precioJaulaNegra');
let precioJaulaCromada = document.querySelector('.precioJaulaCromada');

//Apertura carrito
botonCarrito.addEventListener('click', ()=>{
  carrito.classList.add('carrito1')
})

//Cierre carrito
cierreCarrito.addEventListener('click', ()=>{
  carrito.classList.remove('carrito1')
})

let total=0;

//Agregar elementos al carrito
botonJaulaNegra.addEventListener('click', ()=>{
  total += parseInt(precioJaulaNegra.innerText);
  console.log(total);
  let item = document.createElement('div');
  let imgItem = document.createElement('img');
  let eliminarItem = document.createElement('img');
  let info = document.createElement('div');
  let nombreItem = document.createElement('p')
  let precioItem = document.createElement('p')
  itemsCarrito.appendChild(item);
  item.appendChild(imgItem);
  item.appendChild(info);
  info.appendChild(nombreItem);
  info.appendChild(precioItem);
  item.appendChild(eliminarItem);
  info.classList.add('info');
  item.classList.add('items');
  imgItem.classList.add('imgArt');
  nombreItem.innerText = 'Jaula Negra';
  precioItem.innerText = "$" + precioJaulaNegra.innerText;
  eliminarItem.classList.add('eliminarItems');
  eliminarItem.src = 'items/x.png';
  imgItem.src = 'alaskan/1.jpg';
  eliminarItem.addEventListener('click',()=>{
    itemsCarrito.removeChild(item);
  })
})

