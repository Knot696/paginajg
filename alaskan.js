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
