import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ExaminationsComponent} from "./examinations.component";

const routes: Routes = [
    { path: '', component: ExaminationsComponent },
    { path: 'view', component: ExaminationsComponent },
    { path: 'marks', component: ExaminationsComponent },
    { path: 'results', component: ExaminationsComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class ExaminationsRoutingModule { }
