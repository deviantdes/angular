"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var repo_service_1 = require("../repo.service");
var Component1Component = (function () {
    function Component1Component(therepo) {
        this._repo = therepo;
    }
    Component1Component.prototype.ngOnInit = function () {
        this.drink = this._repo.getDrinks();
    };
    Component1Component.prototype.getData = function () {
        this.drink = this._repo.getDrinks();
    };
    Component1Component.prototype.addDrinks = function (val) {
        this._repo.addDrinks(val);
    };
    Component1Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-c1",
            template: "C1 <br> <button (click)='getData();'>Get Drinks</button><p>The Drink is: {{drink}}</p><br/><input type='text' #theinput /><button (click)='addDrinks(theinput.value)'>Add</button>",
        }), 
        __metadata('design:paramtypes', [repo_service_1.Repo])
    ], Component1Component);
    return Component1Component;
}());
exports.Component1Component = Component1Component;
//# sourceMappingURL=component1.component.js.map