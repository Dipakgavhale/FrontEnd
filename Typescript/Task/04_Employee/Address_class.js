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
    address.prototype.getHouse_no = function () {
        return (this.house_no);
    };
    address.prototype.setHouse_no = function (house_no) {
        this.house_no = house_no;
    };
    address.prototype.getArea = function () {
        return (this.area);
    };
    address.prototype.setArea = function (area) {
        this.area = area;
    };
    address.prototype.getCity = function () {
        return (this.city);
    };
    address.prototype.setCity = function (city) {
        this.city = city;
    };
    address.prototype.getPin = function () {
        return (this.pin);
    };
    address.prototype.setPin = function (pin) {
        this.pin = pin;
    };
    return address;
}());
exports.address = address;
