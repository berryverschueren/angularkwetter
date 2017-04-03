import { Component, OnInit } from '@angular/core';
import { MyKwetteraarService } from "app/services/my-kwetteraar-service/my-kwetteraar-service.service";
import { MyKwetteraarModel } from "app/models/my-kwetteraar-model/my-kwetteraar-model";
import { MyLocatieModel } from "app/models/my-locatie-model/my-locatie-model";
import { MyKweetModel } from "app/models/my-kweet-model/my-kweet-model";
import { Router } from "@angular/router";

@Component({
    selector: 'other-profile-component',
    templateUrl: './other-profile-component.component.html',
    styleUrls: ['./other-profile-component.component.css']
})
export class OtherProfileComponent implements OnInit {

    public kwetteraar: any;
    public showLeiders = true;

    constructor(private router: Router, private kwetteraarService: MyKwetteraarService) {
    }

    public ngOnInit() {
        let username = localStorage.getItem('clickedUsername');
        this.getKwetteraarByName(username);
    }

    public getKwetteraarByName(name: string) : void {
        this.kwetteraarService.getByName(name).subscribe(k => {
            console.log(k);
            this.kwetteraar = k;
        });
    }

    public getKwetteraarById(id: number) : void {
        this.kwetteraarService.getById(id).subscribe(k => {
            console.log(k);
            this.kwetteraar = k;
        });
    }

    public showLeidersOrVolgers(status: boolean) {
        this.showLeiders = status;
    }

    public redirectToProfile(name: string) : void {
        localStorage.setItem('clickedUsername', name); 
        window.location.reload();
    }

}
