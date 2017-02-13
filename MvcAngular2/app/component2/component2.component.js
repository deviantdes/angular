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
var Component2Component = (function () {
    function Component2Component(therepo) {
        this._repo = therepo;
    }
    Component2Component.prototype.ngOnInit = function () {
        this.drink = this._repo.getDrinks();
    };
    Component2Component.prototype.getData = function () {
        this.drink = this._repo.getDrinks();
    };
    Component2Component.prototype.addDrinks = function (val) {
        this._repo.addDrinks(val);
    };
    Component2Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-c2",
            template: "C2 <br> <button (click)='getData();'>Get Drinks</button><p>The Drink is: {{drink}}</p><br/><input type='text' #theinput /><button (click)='addDrinks(theinput.value)'>Add</button>",
        }), 
        __metadata('design:paramtypes', [repo_service_1.Repo])
    ], Component2Component);
    return Component2Component;
}());
exports.Component2Component = Component2Component;
//# sourceMappingURL=component2.component.js.map