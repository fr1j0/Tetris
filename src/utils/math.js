export const hexToMatrix = hex =>
    parseInt(hex, 16)
        .toString(2)
        .padStart(16, 0)
        .match(/[01]{1,4}/g)
        .map(bit => bit.split('').map(bit => parseInt(bit)))
