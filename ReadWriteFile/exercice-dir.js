/**
 * 📌Faites une fonction qui renvoie uniquement les noms de dossiers d'un répertoire
 */

function dirList(dirName){
    const fs = require('fs');
    const repertoirsDansRepertoir = fs.readdirSync(dirName, { withFileTypes: true })
        .filter((item) => item.isDirectory())
        .map((item) => item.name);
    
        console.log(repertoirsDansRepertoir);
    };
    
    dirList('../Modules/commonjs/node_modules');