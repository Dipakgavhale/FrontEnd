/*
Function without parameter & without Return type
Function without parameter & with Return type
Function with parameter & without Return type
Function with parameter & with Return type
*/
console.log("\nNormal Function");
function fun1() {
    console.log("\nFunction without parameter & without Return type");
}
fun1();
function fun2() {
    return ("\nFunction without parameter & with Return type");
}
//fun2();
var str = fun2();
console.log(str);
function fun3(str1, str2) {
    console.log("\n" + str1 + str2);
}
fun3("Function with parameter ", '& without Return type');
function fun4(str1, str2) {
    return ("\n" + str1 + str2);
}
var str3 = fun4("Function with parameter ", '& with Return type');
console.log(str3);
