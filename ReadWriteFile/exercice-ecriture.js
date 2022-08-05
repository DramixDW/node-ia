/* * 📌Créer une fonction qui permet de 
fusionner 2 fichiers en 1 seul qui s'appelera
 <fichier1>+<fichier2>
 * 📍 BONUS: Créer une fonction qui 
 permet de fusionner un nombre
  illimité de fichiers ensemble !
 **
 */

 const fs = require('fs');

const fusionFile = (file1, file2, ...Xfiles) => {

    fs.writeFileSync('fusion.txt', fs.readFileSync(file1, 'utf-8'));

    fs.appendFileSync('fusion.txt', '\n');

    fs.appendFileSync('fusion.txt', fs.readFileSync(file2, 'utf-8'));

    for (const file of Xfiles) {

        fs.appendFileSync('fusion.txt', '\n');

        fs.appendFileSync('fusion.txt', fs.readFileSync(file, 'utf-8'));

    }
}

const fusionFile3 = (file1, file2, ...Xfiles) => {
    let filename = file1.split('.js')[0] + '+' + file2.split('.js')[0];
    for (const file of Xfiles) {
        filename += '+' + file.split('.js')[0];
    }
    filename += '.js';
    fs.writeFileSync(filename, fs.readFileSync(file1, 'utf-8'));

    fs.appendFileSync(filename, '\n');

    fs.appendFileSync(filename, fs.readFileSync(file2, 'utf-8'));

    for (const file of Xfiles) {

        fs.appendFileSync(filename, '\n');

        fs.appendFileSync(filename, fs.readFileSync(file, 'utf-8'));

    }
}

fusionFile3('example.js', 'exercice-dir.js');