const util = require('util');


console.log(util.types.isDate(new Date()));
console.log(util.types.isDate('123'));
console.log(util.format("%s a mangé des %s", "Amaury", "spaghetti"));
console.log(util.isDeepStrictEqual({
    Maxime: "Ne parlons de bruno",
}, {
    Maxime: 'Ne parlons de bruno',
}))