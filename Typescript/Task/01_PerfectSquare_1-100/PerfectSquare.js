/*
    Task # 1
    Find perfect square from 1 to 100 using while ,for loop
*/
console.log("Find perfect square from 1 to 100 using for loop");
var count = 1;
for (var i_1 = 1; i_1 <= 100; i_1 = i_1 + count) {
    count += 2;
    console.log(i_1);
}
console.log("Find perfect square from 1 to 100 using while loop");
var count = 1;
var i = 1;
while (i <= 100) {
    count += 2;
    console.log(i);
    i = i + count;
}
