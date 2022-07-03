// darBienvenida ();
// function darBienvenida(){

//     let bienvenido=JSON.parse(localStorage.getItem("usuario"))
//     if (bienvenido!==[]&&bienvenido!==null){
//         let divLogear=document.getElementsByClassName("encabezado__logear")[0]
//         let textoBienvenido=document.createElement("h2")
//         textoBienvenido.innerText=`Bienvenido ${bienvenido.nombre}` 
//         divLogear.appendChild(textoBienvenido)
//     }
// }


registro();

function registro (){
    const btn=document.getElementsByClassName("encabezado__logear__boton")[0];
    btn.addEventListener("click", ()=>{
        almacenarDatos()
        cambiarLog()
    })
}
function cambiarLog(){
    let usuario=JSON.parse(localStorage.getItem("usuario"))
    let log=document.getElementsByClassName("encabezado__logear")[0]
    log.innerHTML=""
    log.innerHTML=`<h2 class="encabezado__logear__usuario"><img width="60" src="./complementos/logos/usuario.webp" alt="usuario"></img>Sesion de ${usuario.nombre}</h2>`
}

function almacenarDatos(){
    let nom=document.getElementsByClassName("encabezado__logear__campoN")[0].value
    let clav=document.getElementsByClassName("encabezado__logear__campoC")[0].value
    const usuario =new Usuario(nom,clav);
    localStorage.setItem("usuario",JSON.stringify(usuario))
}

// darBienvenida ();
// function darBienvenida(){
//     let usuario=JSON.parse(localStorage.getItem("usuario"))
//     if (usuario!==[]||usuario!==null){
        
//     }
// }
