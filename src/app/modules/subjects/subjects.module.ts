import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubjectsComponent} from './subjects.component';
import {SharedModule} from '../../shared/shared.module';
import {ComponentModule} from '../../component/component.module';
import {SubjectsRoutingModule} from './subjects.routing';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectsService } from '../../shared/services/subjects.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ComponentModule,
        SubjectsRoutingModule
    ],
    entryComponents: [SubjectFormComponent],
    providers: [SubjectsService],
    declarations: [SubjectsComponent, SubjectFormComponent]
})
export class SubjectsModule {
}
