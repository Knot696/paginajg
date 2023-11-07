
//Apertura carrito
botonCarrito.addEventListener('click', abrirCarrito)

//Cierre carrito
cierreCarrito.addEventListener('click', cerrarCarrito)

//Apertura formulario
realizarPedido.addEventListener('click', abrirForm)

//Cierre formulario
cierreFormulario.addEventListener('click', cierreForm)

//Validacion formulario
envioFormu.addEventListener('click', validacion);

//Agregar elementos al carrito

botonGaleriaTechoKangoo.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioGaleriaTechoKangoo.innerText);
  inputAccesorioOculto.value += ' +GALERIA+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioGaleriaTechoKangoo.innerText);
    inputAccesorioOculto.value += ' -GALERIA- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'GALERIA TECHO';
  elemento.precioItem.innerText = "$" + precioGaleriaTechoKangoo.innerText;
  elemento.imgItem.src = 'kangoo/k2.jpg';
})
botonApoyaBrazosKangoo.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioApoyaBrazosKangoo.innerText);
  inputAccesorioOculto.value += ' +APOYABRAZOS+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioApoyaBrazosKangoo.innerText);
    inputAccesorioOculto.value += ' -APOYABRAZOS- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'APOYABRAZOS';
  elemento.precioItem.innerText = "$" + precioApoyaBrazosKangoo.innerText;
  elemento.imgItem.src = 'kangoo/k1.jpg';
})
botonCamaraRetrocesoKangoo.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioCamaraRetrocesoKangoo.innerText);
  inputAccesorioOculto.value += ' +CAMARA+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioCamaraRetrocesoKangoo.innerText);
    inputAccesorioOculto.value += ' -CAMARA- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'CAMARA RETROCESO';
  elemento.precioItem.innerText = "$" + precioCamaraRetrocesoKangoo.innerText;
  elemento.imgItem.src = 'genericos/k3.jpg';
})
botonLlantasKangoo.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioLlantasKangoo.innerText);
  inputAccesorioOculto.value += ' +LLANTAS+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioLlantasKangoo.innerText);
    inputAccesorioOculto.value += ' -LLANTAS- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'LLANTAS ALEACION';
  elemento.precioItem.innerText = "$" + precioLlantasKangoo.innerText;
  elemento.imgItem.src = 'kangoo/k5.jpg';
})
botonEngancheKangoo.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioEngancheKangoo.innerText);
  inputAccesorioOculto.value += ' +ENGANCHE+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioEngancheKangoo.innerText);
    inputAccesorioOculto.value += ' -ENGANCHE- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'ENGANCHE';
  elemento.precioItem.innerText = "$" + precioEngancheKangoo.innerText;
  elemento.imgItem.src = 'kangoo/k4.jpg';
})
botonMariposeroKangoo.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioMariposeroKangoo.innerText);
  inputAccesorioOculto.value += ' +MARIPOSERO+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioMariposeroKangoo.innerText);
    inputAccesorioOculto.value += ' -MARIPOSERO- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'MARIPOSERO';
  elemento.precioItem.innerText = "$" + precioMariposeroKangoo.innerText;
  elemento.imgItem.src = 'genericos/k6.jpg';
})
botonCanastoKangoo.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioCanastoKangoo.innerText);
  inputAccesorioOculto.value += ' +CANASTO+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioCanastoKangoo.innerText);
    inputAccesorioOculto.value += ' -CANASTO- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'CANASTO TECHO';
  elemento.precioItem.innerText = "$" + precioCanastoKangoo.innerText;
  elemento.imgItem.src = 'kangoo/k7.jpg';
})
botonSensoresKangoo.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioSensoresKangoo.innerText);
  inputAccesorioOculto.value += ' +SENSORES+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioSensoresKangoo.innerText);
    inputAccesorioOculto.value += ' -SENSORES- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'SENSORES ESTACIONAMIENTO';
  elemento.precioItem.innerText = "$" + precioSensoresKangoo.innerText;
  elemento.imgItem.src = 'genericos/k8.jpg';
})
botonTornillosKangoo.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioTornillosKangoo.innerText);
  inputAccesorioOculto.value += ' +TORNILLOS+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioTornillosKangoo.innerText);
    inputAccesorioOculto.value += ' -TORNILLOS- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'TORNILLOS DE SEGURIDAD';
  elemento.precioItem.innerText = "$" + precioTornillosKangoo.innerText;
  elemento.imgItem.src = 'genericos/k9.jpg';
})
botonChaponKangoo.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioChaponKangoo.innerText);
  inputAccesorioOculto.value += ' +CHAPON+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioChaponKangoo.innerText);
    inputAccesorioOculto.value += ' -CHAPON- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'CHAPON CUBRECARTER';
  elemento.precioItem.innerText = "$" + precioChaponKangoo.innerText;
  elemento.imgItem.src = 'kangoo/k10.jpg';
})
botonCobertorKangoo.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioCobertorKangoo.innerText);
  inputAccesorioOculto.value += ' +COBERTOR+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioCobertorKangoo.innerText);
    inputAccesorioOculto.value += ' -COBERTOR- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'COBERTOR';
  elemento.precioItem.innerText = "$" + precioCobertorKangoo.innerText;
  elemento.imgItem.src = 'kangoo/k11.jpg';
})
botonPolarizadoKangoo.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioPolarizadoKangoo.innerText);
  inputAccesorioOculto.value += ' +POLARIZADO+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioPolarizadoKangoo.innerText);
    inputAccesorioOculto.value += ' -POLARIZADO- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'POLARIZADO';
  elemento.precioItem.innerText = "$" + precioPolarizadoKangoo.innerText;
  elemento.imgItem.src = 'genericos/pola.jpg';
})
botonKitKangoo.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioKitKangoo.innerText);
  inputAccesorioOculto.value += ' +KIT SEGURIDAD+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioKitKangoo.innerText);
    inputAccesorioOculto.value += ' -KIT SEGURIDAD- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'KIT SEGURIDAD';
  elemento.precioItem.innerText = "$" + precioKitKangoo.innerText;
  elemento.imgItem.src = 'genericos/kits.jpg';
})
