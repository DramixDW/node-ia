// const monSuperModule = require('./monSuperModule');
const { enemy, colorize } = require('./monSuperModule');

console.log(enemy);

console.log(colorize('Ne parlons de bruno'));

async function loadSnake() {
    const snake = await import('./es-serpent.mjs');
    console.log(snake.toSnake('jE SuiS un SERpeNT'));
    console.log(snake.toColorizedKebab('jE SuiS un ComestiBle'));
}  

loadSnake();