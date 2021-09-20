/*
//      its same like type casting 
        its a process of change data type of varibale
        it is implements in two ways
        1   Angle bracket
        2   as syntax
*/
var bool : any = true;
// Angle bracket
var temp1 = (<string > bool);
console.log(`Value of A is convert boolean into String : ${temp1}`); // "true"
// as syntax
var temp2 = (bool as number);
console.log(`Value of A is convert boolean into number : ${temp2}`); // true

var str10 : any = "Dipak";
// Angle bracket
var temp3 = (<boolean > str10);
console.log(`Value of str is convert string into boolean : ${temp3}`);// Dipak
// as syntax
var temp4 = (str10 as number);
console.log(`Value of str is convert boolean into number : ${temp4}`);// Dipak

var num : any = 150;
// Angle bracket
var temp5 = (<boolean > num);
console.log(`Value of num is convert number into boolean : ${temp5}`);// 150 
// as syntax
var temp6 = (num as string);
console.log(`Value of num is convert number into String : ${temp6}`);// 150