import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentsComponent} from './students.component';
import {StudentFormComponent} from './student-form/student-form.component';
import {StudentProfileComponent} from './student-profile/student-profile.component';
import {StudentsRoutingModule} from './students.routing';
import {ParentsComponent} from './parents/parents.component';
import {SharedModule} from '../../shared/shared.module';
import {ComponentModule} from '../../component/component.module';
import {StudentsService} from '../../shared/services/students.service';
import {ParentsService} from '../../shared/services/parents.service';
import {ClassLevelSectionsService} from '../../shared/services/class-level-sections.service';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        StudentsRoutingModule,
        SharedModule,
        RouterModule,
        ComponentModule
    ],
    providers: [StudentsService, ParentsService, ClassLevelSectionsService],
    declarations: [StudentsComponent, StudentFormComponent, StudentProfileComponent, ParentsComponent]
})
export class StudentsModule {
}
