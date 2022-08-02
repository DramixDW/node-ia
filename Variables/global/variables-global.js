const displayGlobalCoucou  = require('./utils');
console.log(global);

// Crée une variable global coucou
global.coucou = "Banana";
displayGlobalCoucou();

console.log(global);
console.log(coucou);