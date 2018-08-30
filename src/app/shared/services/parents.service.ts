import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../core/auth.service";
import {Http} from "@angular/http";
import {BaseService} from "../../core/base.service";
import {Parent} from "../models/parent";

@Injectable()
export class ParentsService extends BaseService {


    constructor(protected http: Http, private authService: AuthService) {
        super(http);
    }

    all(): Observable<Parent[]> {
        // 1 school, 2 Parent, 3 Admin
        // TODO Limit parent too
        if (this.authService.getCurrentUserType() === 1) {
            return this.get('schools/' + this.authService.getSchoolId() + '/parents');
        } else {
            return this.get('parents');
        }
    }
}
