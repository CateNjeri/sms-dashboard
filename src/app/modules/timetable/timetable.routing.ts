import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {TimetableComponent} from './timetable.component';
import {TimetableFormComponent} from './timetable-form/timetable-form.component';
import {TimetableViewComponent} from './timetable-view/timetable-view.component';

const routes: Routes = [
  { path: '', component: TimetableComponent },
  { path: 'view', component: TimetableComponent },
  { path: 'add', component: TimetableFormComponent },
  { path: 'edit/:id', component: TimetableFormComponent },
  { path: 'view/:id', component: TimetableViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TimetableRoutingModule {
}

