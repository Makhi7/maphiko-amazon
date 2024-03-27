// create function to round of price numbers 
// to two decimal point

export const round2 = (num: number) =>
Math.round((num + Number.EPSILON) * 100) / 100;


export function convertDocToObj(doc: any){
    doc._id = doc._id.toString();
    
    return doc;
}