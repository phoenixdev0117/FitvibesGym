

export const remplacePuntoPrice = (number: number) => {
    return number.toFixed(2).toString().replace(".", ",");
}