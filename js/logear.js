



function registro (){
    const btn=document.getElementsByClassName("encabezado__logear__boton")[0];
    btn.addEventListener("click", ()=>{
        almacenarDatos();
        cambiarLog();
    })
}
    function cambiarLog(){
        let usuario=JSON.parse(localStorage.getItem("usuario"))
        if (usuario!==null){
        let log=document.getElementsByClassName("encabezado__logear")[0]
        log.innerHTML=""
        log.innerHTML=`<h2 class="encabezado__logear__usuario"><img width="60" src="./complementos/logos/usuario.webp" alt="usuario"></img>Sesion de ${usuario.nombre}</h2>`}
    }
    
    function almacenarDatos(){
        let nom=document.getElementsByClassName("encabezado__logear__campoN")[0].value
        let clav=document.getElementsByClassName("encabezado__logear__campoC")[0].value
        if (nom!==""&&clav!==""){
        const usuario =new Usuario(nom,clav);
        localStorage.setItem("usuario",JSON.stringify(usuario))}
    }
    
    
    function darBienvenida(){
        
        if (localStorage!==[]&&localStorage!==null){
            cambiarLog()
        }
    }
