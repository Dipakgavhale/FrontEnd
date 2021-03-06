"use strict";
exports.__esModule = true;
exports.Employee = void 0;
/*
    Task # 4
    Implement has relationship of address class in Employee Details Class property (house no, area, city, pin)
*/
var Address_class_1 = require("./Address_class");
var Employee = /** @class */ (function () {
    function Employee(emp_id, emp_name, house_no, area, city, pin) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_address = new Address_class_1.address(house_no, area, city, pin);
    }
    Employee.prototype.Display = function () {
        console.log("\n        Employee Id      : " + this.emp_id + "\n        Employee Name    : " + this.emp_name + "\n        Employee Address : " + this.emp_address.getHouse_no() + " " + this.emp_address.getArea() + " " + this.emp_address.getCity() + " " + this.emp_address.getPin() + " \n        ");
    };
    return Employee;
}());
exports.Employee = Employee;
