"use strict";
exports.__esModule = true;
exports.address = void 0;
/*
    Task # 4
    Implement has relationship of address class in Employee Details Class property (house no, area, city, pin)
*/
var address = /** @class */ (function () {
    function address(house_no, area, city, pin) {
        this.house_no = house_no;
        this.area = area;
        this.city = city;
        this.pin = pin;
    }
    address.prototype.displayAdd = function () {
        return (this.house_no + " " + this.area + " " + this.city + " " + this.pin + " ");
    };
    return address;
}());
exports.address = address;
