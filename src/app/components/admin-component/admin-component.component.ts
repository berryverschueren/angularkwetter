import { Component, OnInit } from '@angular/core';
import { MyKwetteraarService } from "app/services/my-kwetteraar-service/my-kwetteraar-service.service";
import { MyKwetteraarModel } from "app/models/my-kwetteraar-model/my-kwetteraar-model";
import { Router } from "@angular/router";

@Component({
    selector: 'admin-component',
    templateUrl: './admin-component.component.html',
    styleUrls: ['./admin-component.component.css']
})
export class AdminComponent implements OnInit {

    public kwetteraars: any;

    constructor(private router: Router, private kwetteraarService: MyKwetteraarService) {
    }

    public ngOnInit() {
        this.getAll();
    }

    public redirectToProfile(name: string): void {
        localStorage.setItem('clickedUsername', name);
        if (name == localStorage.getItem('loggedInUserName')) {
            this.router.navigateByUrl('/profile');
        } else {
            this.router.navigateByUrl('/otherprofile');
        }
    }

    public getAll() {
        this.kwetteraarService.getAll().subscribe(kwetteraars => {
            console.log(kwetteraars);
            this.kwetteraars = kwetteraars;
        });
    }

    public switchRole(name: string): void {
        this.kwetteraarService.switchRole(name).subscribe(kwetteraar => {
            console.log(kwetteraar);
            if (kwetteraar.profielNaam == localStorage.getItem('loggedInUserName')) {
                localStorage.setItem('loggedInUserRole', kwetteraar.rol);
                if (kwetteraar.rol != 'admin') 
                    this.router.navigateByUrl('/profile');
            }
        });
    }
}
