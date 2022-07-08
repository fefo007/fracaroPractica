
// FILTRA LAS CATEGORIAS DEL ASIDE DEL LADO DERECHO DEL SITIO WEB

function filtarCategorias1(){
    const cat1=document.getElementsByClassName("dropdown-item")[0];
    const cat2=document.getElementsByClassName("dropdown-item")[1];
    const cat3=document.getElementsByClassName("dropdown-item")[2];
    const cat4=document.getElementsByClassName("dropdown-item")[3];
    const botones=document.getElementsByClassName("encabezado__pagina")[0];
    cat1.addEventListener("click",()=>{mostrarPlataforma("nintendo");botones.innerHTML=""});
    cat2.addEventListener("click",()=>{mostrarPlataforma("pc");botones.innerHTML=""});
    cat3.addEventListener("click",()=>{mostrarPlataforma("ps");botones.innerHTML=""});
    cat4.addEventListener("click",()=>{mostrarPlataforma("xbox");botones.innerHTML=""});
    }

    function filtarCategorias2(){
        const cat5=document.getElementsByClassName("dropdown-item")[4];
        const cat6=document.getElementsByClassName("dropdown-item")[5];
        const cat7=document.getElementsByClassName("dropdown-item")[6];
        const cat8=document.getElementsByClassName("dropdown-item")[7];
        const botones=document.getElementsByClassName("encabezado__pagina")[0];
        cat5.addEventListener("click",()=>{mostrarCategoria("Accesorio");botones.innerHTML=""});
        cat6.addEventListener("click",()=>{mostrarCategoria("Consola");botones.innerHTML=""});
        cat7.addEventListener("click",()=>{mostrarCategoria("Gift Card");botones.innerHTML=""});
        cat8.addEventListener("click",()=>{mostrarCategoria("Videojuego");botones.innerHTML=""});
        }


        function mostrarPlataforma (nombrePlataforma){
            const productosPlataforma=productos.filter((producto)=>producto.plataforma===nombrePlataforma)
            const paginaPlataforma=document.getElementsByClassName("principal__seccion")[0]
            paginaPlataforma.innerHTML=""
            cargarProducto(productosPlataforma)
        };
    
        function mostrarCategoria (nombreCategoria){
            const productoCategoria=productos.filter((producto)=>producto.categoria===nombreCategoria)
            const paginaCategoria=document.getElementsByClassName("principal__seccion")[0]
            paginaCategoria.innerHTML=""
            cargarProducto(productoCategoria)
        };
    