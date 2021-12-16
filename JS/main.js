let productos1 = [{id:0, nombre:"Royal Canin",precio: 1500},
{id:1, nombre:"Purina",precio: 2000},
{id:2, nombre:"DogChow",precio: 1700}]

let productos2 = [{id:3, nombre:"Gatito",precio: 1500},
{id:4, nombre:"Purina",precio: 2000},
{id:5, nombre:"CatChow",precio: 1700}]

let productos3 = [{id:6, nombre:"Mix vegano",precio: 300},
{id:7, nombre:"Barritas de Znahoria",precio: 400},
{id:8, nombre:"Semillas de girasol",precio: 350}]

let productos4 = [{id:9, nombre:"Hojitas vegetal",precio: 600},
{id:10, nombre:"Comida en cubitos",precio: 500},
{id:11, nombre:"Pecera mediana",precio: 1700}]

let productos5 = [{id:12, nombre:"Comedero",precio: 200},
{id:13, nombre:"Piedras sanitarias",precio: 400},
{id:14, nombre:"Pelota masticable",precio: 150}]


class Producto{
    constructor(id,nombre,precio){
        this.clave = id
        this.nombre = nombre
        this.precio = precio;
    }
    mostrar(){
        alert("La marca del producto es " + (this.nombre) + " y cuesta $" + (this.precio) + "ID: " + this.id)}
}
/*let productos1 = new Producto (15, "Royal",1590)
productos1.mostrar()
let productos2 = new Producto (16, "Eukanuba", 2480)
productos2.mostrar()
let productos3 = new Producto (17, "Sabrosito", 1250)
productos3.mostrar()
let productos4 = new Producto (18,"Dogchow", 2000)
productos4.mostrar()*/


const menu = () =>{
    let opcion = parseInt(prompt(`Ingrese la opcion desea:
    1-Mostrar
    2-Comprar
    3-Eliminar
    4-Salir`))

    switch (opcion) {
        case 1:
            eleccionEspecie()
            break;
        case 2:
            let l = parseInt( prompt("Ingrese el ID del producto a adquirir"))
            compra(l)
            break;
        case 3:
            pago()
            break;
        default:
            alert("Muchas gracias por visitar nuestra página")
            break;
    }
}
menu()

//Función para seleccionar los productos del tipo de animal que desea ver

function eleccionEspecie(){
    let eleccion = parseInt(prompt(`Elija el tipo de alimento que desea:
    1-PERRO
    2-GATO
    3-AVES Y CONEJOS
    4-PECES
    5-ACCESORIOS`))

    switch (eleccion) {
        case 1:
            mostrarProdutos(productos1)
            menu()
            break;
        case 2:
            mostrarProdutos(productos2)
            menu()
            break;
        case 3:
            mostrarProdutos(productos3)
            menu()
            break;
        case 4:
            mostrarProdutos(productos4)
            menu()
            break;
        case 5:
            mostrarProdutos(productos5)
            menu()
            break;

        default:
            break;
    }
}

//Función Mostrar
function mostrarProdutos(cadena){
    let mensaje = "Los productos disponibles son :\n"
    for(const n of cadena){
        mensaje += n.nombre + " $" + n.precio + " (ID: " + n.id +")\n"
    }
    alert(mensaje)
}


function compra(id){
    if (productos1.find(producto => producto.id == id)||productos2.find(producto => producto.id == id)
    ||productos3.find(producto => producto.id == id) ||productos4.find(producto => producto.id == id)
    ||productos5.find(producto => producto.id == id) ){

    }else{
        alert("ID no valido")
    }

}

//Funcion pagar
function pago(){
    let medioPago = prompt(`Elija el medio de pago para abonar, seleccione el N de opción:
    1-EFECTIVO
    2-TARJETA`)

    switch (medioPago) {
        case 1:
            let totalefectivo =   precioTotal -(precioTotal*0.10)
            return totalefectivo
            break;
        case 2:
            let totaltarjeta = precioTotal + (precioTotal*0.10)
            return totaltarjeta
        default:
            alert("Medio de pago no válido")
            break;
    }
}