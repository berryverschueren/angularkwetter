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
    public newKweetString: string;
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
            this.getMentions();
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
    }

    public sendKweet(): void {
        this.kweetService.create(this.kwetteraar.profielNaam, this.newKweetString).subscribe(returnedJson => {
            console.log(returnedJson);
            this.newKweetString = null;
            this.ngOnInit();
        });
    }

    public searchKweet(): void {
        this.kweetService.getByContent(this.searchString).subscribe(returnedJson => {
            console.log(returnedJson);
            this.foundKweets = returnedJson;
            this.searchString = null;
            this.toggleTimeline(4);
        });
    }

    public getTrends(trend: string): void {
        this.kweetService.getByContent(trend).subscribe(returnedJson => {
            console.log(returnedJson);
            this.hashtagKweets = returnedJson;
            this.toggleTimeline(3);
        });
    }

    public getMentions(): void {
        this.kweetService.getByContent('@' + this.kwetteraar.profielNaam).subscribe(returnedJson => {
            console.log(returnedJson);
            this.mentionKweets = returnedJson;
        });
    }

    public likedKweet(kweetId: number): boolean {
        for (let i = 0; i < this.kwetteraar.hartjes.length; i++) {
            if (this.kwetteraar.hartjes[i].id == kweetId) {
                return true;
            }
        }
        return false;
    }

    public like(kweetId: number): void {
        this.kweetService.addLike(this.kwetteraar.profielNaam, kweetId).subscribe(returnedJson => {
            console.log(returnedJson);
            this.ngOnInit();
        });
    }

    public dislike(kweetId: number): void {
        this.kweetService.removeLike(this.kwetteraar.profielNaam, kweetId).subscribe(returnedJson => {
            console.log(returnedJson);
            this.ngOnInit();
        });
    }
}
