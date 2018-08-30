import {Injectable} from '@angular/core';
import {BaseService} from '../../core/base.service';
import {Http} from '@angular/http';
import {AuthService} from '../../core/auth.service';
import {Observable} from 'rxjs';
import {Examination} from '../models/examination';

@Injectable()
export class ExaminationsService extends BaseService {

    constructor(protected http: Http, private authService: AuthService) {
        super(http);
    }

    all(): Observable<Examination[]> {
        if (this.authService.getCurrentUserType() === 1) {
            const school = this.authService.getSchool();
            return this.get('schools/' + school.id + '/examinations');
        } else if (this.authService.getCurrentUserType() === 3) {
            return this.get('examinations');
        } else {
            // TODO: for parent, get active student then get student transactions
            const student = this.authService.getCurrentStudent();
            return this.get('students/' + student.id + '/examinations');
        }
    }

    create(examination: Examination): Observable<Examination> {
        // TODO: get current active school session
        // examination.userAccount = this.authService.getCurrentUser();
        return this.post('examinations', examination);
    }

    update(examination: Examination): Observable<Examination> {
        // TODO: get current active school session
        // examination.userAccount = this.authService.getCurrentUser();
        return this.put('examinations/' + examination.id, examination);
    }

    studentTransactions(id: number): Observable<Examination[]> {
        return this.get('students/' + id + '/examinations');
    }

}
