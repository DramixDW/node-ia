const events = require("events");

const options = new events.EventEmitter();

options.on('poush', message => {
    console.log(message);
    console.log("Mary m'a encore toué");
})

options.on('10h', message => {
    console.log('Le formateur arrive enfin ! :o');
})

console.log('Options: \n 1- poush \n 2- 10h \n 3- exit');
process.stdin.on('data', data => {
    const opt = data.toString().trimEnd();
    switch(opt) {
        case "1":
            options.emit('poush', 'Banana Palooza', 'On peut en mettre autant qu\'on veut');
            break;
        case "2":
            options.emit('10h');
            break;
        case "3":
            process.exit();
        default:
            console.log('Option invalide :c');
            break;
    }
    console.log('Options: \n 1- poush \n 2- 17h \n 3- exit');
})