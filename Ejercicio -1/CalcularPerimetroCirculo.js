
const prompt = require("prompt-sync")();
 let radio =parseInt(prompt("Ingresa el radio del circulo:"));
function CalcularPerimetro(radio) {
    let perimetro = 2 * Math.PI * radio
    return perimetro;
}
console.log(CalcularPerimetro(radio));