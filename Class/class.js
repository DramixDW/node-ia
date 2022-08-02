class Player {
    highScore = 0;
    nom = "amaury debase";

    toString() {
        console.log(`Bonjour, je m'appelle ${this.nom} et mon score est ${this.highScore}`);
    }
}

class Emmanuel extends Player {
    nom = 'Emmanuel';
    highScore = 10750;
}

const averagePlayer = new Player();
averagePlayer.toString();
const emmanuel = new Emmanuel();
emmanuel.toString();

