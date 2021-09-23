/*
    Task # 1
    Find perfect square from 1 to 100 using while ,for loop
*/
console.log("Find perfect square from 1 to 100 using for loop")
var count:number = 1;
for(let i =1; i<=100;i=i+count){
    count+=2;
    console.log(i)    
}
console.log("Find perfect square from 1 to 100 using while loop")
var count:number = 1;
var i:number=1;
while( i<=100){
    count+=2;
    console.log(i)   
    i=i+count 
}