


funcionesMain()
function funcionesMain(){
    
    cargarProducto (productos);
    botonCompra();
    botonCarro();
    darBienvenida ();
}
funcionesCarro()
function funcionesCarro(){
    vaciarCarrito()
    retirarCarritoStorage()
    contadorProducto()
}

PAGINACION
botonesPaginas()
function botonesPaginas(){
    const btn1=document.getElementsByClassName("encabezado__pagina__btn")[0]
    const btn2=document.getElementsByClassName("encabezado__pagina__btn")[1]
    const btn3=document.getElementsByClassName("encabezado__pagina__btn")[2]
    btn1.addEventListener("click",()=>{
        mostrarP1()
    })
    btn2.addEventListener("click",()=>{
        mostarP2()
    })
    btn3.addEventListener("click",()=>{
        mostrarP3()
    })
}

// FILTRAR LAS CATEGORIAS

filtarCategorias1()
function filtarCategorias1(){
    const cat1=document.getElementsByClassName("dropdown-item")[0];
    const cat2=document.getElementsByClassName("dropdown-item")[1];
    const cat3=document.getElementsByClassName("dropdown-item")[2];
    const cat4=document.getElementsByClassName("dropdown-item")[3];
    cat1.addEventListener("click",()=>{mostrarPlataforma("nintendo")});
    cat2.addEventListener("click",()=>{mostrarPlataforma("pc")});
    cat3.addEventListener("click",()=>{mostrarPlataforma("ps")});
    cat4.addEventListener("click",()=>{mostrarPlataforma("xbox")});
    }


    filtarCategorias2()
function filtarCategorias2(){
        const cat5=document.getElementsByClassName("dropdown-item")[4];
        const cat6=document.getElementsByClassName("dropdown-item")[5];
        const cat7=document.getElementsByClassName("dropdown-item")[6];
        const cat8=document.getElementsByClassName("dropdown-item")[7];
        cat5.addEventListener("click",()=>{mostrarCategoria("Accesorio")});
        cat6.addEventListener("click",()=>{mostrarCategoria("Consola")});
        cat7.addEventListener("click",()=>{mostrarCategoria("Gift Card")});
        cat8.addEventListener("click",()=>{mostrarCategoria("Videojuego")});
        }

    function mostrarPlataforma (nombrePlataforma){
        const productosPlataforma=productos.filter(producto=>producto.plataforma===nombrePlataforma)
        const paginaPlataforma=document.getElementsByClassName("principal__seccion")[0]
        paginaPlataforma.innerHTML=""
        console.log(productosPlataforma)
        cargarProducto(productosPlataforma)
    };

    function mostrarCategoria (nombreCategoria){
        const productoCategoria=productos.filter(producto=>producto.categoria===nombreCategoria)
        const paginaCategoria=document.getElementsByClassName("principal__seccion")[0]
        paginaCategoria.innerHTML=""
        console.log(productoCategoria)
        cargarProducto(productoCategoria)
    };


