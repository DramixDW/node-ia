/**
 * 📌 Pour la Belgique, la France et l'Allemagne, vous devez renvoyer en sortie une
 *  string formatée de la manière suivante :
 * "En {{COUNTRY}}, le taux de TVA est de {{RATE}}%".
 */

const util = require('util');

let tva = [21, 20, 19];

let countries = ['Belgique', 'France', 'Allemagne'];

for (let i = 0; i < tva.length; i++) {
    console.log(util.format("En %s, le taux de TVA est de %d %", countries[i], tva[i]))
}
