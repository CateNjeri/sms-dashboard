import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
// import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';

@Injectable()
export class BaseService {
    // protected baseUrl = 'http://178.62.96.186:8085/';
    protected baseUrl = environment.baseApiUrl;

    private headers: Headers = new Headers({
        'Content-Type': 'application/json'
    });
    private uploadHeaders: Headers = new Headers({
        'Content-Type': 'multipart/form-data'
    });

    constructor(protected http: Http) {
    }

    protected post(url: String, data: any): Observable<any> {
        // TODO
        return this.http.post(this.baseUrl + url, JSON.stringify(data), {headers: this.headers})
            .map((response: Response) => response.json());
    }

    protected upload(url: String, data: FormData): Observable<any> {
        return this.http.post(this.baseUrl + url, data)
            .map((response: Response) => response.json());
    }

    protected put(url: String, data: any): Observable<any> {
        // TODO
        return this.http.put(this.baseUrl + url, JSON.stringify(data), {headers: this.headers})
            .map((response: Response) => response.json());
    }
    protected patch(url: String, data: any): Observable<any> {
        // TODO
        return this.http.patch(this.baseUrl + url, JSON.stringify(data), {headers: this.headers})
            .map((response: Response) => response.json());
    }

    protected delete(url: String): Observable<any> {
        // TODO
        return this.http.delete(this.baseUrl + url)
            .map((response: Response) => response.json());
    }

    protected get(url: String): Observable<any> {
        // TODO
        return this.http.get(this.baseUrl + url)
            .map((response: Response) => response.json());
    }

}
