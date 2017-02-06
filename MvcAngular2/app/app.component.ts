import { Component , Input} from "@angular/core";
import { HomeComponent } from "./home/index";

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "app.component.html",
    directives: [HomeComponent]
})

export class AppComponent
{
    Ninja = { name: "desmond", belt: "black" };

    functionClick(val: any)
    {
        alert(val);
    }

    passOutFunction(e)
    {
        alert(e.message);
        console.log(e.event);
    }
}
   