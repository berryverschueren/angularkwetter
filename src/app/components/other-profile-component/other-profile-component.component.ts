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
    public alreadyFollowing = false;
    public loggedInUser: any;    

    constructor(private router: Router, private kwetteraarService: MyKwetteraarService) {
    }

    public ngOnInit() {
        let username = localStorage.getItem('clickedUsername');
        let loggedInUserName = localStorage.getItem('loggedInUserName');
        this.getKwetteraarByName(username);
        this.getLoggedInUser(loggedInUserName);
    }

    public getKwetteraarByName(name: string): void {
        this.kwetteraarService.getByName(name).subscribe(k => {
            console.log(k);
            this.kwetteraar = k;
            if (this.kwetteraar && this.kwetteraar.volgers) {
                let loggedInUserName = localStorage.getItem('loggedInUserName');
                for (let i = 0; i < this.kwetteraar.volgers.length; i++) {
                    console.log(this.kwetteraar.volgers[i].profielNaam);
                    console.log(loggedInUserName);
                    if (this.kwetteraar.volgers[i].profielNaam == loggedInUserName)
                        this.alreadyFollowing = true;
                }
            }
        });
    }

    public getKwetteraarById(id: number): void {
        this.kwetteraarService.getById(id).subscribe(k => {
            console.log(k);
            this.kwetteraar = k;
        });
    }

    public getLoggedInUser(name: string): void {
        this.kwetteraarService.getByName(name).subscribe(k => {
            console.log(k);
            this.loggedInUser = k;
        });
    }

    public showLeidersOrVolgers(status: boolean) {
        this.showLeiders = status;
    }

    public startVolgen(naamVolger: string, naamLeider: string): void {
        this.kwetteraarService.addVolger(naamVolger, naamLeider).subscribe();
    }

    public stopVolgen(naamVolger: string, naamLeider: string): void {
        this.kwetteraarService.stopVolger(naamVolger, naamLeider).subscribe();
    }

    public redirectToProfile(name: string): void {
        localStorage.setItem('clickedUsername', name);
        if (name == localStorage.getItem('loggedInUserName'))
            this.router.navigateByUrl('/profile');
        window.location.reload();
    }

    public followUser() {
        this.startVolgen(this.loggedInUser.profielNaam, this.kwetteraar.profielNaam);
        let username = localStorage.getItem('clickedUsername');
        this.getKwetteraarByName(username);
    }

    public unfollowUser() {
        this.stopVolgen(this.loggedInUser.profielNaam, this.kwetteraar.profielNaam);
        let username = localStorage.getItem('clickedUsername');
        this.getKwetteraarByName(username);
    }

}
