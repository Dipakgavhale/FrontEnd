/*
    Task # 9
    Find the Sum of all Digits. e.g num=1234 & output will be 10
*/
var num = 1234;
var originalnumber = num, remainder = 0, sum = 0;
while (originalnumber != 0) {
    remainder = originalnumber % 10;
    sum += remainder;
    originalnumber = Math.floor(originalnumber / 10);
}
console.log("Sum of all digits of " + num + " is  " + sum);
