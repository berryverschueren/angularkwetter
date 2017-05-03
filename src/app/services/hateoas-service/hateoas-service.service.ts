import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HateoasService {

  //private globalUrl = 'http://localhost:8080/Kwetter_war/';
  private globalUrl = 'http://localhost:64550/Kwetter_war_exploded/';

  constructor(private http: Http) {
  }

  public getByUri(uri: string): Observable<any> {
    return this.getRequest(uri);
  }

  public getAll(): Observable<any> {
    const endPoint = 'rest/hateoas/kwetteraars';
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  private getRequest(url: string): any {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    return this.http.get(url.replace(/['"]+/g, ''), { headers: headers })
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private getRequestNoJson(url: string): any {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    return this.http.get(url.replace(/['"]+/g, ''), { headers: headers })
      .map((res: Response) => res)
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
