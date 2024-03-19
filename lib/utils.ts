// create function to round of price numbers 
// to two decimal point

export const round2 = (num: number) =>
Math.round((num + Number.EPSILON) * 100) / 100;
