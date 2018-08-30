import {Injectable} from '@angular/core';
import {BaseService} from '../../core/base.service';
import {Http} from '@angular/http';
import {AuthService} from '../../core/auth.service';
import {StudentAttendanceRegisterRequest} from '../models/student-attendance-register-request';
import {Observable} from 'rxjs';
import {StudentAttendance} from '../models/student-attendance';

@Injectable()
export class StudentAttendanceService extends BaseService {

    constructor(protected http: Http, private authService: AuthService) {
        super(http);
    }

    createAttendanceRegister(studentAttendanceRegisterRequest: StudentAttendanceRegisterRequest): Observable<StudentAttendance[]> {
        return this.post('student-attendance/register', studentAttendanceRegisterRequest);
    }

    updateAttendanceRegister(studentAttendances: StudentAttendance[]): Observable<StudentAttendance[]> {
        return this.post('student-attendance/register.do', studentAttendances);
    }

}
