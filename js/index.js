


funcionesMain()
function funcionesMain(){
    // MOSTRAR LOS PRIMEROS 9
    mostrarP(0,9);
    // BUSCAR PRODUCTOS
    buscador();
    // FILTRAR LAS CATEGORIAS
    filtarCategorias1();
    filtarCategorias2();
    // PAGINACION
    botonesPaginas();
    // COMENTARIOS EN ASIDE
    usarApi();
    // RECARGAR
    titulo();
}
funcionesCarro()
function funcionesCarro(){
    // VACIA TODO EL CARRO
    vaciarCarrito();
    // RETIRA DEL STORAGE EL CARRO GUARDADO POR EL USUARIO
    retirarCarritoStorage();
    // CONTADOR DE PRODUCTOS PUESTOS EN EL CARRO
    contadorProducto();
}

function titulo(){
    const titulo=document.getElementsByClassName("encabezado__titulo")[0];
    titulo.addEventListener("click",()=>{
        location.reload();
    })
}