import colors from 'colors';
import { toKebab } from './kebab.mjs';

// Ceci est un commentaire sur une ligne

/*
        Tout ce qui estre est un commentaire
*/
export function toSnake(message) {
    return  colors.inverse(colors.rainbow(message.toLowerCase().replaceAll(' ',  '_')));
}

export function toColorizedKebab (message) {
        return colors.inverse(toKebab(message));
}