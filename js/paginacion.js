
// PAGINA LOS PRODUCTOS

function botonesPaginas(){
    const btn1=document.getElementsByClassName("encabezado__pagina__btn")[0]
    const btn2=document.getElementsByClassName("encabezado__pagina__btn")[1]
    const btn3=document.getElementsByClassName("encabezado__pagina__btn")[2]
    btn1.addEventListener("click",()=>{
        mostrarP(0,9)
    })
    btn2.addEventListener("click",()=>{
        mostrarP(9,18)
    })
    btn3.addEventListener("click",()=>{
        mostrarP(18,27)
    })
}

    function mostrarP(principio,final){
            const productosBusqueda=productos.slice(principio,final)
            const paginaResultado=document.getElementsByClassName("principal__seccion")[0]
            paginaResultado.innerHTML=""
            cargarProducto(productosBusqueda)
    }
