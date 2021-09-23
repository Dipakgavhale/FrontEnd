/*
    Task # 7
    Find factorial of given number
*/
var num:number = 5, fact=1;
let temp=num
while(temp != 0){
    fact = fact*temp;
    temp--;
}
console.log(`factorial of ${num} is ${fact}.`)