import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MyKwetteraarService } from "app/services/my-kwetteraar-service/my-kwetteraar-service.service";

@Component({
    selector: 'my-uitloggen-component',
    template: ''
})
export class MyUitloggenComponent implements OnInit {

    constructor(private router: Router, private kwetteraarService: MyKwetteraarService) {
    }

    public ngOnInit() {
        this.uitloggen(localStorage.getItem('loggedInUserName'));
    }

    public uitloggen(name: string) {
        this.kwetteraarService.uitloggen(name).subscribe(k => {
            localStorage.removeItem('loggedInUserName');
            localStorage.removeItem('loggedInUserRole');
            this.router.navigateByUrl('/inloggen');
        });
    }

}
