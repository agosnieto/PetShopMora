// Nombre del usuario y páis de origen
let ingreseUsuario = prompt("Ingrese su nombre por favor");
let pais = prompt("Ingres su país de origen")
alert(" Bienvenido/a " + " " + ingreseUsuario + " del país" + " " + pais);

// Declaración de variables

let balanceado = "balanceado";
let precio1 = 1200;
let stock1 = 50;

let accesorios = "accesorios"
let precio2 = 500;
let stock2 = 20;

// Edad del usuario y uso de condcionales

let edad =prompt("Ingrese su edad por favor:");
if (edad >= 18){
    let respuesta = prompt("¿Desea adquirir algún producto?")
    if (respuesta == "si"){
        let compra = prompt("Ingrese producto a comprar, 'balanceado o accesorios'");
        if (compra == balanceado || compra == accesorios){
        let cantidad = prompt("Ingrese cantidad del producto que desea");
            if (compra == balanceado){
                stock1 -= cantidad
                alert("El precio a pagar es $"+ precio1 * cantidad);
            }
            else{
                stock2 -= cantidad
                alert("El precio a pagar es $"+ precio2 * cantidad);
            }
        }
        else{
            alert("No se encontró el producto solicitado")
        }
    }
}
else{
    alert("Recuerde que al ser menor de edad no podrá realizar compras sin supervisión de un adulto")
    let respuesta2 = prompt ("¿Desea continuar?")
    if (respuesta2 == "si"){
        alert("Continuemos!!")
    }
    else{
        alert("¡Muchas gracias por visitar nuestra página!")
    }
}
