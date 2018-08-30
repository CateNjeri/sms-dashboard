import {Injectable} from '@angular/core';
import {BaseService} from '../../core/base.service';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Assignment} from '../models/assignment';

@Injectable()
export class AssignmentsService extends BaseService {

    constructor(protected http: Http) {
        super(http);
    }

    all(): Observable<Assignment[]> {
        return this.get('assignments');
    }

    create(assignment: Assignment): Observable<Assignment> {
        return this.post('assignments', assignment);
    }

    update(assignment: Assignment): Observable<Assignment> {
        return this.put('assignments/' + assignment.id, assignment);
    }

    find(id: number): Observable<Assignment> {
        return this.get('assignments/' + id);
    }
}
