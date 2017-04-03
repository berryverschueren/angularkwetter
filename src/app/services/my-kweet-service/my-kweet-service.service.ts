import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { MyKweetModel } from "app/models/my-kweet-model/my-kweet-model";

@Injectable()
export class MyKweetService {

  private globalUrl = 'http://localhost:64550/Kwetter_war_exploded/';

  constructor(private http: Http) {
  }

  public getAll(): Observable<MyKweetModel[]> {
    const endPoint = 'rest/kweet/get/more';
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  public getById(id: number): Observable<MyKweetModel> {
    const endPoint = 'rest/kweet/get/one/id/' + id;
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  public getByContent(content: string): Observable<MyKweetModel[]> {
    const endPoint = 'rest/kweet/get/more/content/' + content;
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  public getByHashtagId(id: number): Observable<MyKweetModel[]> {
    const endPoint = 'rest/kweet/get/more/hashtagid/' + id;
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  public getByMentionId(id: number): Observable<MyKweetModel[]> {
    const endPoint = 'rest/kweet/get/more/mentionid/' + id;
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  public getByKwetteraarId(id: number): Observable<MyKweetModel[]> {
    const endPoint = 'rest/kweet/get/more/kwetteraarid/' + id;
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  public getRecentKweetsByKwetteraarId(id: number): Observable<MyKweetModel[]> {
    const endPoint = 'rest/kweet/get/more/kwetteraarid/recent/' + id;
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  public getRecentKweetAndLeaderKweetsByKwetteraarId(id: number): Observable<MyKweetModel[]> {
    const endPoint = 'rest/kweet/get/more/kwetteraarid/timeline/' + id;
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  public getTrends(content: string): Observable<MyKweetModel[]> {
    const endPoint = 'rest/kweet/get/more/hashtagcontent/' + content;
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  public addLike(naam: string, kweetId: number):  Observable<MyKweetModel> {
    const endPoint = 'rest/kweet/post/like/';
    const url = this.globalUrl + endPoint;
    let body = 'naam=' + naam + '&kweetId=' + kweetId;
    return this.postRequest(url, body);
  }

  public create(naam: string, content: string):  Observable<MyKweetModel> {
    const endPoint = 'rest/kweet/post/insert/';
    const url = this.globalUrl + endPoint;
    let body = 'naam=' + naam + '&content=' + content;
    return this.postRequest(url, body);
  }

  public delete(id: number):  Observable<MyKweetModel[]> {
    const endPoint = 'rest/kweet/post/delete/';
    const url = this.globalUrl + endPoint;
    let body = 'id=' + id;
    return this.postRequest(url, body);
  }

  private getRequest(url: string): any {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    return this.http.get(url, { headers: headers })
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private postRequest(url: string, body: string) {
    let headers = new Headers({
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        return this.http.post(url, body, { headers: headers })
          .map((res: Response) => res.json())
          .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }

}
