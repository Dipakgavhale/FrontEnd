/*
Array Basic
    its a groveble and synkeble.
    its not provied size.its veribale
*/
var a = [4, 5, 6, 7]; //number
var a1 = [5, 8, "Dipak", 9]; // String | number
var a2 = [5.5, 8, 7, 9, true]; // number | boolean
var a3 = [];
for (var i = 0; i < a.length; i++) {
    console.log("a[" + i + "]=" + a[i] + " ");
}
console.log("Array Value is " + a1); // using toString method
console.log("Array value is === " + a.join()); // using join method bydefault , is separed the value.
console.log("Array value is === " + a.join(' # '));
console.log("Array value is === " + a.join(' '));
