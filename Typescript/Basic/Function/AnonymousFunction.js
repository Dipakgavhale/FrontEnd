/*
Anonymous Function
function without name. its used for framework.its a memory efficiant.
compailer provaied the mangale name to each function and machine call that function using this name.its unics
*/
console.log("\nAnonymous function");
var temp1 = function () {
    console.log("\nFunction without parameter & without Return type");
};
temp1();
var temp2 = function () {
    return ("\nFunction without parameter & with Return type");
};
console.log(temp2());
var temp3 = function (str1, str2) {
    console.log("\n" + str1 + str2);
};
temp3("Function with parameter ", '& without Return type');
var temp4 = function (str1, str2) {
    return ("\n" + str1 + str2);
};
var str3 = temp4("Function with parameter ", '& with Return type');
console.log(str3);
