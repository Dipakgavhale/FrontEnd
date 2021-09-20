/*
Fat arrow function/Arrow function
*/
console.log("\nFat Arrow Function");
var fat1 = function () {
    console.log("\nFunction without parameter & without Return type");
};
fat1();
var fat2 = function () {
    return ("\nFunction without parameter & with Return type");
};
console.log(fat2());
var fat3 = function (str1, str2) {
    console.log("\n" + str1 + str2);
};
fat3("Function with parameter ", '& without Return type');
var fat4 = function (str1, str2) {
    return ("\n" + str1 + str2);
};
console.log(fat4("Function with parameter ", '& with Return type'));
