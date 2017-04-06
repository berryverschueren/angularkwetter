import { Component, OnInit } from '@angular/core';
import { MyKwetteraarService } from "app/services/my-kwetteraar-service/my-kwetteraar-service.service";
import { MyKwetteraarModel } from "app/models/my-kwetteraar-model/my-kwetteraar-model";
import { Router } from "@angular/router";

@Component({
	selector: 'my-inloggen-component',
	templateUrl: './my-inloggen-component.component.html',
	styleUrls: ['./my-inloggen-component.component.css']
})
export class MyInloggenComponent implements OnInit {

    public kwetteraar: MyKwetteraarModel;
	public name: string;
	public password: string;
	
	constructor(private router: Router, private kwetteraarService: MyKwetteraarService) { }

	ngOnInit() {
	}	

	public formProcess() {
		this.inloggen(this.name, this.password);
	}

	public inloggen(name: string, pass: string) {
		this.kwetteraarService.inloggen(name, pass).subscribe(k => {
			if (k != null) {
				this.kwetteraar = new MyKwetteraarModel(k.id, k.profielNaam, k.profielFoto, k.bio, k.website, k.locatie);
                localStorage.setItem('loggedInUserName', this.kwetteraar.profielNaam);
				this.kwetteraarService.getHighestRolByName(localStorage.getItem('loggedInUserName')).subscribe(rolNaam => {
					localStorage.setItem('loggedInUserRole', rolNaam._body);
					this.router.navigateByUrl('/profile');
				});
            }
        });
	}

}
