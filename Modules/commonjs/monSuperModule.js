const color = require("colors");

exports.enemy = 'Mary Matoué';

exports.colorize = (sentence) => {
    return color.rainbow(sentence);
}