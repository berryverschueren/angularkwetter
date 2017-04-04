import { Component, OnInit } from '@angular/core';
import { MyKwetteraarService } from "app/services/my-kwetteraar-service/my-kwetteraar-service.service";
import { MyKwetteraarModel } from "app/models/my-kwetteraar-model/my-kwetteraar-model";
import { MyLocatieModel } from "app/models/my-locatie-model/my-locatie-model";
import { MyKweetModel } from "app/models/my-kweet-model/my-kweet-model";
import { Router } from "@angular/router";
import { MyKweetService } from "app/services/my-kweet-service/my-kweet-service.service";
import { MyHashtagService } from "app/services/my-hashtag-service/my-hashtag-service.service";

@Component({
    selector: 'my-start-component',
    templateUrl: './my-start-component.component.html',
    styleUrls: ['./my-start-component.component.css']
})
export class MyStartComponent implements OnInit {

    public kwetteraar: any;
    public searchString: string;
    public showTimeline: number;
    public hashtags: any;
    public lastKweet: any;
    public hashtagKweets: any;
    public timelineKweets: any;
    public foundKweets: any;
    public mentionKweets: any;

    constructor(private router: Router, private hashtagService: MyHashtagService, private kweetService: MyKweetService, private kwetteraarService: MyKwetteraarService) {
    }

    public ngOnInit() {
        this.showTimeline = 1;
        this.getKwetteraarByName(localStorage.getItem('loggedInUserName'));
        this.getHashtags();
    }

    public getHashtags(): void {
        this.hashtagService.getAll().subscribe(returnedHashtags => {
            this.hashtags = returnedHashtags;
        });
    }

    public getTimelineKweets(): void {
        this.kweetService.getRecentKweetAndLeaderKweetsByKwetteraarId(this.kwetteraar.id).subscribe(returnedKweets => {
            console.log(returnedKweets);
            this.timelineKweets = returnedKweets;
        });
    }

    public getKwetteraarByName(name: string): void {
        this.kwetteraarService.getByName(name).subscribe(k => {
            console.log(k);
            this.kwetteraar = k;
            if (this.kwetteraar.kweets && this.kwetteraar.kweets[this.kwetteraar.kweets.length - 1])
                this.lastKweet = this.kwetteraar.kweets[this.kwetteraar.kweets.length - 1];
            this.getTimelineKweets();
        });
    }

    public getKwetteraarById(id: number): void {
        this.kwetteraarService.getById(id).subscribe(k => {
            console.log(k);
            this.kwetteraar = k;
        });
    }

    public toggleTimeline(value: number): void {
        this.showTimeline = value;
        if (value == 3) {
            //this.hashtagService.getAllByName()
        }
    }

    public sendKweet(): void {

    }

    public searchKweet(): void {

    }

}
