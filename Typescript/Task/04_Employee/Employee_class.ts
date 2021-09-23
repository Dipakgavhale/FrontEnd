/*
    Task # 4
    Implement has relationship of address class in Employee Details Class property (house no, area, city, pin)
*/
import { address } from "./Address_class";
export class Employee {
    emp_id : number ;
    emp_name : string ;
    emp_address : string;
    constructor(emp_id : number, emp_name : string ,house_no : string, area : string, city : string, pin : number){
        var add = new address(house_no,area,city ,pin)
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_address =  add.displayAdd();
    }
    display(){
        console.log(`
        Employee Id      : ${this.emp_id}
        Employee Name    : ${this.emp_name}
        Employee Address : ${this.emp_address}       
        `)
    }
}