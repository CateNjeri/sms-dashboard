import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableComponent } from './timetable.component';
import { TimetableFormComponent } from './timetable-form/timetable-form.component';
import { TimetableViewComponent } from './timetable-view/timetable-view.component';
import {TimetableRoutingModule} from "./timetable.routing";

@NgModule({
  imports: [
    CommonModule,
    TimetableRoutingModule
  ],
  declarations: [TimetableComponent, TimetableFormComponent, TimetableViewComponent]
})
export class TimetableModule { }
