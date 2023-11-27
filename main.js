let body = document.querySelector('body');
let botonCarrito = document.querySelector('.botonCarrito');
let carrito = document.querySelector('.carrito');
let cierreCarrito = document.querySelector('.cierreCarrito');
let itemsCarrito = document.querySelector('.itemsCarrito');
let totalCarrito = document.querySelector('.totalCarrito');
let contador = document.querySelector('.contadorCarrito');
let realizarPedido = document.querySelector('.realizarPedido');
let formulario = document.querySelector('.formulario');
let cierreFormulario = document.querySelector('.cierreFormulario');
let inputAccesorioOculto = document.querySelector('.inputAccesorioOculto');
let inputMontoOculto = document.querySelector('.inputMontoOculto');
let nombre = document.querySelector('#nombre');
let apellido = document.querySelector('#apellido');
let telefono = document.querySelector('#telefono');
let email = document.querySelector('#email');
let envioFormu = document.querySelector('#envioFormu');
let mensajeEnvio = document.querySelector('.mensajeEnvio');
let flecha = document.querySelector('.flecha');

let total=0;
let contadorCarrito = 0;

//Apertura carrito
function abrirCarrito(){
  carrito.classList.add('carrito1');
}

botonCarrito.addEventListener('click', ()=>{
  abrirCarrito();
})

//Cierre carrito
function cerrarCarrito(){
  carrito.classList.add('desaparecer');
  function borrar(){
    carrito.classList.remove('carrito1');
    carrito.classList.remove('desaparecer');
  }
  setTimeout(borrar, 400);
}

cierreCarrito.addEventListener('click', ()=>{
  cerrarCarrito();
})

//Apertura formulario
function abrirForm(){
  if(itemsCarrito.innerHTML==''){
    alert('No hay items en el carrito')
  }else{
  formulario.classList.add('carrito1');
  }
}

realizarPedido.addEventListener('click', ()=>{
  abrirForm();
})

//Cierre formulario
function cierreForm(){
  formulario.classList.add('desaparecer');
  function borrar(){
    formulario.classList.remove('carrito1');
    formulario.classList.remove('desaparecer');
  }
  setTimeout(borrar, 400);
}

cierreFormulario.addEventListener('click', ()=>{
  cierreForm();
})

//Validacion formulario

	let name = /^[a-zA-ZÀ-ÿ\s]{2,40}$/ // Letras y espacios, pueden llevar acentos.
	let correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
	let tel = /^\d{7,14}$/ // 7 a 14 numeros.

function validacion(e){
  if((nombre.value == '')||(name.test(nombre.value)==false)){
    nombre.classList.add('error');
    e.preventDefault()
    return;
  }else{
    nombre.classList.remove('error');
  }
  if((apellido.value == '')||(name.test(apellido.value)==false)){
    apellido.classList.add('error');
    e.preventDefault()
    return;
  }else{
    apellido.classList.remove('error');
  }
  if((telefono.value == '')||(tel.test(telefono.value)==false)){
    telefono.classList.add('error');
    e.preventDefault()
    return;
  }else{
    telefono.classList.remove('error');
  }
  if((email.value == '')||(correo.test(email.value)==false)){
    email.classList.add('error');
    e.preventDefault()
    return;
  }else{
    email.classList.remove('error');
  }
  mensajeEnvio.classList.add('mensajeEnvio1');
}