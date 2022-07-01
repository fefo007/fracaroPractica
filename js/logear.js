


function almacenarDatos(){
    let nom=document.getElementsByClassName("encabezado__logear__campoN")[0].value
    let clav=document.getElementsByClassName("encabezado__logear__campoC")[0].value
    const usuario =new Usuario(nom,clav);
    localStorage.setItem("usuario",JSON.stringify(usuario))

}


// function cambioLogear(){
//     let logearNombre=document.getElementsByClassName("encabezado__logear__campoN")
//     let logearClave=document.getElementsByClassName("encabezado__logear__campoC")
//     let logearBtn=document.getElementsByClassName("encabezado__logear__boton")
//     logearNombre.innerHTML=""
//     logearClave.innerHTML=""
//     logearBtn.innerHTML=""
// }