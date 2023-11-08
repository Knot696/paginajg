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

botonPortaStepway.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioPortaStepway.innerText);
  inputAccesorioOculto.value += ' +PORTA EQUIPAJE+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioPortaStepway.innerText);
    inputAccesorioOculto.value += ' -PORTA EQUIPAJE- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'PORTA EQUIPAJE';
  elemento.precioItem.innerText = "$" + precioPortaStepway.innerText;
  elemento.imgItem.src = 'sandero/ss1.jpg';
})
botonSensoresStepway.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioSensoresStepway.innerText);
  inputAccesorioOculto.value += ' +SENSORES+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioSensoresStepway.innerText);
    inputAccesorioOculto.value += ' -SENSORES- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'SENSORES ESTACIONAMIENTO';
  elemento.precioItem.innerText = "$" + precioSensoresStepway.innerText;
  elemento.imgItem.src = 'genericos/k8.jpg';
})
botonTonillosStepway.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioTonillosStepway.innerText);
  inputAccesorioOculto.value += ' +SENSORES+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioTonillosStepway.innerText);
    inputAccesorioOculto.value += ' -SENSORES- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'SENSORES ESTACIONAMIENTO';
  elemento.precioItem.innerText = "$" + precioTonillosStepway.innerText;
  elemento.imgItem.src = 'genericos/k9.jpg';
})
botonPolarizadoStepway.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioPolarizadoStepway.innerText);
  inputAccesorioOculto.value += ' +POLARIZADO+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioPolarizadoStepway.innerText);
    inputAccesorioOculto.value += ' -POLARIZADO- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'POLARIZADO';
  elemento.precioItem.innerText = "$" + precioPolarizadoStepway.innerText;
  elemento.imgItem.src = 'genericos/pola.jpg';
})
botonKitStepway.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioKitStepway.innerText);
  inputAccesorioOculto.value += ' +KIT SEGURIDAD+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioKitStepway.innerText);
    inputAccesorioOculto.value += ' -KIT SEGURIDAD- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'KIT DE SEGURIDAD';
  elemento.precioItem.innerText = "$" + precioKitStepway.innerText;
  elemento.imgItem.src = 'genericos/kits.jpg';
})
botonCamaraStepway.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioCamaraStepway.innerText);
  inputAccesorioOculto.value += ' +CAMARA+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioCamaraStepway.innerText);
    inputAccesorioOculto.value += ' -CAMARA- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'CAMARA DE RETROCESO';
  elemento.precioItem.innerText = "$" + precioCamaraStepway.innerText;
  elemento.imgItem.src = 'genericos/k3.jpg';
})
botonChaponStepway.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioChaponStepway.innerText);
  inputAccesorioOculto.value += ' +CHAPON+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioChaponStepway.innerText);
    inputAccesorioOculto.value += ' -CHAPON- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'CHAPON CUBRECARTER';
  elemento.precioItem.innerText = "$" + precioChaponStepway.innerText;
  elemento.imgItem.src = 'sandero/s1.jpg';
})
