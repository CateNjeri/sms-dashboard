import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './schools.component';
import { SchoolFormComponent } from './school-form/school-form.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    { path: '', component: SchoolsComponent },
    { path: 'view', component: SchoolsComponent },
    { path: 'edit/:id', component: SchoolFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class SchoolsRoutingModule { }
