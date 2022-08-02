async function sleep(ms) {
    return new Promise((res, rej) => setTimeout(res, ms));
}

async function promisedFunction(sum1, sum2) {
    await sleep(2000);
    if (sum1 + sum2 < 0) {
        console.log('Veuillez patienter');
        await sleep(1000);
        throw "Désolé frére";
    }
    return sum1+sum2;
}

// promisedFunction(62, 00)

async function main() {
    const banana = await Promise.all([promisedFunction(21, 21), promisedFunction(42, 53)]);
    // const [result1, result2] assigne la première valeur du tableau à une variable result et la deuxième
    // à la variable result2
    await promisedFunction(-4, -2).catch(err => console.log(err));
    try {
       await promisedFunction(-4, -2);
    } catch(e) {
       console.log(e);
    }
    console.log(banana);
}

main();

