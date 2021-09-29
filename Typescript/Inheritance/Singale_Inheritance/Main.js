"use strict";
/*
    Single Inheritance: In single inheritance, a class is allowed to inherit from only one class.
        i.e. one sub class is inherited by one base class.
*/
exports.__esModule = true;
var Employee_1 = require("./Employee");
var Emp1 = new Employee_1.Employee('Dev_001', "Development", 2021001, "Dipak Gavhale", 25000);
Emp1.Display();
var Emp2 = new Employee_1.Employee('Test_1000', "Testing", 20211001, "Raj Gavhale", 20000);
Emp2.Display();
var Emp3 = new Employee_1.Employee('Dev_002', "Development", 2021002, "Sumit", 25500);
Emp3.Display();
