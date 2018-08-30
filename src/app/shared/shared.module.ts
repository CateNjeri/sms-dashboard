import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialComponentsModule} from './material.module';
import {EducationSystemService} from "./services/education-system.service";
import {EducationSystemLevelsService} from "./services/education-system-levels.service";
import {SchoolsService} from "./services/schools.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        MaterialComponentsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        MaterialComponentsModule
    ],
    providers: [EducationSystemService, EducationSystemLevelsService, SchoolsService]
})
export class SharedModule {
}
