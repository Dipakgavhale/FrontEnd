/*
Array Basic
    its a groveble and synkeble.
    its not provied size.its veribale

*/
var a:number[]=[4,5,6,7];//number
var a1=[5,8,"Dipak",9]; // String | number
var a2=[5.5,8,7,9,true]; // number | boolean
var a3=[];//any
var a4:number[]=[];//number

// Display using for loop
 for (let i = 0; i < a.length; i++) {    
    console.log(`a[${i}]=${a[i]} `);
 }
// Display using toString method
console.log("Array Value is "+a1); 

// Display using forEach
a2.forEach ((myvalue,i)=>{
    console.log(`a2[${i}] = ${myvalue}`)
 })

 // Display using join method bydefault , is separed the value.you can chenge its using pass the separator join('#')like.
 console.log("Array value is === "+a2.join()); 