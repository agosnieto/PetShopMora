class Producto{
    constructor(marca,peso,especie,precio){
        this.marca = marca;
        this.peso = peso;
        this.especie = especie;
        this.precio = precio;
    }
    mostrar(){
        alert("La marca del producto es " + (this.marca) + "tiene ") + (this.peso) + "kilos, es para" +
        (this.especie) + "y cuesta $" + (this.precio)
    }
}
let producto1 = new Producto ("Royal", 16, "gato", 1500)
producto1.mostrar
let producto2 = new Producto ("Eukanuba", 20, "perro", 2400)
producto2.mostrar
let producto3 = new Producto ("Sabrosito", 15, "gato adulto", 1250)
producto3.mostrar
let producto4 = new Producto ("Dogchow", 22, "cachorro", 2000)
producto4.mostrar