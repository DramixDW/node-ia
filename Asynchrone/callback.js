function myCallBackSumFunction(sum1, sum2, callback) {
    setTimeout(() => {
        if (sum1 + sum2 < 0) {
            return callback("Le résultat ne peut pas être inférieur à 0");
        }
        callback(null, sum1+ sum2);
    }, 1000);
}

myCallBackSumFunction(
    1, // sum1
    2, // sum2
    (err, resultFromFunction) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Le résultat de l'addition est ${resultFromFunction}`);
    }
)

myCallBackSumFunction(
    1, // sum1
    -42, // sum2
    (err, resultFromFunction) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Le résultat de l'addition est ${resultFromFunction}`);
    }
)