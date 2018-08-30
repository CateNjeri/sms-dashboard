import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentModule} from "../../component/component.module";
import {ExaminationsRoutingModule} from "./examinations.routing";
import {ExaminationsComponent} from "./examinations.component";
import { ExaminationMarksComponent } from './examination-marks/examination-marks.component';
import { ExaminationResultsComponent } from './examination-results/examination-results.component';
import { ExaminationFormComponent } from './examination-form/examination-form.component';
import { SharedModule } from '../../shared/shared.module';
import { ExaminationsService } from '../../shared/services/examinations.service';
import { ClassLevelsService } from '../../shared/services/class-levels.service';

@NgModule({
    imports: [
        CommonModule,
        ComponentModule,
        SharedModule,
        ExaminationsRoutingModule
    ],
    entryComponents: [ExaminationFormComponent],
    providers: [ExaminationsService, ClassLevelsService],
    declarations: [ExaminationsComponent, ExaminationMarksComponent, ExaminationResultsComponent, ExaminationFormComponent]
})
export class ExaminationsModule {
}
