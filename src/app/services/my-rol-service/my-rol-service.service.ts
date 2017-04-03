import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { MyRolModel } from "app/models/my-rol-model/my-rol-model";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MyRolService {

  private globalUrl = 'http://localhost:64550/Kwetter_war_exploded/';

  constructor(private http: Http) {
  }

  public getAll(): Observable<MyRolModel[]> {
    const endPoint = 'rest/rol/get/more';
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  public getById(id: number):  Observable<MyRolModel> {
    const endPoint = 'rest/rol/get/one/id/' + id;
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  public getByName(name: string):  Observable<MyRolModel> {
    const endPoint = 'rest/rol/get/one/name/' + name;
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  public create(name: string):  Observable<MyRolModel> {
    const endPoint = 'rest/rol/post/insert/';
    const url = this.globalUrl + endPoint;
    let body = 'name=' + name;
    return this.postRequest(url, body);
  }

  public update(rol: MyRolModel):  Observable<MyRolModel> {
    const endPoint = 'rest/rol/post/update/';
    const url = this.globalUrl + endPoint;
    let body = 'id=' + rol.id + '&name=' + rol.titel;
    return this.postRequest(url, body);
  }

  public delete(id: number):  Observable<MyRolModel[]> {
    const endPoint = 'rest/rol/post/insert/';
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