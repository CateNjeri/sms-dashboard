import {Injectable} from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {BaseService} from '../../core/base.service';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Teacher} from '../models/teacher';

@Injectable()
export class TeachersService extends BaseService {

    constructor(protected http: Http, private authService: AuthService) {
        super(http);
    }

    all(): Observable<Teacher[]> {
        // 1 school, 2 Parent, 3 Admin
        if (this.authService.getCurrentUserType() === 1) {
            return this.get('schools/' + this.authService.getSchoolId() + '/teachers');
        } else {
            return this.get('teachers');
        }
    }

    create(teacher: Teacher): Observable<Teacher> {
        teacher.school = this.authService.getSchool();
        return this.post('teachers', teacher);
    }

    update(teacher: Teacher): Observable<Teacher> {
        teacher.school = this.authService.getSchool();
        return this.put('teachers/' + teacher.id, teacher);
    }

    getOne(id: Number): Observable<Teacher> {
        return this.get('teachers/' + id);
    }
}
