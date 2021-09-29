console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
var a = function () { return 12; };
/*
//method Override
    1   same signture (access specifer,type,name,parameter)
    2   requierd inheritance
    3   override
// Inheritance
    1   single
    2   multilevel
    3   hibrite


    
   //Hibrite
   export class Shape{
        MyArea(){
           console.log("You are in shape class.")
       }
   }
  // import {Shape} from "./Shape";
   export class Circle extends Shape{
       radius:number;
       area:number;
       constructor(radius:number){
           super();
           this.radius = radius;
           this.area = 0;
       }
        MyArea(){
            console.log("You are in Circle class.")
            this.area = 3.14*this.radius*this.radius;
        }
        Display(){
            console.log(`
            -------Circle Area-------------
                Radius : ${this.radius}
                Area   : ${this.area}
            `)
        }
   }
   export class Rectangle extends Shape{
    length:number;
    breadth:number;
    area:number;
    constructor(length:number, breadth:number){
        super();
        this.length = length;
        this.breadth = breadth;
        this.area = 0;
    }
     override MyArea(){
         console.log("You are in Rectangle class.")
         this.area = this.length*this.breadth;
     }
     Display(){
         console.log(`
         -------Circle Area-------------
             Length  : ${this.length}
             Breadth : ${this.breadth}
             Area    : ${this.area}
         `)
     }
}

//import{Circle} from "./circle";
//import{Rectangle } from "./rectangle";
var circleObj = new Circle(2);
circleObj.MyArea;
circleObj.Display;
var rectangleObj = new Rectangle(5,6);
rectangleObj.MyArea;
rectangleObj.Display;

//interface  employee
export interface Employee{
    fname    : string;
    lname    : string;
    fullname?: string;
    Display();
}
//import { Employee } from "./Employee";
export class EmployeeDetails implements Employee{
    fname :string;
    lname:string;
    salary : number;
    constructor(fname :string, lname:string, salary : number){
        this.fname = fname;
        this.lname = lname;
        this.salary = salary;
    }
    Display(){
       console.log(`
       First Name : ${this.fname}
       Last Name  : ${this.lname}
       salary     : ${this.salary}
       `)
    }
}
//import{EmployeeDetails} from "./EmployeeDetails";
var obj = new EmployeeDetails('Dipak','Gavhale',123564);
obj.Display();
*/
// 
