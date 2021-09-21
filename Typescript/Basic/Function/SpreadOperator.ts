/*  Spread operator(...)
    Rest parameter function(...item:number[]). you pass multipale parameter
    its write in last parameter of function
*/
function display1(...item:any[]) {
    console.log(item);
}
display1(7,'A');
function display2(...item:number[]) {
    console.log(item);
}
display2(7,8,85);
function display3(...item:number[]) {
    console.log(item);
}
display3();