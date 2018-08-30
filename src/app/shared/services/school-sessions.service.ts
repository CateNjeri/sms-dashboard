import {Injectable} from '@angular/core';
import {BaseService} from '../../core/base.service';
import {Http} from '@angular/http';
import {SchoolSession} from '../models/school-session';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../core/auth.service';

@Injectable()
export class SchoolSessionsService extends BaseService {

    constructor(protected http: Http, private authService: AuthService) {
        super(http);
    }

    create(schoolSession: SchoolSession): Observable<SchoolSession> {
        schoolSession.school = this.authService.getSchool();
        return this.post('school-sessions', schoolSession);
    }

    update(schoolSession: SchoolSession): Observable<SchoolSession> {
        schoolSession.school = this.authService.getSchool();
        return this.put('school-sessions/' + schoolSession.id, schoolSession);
    }

    all(): Observable<SchoolSession[]> {
        return this.get('schools/' + this.authService.getSchool().id + '/school-sessions');
    }
}
