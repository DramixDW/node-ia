function iPromise(sum1, sum2, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sum1 + sum2 < 0) {
                reject('Tu t\'es trompé frére');
            }
            resolve({ value: sum1 + sum2, message: 'Bien joué frére'});
        }, 1000)
    });
} 

const logResult = (result) => {
    console.log(`Le résultat est ${result.value}`);
    console.log(result.message);
    return result.value;
} 

iPromise(62, 00)
    .then(logResult).then((result) => {
        return result*10;
    }).then((result) => console.log(result));

iPromise(42, -65)
    .then(logResult)
    .catch((err) => console.log(err));