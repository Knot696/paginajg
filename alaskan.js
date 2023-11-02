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
let body = document.querySelector('body');
let botonCarrito = document.querySelector('.botonCarrito');
let carrito = document.querySelector('.carrito');
let cierreCarrito = document.querySelector('.cierreCarrito');
let itemsCarrito = document.querySelector('.itemsCarrito');
let totalCarrito = document.querySelector('.totalCarrito');
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
let contador = document.querySelector('.contadorCarrito');

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
  setTimeout(borrar, 300);
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

botonJaulaNegra.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioJaulaNegra.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioJaulaNegra.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'JAULA NEGRA';
  elemento.precioItem.innerText = "$" + precioJaulaNegra.innerText;
  elemento.imgItem.src = 'alaskan/1.jpg';
})
botonJaulaCromada.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioJaulaCromada.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioJaulaCromada.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'JAULA CROMADA';
  elemento.precioItem.innerText = "$" + precioJaulaCromada.innerText;
  elemento.imgItem.src = 'alaskan/2.jpg';
})
botonLonaAlaskan.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioLonaAlaskan.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioLonaAlaskan.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'LONA MARITIMA';
  elemento.precioItem.innerText = "$" + precioLonaAlaskan.innerText;
  elemento.imgItem.src = 'alaskan/4.jpg';
})
botonCobertor.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioCobertor.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioCobertor.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'COBERTOR';
  elemento.precioItem.innerText = "$" + precioCobertor.innerText;
  elemento.imgItem.src = 'alaskan/5.jpg';
})
botonDeflectoresAlaskan.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioDeflectorAlaskan.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioDeflectorAlaskan.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'DEFLECTORES LLUVIA';
  elemento.precioItem.innerText = "$" + precioDeflectorAlaskan.innerText;
  elemento.imgItem.src = 'alaskan/18.jpg';
})
botonFendersAlaskan.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioKitFenderAlaskan.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioKitFenderAlaskan.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'FENDERS';
  elemento.precioItem.innerText = "$" + precioKitFenderAlaskan.innerText;
  elemento.imgItem.src = 'alaskan/19.jpg';
})
botonProteccionAlaskan.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioProteccionAlaskan.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioProteccionAlaskan.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'PROTECCION FRONTAL';
  elemento.precioItem.innerText = "$" + precioProteccionAlaskan.innerText;
  elemento.imgItem.src = 'alaskan/20.jpg';
})
botonTuercas.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioTuercas.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioTuercas.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'TUERCAS';
  elemento.precioItem.innerText = "$" + precioTuercas.innerText;
  elemento.imgItem.src = 'alaskan/22.jpg';
})
botonPolarizados.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioPolarizado.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioPolarizado.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'POLARIZADOS';
  elemento.precioItem.innerText = "$" + precioPolarizado.innerText;
  elemento.imgItem.src = 'genericos/pola.jpg';
})
botonSensores.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioSensores.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioSensores.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'SENSORES';
  elemento.precioItem.innerText = "$" + precioSensores.innerText;
  elemento.imgItem.src = 'genericos/k8.jpg';
})
botonTalampayaInox.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioTalampayaInox.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioTalampayaInox.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'TALAMPAYA INOXIDABLE';
  elemento.precioItem.innerText = "$" + precioTalampayaInox.innerText;
  elemento.imgItem.src = 'alaskan/3.jpg';
})
botonTalampayaNegra.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioTalampayaNegra.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioTalampayaNegra.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'TALAMPAYA NEGRA';
  elemento.precioItem.innerText = "$" + precioTalampayaNegra.innerText;
  elemento.imgItem.src = 'alaskan/6.jpg';
})
botonEngancheHyper.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioEngancheHyper.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioEngancheHyper.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'ENGANCHE HYPERTRACK';
  elemento.precioItem.innerText = "$" + precioEngancheHyper.innerText;
  elemento.imgItem.src = 'alaskan/8.jpg';
})
botonEngancheReforzado.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioEngancheReforzado.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioEngancheReforzado.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'ENGANCHE REFORZADO';
  elemento.precioItem.innerText = "$" + precioEngancheReforzado.innerText;
  elemento.imgItem.src = 'alaskan/14.jpg';
})
botonEngancheComun.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioEngancheComun.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioEngancheComun.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'ENGANCHE COMUN';
  elemento.precioItem.innerText = "$" + precioEngancheComun.innerText;
  elemento.imgItem.src = 'alaskan/16.jpg';
})
botonJaulaCañoDobleInox.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioJaulaCañoDobleInox.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioJaulaCañoDobleInox.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'JAULA CAÑO DOBLE INOXIDABLE';
  elemento.precioItem.innerText = "$" + precioJaulaCañoDobleInox.innerText;
  elemento.imgItem.src = 'alaskan/9.jpg';
})
botonJaulaCañoDobleNegra.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioJaulaCañoDobleNegra.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioJaulaCañoDobleNegra.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'JAULA CAÑO DOBLE NEGRA';
  elemento.precioItem.innerText = "$" + precioJaulaCañoDobleNegra.innerText;
  elemento.imgItem.src = 'alaskan/11.jpg';
})
botonJaulaCañoSimpleInox.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioJaulaCañoSimpleInox.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioJaulaCañoSimpleInox.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'JAULA CAÑO SIMPLE INOXIDABLE';
  elemento.precioItem.innerText = "$" + precioJaulaCañoSimpleInox.innerText;
  elemento.imgItem.src = 'alaskan/10.jpg';
})
botonCabezales.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioCabezales.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioCabezales.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'CABEZALES';
  elemento.precioItem.innerText = "$" + precioCabezales.innerText;
  elemento.imgItem.src = 'alaskan/17.jpg';
})
botonJaulaCañoSimpleNegra.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioJaulaCañoSimpleNegra.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioJaulaCañoSimpleNegra.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'JAULA CAÑO SIMPLE NEGRA';
  elemento.precioItem.innerText = "$" + precioJaulaCañoSimpleNegra.innerText;
  elemento.imgItem.src = 'alaskan/12.jpg';
})
botonJaulaTrabajo.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioJaulaTrabajo.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioJaulaTrabajo.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'JAULA TRABAJO';
  elemento.precioItem.innerText = "$" + precioJaulaTrabajo.innerText;
  elemento.imgItem.src = 'alaskan/13.jpg';
})
botonEstriboOval.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioEstriboOval.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioEstriboOval.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'ESTRIBO OVAL';
  elemento.precioItem.innerText = "$" + precioEstriboOval.innerText;
  elemento.imgItem.src = 'alaskan/15.jpg';
})
botonEstribosSimilOriginal.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioEstribosSimilOriginal.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioEstribosSimilOriginal.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'ESTRIBOS SIMIL ORIGINAL';
  elemento.precioItem.innerText = "$" + precioEstribosSimilOriginal.innerText;
  elemento.imgItem.src = 'alaskan/7.jpg';
})
botonTapa.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioTapa.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioTapa.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'TAPA RIGIDA';
  elemento.precioItem.innerText = "$" + precioTapa.innerText;
  elemento.imgItem.src = 'alaskan/21.jpg';
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
