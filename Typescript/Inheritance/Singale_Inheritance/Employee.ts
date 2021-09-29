import { Department } from "./Department";
export class Employee extends Department {
    emp_Id : number;
    emp_name : string;
    emp_salary : number;

    constructor(dept_Id : string, dept_Name : string, emp_Id : number, emp_name : string, emp_salary : number){
        super(dept_Id,dept_Name);
        this.emp_Id = emp_Id;
        this.emp_name = emp_name;
        this.emp_salary = emp_salary;
    }
    Display(){
       console.log (`
         Department Id   : ${this.dept_Id}
         Department Name : ${this.dept_Name}
         Employee Id     : ${this.emp_Id}
         Employee Name   : ${this.emp_name}
         Employee Salary : ${this.emp_salary}
        `)
    }
}