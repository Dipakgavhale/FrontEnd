/*
    Task # 10
    Create 2 array is number type array. Using switch case +,-,/,* check if + operator is there then perform addition of each element
     & store in new array & display the result.
*/
var arr1:number[]=[1,2];
var arr2:number[]=[2,3];
var arr3:number[]=[];

console.log("\nOriginal array1 : "+arr1);
console.log("\nOriginal array2 : "+arr2);
var length = ((arr1.length > arr2.length)? arr1.length : arr2.length);
var operator:string = '+';
switch (operator) {
    case '+':
        for(let i=0; i<length; i++){
            arr3[i] =arr1[i] + arr2[i];
        }
        console.log("Addition of two array Value is "+arr3); 
        break;
    case '-':
        for(let i=0; i<length; i++){
            arr3[i] = arr1[i] - arr2[i];
        }
        console.log("Substraction of two array Value is "+arr3); 
        break;
    case '/':
        for(let i=0; i<length; i++){
            arr3[i] = arr1[i] / arr2[i];
        }
        console.log("Divission of two array Value is "+arr3); 
        break;
    case '*':
        for(let i=0; i<length; i++){
            arr3[i] = arr1[i] * arr2[i];
        }
        console.log("Multipication of two array Value is "+arr3); 
        break;
    default:
        console.log("You provied Invalid Operator.")
        break;
}