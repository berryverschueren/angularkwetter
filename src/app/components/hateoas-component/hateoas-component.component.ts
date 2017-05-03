import { Component, OnInit } from '@angular/core';
import { HateoasService } from "app/services/hateoas-service/hateoas-service.service";

@Component({
    selector: 'hateoas-component',
    templateUrl: './hateoas-component.component.html',
    styleUrls: ['./hateoas-component.component.css']
})
export class HateoasComponent implements OnInit {
    
    public kwetteraars: Array<any>;
    public kwetteraar: any;

    constructor(private hateoasService: HateoasService) { }
    
    public ngOnInit(): void {
        this.getAll();
    }

    public getAll() {
        this.hateoasService.getAll().subscribe(json => {
            console.log(json);
            if (json._kwetteraars && json._kwetteraars.length > 0) {
                this.kwetteraar = null;
                this.kwetteraars = json._kwetteraars;
            }
        });
    }

    public getByUri(uri: string) {
        this.hateoasService.getByUri(uri).subscribe(json => {
            console.log(json);
            if (json) {
                this.kwetteraars = null;
                this.kwetteraar = json;
            }
        });
    }

}
