const displayGlobalCoucou  = () => {
    console.log(coucou)
    global.coucou = "Haha, j'ai changé"
} 

module.exports = displayGlobalCoucou;