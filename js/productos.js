
// PRODUCTOS PARA LA TIENDA

class Producto {
    constructor (id,img,nombre,precio,categoria,plataforma,stock){
        this.id=id;
        this.img=img;
        this.nombre=nombre;
        this.precio=precio;
        this.categoria=categoria;
        this.plataforma=plataforma;
        this.stock=stock;
    }
}


const producto1=new Producto (01,"./complementos/imagenes/assassinsCreed.webp","Assassins Creed Valhala","$12000","Videojuego","ps","")
const producto2=new Producto (02,"./complementos/imagenes/callistocoleccion.webp","The Callisto Protocol","$20000","Videojuego","pc","")
const producto3=new Producto (03,"./complementos/imagenes/eldenRing.webp","Elden Ring","$12000","Videojuego","ps","")
const producto4=new Producto (04,"./complementos/imagenes/farcry6Xbox.webp","Far Cry 6","$12000","Videojuego","xbox","")
const producto5=new Producto (05,"./complementos/imagenes/fifa2022.webp","Fifa 2022","$12000","Videojuego","ps","")
const producto6=new Producto (06,"./complementos/imagenes/finalFantasy.webp","Final Fantasy XVI","$12000","Videojuego","ps","")
const producto7=new Producto (07,"./complementos/imagenes/forspoken.webp","Forspoken","$12000","Videojuego","ps","")
const producto8=new Producto (08,"./complementos/imagenes/hogwartsXbox.webp","Hogwarts Legacy","$12000","Videojuego","xbox","")
const producto9=new Producto (09,"./complementos/imagenes/horizon.webp","Horizon Forbbiden West","$12000","Videojuego","ps","")
const producto10=new Producto (10,"./complementos/imagenes/inmortalrisingps5.webp","Inmortal Rising","$12000","Videojuego","ps","")
const producto11=new Producto (11,"./complementos/imagenes/kenaps5.webp","Kena Bridge of Spirits","$12000","Videojuego","ps","")
const producto12=new Producto (12,"./complementos/imagenes/lastofusps4.webp","The Last of Us 2","$12000","Videojuego","ps","")
const producto13=new Producto (13,"./complementos/imagenes/nintendoSwitch.webp","Nintendo Switch","$120000","Consola","nintendo","")
const producto14=new Producto (14,"./complementos/imagenes/ps4.webp","PS4","140000","Consola","ps","")
const producto15=new Producto (15,"./complementos/imagenes/ps4VR.webp","PS4 VR","$80000","Accesorio","ps","")
const producto16=new Producto (16,"./complementos/imagenes/ps5chargedual.webp","Cargador de Joysticks ps5","$3500","Accesorio","ps","")
const producto17=new Producto (17,"./complementos/imagenes/ps5edicionspider.webp","PS5 Edicion Spiderman","$180000","Consola","ps","")
const producto18=new Producto (18,"./complementos/imagenes/psplus.webp","PsPlus 12meses","$11500","Gift Card","ps","")
const producto19=new Producto (19,"./complementos/imagenes/rallyDakar.webp","Rally Dakar","$12000","Videojuego","ps","")
const producto20=new Producto (20,"./complementos/imagenes/kirby.webp","Kirby y la Tierra Olvidada","$11000","videojuego","nintendo","")
const producto21=new Producto (21,"./complementos/imagenes/soporteexbox.webp","Soporte Exbox serieX","$3500","Accesorio","xbox","")
const producto22=new Producto (22,"./complementos/imagenes/soportenintendo.webp","Soporte Nintendo Switch","$5500","Accesorio","nintendo","")
const producto23=new Producto (23,"./complementos/imagenes/spidermanp5.webp","Spiderman Miles Morales","$12000","Videojuego","ps","")
const producto24=new Producto (24,"./complementos/imagenes/xboxSerieX.webp","Xbox Serie X","$160000","Consola","xbox","")
const producto25=new Producto (25,"./complementos/imagenes/joystickPs4.webp","Joystick ps4","$11000","Accesorio","ps","")
const producto26=new Producto (26,"./complementos/imagenes/luigi.webp","Luigis Mansion 3","$11000","videojuego","nintendo","")
const producto27=new Producto (27,"./complementos/imagenes/pokemon.webp","Pokemon Leyendas Arceus","$11000","videojuego","nintendo","")
const productos=[producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,producto11,producto12,producto13,producto14,producto15,producto16,producto17,producto18,producto19,producto20,producto21,producto22,producto23,producto24,producto25,producto26,producto27]

// PRODUCTOS DEL CARRO DE COMPRAS

class Carrito {
    constructor(productos){
    this.productos=productos;}

    agregarProducto(Producto){
        this.productos.push(Producto)
    }
    quitarProducto(Producto){
        this.productos.splice(Producto)
    }
}

let carrito= new Carrito ([]);


// USUARIO
class Usuario {
    constructor(nombre, clave)
    {
        this.nombre=nombre;
        this.clave=clave;
    }
}