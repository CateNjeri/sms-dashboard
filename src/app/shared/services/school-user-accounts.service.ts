import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UserAccount} from '../models/user-account';
import {SchoolUserAccount} from '../models/school-user-account';
import {Http} from '@angular/http';
import {BaseService} from '../../core/base.service';
import {AuthService} from '../../core/auth.service';

@Injectable()
export class SchoolUserAccountsService extends BaseService {

    constructor(protected http: Http, private authService: AuthService) {
        super(http);
    }

    public register(schoolUserAccount: SchoolUserAccount): Observable<UserAccount> {
        return this.post('auth/register/school-user-accounts', schoolUserAccount);
    }

    public all(): Observable<SchoolUserAccount[]> {
        return this.get('schools/' + this.authService.getSchool().id + '/school-user-accounts');
    }

    public create(schoolUserAccount: SchoolUserAccount): Observable<SchoolUserAccount> {
        return this.post('school-user-accounts', schoolUserAccount);
    }

    public update(schoolUserAccount: SchoolUserAccount): Observable<SchoolUserAccount> {
        return this.put('school-user-accounts/' + schoolUserAccount.id, schoolUserAccount);
    }
    public updateStatus(schoolUserAccount: SchoolUserAccount): Observable<SchoolUserAccount> {
        return this.put('school-user-accounts/' + schoolUserAccount.id, schoolUserAccount);
    }

}
