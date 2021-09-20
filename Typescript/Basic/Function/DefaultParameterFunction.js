/*
    Default parameter function
    it is consept it apply on function.
    you have create parameteries function and call it using pass by parameter,
     but in case you create the default parameter Function then some parameter is default and assign value of that.
     then its not madretary to pass value. if you not pass value of that parameter its select defoult value.
    you not create 1st parameter optional and 2ed normal parameter.
     if you creter 1st parameter optional then all other parameter is created optionl.
    Optional and Defoult can not used attetime on same variable.
*/
console.log("\nDefault parameter Function");
console.log("\n1st normal & 2ed default Parameter");
function add5(a, b) {
    if (b === void 0) { b = 5; }
    console.log("Value of a is " + a); //default value 5
    console.log("Value of b is " + b); //3
    console.log("Addition of a+b is " + (a + b)); //8
}
add5(3);
function add6(a, b) {
    if (b === void 0) { b = 5; }
    console.log("Value of a is " + a); //default value 5 but used pass value 1
    console.log("Value of b is " + b); //8
    console.log("Addition of a+b is " + (a + b)); //9
}
add6(1, 8);
//you not create 1st parameter optional and 2ed normal parameter.if you creter 1st parameter optional then all other parameter is created optionl. 
console.log("\n1st default & 2ed normal Parameter");
function add7(a, b) {
    if (a === void 0) { a = 9; }
    console.log("Value of a is " + a); //default value 9 but used pass value 7
    console.log("Value of b is " + b); //3
    console.log("Addition of a+b is " + (a + b)); //10
}
add7(7, 3);
console.log("\n1st default & 2ed optional Parameter");
function add8(a, b) {
    if (a === void 0) { a = 9; }
    console.log("Value of a is " + a); //9
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN
}
add8();
