import {Injectable} from '@angular/core';
import {BaseService} from '../../core/base.service';
import {Observable} from 'rxjs/Observable';
import {EducationSystem} from '../models/education-system';

@Injectable()
export class EducationSystemService extends BaseService {

    public getAll(): Observable<EducationSystem[]> {
        return this.get('education-systems');
    }
}
