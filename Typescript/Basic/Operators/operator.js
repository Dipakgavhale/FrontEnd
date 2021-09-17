/*
Arithmatic (+, -, /, *, % )
logical ( &&, || )
bitwise (&, |, ^, <<, >>, !, ~ )
relational (<=, >=, ==, !==, <, > )
increments decrements ( ++, -- )
Ternary (Expretion)? Condition1:Condition2
Assignment ( =, +=, -=, *=, /=, %= etc.)
=== its checks value as well as datatypes
*/
console.log("Arithmatic ");
var num1 = 10, num2 = 20;
console.log(num1 + " + " + num2 + " = " + (num1 + num2));
console.log(num1 + " - " + num2 + " = " + (num1 - num2));
console.log(num1 + " * " + num2 + " = " + (num1 * num2));
console.log(num1 + " / " + num2 + " = " + (num1 / num2));
console.log(num1 + " % " + num2 + " = " + (num1 % num2));
console.log("\nLogical AND ");
var A = true, B = true, C = false, D = false;
console.log(A + " && " + B + " = " + (A && B));
console.log(A + " && " + C + " = " + (A && C));
console.log(C + " && " + B + " = " + (C && B));
console.log(C + " && " + D + " = " + (C && D));
console.log("\nLogical OR ");
console.log(A + " || " + B + " = " + (A || B));
console.log(A + " || " + C + " = " + (A || C));
console.log(C + " || " + B + " = " + (C || B));
console.log(C + " || " + D + " = " + (C || D));
console.log("\nBitwise ");
var num3 = 10, num4 = 20;
console.log(num3 + " & " + num4 + " = " + (num3 & num4));
console.log(num3 + " | " + num4 + " = " + (num3 | num4));
console.log(num3 + " ^ " + num4 + " = " + (num3 ^ num4));
console.log(num3 + " << 1 = " + (num3 << 1));
console.log(num4 + " >> 1 = " + (num4 >> 1));
console.log("!" + num3 + " = " + (!num3));
console.log("~ " + num3 + " = " + (~num3));
console.log("\nIncrements Decrements ");
var num5 = 10;
console.log("++" + num5 + " = " + (++num5));
console.log(num5 + "++ = " + (num5++));
console.log("--" + num5 + " = " + (--num5));
console.log(num5 + "-- = " + (num5--));
console.log("\n === ");
var str1 = "Dipak", str2 = 'Dipak';
console.log(str1 + " === " + str2 + " = " + (str1 === str2));
console.log("\nTernary (Expretion)? Condition1:Condition2  ");
var num6 = 10, num7 = 20;
console.log(num6 + " < " + num7 + " ? " + num6 + " : " + num7 + "  = " + (num6 < num7 ? num6 : num7));
