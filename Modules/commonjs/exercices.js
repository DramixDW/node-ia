/*
    Fichier en commonjs:  2 fonctions: une qui donne votre âge en chat (age/ç)
                                      une fonction qui fait l'inverse
    Fichier en esModule: une fonction: renvoie un emoji alétoirement (Math.random)
    Vous devrez utiliser les 3 fonctions dans exercices.js
*/

const { toChat, toHuman } = require('./chat');

async function loadEmoji() {
    const emoji = await import('./emoji.mjs');
    console.log(emoji.toEmoji()['emoji']);
}

console.log(toChat(18));
console.log(toHuman(2));
loadEmoji();