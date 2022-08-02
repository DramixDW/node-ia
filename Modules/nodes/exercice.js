/**
 * 📌 Installez "image-js"
 * 📌 Faites un programme qui lit 'cat.jpeg' et la tourne de 180 degrés et
 *  lui applique une dimension de 200 pixels.
 * 📌 Sauvegardez ensuite l'image sous 'cat.png'
 */

const { Image } = require('image-js');


execute().catch(console.error);
async function execute() {
    let image = await Image.load('cat.jpeg');
    image = image
                .resize({width: 200})
                .rotate(180)
    return image.save('cat.png');
}