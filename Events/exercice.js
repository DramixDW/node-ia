/*
    Juste prix
    Math.random()
    quand l'utilisateur commence le jeu
    il est face à 3 options
    - Quitter le jeu
    - Faire une proposition de prix
    - Recommencer
    Il peut faire 10 essais, au bout 1à essais, s'il n'a pas trouvé, le programme 
    se ferme et affiche un message medisant à l'intention du joueur  
*/
const readline = require('readline');
const { stdin: input, stdout: output } = require('node:process');
const events = require('events');
const game = new events.EventEmitter();
const rl = readline.promises.createInterface({ input, output })
let playing = false;

let price, tryCount;

const resetGame = () => {
    tryCount = 0;
    price = Math.ceil(Math.random()*10000);
}

resetGame();
game.on('exit', () => {
    process.exit();
})

game.on('retry', () => {
    resetGame();
})

game.on('try', async () => {
    playing = true;
    const answer = await rl.question('Quelle est le juste prix ?');
    if (!Number.isNaN(answer)) {
        if (parseInt(answer) === price) {
          console.log(`Bravo, le prix était ${price} !`)
          resetGame(); 
          return main();
        }
        tryCount++;
        answer > price ? console.log(`Plus petit, il te reste ${10 - tryCount} essais`) : console.log(`Plus grand, il te reste ${10 - tryCount} essais`);
        if (tryCount > 10) {
            console.log(
            `Dom-H, le prix était ${price} ! Tu feras mieux la prochaine fois ;-(`
            );
          resetGame();
        }
      return main();
    }
    console.log("Ce n'est pas un prix mais un mot D:");
    return main();
    
})

async function main() {
        const opt = await rl.question('1-Quitter le jeu \n -2 Recommencer la partie \n -3 Commencer une partie\n')
        switch(opt) {
            case "1":
                game.emit('exit');
                break;
            case "2":
                game.emit('retry');
                break;
            case "3":
                game.emit('try');
                break;
            default:
                console.log('Option invalide');
                break;
     }
}
 
main();
