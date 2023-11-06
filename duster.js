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
let botonPortaEquipaje = document.querySelector('.botonPortaEquipaje');
let botonApoyaBrazos = document.querySelector('.botonApoyaBrazos');
let botonProtectoresDuster = document.querySelector('.botonProtectoresDuster');
let botonDeflectoresDuster = document.querySelector('.botonDeflectoresDuster');
let botonTraba = document.querySelector('.botonTraba');
let botonFendersDuster = document.querySelector('.botonFendersDuster');
let botonCamara = document.querySelector('.botonCamara');
let botonSensores = document.querySelector('.botonSensores');
let botonTornillos = document.querySelector('.botonTornillos');
let botonPolarizados = document.querySelector('.botonPolarizados');
let botonKit = document.querySelector('.botonKit');
let botonDefensaFrontal = document.querySelector('.botonDefensaFrontal');
let precioPortaEquipaje = document.querySelector('.precioPortaEquipaje');
let precioApoyaBrazos = document.querySelector('.precioApoyaBrazos');
let precioProtectoresDuster = document.querySelector('.precioProtectoresDuster');
let precioDeflectoresDuster = document.querySelector('.precioDeflectoresDuster');
let precioTraba = document.querySelector('.precioTraba');
let precioFendersDuster = document.querySelector('.precioFendersDuster');
let precioCamara = document.querySelector('.precioCamara');
let precioSensores = document.querySelector('.precioSensores');
let precioTornillos = document.querySelector('.precioTornillos');
let precioPolarizados = document.querySelector('.precioPolarizados');
let precioKit = document.querySelector('.precioKit');
let precioDefensaFrontal = document.querySelector('.precioDefensaFrontal');

//Apertura carrito
botonCarrito.addEventListener('click', ()=>{
  carrito.classList.add('carrito1');
})

//Cierre carrito
cierreCarrito.addEventListener('click', ()=>{
  carrito.classList.add('desaparecer');
  function borrar(){
    carrito.classList.remove('carrito1');
    carrito.classList.remove('desaparecer');
  }
  setTimeout(borrar, 400);
})

//Realizar pedido
realizarPedido.addEventListener('click', ()=>{
  formulario.classList.add('carrito1');
})

cierreFormulario.addEventListener('click', ()=>{
  formulario.classList.add('desaparecer');
  function borrar(){
    formulario.classList.remove('carrito1');
    formulario.classList.remove('desaparecer');
  }
  setTimeout(borrar, 400);
})

//Validacion formulario

  /* usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros. */

envioFormu.addEventListener('click', (e)=>{
  e.preventDefault
  if(nombre.value == ''){
    nombre.classList.add('error');
    return;
  }else{
    nombre.classList.remove('error');
  }
  if(apellido.value == ''){
    apellido.classList.add('error');
    return;
  }else{
    apellido.classList.remove('error');
  }
  if(telefono.value == ''){
    telefono.classList.add('error');
    return;
  }else{
    telefono.classList.remove('error');
  }
  if(email.value == ''){
    email.classList.add('error');
    return;
  }else{
    email.classList.remove('error');
  }
})

let total=0;
let contadorCarrito = 0;

//Plantilla para items
class Items{
  constructor(item, imgItem, eliminarItem, info, nombreItem, precioItem, valor, contadorCarrito){
    this.item = item;
    this.imgItem = imgItem;
    this.eliminarItem = eliminarItem;
    this.info = info;
    this.nombreItem = nombreItem;
    this.precioItem = precioItem;
    this.valor = valor;
  }
  crearItem(){
    itemsCarrito.appendChild(this.item);
    this.item.appendChild(this.imgItem);
    this.item.appendChild(this.info);
    this.info.appendChild(this.nombreItem);
    this.info.appendChild(this.precioItem);
    this.item.appendChild(this.eliminarItem);
    this.info.classList.add('info');
    this.item.classList.add('items');
    this.imgItem.classList.add('imgArt');
    this.eliminarItem.classList.add('eliminarItems');
    this.eliminarItem.src = 'items/x.png';
    totalCarrito.innerText = '$'+total;
    contador.innerText=contadorCarrito += 1;
    this.eliminarItem.addEventListener('click',()=>{
      itemsCarrito.removeChild(this.item);
      totalCarrito.innerText = '$'+total;
      contador.innerText= contadorCarrito -= 1;
    })
  }
}

//Agregar elementos al carrito

botonPortaEquipaje.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioPortaEquipaje.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioPortaEquipaje.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'PORTA EQUIPAJE';
  elemento.precioItem.innerText = "$" + precioPortaEquipaje.innerText;
  elemento.imgItem.src = 'duster/d7.jpg';
})
botonApoyaBrazos.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioApoyaBrazos.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioJaulaCromada.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'APOYABRAZOS';
  elemento.precioItem.innerText = "$" + precioApoyaBrazos.innerText;
  elemento.imgItem.src = 'duster/d2.jpg';
})
botonProtectoresDuster.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioProtectoresDuster.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioProtectoresDuster.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'PROTECTORES PUERTAS';
  elemento.precioItem.innerText = "$" + precioProtectoresDuster.innerText;
  elemento.imgItem.src = 'duster/d3.jpg';
})
botonDeflectoresDuster.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioDeflectoresDuster.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioDeflectoresDuster.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'DEFLECTORES LLUVIA';
  elemento.precioItem.innerText = "$" + precioDeflectoresDuster.innerText;
  elemento.imgItem.src = 'duster/d6.jpg';
})
botonTraba.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioTraba.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioTraba.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'TRABA AUXILIAR';
  elemento.precioItem.innerText = "$" + precioTraba.innerText;
  elemento.imgItem.src = 'duster/d4.jpg';
})
botonFendersDuster.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioFendersDuster.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioFendersDuster.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'KIT FENDERS';
  elemento.precioItem.innerText = "$" + precioFendersDuster.innerText;
  elemento.imgItem.src = 'duster/d5.jpg';
})
botonCamara.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioCamara.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioCamara.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'CAMARA RETROCESO';
  elemento.precioItem.innerText = "$" + precioCamara.innerText;
  elemento.imgItem.src = 'genericos/k3.jpg';
})
botonSensores.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioSensores.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioSensores.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'SENSORES ESTACIONAMIENTO';
  elemento.precioItem.innerText = "$" + precioSensores.innerText;
  elemento.imgItem.src = 'genericos/k8.jpg';
})
botonTornillos.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioTornillos.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioTornillos.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'TORNILLOS SEGURIDAD';
  elemento.precioItem.innerText = "$" + precioTornillos.innerText;
  elemento.imgItem.src = 'genericos/K9.jpg';
})
botonPolarizados.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioPolarizados.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioPolarizados.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'POLARIZADO';
  elemento.precioItem.innerText = "$" + precioPolarizados.innerText;
  elemento.imgItem.src = 'genericos/pola.jpg';
})
botonKit.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioKit.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioKit.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'KIT SEGURIDAD';
  elemento.precioItem.innerText = "$" + precioKit.innerText;
  elemento.imgItem.src = 'genericos/kits.jpg';
})
botonDefensaFrontal.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioDefensaFrontal.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioDefensaFrontal.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'DEFENSA FRONTAL';
  elemento.precioItem.innerText = "$" + precioDefensaFrontal.innerText;
  elemento.imgItem.src = 'duster/d1.jpg';
})
