"use strict";
var Repo = (function () {
    function Repo() {
        this.Drinks = ["Tea", "Milk", "Coffee"];
    }
    Repo.prototype.getDrinks = function () {
        return this.Drinks[Math.floor(Math.random() * this.Drinks.length)];
    };
    Repo.prototype.addDrinks = function (val) {
        this.Drinks.push(val);
    };
    return Repo;
}());
exports.Repo = Repo;
//# sourceMappingURL=repo.service.js.map