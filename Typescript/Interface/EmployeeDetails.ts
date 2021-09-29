import { Employee } from "./Employee";
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
