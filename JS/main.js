
let balanceado = "balanceado";
let precio1 = 1200;
let stock1 = 50;

let accesorios = "accesorios"
let precio2 = 500;
let stock2 = 20;

// Ciclo for para los productos
for (let i= 0 ; i <= 25; i ++){
    let ingreseUsuario = prompt("Ingrese su nombre por favor");
    let edad =prompt("Ingrese su edad por favor:");
    if (edad >= 18){
        let respuesta = prompt("¿Desea adquirir algún producto?")
            if (respuesta == "si"){
                let compra = prompt("Ingrese producto a comprar, 'balanceado o accesorios'");
                if (compra == balanceado || compra == accesorios){
                let cantidad = prompt("Ingrese cantidad del producto que desea");
                    if (compra == balanceado){
                        stock1 -= cantidad
                        alert(ingreseUsuario + " el precio a pagar es $"+ precio1 * cantidad + ", su número de pedido es: " + i);
                    }
                    else{
                        stock2 -= cantidad
                        alert(ingreseUsuario + " el precio a pagar es $"+ precio2 * cantidad + ", su número de pedido es: " + i);
                    }
                }
                else{
                    alert("No se encontró el producto solicitado")
                }
            }
            else{
                alert("Será redirigido a la seccíon principal, muchas gracias!")
            }
        }
    else{
        alert("Recuerde que al ser menor de edad no podrá realizar compras sin supervisión de un adulto")
        let respuesta2 = prompt ("¿Desea continuar?")
        if (respuesta2 == "si"){
            alert("Continuemos!!")
        }
        else{
            alert("¡Muchas gracias por visitar nuestra página " + ingreseUsuario + "!")
        }
    }
}

// Ejemplo while and switch
let entrada = prompt("Ingrese una fruta")
while (entrada != "salir"){
    switch (entrada) {
        case "banana":
            alert("Es de color amarillo");
            break;

        case "manzana":
            alert("Es de color rojo");
            break;

        case "naranja":
            alert("Es de color naranja");
            break;

        case "pera":
            alert("Es de color verdde");
            break;

        default:
            alert("No hemos encontrado la fruta solicitada, disculpe");
    }
    entrada = prompt("Ingrese una fruta")
}

//Ejemplo ciclo do while
let numero = 0
do {
    numero= prompt ("Ingrese un número par");
    alert(numero);
}while (parseInt(numero));


