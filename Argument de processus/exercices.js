/**
 * - Faire un additionneur qui additionne tous les chiffres que vous passez comme argument
 * - Indice : parseInt() pour transformer les chaines de caractères en nombre.
 */

let sum = 0;
let i =2;

while(process.argv[i]) {
    sum += parseInt(process.argv[i]);
    i++;
}

console.log(sum);