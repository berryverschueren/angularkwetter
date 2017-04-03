import { MyKwetteraarModel } from "app/models/my-kwetteraar-model/my-kwetteraar-model";

export class MyKweetModel {
    constructor(public id: number, public inhoud: string, public datum: Date, public eigenaar: MyKwetteraarModel){}
}