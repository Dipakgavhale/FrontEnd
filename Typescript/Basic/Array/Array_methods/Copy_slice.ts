/*
slice(start?: number, end?: number): T[];
    slice method its used to copy data from array. its Returns a copy of a section of an array in new array widout affecting existing array.
    you pass Star index and end index its return the value of start to end -1. If end is undefined then the slice extends to the end of the array.
    

*/
var arr1: number[]=[22,4,7,88,6,3,9,44,100];

let temp1=arr1.slice(2,6)
console.log("\nOriginal array : "+arr1);
console.log("data from index 2 to index 6 : "+temp1)

var temp2=arr1.slice(2)
console.log("\nOriginal array : "+arr1);
console.log("data from index 2 : "+temp2)

var temp3=arr1.slice()
console.log("\nOriginal array : "+arr1);
console.log("data : "+temp3)
