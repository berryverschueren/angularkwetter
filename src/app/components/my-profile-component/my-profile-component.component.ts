import { Component, OnInit } from '@angular/core';
import { MyKwetteraarService } from "app/services/my-kwetteraar-service/my-kwetteraar-service.service";
import { MyKwetteraarModel } from "app/models/my-kwetteraar-model/my-kwetteraar-model";
import { MyLocatieModel } from "app/models/my-locatie-model/my-locatie-model";
import { MyKweetModel } from "app/models/my-kweet-model/my-kweet-model";
import { Router } from "@angular/router";
import { MyKweetService } from "app/services/my-kweet-service/my-kweet-service.service";

@Component({
    selector: 'my-profile-component',
    templateUrl: './my-profile-component.component.html',
    styleUrls: ['./my-profile-component.component.css']
})
export class MyProfileComponent implements OnInit {

    public kwetteraar: any;
    public showLeiders = true;

    constructor(private router: Router, private kweetService: MyKweetService, private kwetteraarService: MyKwetteraarService) {
    }

    public ngOnInit() {
        this.getKwetteraarByName(localStorage.getItem('loggedInUserName'));
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

    public verwijderKweet(id: number) {
        this.kweetService.delete(id).subscribe(k => {
            console.log(k);
            this.kwetteraar.kweets = k;
        });
    }

    public showLeidersOrVolgers(status: boolean) {
        this.showLeiders = status;
    }

    public redirectToProfile(name: string) : void {
        localStorage.setItem('clickedUsername', name); 
        this.router.navigateByUrl('/otherprofile');
    }

}
