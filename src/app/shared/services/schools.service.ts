import {Injectable} from '@angular/core';
import {BaseService} from '../../core/base.service';
import {School} from '../models/school';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../core/auth.service';
import {Http} from '@angular/http';

@Injectable()
export class SchoolsService extends BaseService {

    constructor(private authService: AuthService, protected http: Http) {
        super(http);
    }

    public register(school: School): Observable<School> {
        return this.post('schools', school);
    }

    public update(school: School): Observable<School> {
        return this.put('schools/' + school.id, school);
    }

    public uploadLogo(file: File): Observable<any> {
        const data = new FormData();
        data.append('logo', file);
        return this.upload('schools/' + this.authService.getSchool().id + '/logo', data);
    }
}
