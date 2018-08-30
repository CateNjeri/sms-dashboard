import {Injectable} from '@angular/core';
import {BaseService} from '../../core/base.service';
import {Observable} from 'rxjs/Observable';
import {EducationSystemLevel} from '../models/education-system-level';

@Injectable()
export class EducationSystemLevelsService extends BaseService {

    public getAll(): Observable<EducationSystemLevel[]> {
        return this.get('education-systems/levels');
    }

    public getAllByEducationSystemId(id: number): Observable<EducationSystemLevel[]> {
        return this.get('education-systems/' + id + '/levels');
    }
}
