import {Injectable} from '@angular/core';
import {BaseService} from '../../core/base.service';
import {Http} from '@angular/http';
import {AuthService} from '../../core/auth.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from '../models/subject';

@Injectable()
export class SubjectsService extends BaseService {

    constructor(protected http: Http, private authService: AuthService) {
        super(http);
    }

    create(subject: Subject): Observable<Subject> {
        // TODO: set school
        subject.school = this.authService.getSchool();
        return this.post('subjects', subject);
    }

    update(subject: Subject): Observable<Subject> {
        return this.put('subjects/' + subject.id, subject);
    }

    all(): Observable<Subject[]> {
        if (this.authService.getCurrentUserType() === 3) {
            return this.get('subjects');
        } else {
            return this.get('schools/' + this.authService.getSchoolId() + '/subjects');
        }
    }
}
