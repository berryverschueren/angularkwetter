import { Component, HostListener } from '@angular/core';
import { MyKwetteraarService } from "app/services/my-kwetteraar-service/my-kwetteraar-service.service";

@Component({
	selector: 'my-app-component',
	templateUrl: './my-app-component.component.html',
	styleUrls: ['./my-app-component.component.css']
})
export class MyAppComponent {

	constructor(private kwetteraarService: MyKwetteraarService) {
	}

	public uitloggen(name: string) {
		localStorage.removeItem('loggedInUserName');
		localStorage.removeItem('loggedInUserRole');
		this.kwetteraarService.uitloggen(name).subscribe(k => {
		});
	}

	@HostListener('window:beforeunload', ['$event'])
	public beforeUnloadHandler(event) {
		this.uitloggen(localStorage.getItem('loggedInUserName'));
	}
}
