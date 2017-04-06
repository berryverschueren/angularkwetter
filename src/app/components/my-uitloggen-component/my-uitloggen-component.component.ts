import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'my-uitloggen-component',
    template: ''
})
export class MyUitloggenComponent implements OnInit {

    constructor(private router: Router) {
    }

    public ngOnInit() {
        localStorage.removeItem('loggedInUserName');
        localStorage.removeItem('loggedInUserRole');
        this.router.navigateByUrl('/inloggen');
    }

}
