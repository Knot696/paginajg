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

botonDefensaOroch.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioDefensaOroch.innerText);
  inputAccesorioOculto.value += ' +DEFENSA+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioDefensaOroch.innerText);
    inputAccesorioOculto.value += ' -DEFENSA- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'DEFENSA FRONTAL';
  elemento.precioItem.innerText = "$" + precioDefensaOroch.innerText;
  elemento.imgItem.src = 'oroch/o3.jpg';
})
botonPortaOroch.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioPortaOroch.innerText);
  inputAccesorioOculto.value += ' +PORTA EQUIPAJE+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioPortaOroch.innerText);
    inputAccesorioOculto.value += ' -PORTA EQUIPAJE- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'PORTA EQUIPAJE';
  elemento.precioItem.innerText = "$" + precioPortaOroch.innerText;
  elemento.imgItem.src = 'oroch/o1.jpg';
})
botonBarraOroch.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioBarraOroch.innerText);
  inputAccesorioOculto.value += ' +BARRA+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioBarraOroch.innerText);
    inputAccesorioOculto.value += ' -BARRA- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'BARRA SAN ANTONIO';
  elemento.precioItem.innerText = "$" + precioBarraOroch.innerText;
  elemento.imgItem.src = 'oroch/o4.jpg';
})
botonBarrerosOroch.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioBarrerosOroch.innerText);
  inputAccesorioOculto.value += ' +BARREROS+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioBarrerosOroch.innerText);
    inputAccesorioOculto.value += ' -BARREROS- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'KIT BARREROS';
  elemento.precioItem.innerText = "$" + precioBarrerosOroch.innerText;
  elemento.imgItem.src = 'oroch/o2.jpg';
})
botonLonaOroch.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioLonaOroch.innerText);
  inputAccesorioOculto.value += ' +LONA+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioLonaOroch.innerText);
    inputAccesorioOculto.value += ' -LONA- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'LONA MARÍTIMA';
  elemento.precioItem.innerText = "$" + precioLonaOroch.innerText;
  elemento.imgItem.src = 'oroch/o5.jpg';
})
botonDeflectoresOroch.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioDeflectoresOroch.innerText);
  inputAccesorioOculto.value += ' +DEFLECTORES+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioDeflectoresOroch.innerText);
    inputAccesorioOculto.value += ' -DEFLECTORES- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'DEFLECTORES LLUVIA';
  elemento.precioItem.innerText = "$" + precioDeflectoresOroch.innerText;
  elemento.imgItem.src = 'oroch/o6.jpg';
})
botonEstribosOroch.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioEstribosOroch.innerText);
  inputAccesorioOculto.value += ' +ESTRIBOS+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioEstribosOroch.innerText);
    inputAccesorioOculto.value += ' -ESTRIBOS- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'ESTRIBOS';
  elemento.precioItem.innerText = "$" + precioEstribosOroch.innerText;
  elemento.imgItem.src = 'oroch/o7.jpg';
})
botonApoyabrazosOroch.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioApoyabrazosOroch.innerText);
  inputAccesorioOculto.value += ' +APOYABRAZOS+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioApoyabrazosOroch.innerText);
    inputAccesorioOculto.value += ' -APOYABRAZOS- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'APOYABRAZOS';
  elemento.precioItem.innerText = "$" + precioApoyabrazosOroch.innerText;
  elemento.imgItem.src = 'duster/d2.jpg';
})
botonSensoresOroch.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioSensoresOroch.innerText);
  inputAccesorioOculto.value += ' +SENSORES+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioSensoresOroch.innerText);
    inputAccesorioOculto.value += ' -SENSORES- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'SENSORES DE ESTACIONAMIENTO';
  elemento.precioItem.innerText = "$" + precioSensoresOroch.innerText;
  elemento.imgItem.src = 'genericos/k8.jpg';
})
botonTornillosOroch.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioTornillosOroch.innerText);
  inputAccesorioOculto.value += ' +TORNILLOS+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioTornillosOroch.innerText);
    inputAccesorioOculto.value += ' -TORNILLOS- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'TORNILLOS DE SEGURIDAD';
  elemento.precioItem.innerText = "$" + precioTornillosOroch.innerText;
  elemento.imgItem.src = 'genericos/k9.jpg';
})
botonPolarizadoOroch.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioPolarizadoOroch.innerText);
  inputAccesorioOculto.value += ' +POLARIZADO+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioPolarizadoOroch.innerText);
    inputAccesorioOculto.value += ' -POLARIZADO- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'POLARIZADOS';
  elemento.precioItem.innerText = "$" + precioPolarizadoOroch.innerText;
  elemento.imgItem.src = 'genericos/pola.jpg';
})
botonKitOroch.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioKitOroch.innerText);
  inputAccesorioOculto.value += ' +KIT+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioKitOroch.innerText);
    inputAccesorioOculto.value += ' -KIT- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'KIT SEGURIDAD';
  elemento.precioItem.innerText = "$" + precioKitOroch.innerText;
  elemento.imgItem.src = 'genericos/kits.jpg';
})
botonCamaraOroch.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioCamaraOroch.innerText);
  inputAccesorioOculto.value += ' +CAMARA+ ';
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioCamaraOroch.innerText);
    inputAccesorioOculto.value += ' -CAMARA- ';
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'CAMARA RETROCESO';
  elemento.precioItem.innerText = "$" + precioCamaraOroch.innerText;
  elemento.imgItem.src = 'genericos/k3.jpg';
})
