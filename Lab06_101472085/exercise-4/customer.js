"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName, ", ").concat(this.age, " years old"));
    };
    Customer.prototype.GetAge = function () {
        console.log("".concat(this.age, " years old."));
    };
    return Customer;
}());
exports.Customer = Customer;
