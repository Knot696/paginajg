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

botonPortaEquipajeDuster.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioPortaEquipajeDuster.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioPortaEquipajeDuster.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'PORTA EQUIPAJE';
  elemento.precioItem.innerText = "$" + precioPortaEquipajeDuster.innerText;
  elemento.imgItem.src = 'duster/d7.jpg';
})
botonApoyaBrazosDuster.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioApoyaBrazosDuster.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioJaulaCromadaDuster.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'APOYABRAZOS';
  elemento.precioItem.innerText = "$" + precioApoyaBrazosDuster.innerText;
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
botonTrabaDuster.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioTrabaDuster.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioTrabaDuster.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'TRABA AUXILIAR';
  elemento.precioItem.innerText = "$" + precioTrabaDuster.innerText;
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
botonCamaraDuster.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioCamaraDuster.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioCamaraDuster.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'CAMARA RETROCESO';
  elemento.precioItem.innerText = "$" + precioCamaraDuster.innerText;
  elemento.imgItem.src = 'genericos/k3.jpg';
})
botonSensoresDuster.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioSensoresDuster.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioSensoresDuster.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'SENSORES ESTACIONAMIENTO';
  elemento.precioItem.innerText = "$" + precioSensoresDuster.innerText;
  elemento.imgItem.src = 'genericos/k8.jpg';
})
botonTornillosDuster.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioTornillosDuster.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioTornillosDuster.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'TORNILLOS SEGURIDAD';
  elemento.precioItem.innerText = "$" + precioTornillosDuster.innerText;
  elemento.imgItem.src = 'genericos/K9.jpg';
})
botonPolarizadosDuster.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioPolarizadosDuster.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioPolarizadosDuster.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'POLARIZADO';
  elemento.precioItem.innerText = "$" + precioPolarizadosDuster.innerText;
  elemento.imgItem.src = 'genericos/pola.jpg';
})
botonKitDuster.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioKitDuster.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioKitDuster.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'KIT SEGURIDAD';
  elemento.precioItem.innerText = "$" + precioKitDuster.innerText;
  elemento.imgItem.src = 'genericos/kits.jpg';
})
botonDefensaFrontalDuster.addEventListener('click', ()=>{
  let elemento = new Items(document.createElement('div'), document.createElement('img'), document.createElement('img'), document.createElement('div'), document.createElement('p'), document.createElement('p'), document.createElement('h2'));
  total+=parseInt(precioDefensaFrontalDuster.innerText);
  elemento.eliminarItem.addEventListener('click',()=>{
    total-=parseInt(precioDefensaFrontalDuster.innerText);
  })
  elemento.crearItem();
  elemento.nombreItem.innerText = 'DEFENSA FRONTAL';
  elemento.precioItem.innerText = "$" + precioDefensaFrontalDuster.innerText;
  elemento.imgItem.src = 'duster/d1.jpg';
})
