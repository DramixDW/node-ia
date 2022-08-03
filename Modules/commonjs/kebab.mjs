export function toKebab(message) {
    return message.toLowerCase().replaceAll(' ', '-');
}