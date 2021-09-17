/*
Function without parameter & without Return type
Function without parameter & with Return type
Function with parameter & without Return type
Function with parameter & with Return type
*/
console.log("Normal Function");
function fun1() {
    console.log("Function without parameter & without Return type");
}
fun1();
function fun2() {
    return ("Function without parameter & with Return type");
}
//fun2();
var str = fun2();
console.log(str);
function fun3(str1, str2) {
    console.log(str1 + str2);
}
fun3("Function with parameter ", '& without Return type');
function fun4(str1, str2) {
    return (str1 + str2);
}
var str3 = fun4("Function with parameter ", '& with Return type');
console.log(str3);
/*
Anonymous Function
function without name. its used for framework.its a memory efficiant.
compailer provaied the mangale name to each function and machine call that function using this name.its unics
*/
console.log("\nAnonymous function");
var temp1 = function () {
    console.log("Function without parameter & without Return type");
};
temp1();
var temp2 = function () {
    return ("Function without parameter & with Return type");
};
console.log(temp2());
var temp3 = function (str1, str2) {
    console.log(str1 + str2);
};
temp3("Function with parameter ", '& without Return type');
var temp4 = function (str1, str2) {
    return (str1 + str2);
};
var str3 = temp4("Function with parameter ", '& with Return type');
console.log(str3);
/*
Fat arrow function/Arrow function
*/
console.log("\nFat Arrow Function");
var fat1 = function () {
    console.log("Function without parameter & without Return type");
};
fat1();
var fat2 = function () {
    return ("Function without parameter & with Return type");
};
console.log(temp2());
var fat3 = function (str1, str2) {
    console.log(str1 + str2);
};
fat3("Function with parameter ", '& without Return type');
var fat4 = function (str1, str2) {
    return (str1 + str2);
};
console.log(fat4("Function with parameter ", '& with Return type'));
