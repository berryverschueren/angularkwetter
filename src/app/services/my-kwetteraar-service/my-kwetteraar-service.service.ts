import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { MyKwetteraarModel } from "app/models/my-kwetteraar-model/my-kwetteraar-model";

@Injectable()
export class MyKwetteraarService {

  private globalUrl = 'http://localhost:64550/Kwetter_war_exploded/';

  constructor(private http: Http) {
  }

  public getAll(): Observable<any> {
    const endPoint = 'rest/kwetteraar/get/more';
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  public getById(id: number): Observable<any> {
    const endPoint = 'rest/kwetteraar/get/one/id/' + id;
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  public getByName(name: string): Observable<any> {
    const endPoint = 'rest/kwetteraar/get/one/name/' + name;
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  public getLeidersByKwetteraarId(id: number): Observable<any> {
    const endPoint = 'rest/kwetteraar/get/more/kwetteraarid/leiders/' + id;
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  public getVolgersByKwetteraarId(id: number): Observable<any> {
    const endPoint = 'rest/kwetteraar/get/more/kwetteraarid/volgers/' + id;
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  public create(name: string, foto: string, bio: string, website: string, rol: string, locatie: string, wachtwoord: string):  Observable<any> {
    const endPoint = 'rest/kwetteraar/post/insert/';
    const url = this.globalUrl + endPoint;
    let body = 'name=' + name + '&foto=' + foto + '&bio=' + bio + '&website=' 
    + website + '&rol=' + rol + '&locatie=' + locatie + '&wachtwoord=' + wachtwoord;
    return this.postRequest(url, body);
  }

  public wijzigNaam(id: number, name: string):  Observable<any> {
    const endPoint = 'rest/kwetteraar/post/wijzigprofielnaam/';
    const url = this.globalUrl + endPoint;
    let body = 'id=' + id + '&nieuweNaam=' + name;
    return this.postRequest(url, body);
  }

  public wijzigFoto(id: number, foto: string):  Observable<any> {
    const endPoint = 'rest/kwetteraar/post/wijzigprofielfoto/';
    const url = this.globalUrl + endPoint;
    let body = 'id=' + id + '&nieuweFoto=' + foto;
    return this.postRequest(url, body);
  }

  public wijzigBio(id: number, bio: string):  Observable<any> {
    const endPoint = 'rest/kwetteraar/post/wijzigbio/';
    const url = this.globalUrl + endPoint;
    let body = 'id=' + id + '&nieuweBio=' + bio;
    return this.postRequest(url, body);
  }

  public addVolger(naamVolger: string, naamLeider: string):  Observable<any> {
    const endPoint = 'rest/kwetteraar/post/volg/';
    const url = this.globalUrl + endPoint;
    let body = 'naamVolger=' + naamVolger + '&naamLeider=' + naamLeider;
    return this.postRequest(url, body);
  }

  public stopVolger(naamVolger: string, naamLeider: string):  Observable<any> {
    const endPoint = 'rest/kwetteraar/post/stopvolg/';
    const url = this.globalUrl + endPoint;
    let body = 'naamVolger=' + naamVolger + '&naamLeider=' + naamLeider;
    return this.postRequest(url, body);
  }

  public inloggen(name: string, wachtwoord: string):  Observable<any> {
    const endPoint = 'rest/kwetteraar/post/login/';
    const url = this.globalUrl + endPoint;
    let body = 'name=' + name + '&wachtwoord=' + wachtwoord;
    return this.postRequest(url, body);
  }
  
  private getRequest(url: string): any {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    return this.http.get(url.replace(/['"]+/g, ''), { headers: headers })
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private postRequest(url: string, body: string) {
    let headers = new Headers({
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        return this.http.post(url.replace(/['"]+/g, ''), body, { headers: headers })
          .map((res: Response) => res.json())
          .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }

}
