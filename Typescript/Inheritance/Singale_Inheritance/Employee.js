"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Employee = void 0;
var Department_1 = require("./Department");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(dept_Id, dept_Name, emp_Id, emp_name, emp_salary) {
        var _this = _super.call(this, dept_Id, dept_Name) || this;
        _this.emp_Id = emp_Id;
        _this.emp_name = emp_name;
        _this.emp_salary = emp_salary;
        return _this;
    }
    Employee.prototype.Display = function () {
        console.log("\n         Department Id   : " + this.dept_Id + "\n         Department Name : " + this.dept_Name + "\n         Employee Id     : " + this.emp_Id + "\n         Employee Name   : " + this.emp_name + "\n         Employee Salary : " + this.emp_salary + "\n        ");
    };
    return Employee;
}(Department_1.Department));
exports.Employee = Employee;
