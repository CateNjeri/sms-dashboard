import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SchoolsComponent} from './schools.component';
import {SchoolFormComponent} from './school-form/school-form.component';
import {SchoolsRoutingModule} from "./schools.routing";
import {ComponentModule} from "../../component/component.module";

@NgModule({
    imports: [
        CommonModule,
        SchoolsRoutingModule,
        ComponentModule
    ],
    declarations: [SchoolsComponent, SchoolFormComponent]
})
export class SchoolsModule {
}
