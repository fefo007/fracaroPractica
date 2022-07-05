

function buscador(){
    const buscadorCampo=document.getElementsByClassName("campoBuscar")[0];
    const buscadorBoton=document.getElementsByClassName("btnBuscar")[0];
    buscadorCampo.addEventListener("keyup",()=>{
        busqueda(buscadorCampo.value.toLowerCase())})
    buscadorBoton.addEventListener('click',()=>{
        busqueda(buscadorCampo.value.toLowerCase())})
    };

function busqueda(busqueda) {
    const productosBusqueda=productos.filter((producto)=>producto.nombre.indexOf(busqueda)!==-1)
    const paginaResultado=document.getElementsByClassName("principal__seccion")[0]
    paginaResultado.innerHTML=""
    console.log(productosBusqueda)
    cargarProducto(productosBusqueda)
};

