const fs = require('fs');
// fs version asynchrone
const fsPromises = require('fs/promises');


console.log(fs.readdirSync('.'));

fsPromises.readdir('.', { withFileTypes: true }).then((dir) => {
    for (const file of dir) {
        console.log(file.isDirectory());
    }
})

console.log('Lire un fichier');

console.log(fs.readFileSync('./exercice-dir.js', 'utf-8'));
fsPromises.readFile('./exercice-dir.js', 'utf-8').then((file) => {
    console.log(file);
});

fs.writeFileSync('testEcriture.txt', 'test');
fs.appendFileSync('testEcriture.txt', '\n C\'est l\'heure de la pause :');