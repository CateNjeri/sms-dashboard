import {Injectable} from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {Http} from '@angular/http';
import {BaseService} from '../../core/base.service';
import {Dashboard} from '../models/dashboard';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DashboardService extends BaseService {

    constructor(protected http: Http, private authService: AuthService) {
        super(http);
    }

    getData(): Observable<Dashboard> {
        const userType = this.authService.getCurrentUserType();
        if (userType === 3) {
            return this.get('dashboard');
        } else if (userType === 1) {
            return this.get('dashboard/schools/' + this.authService.getSchool().id);
        } else {
            if (!this.authService.getCurrentStudent()) {
                return Observable.create(() => {
                });
            }
            return this.get('dashboard/students/' + this.authService.getCurrentStudent().id);
        }
    }
}
