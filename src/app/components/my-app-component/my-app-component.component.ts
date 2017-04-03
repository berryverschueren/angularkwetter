import { Component } from '@angular/core';

@Component({
	selector: 'my-app-component',
	templateUrl: './my-app-component.component.html',
	styleUrls: ['./my-app-component.component.css']
})
export class MyAppComponent {

	constructor(){}

    public uitloggen() {
        localStorage.removeItem('loggedInUserId');
    }
}
