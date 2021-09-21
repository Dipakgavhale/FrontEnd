/*
splice method
    Insert
    splice(start: number, deleteCount: number, ...items: T[]): T[];
    you want to add element in array then you call this method and pass the start index position, deleteCount is zero,then items.
    ex arr.splice(1,0,10)
    you can add multipale element but its add in sequencely like index of 1,2,3. Not add elements random index posission in array.
*/
var arr4 = [11, 5, 7, 9];
console.log("\nOriginal array : " + arr4);
arr4.splice(2, 0, 6);
console.log("After Add one element in array : " + arr4);
var arr5 = ['a', 'b', 'c'];
console.log("\nOriginal array : " + arr5);
arr5.splice(2, 0, 'Dip', 'E', 'F');
console.log("After Add three elements in array : " + arr5);
/*
    Delete
    splice(start: number, deleteCount: number, ...items: T[]): T[];
    you want to delete element in array then you call this method and pass the start index position, deleteCount is index posission.
    ex arr.splice(1,2)
    you can delete multipale element but its delete in sequencely like index of 1,2,3. Not delete elements random index posission in array.

*/
var arr4 = [11, 5, 7, 9];
console.log("\nOriginal array : " + arr4);
arr4.splice(3, 1);
console.log("After delete one elements in array : " + arr4);
var arr4 = [11, 5, 7, 9];
console.log("\nOriginal array : " + arr4);
arr4.splice(1, 2);
console.log("After delete two elements in array : " + arr4);
/*
    replace
    splice(start: number, deleteCount: number, ...items: T[]): T[];
    you want to replace element in array then you call this method and pass the start index position, deleteCount is index posission and items.
    ex arr.splice(2,1,100)
    in this case first delete the 1 item of index posission  2 then add 100 of that posission.
    you can replace multipale element but its replace in sequencely like index of 1,2,3. Not replace elements random index posission in array.
*/
var arr4 = [11, 5, 7, 9];
console.log("\nOriginal array : " + arr4);
arr4.splice(2, 1, 100);
console.log("After replace one elements in array : " + arr4);
var arr4 = [11, 5, 7, 9];
console.log("\nOriginal array : " + arr4);
arr4.splice(1, 3, 100, 50, 20);
console.log("After replace three elements in array : " + arr4);
var arr4 = [11, 5, 7, 9];
console.log("\nOriginal array : " + arr4);
arr4.splice(2, 1, 100, 50, 20);
console.log("After replace  array : " + arr4);
