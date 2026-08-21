const prompt = require("prompt-sync")();
 let n1 =parseInt(prompt("Ingresa el primer numero  base : "));
 let n2 =parseInt(prompt("Ingresa el segundo numero que lo quieres elevar : "));
function Potencia(n1,n2) {
    let resultado =  Math.pow(n1,n2);
     
    return resultado;
}
console.log("La potencia es :"+Potencia(n1,n2));