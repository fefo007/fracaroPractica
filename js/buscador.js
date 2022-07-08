

function buscador(){
    const buscadorCampo=document.getElementsByClassName("campoBuscar")[0];
    const buscadorBoton=document.getElementsByClassName("btnBuscar")[0];
    const botones=document.getElementsByClassName("encabezado__pagina")[0];
    buscadorCampo.addEventListener("keyup",()=>{
        busqueda(buscadorCampo.value.toLowerCase());botones.innerHTML=""})
    buscadorBoton.addEventListener('click',()=>{
        busqueda(buscadorCampo.value.toLowerCase());botones.innerHTML=""})
    };

function busqueda(busqueda) {
    const productosBusqueda=productos.filter((producto)=>producto.nombre.toLowerCase(busqueda).indexOf(busqueda)!==-1)
    const paginaResultado=document.getElementsByClassName("principal__seccion")[0]
    paginaResultado.innerHTML=""
    cargarProducto(productosBusqueda)
};

