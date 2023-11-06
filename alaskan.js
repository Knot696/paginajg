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
let botonJaulaNegra = document.querySelector('.botonJaulaNegra');
let botonJaulaCromada = document.querySelector('.botonJaulaCromada');
let botonLonaAlaskan = document.querySelector('.botonLonaAlaskan');
let botonCobertor = document.querySelector('.botonCobertor');
let botonDeflectoresAlaskan = document.querySelector('.botonDeflectoresAlaskan');
let botonFendersAlaskan = document.querySelector('.botonFendersAlaskan');
let botonProteccionAlaskan = document.querySelector('.botonProteccionAlaskan');
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
let botonEstribosSimilOriginal = document.querySelector('.botonEstribosSimilOriginal');
let botonEstriboOval = document.querySelector('.botonEstriboOval');
let botonCabezales = document.querySelector('.botonCabezales');
let botonTapa = document.querySelector('.botonTapa');
let botonKit = document.querySelector('.botonKit');
let precioJaulaNegra = document.querySelector('.precioJaulaNegra');
let precioJaulaCromada = document.querySelector('.precioJaulaCromada');
let precioLonaAlaskan = document.querySelector('.precioLonaAlaskan');
let precioCobertor = document.querySelector('.precioCobertor');
let precioDeflectorAlaskan = document.querySelector('.precioDeflectorAlaskan');
let precioKitFenderAlaskan = document.querySelector('.precioKitFenderAlaskan');
let precioProteccionAlaskan = document.querySelector('.precioProteccionAlaskan');
let precioTuercas = document.querySelector('.precioTuercas');
let precioPolarizado = document.querySelector('.precioPolarizado');
let precioSensores = document.querySelector('.precioSensores');
let precioTalampayaInox = document.querySelector('.precioTalampayaInox');
let precioTalampayaNegra = document.querySelector('.precioTalampayaNegra');
let precioEngancheHyper = document.querySelector('.precioEngancheHyper');
let precioEngancheReforzado = document.querySelector('.precioEngancheReforzado');
let precioEngancheComun = document.querySelector('.precioEngancheComun');
let precioJaulaCañoDobleInox = document.querySelector('.precioJaulaCañoDobleInox');
let precioJaulaCañoDobleNegra = document.querySelector('.precioJaulaCañoDobleNegra');
let precioJaulaCañoSimpleInox = document.querySelector('.precioJaulaCañoSimpleInox');
let precioJaulaCañoSimpleNegra = document.querySelector('.precioJaulaCañoSimpleNegra');
let precioJaulaTrabajo = document.querySelector('.precioJaulaTrabajo');
let precioEstribosSimilOriginal = document.querySelector('.precioEstribosSimilOriginal');
let precioEstriboOval = document.querySelector('.precioEstriboOval');
let precioCabezales = document.querySelector('.precioCabezales');
let precioTapa = document.querySelector('.precioTapa');
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

botonJaulaNegra.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioJaulaNegra.innerText);
  inputAccesorioOculto.value += ' +JAULA NEGRA+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioJaulaNegra.innerText);
    inputAccesorioOculto.value += ' -JAULA NEGRA- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'JAULA NEGRA';
  elemento.precioItem.innerText = "$" + precioJaulaNegra.innerText;
  elemento.imgItem.src = 'alaskan/1.jpg';
})
botonJaulaCromada.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioJaulaCromada.innerText);
  inputAccesorioOculto.value += ' +JAULA CROMADA+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioJaulaCromada.innerText);
    inputAccesorioOculto.value += ' -JAULA CROMADA- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'JAULA CROMADA';
  elemento.precioItem.innerText = "$" + precioJaulaCromada.innerText;
  elemento.imgItem.src = 'alaskan/2.jpg';
})
botonLonaAlaskan.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioLonaAlaskan.innerText);
  inputAccesorioOculto.value += ' +LONA+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioLonaAlaskan.innerText);
    inputAccesorioOculto.value += ' -LONA- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'LONA MARITIMA';
  elemento.precioItem.innerText = "$" + precioLonaAlaskan.innerText;
  elemento.imgItem.src = 'alaskan/4.jpg';
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
  elemento.imgItem.src = 'alaskan/5.jpg';
})
botonDeflectoresAlaskan.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioDeflectorAlaskan.innerText);
  inputAccesorioOculto.value += ' +DEFLECTORES+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioDeflectorAlaskan.innerText);
    inputAccesorioOculto.value += ' -DEFLECTORES- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'DEFLECTORES LLUVIA';
  elemento.precioItem.innerText = "$" + precioDeflectorAlaskan.innerText;
  elemento.imgItem.src = 'alaskan/18.jpg';
})
botonFendersAlaskan.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioKitFenderAlaskan.innerText);
  inputAccesorioOculto.value += ' +FENDERS+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioKitFenderAlaskan.innerText);
    inputAccesorioOculto.value += ' -FENDERS- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'KIT FENDERS';
  elemento.precioItem.innerText = "$" + precioKitFenderAlaskan.innerText;
  elemento.imgItem.src = 'alaskan/19.jpg';
})
botonProteccionAlaskan.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioProteccionAlaskan.innerText);
  inputAccesorioOculto.value += ' +PROTECCION+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioProteccionAlaskan.innerText);
    inputAccesorioOculto.value += ' -PROTECCION- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'PROTECCION FRONTAL';
  elemento.precioItem.innerText = "$" + precioProteccionAlaskan.innerText;
  elemento.imgItem.src = 'alaskan/20.jpg';
})
botonTuercas.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioTuercas.innerText);
  inputAccesorioOculto.value += ' +TUERCAS+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioTuercas.innerText);
    inputAccesorioOculto.value += ' -TUERCAS- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'TUERCAS SEGURIDAD';
  elemento.precioItem.innerText = "$" + precioTuercas.innerText;
  elemento.imgItem.src = 'alaskan/22.jpg';
})
botonPolarizados.addEventListener('click', ()=>{
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
botonTalampayaInox.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioTalampayaInox.innerText);
  inputAccesorioOculto.value += ' +TALAMPAYA INOX+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioTalampayaInox.innerText);
    inputAccesorioOculto.value += ' -TALAMPAYA INOX- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'TALAMPAYA INOXIDABLE';
  elemento.precioItem.innerText = "$" + precioTalampayaInox.innerText;
  elemento.imgItem.src = 'alaskan/3.jpg';
})
botonTalampayaNegra.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioTalampayaNegra.innerText);
  inputAccesorioOculto.value += ' +TALAMPAYA NEGRA+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioTalampayaNegra.innerText);
    inputAccesorioOculto.value += ' -TALAMPAYA NEGRA- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'TALAMPAYA NEGRA';
  elemento.precioItem.innerText = "$" + precioTalampayaNegra.innerText;
  elemento.imgItem.src = 'alaskan/6.jpg';
})
botonEngancheHyper.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioEngancheHyper.innerText);
  inputAccesorioOculto.value += ' +ENGANCHE HYPER+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioEngancheHyper.innerText);
    inputAccesorioOculto.value += ' -ENGANCHE HYPER- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'ENGANCHE HYPERTRACK';
  elemento.precioItem.innerText = "$" + precioEngancheHyper.innerText;
  elemento.imgItem.src = 'alaskan/8.jpg';
})
botonEngancheReforzado.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioEngancheReforzado.innerText);
  inputAccesorioOculto.value += ' +ENGANCHE REFORZADO+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioEngancheReforzado.innerText);
    inputAccesorioOculto.value += ' -ENGANCHE REFORZADO- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'ENGANCHE REFORZADO';
  elemento.precioItem.innerText = "$" + precioEngancheReforzado.innerText;
  elemento.imgItem.src = 'alaskan/14.jpg';
})
botonEngancheComun.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioEngancheComun.innerText);
  inputAccesorioOculto.value += ' +ENGANCHE COMUN+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioEngancheComun.innerText);
    inputAccesorioOculto.value += ' -ENGANCHE COMUN- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'ENGANCHE COMUN';
  elemento.precioItem.innerText = "$" + precioEngancheComun.innerText;
  elemento.imgItem.src = 'alaskan/16.jpg';
})
botonJaulaCañoDobleInox.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioJaulaCañoDobleInox.innerText);
  inputAccesorioOculto.value += ' +JAULA DOBLE INOX+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioJaulaCañoDobleInox.innerText);
    inputAccesorioOculto.value += ' -JAULA DOBLE INOX- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'JAULA CAÑO DOBLE INOXIDABLE';
  elemento.precioItem.innerText = "$" + precioJaulaCañoDobleInox.innerText;
  elemento.imgItem.src = 'alaskan/9.jpg';
})
botonJaulaCañoDobleNegra.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioJaulaCañoDobleNegra.innerText);
  inputAccesorioOculto.value += ' +JAULA DOBLE NEGRA+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioJaulaCañoDobleNegra.innerText);
    inputAccesorioOculto.value += ' -JAULA DOBLE NEGRA- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'JAULA CAÑO DOBLE NEGRA';
  elemento.precioItem.innerText = "$" + precioJaulaCañoDobleNegra.innerText;
  elemento.imgItem.src = 'alaskan/11.jpg';
})
botonJaulaCañoSimpleInox.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioJaulaCañoSimpleInox.innerText);
  inputAccesorioOculto.value += ' +JAULA SIMPLE INOX+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioJaulaCañoSimpleInox.innerText);
    inputAccesorioOculto.value += ' -JAULA SIMPLE INOX- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'JAULA CAÑO SIMPLE INOXIDABLE';
  elemento.precioItem.innerText = "$" + precioJaulaCañoSimpleInox.innerText;
  elemento.imgItem.src = 'alaskan/10.jpg';
})
botonCabezales.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioCabezales.innerText);
  inputAccesorioOculto.value += ' +CABEZALES+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioCabezales.innerText);
    inputAccesorioOculto.value += ' -CABEZALES- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'CABEZALES';
  elemento.precioItem.innerText = "$" + precioCabezales.innerText;
  elemento.imgItem.src = 'alaskan/17.jpg';
})
botonJaulaCañoSimpleNegra.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioJaulaCañoSimpleNegra.innerText);
  inputAccesorioOculto.value += ' +JAULA SIMPLE NEGRA+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioJaulaCañoSimpleNegra.innerText);
    inputAccesorioOculto.value += ' -JAULA SIMPLE NEGRA- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'JAULA CAÑO SIMPLE NEGRA';
  elemento.precioItem.innerText = "$" + precioJaulaCañoSimpleNegra.innerText;
  elemento.imgItem.src = 'alaskan/12.jpg';
})
botonJaulaTrabajo.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioJaulaTrabajo.innerText);
  inputAccesorioOculto.value += ' +JAULA TRABAJO+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioJaulaTrabajo.innerText);
    inputAccesorioOculto.value += ' -JAULA TRABAJO- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'JAULA TRABAJO';
  elemento.precioItem.innerText = "$" + precioJaulaTrabajo.innerText;
  elemento.imgItem.src = 'alaskan/13.jpg';
})
botonEstriboOval.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioEstriboOval.innerText);
  inputAccesorioOculto.value += ' +ESTRIBO OVAL+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioEstriboOval.innerText);
    inputAccesorioOculto.value += ' -ESTRIBO OVAL- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'ESTRIBOS OVAL';
  elemento.precioItem.innerText = "$" + precioEstriboOval.innerText;
  elemento.imgItem.src = 'alaskan/15.jpg';
})
botonEstribosSimilOriginal.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioEstribosSimilOriginal.innerText);
  inputAccesorioOculto.value += ' +ESTRIBOS SIMIL+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioEstribosSimilOriginal.innerText);
    inputAccesorioOculto.value += ' -ESTRIBOS SIMIL- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'ESTRIBOS SIMIL ORIGINAL';
  elemento.precioItem.innerText = "$" + precioEstribosSimilOriginal.innerText;
  elemento.imgItem.src = 'alaskan/7.jpg';
})
botonTapa.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioTapa.innerText);
  inputAccesorioOculto.value += ' +TAPA+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioTapa.innerText);
    inputAccesorioOculto.value += ' -TAPA- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'TAPA RIGIDA';
  elemento.precioItem.innerText = "$" + precioTapa.innerText;
  elemento.imgItem.src = 'alaskan/21.jpg';
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
