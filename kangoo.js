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
let botonGaleriaTecho = document.querySelector('.botonGaleriaTecho');
let botonApoyaBrazos = document.querySelector('.botonApoyaBrazos');
let botonCamaraRetroceso = document.querySelector('.botonCamaraRetroceso');
let botonLlantas = document.querySelector('.botonLlantas');
let botonEnganche = document.querySelector('.botonEnganche');
let botonMariposero = document.querySelector('.botonMariposero');
let botonCanasto = document.querySelector('.botonCanasto');
let botonSensores = document.querySelector('.botonSensores');
let botonTornillos = document.querySelector('.botonTornillos');
let botonChapon = document.querySelector('.botonChapon');
let botonCobertor = document.querySelector('.botonCobertor');
let botonPolarizado = document.querySelector('.botonPolarizado');
let botonKit = document.querySelector('.botonKit');
let precioGaleriaTecho = document.querySelector('.precioGaleriaTecho');
let precioApoyaBrazos = document.querySelector('.precioApoyaBrazos');
let precioCamaraRetroceso = document.querySelector('.precioCamaraRetroceso');
let precioLlantas = document.querySelector('.precioLlantas');
let precioEnganche = document.querySelector('.precioEnganche');
let precioMariposero = document.querySelector('.precioMariposero');
let precioCanasto = document.querySelector('.precioCanasto');
let precioSensores = document.querySelector('.precioSensores');
let precioTornillos = document.querySelector('.precioTornillos');
let precioChapon = document.querySelector('.precioChapon');
let precioCobertor = document.querySelector('.precioCobertor');
let precioPolarizado = document.querySelector('.precioPolarizado');
let precioKit = document.querySelector('.precioKit');

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
    inputMontoOculto.value = totalCarrito.innerText;
    contador.innerText=contadorCarrito += 1;
    this.eliminarItem.addEventListener('click',()=>{
      itemsCarrito.removeChild(this.item);
      totalCarrito.innerText = '$'+total;
      inputMontoOculto.value = totalCarrito.innerText;
      contador.innerText= contadorCarrito -= 1;
    })
  }
}

//Agregar elementos al carrito

botonGaleriaTecho.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioGaleriaTecho.innerText);
  inputAccesorioOculto.value += ' +GALERIA+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioGaleriaTecho.innerText);
    inputAccesorioOculto.value += ' -GALERIA- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'GALERIA TECHO';
  elemento.precioItem.innerText = "$" + precioGaleriaTecho.innerText;
  elemento.imgItem.src = 'kangoo/k2.jpg';
})
botonApoyaBrazos.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioApoyaBrazos.innerText);
  inputAccesorioOculto.value += ' +APOYABRAZOS+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioApoyaBrazos.innerText);
    inputAccesorioOculto.value += ' -APOYABRAZOS- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'APOYABRAZOS';
  elemento.precioItem.innerText = "$" + precioApoyaBrazos.innerText;
  elemento.imgItem.src = 'kangoo/k1.jpg';
})
botonCamaraRetroceso.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioCamaraRetroceso.innerText);
  inputAccesorioOculto.value += ' +CAMARA+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioCamaraRetroceso.innerText);
    inputAccesorioOculto.value += ' -CAMARA- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'CAMARA RETROCESO';
  elemento.precioItem.innerText = "$" + precioCamaraRetroceso.innerText;
  elemento.imgItem.src = 'genericos/k3.jpg';
})
botonLlantas.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioLlantas.innerText);
  inputAccesorioOculto.value += ' +LLANTAS+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioLlantas.innerText);
    inputAccesorioOculto.value += ' -LLANTAS- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'LLANTAS ALEACION';
  elemento.precioItem.innerText = "$" + precioLlantas.innerText;
  elemento.imgItem.src = 'kangoo/k5.jpg';
})
botonEnganche.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioEnganche.innerText);
  inputAccesorioOculto.value += ' +ENGANCHE+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioEnganche.innerText);
    inputAccesorioOculto.value += ' -ENGANCHE- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'ENGANCHE';
  elemento.precioItem.innerText = "$" + precioEnganche.innerText;
  elemento.imgItem.src = 'kangoo/k4.jpg';
})
botonMariposero.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioMariposero.innerText);
  inputAccesorioOculto.value += ' +MARIPOSERO+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioMariposero.innerText);
    inputAccesorioOculto.value += ' -MARIPOSERO- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'MARIPOSERO';
  elemento.precioItem.innerText = "$" + precioMariposero.innerText;
  elemento.imgItem.src = 'genericos/k6.jpg';
})
botonCanasto.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioCanasto.innerText);
  inputAccesorioOculto.value += ' +CANASTO+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioCanasto.innerText);
    inputAccesorioOculto.value += ' -CANASTO- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'CANASTO TECHO';
  elemento.precioItem.innerText = "$" + precioCanasto.innerText;
  elemento.imgItem.src = 'kangoo/k7.jpg';
})
botonSensores.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioSensores.innerText);
  inputAccesorioOculto.value += ' +SENSORES+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioSensores.innerText);
    inputAccesorioOculto.value += ' -SENSORES- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'SENSORES ESTACIONAMIENTO';
  elemento.precioItem.innerText = "$" + precioSensores.innerText;
  elemento.imgItem.src = 'genericos/k8.jpg';
})
botonTornillos.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioTornillos.innerText);
  inputAccesorioOculto.value += ' +TORNILLOS+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioTornillos.innerText);
    inputAccesorioOculto.value += ' -TORNILLOS- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'TORNILLOS DE SEGURIDAD';
  elemento.precioItem.innerText = "$" + precioTornillos.innerText;
  elemento.imgItem.src = 'genericos/k9.jpg';
})
botonChapon.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioChapon.innerText);
  inputAccesorioOculto.value += ' +CHAPON+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioChapon.innerText);
    inputAccesorioOculto.value += ' -CHAPON- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'CHAPON CUBRECARTER';
  elemento.precioItem.innerText = "$" + precioChapon.innerText;
  elemento.imgItem.src = 'kangoo/k10.jpg';
})
botonCobertor.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioCobertor.innerText);
  inputAccesorioOculto.value += ' +COBERTOR+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioCobertor.innerText);
    inputAccesorioOculto.value += ' -COBERTOR- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'COBERTOR';
  elemento.precioItem.innerText = "$" + precioCobertor.innerText;
  elemento.imgItem.src = 'kangoo/k11.jpg';
})
botonPolarizado.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioPolarizado.innerText);
  inputAccesorioOculto.value += ' +POLARIZADO+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioPolarizado.innerText);
    inputAccesorioOculto.value += ' -POLARIZADO- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'POLARIZADO';
  elemento.precioItem.innerText = "$" + precioPolarizado.innerText;
  elemento.imgItem.src = 'genericos/pola.jpg';
})
botonKit.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioKit.innerText);
  inputAccesorioOculto.value += ' +KIT SEGURIDAD+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioKit.innerText);
    inputAccesorioOculto.value += ' -KIT SEGURIDAD- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'KIT SEGURIDAD';
  elemento.precioItem.innerText = "$" + precioKit.innerText;
  elemento.imgItem.src = 'genericos/kits.jpg';
})
