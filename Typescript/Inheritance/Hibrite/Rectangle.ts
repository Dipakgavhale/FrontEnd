import { Shape } from "./Shape";
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
  