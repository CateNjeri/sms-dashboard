import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeacherFormComponent} from './teacher-form/teacher-form.component';
import {TeachersComponent} from './teachers.component';
import {SharedModule} from '../../shared/shared.module';
import {ComponentModule} from '../../component/component.module';
import {TeachersRoutingModule} from './teachers.routing';
import {TeachersService} from "../../shared/services/teachers.service";
import { SubjectsService } from '../../shared/services/subjects.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ComponentModule,
        TeachersRoutingModule
    ],
    providers: [TeachersService, SubjectsService],
    declarations: [TeacherFormComponent, TeachersComponent]
})
export class TeachersModule {
}
