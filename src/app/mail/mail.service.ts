import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class MailService {

  private _mails: BehaviorSubject<any>;
  private apiUrl = environment.mailApi;

  get mails() {
    return this._mails.asObservable();
  }

  constructor(private http: Http) {
    this._mails = new BehaviorSubject<any>([]);
  }

  getMails() {
    const url = this.apiUrl;
    this.http.get(url)
      .map(res => res.json())
      .subscribe(res => this._mails.next(res));
  }

  send() {
  }

  delete() {
  }

  save() {
  }

}
