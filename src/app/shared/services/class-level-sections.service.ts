import {Injectable} from '@angular/core';
import {BaseService} from '../../core/base.service';
import {AuthService} from '../../core/auth.service';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ClassLevelSection} from '../models/class-level-section';

@Injectable()
export class ClassLevelSectionsService extends BaseService {

    constructor(private authService: AuthService, protected http: Http) {
        super(http);
    }

    all(): Observable<ClassLevelSection[]> {
        if (this.authService.getCurrentUserType() === 1) {
            return this.get('schools/' + this.authService.getSchoolId() + '/class-levels/sections');
        } else {
            return this.get('class-levels/sections');
        }
    }

    create(classLevelSection: ClassLevelSection): Observable<ClassLevelSection> {
        return this.post('class-levels/sections', classLevelSection);
    }

    update(classLevelSection: ClassLevelSection): Observable<ClassLevelSection> {
        return this.put('class-levels/sections/' + classLevelSection.id, classLevelSection);
    }

    getOne(id: Number): Observable<ClassLevelSection> {
        return this.get('class-levels/sections/' + id);
    }

    deleteOne(id: Number): Observable<any> {
        return this.delete('class-levels/sections/' + id);
    }

}
