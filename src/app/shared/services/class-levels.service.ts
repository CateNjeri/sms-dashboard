import {Injectable} from '@angular/core';
import {BaseService} from '../../core/base.service';
import {ClassLevel} from '../models/class-level';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../core/auth.service';
import {Http} from '@angular/http';

@Injectable()
export class ClassLevelsService extends BaseService {

    constructor(private authService: AuthService, protected http: Http) {
        super(http);
    }

    all(): Observable<ClassLevel[]> {
        if (this.authService.getCurrentUserType() === 1) {
            return this.get('schools/' + this.authService.getSchoolId() + '/class-levels');
        } else {
            return this.get('class-levels');
        }
    }

    create(classLevel: ClassLevel): Observable<ClassLevel> {
        classLevel.school = this.authService.getSchool();
        return this.post('class-levels', classLevel);
    }

    update(classLevel: ClassLevel): Observable<ClassLevel> {
        classLevel.school = this.authService.getSchool();
        return this.put('class-levels/' + classLevel.id, classLevel);
    }

    getOne(id: Number): Observable<ClassLevel> {
        return this.get('class-levels/' + id);
    }

    deleteOne(id: Number): Observable<any> {
        return this.delete('class-levels/' + id);
    }
}
