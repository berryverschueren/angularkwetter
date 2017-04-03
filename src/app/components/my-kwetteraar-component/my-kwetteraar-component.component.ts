import { Component, OnInit } from '@angular/core';
import { MyKwetteraarService } from "app/services/my-kwetteraar-service/my-kwetteraar-service.service";
import { MyKwetteraarModel } from "app/models/my-kwetteraar-model/my-kwetteraar-model";

@Component({
	selector: 'my-kwetteraar-component',
	templateUrl: './my-kwetteraar-component.component.html',
	styleUrls: ['./my-kwetteraar-component.component.css']
})
export class MyKwetteraarComponent implements OnInit {

	public kwetteraars = new Array<MyKwetteraarModel>();

	constructor(private kwetteraarService: MyKwetteraarService) {
	}

	public ngOnInit() {
		this.getAll();
	}

	public getAll() {
		this.kwetteraarService.getAll().subscribe(kwetteraars => {
			kwetteraars.forEach(k => {
				this.kwetteraars.push(new MyKwetteraarModel(k.id,
					k.profielNaam, k.profielFoto, k.bio, k.website, k.locatie));
			});
		});
	}

}
