import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {TeachersComponent} from './teachers.component';
import {TeacherFormComponent} from './teacher-form/teacher-form.component';

const routes: Routes = [
  { path: '', component: TeachersComponent },
  { path: 'view', component: TeachersComponent },
  { path: 'add', component: TeacherFormComponent },
  { path: ':id/edit', component: TeacherFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TeachersRoutingModule {
}

