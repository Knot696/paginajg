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
//ALASKAN
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
//DUSTER
let botonPortaEquipajeDuster = document.querySelector('.botonPortaEquipajeDuster');
let botonApoyaBrazosDuster = document.querySelector('.botonApoyaBrazosDuster');
let botonProtectoresDuster = document.querySelector('.botonProtectoresDuster');
let botonDeflectoresDuster = document.querySelector('.botonDeflectoresDuster');
let botonTrabaDuster = document.querySelector('.botonTrabaDuster');
let botonFendersDuster = document.querySelector('.botonFendersDuster');
let botonCamaraDuster = document.querySelector('.botonCamaraDuster');
let botonSensoresDuster = document.querySelector('.botonSensoresDuster');
let botonTornillosDuster = document.querySelector('.botonTornillosDuster');
let botonPolarizadosDuster = document.querySelector('.botonPolarizadosDuster');
let botonKitDuster = document.querySelector('.botonKitDuster');
let botonDefensaFrontalDuster = document.querySelector('.botonDefensaFrontalDuster');
let precioPortaEquipajeDuster = document.querySelector('.precioPortaEquipajeDuster');
let precioApoyaBrazosDuster = document.querySelector('.precioApoyaBrazosDuster');
let precioProtectoresDuster = document.querySelector('.precioProtectoresDuster');
let precioDeflectoresDuster = document.querySelector('.precioDeflectoresDuster');
let precioTrabaDuster = document.querySelector('.precioTrabaDuster');
let precioFendersDuster = document.querySelector('.precioFendersDuster');
let precioCamaraDuster = document.querySelector('.precioCamaraDuster');
let precioSensoresDuster = document.querySelector('.precioSensoresDuster');
let precioTornillosDuster = document.querySelector('.precioTornillosDuster');
let precioPolarizadosDuster = document.querySelector('.precioPolarizadosDuster');
let precioKitDuster = document.querySelector('.precioKitDuster');
let precioDefensaFrontalDuster = document.querySelector('.precioDefensaFrontalDuster');
//KANGOO
let botonGaleriaTechoKangoo = document.querySelector('.botonGaleriaTechoKangoo');
let botonApoyaBrazosKangoo = document.querySelector('.botonApoyaBrazosKangoo');
let botonCamaraRetrocesoKangoo = document.querySelector('.botonCamaraRetrocesoKangoo');
let botonLlantasKangoo = document.querySelector('.botonLlantasKangoo');
let botonEngancheKangoo = document.querySelector('.botonEngancheKangoo');
let botonMariposeroKangoo = document.querySelector('.botonMariposeroKangoo');
let botonCanastoKangoo = document.querySelector('.botonCanastoKangoo');
let botonSensoresKangoo = document.querySelector('.botonSensoresKangoo');
let botonTornillosKangoo = document.querySelector('.botonTornillosKangoo');
let botonChaponKangoo = document.querySelector('.botonChaponKangoo');
let botonCobertorKangoo = document.querySelector('.botonCobertorKangoo');
let botonPolarizadoKangoo = document.querySelector('.botonPolarizadoKangoo');
let botonKitKangoo = document.querySelector('.botonKitKangoo');
let precioGaleriaTechoKangoo = document.querySelector('.precioGaleriaTechoKangoo');
let precioApoyaBrazosKangoo = document.querySelector('.precioApoyaBrazosKangoo');
let precioCamaraRetrocesoKangoo = document.querySelector('.precioCamaraRetrocesoKangoo');
let precioLlantasKangoo = document.querySelector('.precioLlantasKangoo');
let precioEngancheKangoo = document.querySelector('.precioEngancheKangoo');
let precioMariposeroKangoo = document.querySelector('.precioMariposeroKangoo');
let precioCanastoKangoo = document.querySelector('.precioCanastoKangoo');
let precioSensoresKangoo = document.querySelector('.precioSensoresKangoo');
let precioTornillosKangoo = document.querySelector('.precioTornillosKangoo');
let precioChaponKangoo = document.querySelector('.precioChaponKangoo');
let precioCobertorKangoo = document.querySelector('.precioCobertorKangoo');
let precioPolarizadoKangoo = document.querySelector('.precioPolarizadoKangoo');
let precioKitKangoo = document.querySelector('.precioKitKangoo');
//LOGAN
let botonSensoresLogan = document.querySelector('.botonSensoresLogan');
let botonTornillosLogan = document.querySelector('.botonTornillosLogan');
let botonPolarizadoLogan = document.querySelector('.botonPolarizadoLogan');
let botonKitLogan = document.querySelector('.botonKitLogan');
let botonCamaraLogan = document.querySelector('.botonCamaraLogan');
let botonChaponLogan = document.querySelector('.botonChaponLogan');
let precioSensoresLogan = document.querySelector('.precioSensoresLogan');
let precioTornillosLogan = document.querySelector('.precioTornillosLogan');
let precioPolarizadoLogan = document.querySelector('.precioPolarizadoLogan');
let precioKitLogan = document.querySelector('.precioKitLogan');
let precioCamaraLogan = document.querySelector('.precioCamaraLogan');
let precioChaponLogan = document.querySelector('.precioChaponLogan');

let total=0;
let contadorCarrito = 0;

//Apertura carrito
function abrirCarrito(){
  carrito.classList.add('carrito1');
}

//Cierre carrito
function cerrarCarrito(){
  carrito.classList.add('desaparecer');
  function borrar(){
    carrito.classList.remove('carrito1');
    carrito.classList.remove('desaparecer');
  }
  setTimeout(borrar, 400);
}

//Realizar pedido
function abrirForm(){
  formulario.classList.add('carrito1');
}

function cierreForm(){
  formulario.classList.add('desaparecer');
  function borrar(){
    formulario.classList.remove('carrito1');
    formulario.classList.remove('desaparecer');
  }
  setTimeout(borrar, 400);
}

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
