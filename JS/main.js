// Declaración de variables

let balanceado = "balanceado";
let stock1 = 50;
let precio1 = 1200;

let accesorios = "accesorios"
let precio2 = 500;
let stock2 = 20;

// Ciclo for para los productos
for (let i= 0 ; i <= 25; i ++){
    let ingreseUsuario = prompt("Ingrese su nombre por favor");
    let edad =prompt("Ingrese su edad por favor:")
    if (edad >= 18){
        let respuesta = prompt("¿Desea adquirir algún producto?")
            if (respuesta == "si"){
                let compra = prompt("Ingrese producto a comprar, 'balanceado o accesorios'");
                if (compra == balanceado || compra == accesorios){
                    let cantidad = prompt("Ingrese cantidad del producto que desea");
                    if (compra == balanceado){
                        stock1 -= cantidad;
                        precio(cantidad,precio1)
                        let formaPago = prompt("¿Desea abonar con tarjeta o efectivo?")
                        total(formaPago,precioTotal)
                        let envio = prompt("¿Desea realizar la compra con el envío?. El recargo es de $200")
                        envioPrecio(precioFinal,envio)
                        alert(ingreseUsuario + " el monto a abonar es $" + precioEnvioFinal + ", su N° de pedido es: " + i);
                        }
                    else{
                        stock2 -= cantidad;
                        precio(cantidad, precio2)
                        let formaPago = prompt("¿Desea abonar con tarjeta o efectivo?")
                        total(formaPago,precioTotal)
                        let envio = prompt("¿Desea realizar la compra con el envío?. El recargo es de $200")
                        envioPrecio(precioFinal,envio)
                        alert(ingreseUsuario + " el monto a abonar es $" + precioEnvioFinal + ", su N° de pedido es: " + i)
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


// Declaración de funciones

//Precio total de cantidad de productos x precio unitario
function precio(cantidad, precio){
    precioTotal =(cantidad * precio);
}

//Precio de acuerdo a forma de pago, corresponde descuento del 10% si es en efectivo sino se le cobrara un recargo del 10% 
function total (formaPago,precioTotal){
    if (formaPago == "efectivo"){
        precioFinal = precioTotal - (precioTotal * 0.10);
    }
    else{
      precioFinal = precioTotal + (precioTotal * 0.10)
    }
}

//Precio Final que aparecerá en pantalla modificado en el caso de que haya seleccionado el envío, sino
// será el precio calculado anteriormente de acuerdo a la metodología de pago

function envioPrecio(precioFinal, envio){
    if (envio == "si"){
        precioEnvioFinal =precioFinal + 200
    }
    else{
        precioEnvioFinal = precioFinal
    }
}
