/*
    join method
    join(separator?: string): string;
    Adds all the elements of an array into a string, separated by the specified separator string.

*/
var arr7:number[]=[4,5,6,7];//number
console.log("Array value is === "+arr7.join()); // using join method bydefault , is separed the value.

console.log("Array value is === "+arr7.join(' # '));

console.log("Array value is === "+arr7.join(' / ')); 
