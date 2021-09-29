import {Shape} from "./Shape";
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
