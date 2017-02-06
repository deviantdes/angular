import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "app-home",
    templateUrl: "home.component.html"

})

export class HomeComponent
{
    @Input() ninjas;

    @Output() passOut = new EventEmitter();
    message: String = "Message From Home!";

    clickbtn(e)
    {
        this.passOut.emit({event : e, message:"DATA FROM HOME"});
    }
}
   