/*const prompt = require("prompt-sync")();
 let numero =parseInt(prompt("Ingresa el primer numero  para calcular su raiz caudrada "));
 */
let numero = 40;
function RaizCuadrada(numero) {
    let resultado =  Math.sqrt(numero);
     
    return resultado;
}
console.log("La raiz cuadradaes :"+ RaizCuadrada(numero));