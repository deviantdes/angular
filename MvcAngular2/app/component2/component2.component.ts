import { Component,OnInit } from "@angular/core";
import { Repo } from "../repo.service"
@Component({
    moduleId: module.id,
    selector: "app-c2",
    template: "C2 <br> <button (click)='getData();'>Get Drinks</button><p>The Drink is: {{drink}}</p><br/><input type='text' #theinput /><button (click)='addDrinks(theinput.value)'>Add</button>",
})

export class Component2Component implements OnInit
{
    public drink: String;
    private _repo:Repo;

    constructor(therepo:Repo)
    {
        this._repo = therepo;
    }

    ngOnInit() {
        this.drink = this._repo.getDrinks();
    }

    getData() {
        this.drink = this._repo.getDrinks();
    }
    addDrinks(val) {
        this._repo.addDrinks(val);
    }
}
   