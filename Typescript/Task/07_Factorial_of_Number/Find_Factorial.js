/*
    Task # 7
    Find factorial of given number
*/
var num = 5, fact = 1;
var temp = num;
while (temp != 0) {
    fact = fact * temp;
    temp--;
}
console.log("factorial of " + num + " is " + fact + ".");
