
// USANDO LA API COLOQUE USUARIOS DE FORMA ALEATORIA PARA QUE REPRESENTEN LAS OPINIONES EN REDES SOCIALES




function usarApi(){
fetch('https://randomuser.me/api/?results=8')
.then((res)=>res.json())
.then((json)=>datoApi(json))
}

function datoApi(dato){
    let primero=dato.results.slice(0,2);
    let segundo=dato.results.slice(2,4);
    let tercero=dato.results.slice(4,6);
    let cuarto=dato.results.slice(6,8);
    primero.forEach(results=>{
        mostrarComentarios1(results)})
    segundo.forEach(results=>{
        mostrarComentarios2(results)})
    tercero.forEach(results=>{
        mostrarComentarios3(results)}) 
    cuarto.forEach(results=>{
        mostrarComentarios4(results)})     
}

    function mostrarComentarios1(results){
        const slideComentarios = document.getElementsByClassName("comentariosUsuarios")[0];
        const usuarioComentario = document.createElement("div")
        usuarioComentario.setAttribute("class","comentarios")
        usuarioComentario.innerHTML=(`<img class="imagen" height="60" src="${results.picture.medium}" alt="">
                                                <div class="parrafos"><p class="parrafos__1">${results.name.first}</p>
                                                <p class="parrafos__2">${results.name.last}</p>
                                                <p class="parrafos__3">ACA va el comentario</p></div>
                                                `)
        slideComentarios.appendChild(usuarioComentario);
    };

        function mostrarComentarios2(results){
            const slideComentarios = document.getElementsByClassName("comentariosUsuarios")[1];
            const usuarioComentario = document.createElement("div")
            usuarioComentario.setAttribute("class","comentarios")
            usuarioComentario.innerHTML=(`<img class="imagen" height="60" src="${results.picture.medium}" alt="">
                                                    <div class="parrafos"><p class="parrafos__1">${results.name.first}</p>
                                                    <p class="parrafos__2">${results.name.last}</p>
                                                    <p class="parrafos__3">ACA va el comentario</p></div>
                                                    `)
            slideComentarios.appendChild(usuarioComentario);
        };

        function mostrarComentarios3(results){
            const slideComentarios = document.getElementsByClassName("comentariosUsuarios")[2];
            const usuarioComentario = document.createElement("div")
            usuarioComentario.setAttribute("class","comentarios")
            usuarioComentario.innerHTML=(`<img class="imagen" height="60" src="${results.picture.medium}" alt="">
                                                    <div class="parrafos"><p class="parrafos__1">${results.name.first}</p>
                                                    <p class="parrafos__2">${results.name.last}</p>
                                                    <p class="parrafos__3">ACA va el comentario</p></div>
                                                    `)
            slideComentarios.appendChild(usuarioComentario);
        };


        function mostrarComentarios4(results){
            const slideComentarios = document.getElementsByClassName("comentariosUsuarios")[3];
            const usuarioComentario = document.createElement("div")
            usuarioComentario.setAttribute("class","comentarios")
            usuarioComentario.innerHTML=(`<img class="imagen" height="60" src="${results.picture.medium}" alt="">
                                                    <div class="parrafos"><p class="parrafos__1">${results.name.first}</p>
                                                    <p class="parrafos__2">${results.name.last}</p>
                                                    <p class="parrafos__3">ACA va el comentario</p></div>
                                                    `)
            slideComentarios.appendChild(usuarioComentario);
        };