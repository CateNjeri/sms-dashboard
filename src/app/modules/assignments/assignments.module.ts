import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AssignmentsComponent} from './assignments.component';
import {AssignmentFormComponent} from './assignment-form/assignment-form.component';
import {SharedModule} from '../../shared/shared.module';
import {ComponentModule} from '../../component/component.module';
import {AssignmentsRoutingModule} from './assignments.routing';
import {AssignmentsService} from '../../shared/services/assignments.service';
import {ClassLevelSectionsService} from '../../shared/services/class-level-sections.service';
import {SubjectsService} from '../../shared/services/subjects.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ComponentModule,
        AssignmentsRoutingModule
    ],
    providers: [AssignmentsService, ClassLevelSectionsService, SubjectsService],
    declarations: [AssignmentsComponent, AssignmentFormComponent]
})
export class AssignmentsModule {
}
