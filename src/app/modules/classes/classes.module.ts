import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {ComponentModule} from '../../component/component.module';
import {ClassesRoutingModule} from './classes.routing';
import {ClassesComponent} from './classes.component';
import {ClassLevelsService} from "../../shared/services/class-levels.service";
import {ClassLevelSectionsService} from "../../shared/services/class-level-sections.service";
import {ClassLevelSectionsComponent} from "./class-level-sections/class-level-sections.component";
import { ClassLevelSectionFormComponent } from './class-level-section-form/class-level-section-form.component';
import { ClassLevelFormComponent } from './class-level-form/class-level-form.component';
import { TeachersService } from '../../shared/services/teachers.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ComponentModule,
        ClassesRoutingModule
    ],
    entryComponents: [ClassLevelFormComponent, ClassLevelSectionFormComponent],
    providers: [ClassLevelSectionsService, ClassLevelsService, TeachersService],
    declarations: [ClassesComponent, ClassLevelSectionsComponent, ClassLevelFormComponent, ClassLevelSectionFormComponent]
})
export class ClassesModule {
}
