import {Injectable}  from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class Service {

    constructor(private thehttp: Http)
    { }

    getData() {
        return this.thehttp.get("http://ip.jsontest.com/");
    }
}