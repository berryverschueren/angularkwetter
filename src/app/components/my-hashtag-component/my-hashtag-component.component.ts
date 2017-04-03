import { Component, OnInit } from '@angular/core';
import { MyHashtagModel } from "app/models/my-hashtag-model/my-hashtag-model";
import { MyHashtagService } from "app/services/my-hashtag-service/my-hashtag-service.service";

@Component({
	selector: 'my-hashtag-component',
	templateUrl: './my-hashtag-component.component.html',
	styleUrls: ['./my-hashtag-component.component.css']
})
export class MyHashtagComponent implements OnInit {

	public hashtags = new Array<MyHashtagModel>();

	constructor(private hashtagService: MyHashtagService) {
	}

	public ngOnInit() {
		this.getAll();
	}

	public getAll() {
		this.hashtagService.getAll().subscribe(hashtags => {
			hashtags.forEach(h => {
				this.hashtags.push(new MyHashtagModel(h.id, h.inhoud));
			});
		});
	}

}
