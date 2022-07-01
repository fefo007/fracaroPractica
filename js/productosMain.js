
// CARGAR PRODUCTOS EN EL MAIN
function cargarProducto(productos)
{   
    const seccion=document.getElementsByClassName("principal__seccion")[0]
    productos.forEach(producto => {
    const {id,img,nombre,precio,categoria,plataforma}=producto
    const unProducto = document.createElement("div");
    unProducto.setAttribute("class", "principal__productos");
    unProducto.innerHTML= ` <img class="principal__productos__imagen" height="200" src="${img}" alt="${nombre}">
                            <p class="principal__productos__parrafos1">${nombre}</p>
                            <p class="principal__productos__parrafos2">${precio}</p>
                            <div class="principal__productos__parrafos3"><p class="principal__productos__parrafos3__a">${categoria}</p>
                                <p class="principal__productos__parrafos3__b">${plataforma}</p></div>
                            <div class="principal__productos__btn"><button class="principal__productos__btn__btncom">Comprar</button>
                            <button class="principal__productos__btn__btncar" onclick="agregarProducto('${id}')">+Carrito</button></div>`;
    seccion.appendChild(unProducto);
})};

// BOTON COMPRAR EN EL MAIN
function botonCompra(){
    const botonCompra = document.getElementsByClassName ("principal__productos__btn__btncom");
    for (const btncom of botonCompra){
    btncom.addEventListener("click",()=>{
        alert ("gracias por su compra")
    })}}

// BOTON SUBIR AL CARRITO EN EL MAIN

function botonCarro(){
    const botonCarro = document.getElementsByClassName ("principal__productos__btn__btncar");
        for (const btncar of botonCarro){
        btncar.addEventListener("click",()=>{
        alertaCompra()
        })}}

        function alertaCompra(){
            Swal.fire({
                color:'#FFE400',
                background:'#066163',
                iconColor: '#FFE400',
                position: 'top-end',
                icon: 'success',
                title: `Agregaste el prodructo al carro`+ nombre(),
                showConfirmButton: false,
                timer: 1500
                })
        }
        
        // function nombre(idProducto){
        //     productos.forEach(producto=>{
        //         const encontrar=productos.find(producto=>producto.id==idProducto);
                
        //         console.log(encontrar)
        //     })
        // }
// DAR BIENVENIDA AL USUARIO 

function darBienvenida(){

    let bienvenido=JSON.parse(localStorage.getItem("usuario"))
    if (bienvenido!==[]&&bienvenido!==null){
        let divLogear=document.getElementsByClassName("encabezado__logear")[0]
        let textoBienvenido=document.createElement("h2")
        textoBienvenido.innerText=`Bienvenido ${bienvenido.nombre}` 
        divLogear.appendChild(textoBienvenido)
        // cambioLogear()
    }
}