import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem('loggedInUserName')) {

            if (localStorage.getItem('loggedInUserRole') == 'admin') {

                return true;

            }
            // logged in so return true
            return false;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/inloggen']);
        return false;
    }
}