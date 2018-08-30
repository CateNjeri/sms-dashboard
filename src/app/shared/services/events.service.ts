import {Injectable} from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {Http} from '@angular/http';
import {BaseService} from '../../core/base.service';
import {Event} from '../models/event';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EventsService extends BaseService {

    constructor(protected http: Http, private authService: AuthService) {
        super(http);
    }

    all(): Observable<Event[]> {
        const userType = this.authService.getCurrentUserType();
        if (userType === 3) {
            return this.get('events');
        } else if (userType === 1) {
            return this.get('schools/' + this.authService.getSchool().id + '/events');
        } else {
            return this.get('students/' + this.authService.getCurrentStudent().id + '/events');
        }
    }

    create(event: Event): Observable<Event> {
        event.school = this.authService.getSchool();
        return this.post('events', event);
    }

    update(event: Event): Observable<Event> {
        event.school = this.authService.getSchool();
        return this.put('events/' + event.id, event);
    }

    find(id: number): Observable<Event> {
        return this.get('events/' + id);
    }
}
