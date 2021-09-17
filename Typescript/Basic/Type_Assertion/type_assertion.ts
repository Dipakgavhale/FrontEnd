/*
//      its same like type casting 
        its a process of change data type of varibale
        it is implements in two ways
        1   Angle bracket
        2   as syntax
*/
var A : any = true;
// Angle bracket
var temp1 = (<string> A);
console.log(`Value of A is convert boolean into String : ${temp1}`); // "true"
// as syntax
var temp2 = (A as number);
console.log(`Value of A is convert boolean into number : ${temp2}`); // true

var str : any = "Dipak";
// Angle bracket
var temp3 = (<boolean> A);
console.log(`Value of str is convert string into boolean : ${temp3}`);
// as syntax
var temp4 = (A as number);
console.log(`Value of str is convert boolean into number : ${temp4}`);

var num : any = 150;
// Angle bracket
var temp5 = (<boolean> A);
console.log(`Value of num is convert number into boolean : ${temp5}`);
// as syntax
var temp6 = (A as string);
console.log(`Value of num is convert number into String : ${temp6}`);