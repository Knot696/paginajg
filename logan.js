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

botonSensoresLogan.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioSensoresLogan.innerText);
  inputAccesorioOculto.value += ' +SENSORES+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioSensoresLogan.innerText);
    inputAccesorioOculto.value += ' -SENSORES- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'SENSORES ESTACIONAMIENTO';
  elemento.precioItem.innerText = "$" + precioSensoresLogan.innerText;
  elemento.imgItem.src = 'genericos/k8.jpg';
})
botonTornillosLogan.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioTornillosLogan.innerText);
  inputAccesorioOculto.value += ' +TORNILLOS+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioTornillosLogan.innerText);
    inputAccesorioOculto.value += ' -TORNILLOS- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'TORNILLOS SEGURIDAD';
  elemento.precioItem.innerText = "$" + precioTornillosLogan.innerText;
  elemento.imgItem.src = 'genericos/k9.jpg';
})
botonPolarizadoLogan.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioPolarizadoLogan.innerText);
  inputAccesorioOculto.value += ' +POLARIZADO+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioPolarizadoLogan.innerText);
    inputAccesorioOculto.value += ' -POLARIZADO- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'POLARIZADO';
  elemento.precioItem.innerText = "$" + precioPolarizadoLogan.innerText;
  elemento.imgItem.src = 'genericos/pola.jpg';
})
botonKitLogan.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioKitLogan.innerText);
  inputAccesorioOculto.value += ' +KIT+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioKitLogan.innerText);
    inputAccesorioOculto.value += ' -KIT- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'KIT SEGURIDAD';
  elemento.precioItem.innerText = "$" + precioKitLogan.innerText;
  elemento.imgItem.src = 'genericos/kits.jpg';
})
botonCamaraLogan.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioCamaraLogan.innerText);
  inputAccesorioOculto.value += ' +CAMARA+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioCamaraLogan.innerText);
    inputAccesorioOculto.value += ' -CAMARA- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'CAMARA RETROCESO';
  elemento.precioItem.innerText = "$" + precioCamaraLogan.innerText;
  elemento.imgItem.src = 'genericos/k3.jpg';
})
botonChaponLogan.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioChaponLogan.innerText);
  inputAccesorioOculto.value += ' +CHAPON+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioChaponLogan.innerText);
    inputAccesorioOculto.value += ' -CHAPON- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'CHAPON CUBRECARTER';
  elemento.precioItem.innerText = "$" + precioChaponLogan.innerText;
  elemento.imgItem.src = 'sandero/s1.jpg';
})
