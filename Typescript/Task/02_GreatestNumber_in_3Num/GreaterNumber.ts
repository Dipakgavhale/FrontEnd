/*
    Task # 2
    Find out Greatest number of 3 number use if else statements. Make a class and method Implementlogic in method (take hard coded data time being)
*/
class Greater{
    greater_num( num1,num2,num3){
        if(num1 >= num2 && num1 >= num3) {
            console.log("Greater number is : "+num1);
        }   
        else if(num2 >= num3 && num2 >= num1 ){
            console.log("Greater number is : "+num2)
        }
        else{
            console.log("Greater number is : "+num3)
        }
    }
}
var obj = new Greater();
obj.greater_num( 10,20,30);
obj.greater_num( 20,30,10);
obj.greater_num( 30,10,20);
