import { MyLocatieModel } from "app/models/my-locatie-model/my-locatie-model";

export class MyKwetteraarModel {
    constructor(public id: number, public profielNaam: string, public profielFoto: string, public bio: string
        , public website: string, public locatie: MyLocatieModel) { }
}