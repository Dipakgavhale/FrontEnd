/*
pop Method
    pop(): T | undefined;
    Removes the last element from an array and returns it.
    If the array is empty, undefined is returned and the array is not modified.
    Pop method is used to get value in array. its work on LIFO principle last in first out, its not used to get specific index position.
*/
var arr2 = [10, 20, 30, 40, 50, 60, 70]; //number
var res1 = arr2.pop();
console.log(arr2);
console.log("poped value : " + res1);
var arr3 = [];
var res2 = arr3.pop();
console.log("poped value : " + res2);
