/*
    Variable 
    Start with letter after you can use numbers.
    you van used _ $ in veriable name.but not start with _.
    space is not allow in veriable name.
    not allow any default keyword as a veriable name.
*/
var Num;
var mun;
var num_1;
var $num;
var s1,s2,s3;
// var 1_num;
// var -num;

//scope of veriable
for(var i=0;i<=5;i++){  // scope of var veriable is global.
    console.log("i = "+i);
}
console.log("scope of var veriable is global so i = "+i);
for(let j=0;j<=5;j++){      // scope of let veriable is within nearest block.
    console.log("j = "+j);
}
console.log("scope of let veriable is global so j not print");

//constant veriable
const PI=3.14;
console.log("const PI = "+PI+" scope of constant veriable is globle and can not modified after inisilazed.")
//PI=1.5;