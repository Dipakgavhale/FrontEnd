/*
    Optional parameter Function  
    it is consept it apply on function.
    you have create parameteries function and call it using pass by parameter,
     but in case you create the Optional parameter Function and some parameter is optional using(?) 
     then its not madretary to pass value. if you not pass value of that parameter its select undefined bydefoult.
    you not create 1st parameter optional and 2ed normal parameter. 
     if you creter 1st parameter optional then all other parameter is created optionl. 
    Optional and Default can not used attetime on same variable.  
*/
console.log("\nOptional parameter Function")
console.log("\n1st normal & 2ed Optional Parameter");
function add1(a:number,b?:number){
    console.log("Value of a is : "+a); //5
    console.log("Value of b is optional : "+b); // 4
    console.log("Addition of a+b is "+(a+b)); //5+4=9
}
add1(5,4);

function add2(a:number,b?:number){
    console.log("\nValue of a is : "+a); //5
    console.log("Value of b is optional : "+b); // undefined
    console.log("Addition of a+b is "+(a+b)); //NAN :- not a number
}
add2(5);

console.log("\n1st & 2ed Optional Parameter");
function add3(a?:number,b?:number){
    console.log("\nValue of a is optional : "+a); //undefined
    console.log("Value of b is optional : "+b); // undefined
    console.log("Addition of a+b is "+(a+b)); //NAN :- not a number
}
add3();

console.log("\n1st normal, 2ed normal & 3rd Optional Parameter");
function add4(a:number,b:number,c?:number){
    console.log("Value of a is : "+a); //3
    console.log("Value of b is : "+b); //null
    console.log("Value of c is optional : "+c); // undefined
    console.log("Addition of a+b is "+(a+b+c)); //NAN :- not a number
}
add4(3,null);

