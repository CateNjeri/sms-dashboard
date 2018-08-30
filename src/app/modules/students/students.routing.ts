import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {StudentsComponent} from './students.component';
import {StudentFormComponent} from './student-form/student-form.component';
import {StudentProfileComponent} from './student-profile/student-profile.component';
import {ParentsComponent} from './parents/parents.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'view', component: StudentsComponent },
  { path: 'add', component: StudentFormComponent },
  { path: ':id/edit', component: StudentFormComponent },
  { path: ':id/view', component: StudentProfileComponent },
  { path: 'parents', component: ParentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StudentsRoutingModule {
}

