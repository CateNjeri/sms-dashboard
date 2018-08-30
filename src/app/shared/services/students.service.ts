import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BaseService} from '../../core/base.service';
import {AuthService} from '../../core/auth.service';
import {Http} from '@angular/http';
import {Student} from '../models/student';

@Injectable()
export class StudentsService extends BaseService {

    constructor(protected http: Http, private authService: AuthService) {
        super(http);
    }

    all(): Observable<Student[]> {
        // 1 school, 2 Parent, 3 Admin
        if (this.authService.getCurrentUserType() === 1) {
            // Filter, if teachers or admin or
            return this.get('schools/' + this.authService.getSchoolId() + '/students');
        } else if (this.authService.getCurrentUserType() === 2) {
            return this.get('user-account-profiles/' + this.authService.getCurrentUserProfile().id + '/students');
        } else {
            return this.get('students');
        }
    }

    createStudent(student: Student): Observable<Student> {
        student.school = this.authService.getSchool();
        return this.post('students', student);
    }

    updateStudent(student: Student): Observable<Student> {
        return this.put('students/' + student.id, student);
    }

    getStudent(id: number): Observable<Student> {
        return this.get('students/' + id);
    }
}
