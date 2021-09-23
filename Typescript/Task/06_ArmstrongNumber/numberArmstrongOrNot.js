/*
    Task # 6
    Find given number is Armstrong number or not
*/
var num = 408; //153, 370,371,407...
var originalnumber = num, remainder = 0, result = 0;
while (originalnumber != 0) {
    remainder = originalnumber % 10;
    result += (remainder * remainder * remainder);
    originalnumber = Math.floor(originalnumber / 10);
}
if (result == num) {
    console.log(num + " is Armstrong number.");
}
else {
    console.log(num + " is not Armstrong number.");
}
